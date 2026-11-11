"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";

type Location = {
  name: string;
  admin1?: string;
  country: string;
  latitude: number;
  longitude: number;
  timezone: string;
};

type WeatherData = {
  current: {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    is_day: number;
    precipitation: number;
    weather_code: number;
    wind_speed_10m: number;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    precipitation_probability: number[];
    weather_code: number[];
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
  };
};

type SearchResult = {
  results?: Location[];
};

const DEFAULT_LOCATION: Location = {
  name: "Seoul",
  admin1: "Seoul",
  country: "South Korea",
  latitude: 37.5665,
  longitude: 126.978,
  timezone: "Asia/Seoul",
};

function weatherDescription(code: number) {
  if (code === 0) return "Clear sky";
  if (code <= 3) return "Partly cloudy";
  if (code === 45 || code === 48) return "Foggy";
  if (code <= 57) return "Drizzle";
  if (code <= 67) return "Rain showers";
  if (code <= 77) return "Snowfall";
  if (code <= 82) return "Rain showers";
  if (code <= 86) return "Snow showers";
  if (code <= 99) return "Thunderstorm";
  return "Variable conditions";
}

function weatherSymbol(code: number, isDay = true) {
  if (code === 0) return isDay ? "☀️" : "🌙";
  if (code <= 3) return isDay ? "⛅" : "☁️";
  if (code <= 48) return "🌫️";
  if (code <= 67 || (code >= 80 && code <= 82)) return "🌧️";
  if (code <= 77 || (code >= 85 && code <= 86)) return "🌨️";
  return "⛈️";
}

function dayLabel(date: string, index: number) {
  if (index === 0) return "Today";
  return new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
    new Date(`${date}T12:00:00`),
  );
}

async function getForecast(location: Location): Promise<WeatherData> {
  const params = new URLSearchParams({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    current:
      "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m",
    hourly: "temperature_2m,precipitation_probability,weather_code",
    daily:
      "weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset",
    timezone: location.timezone || "auto",
    forecast_days: "5",
  });
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
  if (!response.ok) throw new Error("Weather data is temporarily unavailable.");
  return response.json() as Promise<WeatherData>;
}

export function WeatherDashboard() {
  const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const loadLocation = useCallback(async (nextLocation: Location) => {
    setIsLoading(true);
    setError("");
    try {
      const forecast = await getForecast(nextLocation);
      setLocation(nextLocation);
      setWeather(forecast);
    } catch {
      setError("We couldn’t load the forecast. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadLocation(DEFAULT_LOCATION);
  }, [loadLocation]);

  async function searchCity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const city = query.trim();
    if (!city) return;

    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?${new URLSearchParams({
          name: city,
          count: "1",
          language: "en",
          format: "json",
        })}`,
      );
      if (!response.ok) throw new Error("Search failed");
      const result = (await response.json()) as SearchResult;
      const match = result.results?.[0];
      if (!match) {
        setError(`No places found for “${city}”. Try another city.`);
        setIsLoading(false);
        return;
      }
      await loadLocation(match);
      setQuery("");
    } catch {
      setError("City search is unavailable. Please try again.");
      setIsLoading(false);
    }
  }

  const current = weather?.current;
  const hourlyStart = weather?.hourly.time.findIndex(
    (time) => time >= (current?.time ?? ""),
  ) ?? 0;
  const hourlyIndexes = Array.from({ length: 8 }, (_, index) =>
    Math.min(hourlyStart + index * 2, (weather?.hourly.time.length ?? 1) - 1),
  );
  const dateLabel = current
    ? new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        timeZone: location.timezone,
      }).format(new Date(current.time))
    : "Your local forecast";

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-6 sm:px-8 sm:py-10">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3" aria-label="Atmos home">
          <span className="grid size-11 place-items-center rounded-2xl bg-[#19315d] text-xl text-white shadow-lg shadow-blue-950/10">☼</span>
          <span className="text-xl font-bold tracking-tight text-[#172b4d]">atmos<span className="text-blue-500">.</span></span>
        </a>
        <form onSubmit={searchCity} className="flex w-full max-w-sm items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
          <span className="pl-2 text-slate-400" aria-hidden="true">⌕</span>
          <input
            aria-label="Search for a city"
            className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm outline-none placeholder:text-slate-400"
            placeholder="Search a city..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button className="rounded-xl bg-[#19315d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800" type="submit">Search</button>
        </form>
      </header>

      {error && (
        <div role="alert" className="mb-5 flex items-center justify-between gap-4 rounded-2xl border border-rose-200 bg-rose-50 px-5 py-3 text-sm text-rose-700">
          <span>{error}</span>
          <button className="font-semibold underline" onClick={() => void loadLocation(location)} type="button">Retry</button>
        </div>
      )}

      <section id="home" className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#172d54] via-[#244678] to-[#3976b7] p-6 text-white shadow-xl shadow-blue-950/10 sm:p-10">
        <div className="pointer-events-none absolute -right-10 -top-24 size-80 rounded-full bg-sky-300/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-8rem] left-1/3 size-72 rounded-full bg-indigo-300/10 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-blue-100">
              <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_12px_#6ee7b7]" /> Live weather <span className="text-blue-200/60">/</span> {dateLabel}
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              {location.name}{location.admin1 && location.admin1 !== location.name ? `, ${location.admin1}` : ""}
            </h1>
            <p className="mt-2 text-blue-100">{location.country}</p>
            <div className="mt-8 flex items-end gap-3">
              <span className="text-7xl font-light tracking-[-0.08em] sm:text-8xl">{isLoading ? "—" : `${Math.round(current?.temperature_2m ?? 0)}°`}</span>
              <div className="mb-2 border-l border-white/20 pl-4 text-sm leading-6 text-blue-100">
                <div>Feels like <strong className="text-white">{isLoading ? "—" : `${Math.round(current?.apparent_temperature ?? 0)}°`}</strong></div>
                <div>H {Math.round(weather?.daily.temperature_2m_max[0] ?? 0)}° <span className="text-blue-200/60">/</span> L {Math.round(weather?.daily.temperature_2m_min[0] ?? 0)}°</div>
              </div>
            </div>
            <div className="mt-3 text-lg font-medium text-white">{isLoading ? "Fetching conditions..." : weatherDescription(current?.weather_code ?? 0)}</div>
            <p className="mt-1 text-sm text-blue-100">A fresh look at what’s happening outside.</p>
          </div>
          <div className="flex min-h-52 items-center justify-center md:min-h-64">
            <div className="relative grid size-56 place-items-center rounded-full border border-white/10 bg-white/[0.04] sm:size-64">
              <div className="absolute inset-5 rounded-full border border-white/10" />
              <div className="absolute inset-10 rounded-full border border-white/10" />
              <span className="relative drop-shadow-[0_12px_24px_rgba(255,255,255,0.25)] text-[7rem] sm:text-[8rem]" aria-label={weather ? weatherDescription(current?.weather_code ?? 0) : "Weather icon"}>
                {weatherSymbol(current?.weather_code ?? 0, current?.is_day !== 0)}
              </span>
            </div>
          </div>
        </div>
        <div className="relative mt-8 grid grid-cols-2 gap-3 border-t border-white/15 pt-5 sm:grid-cols-4">
          <Metric label="Feels like" value={isLoading ? "—" : `${Math.round(current?.apparent_temperature ?? 0)}°`} icon="🌡️" />
          <Metric label="Humidity" value={isLoading ? "—" : `${current?.relative_humidity_2m ?? 0}%`} icon="💧" />
          <Metric label="Wind speed" value={isLoading ? "—" : `${Math.round(current?.wind_speed_10m ?? 0)} km/h`} icon="💨" />
          <Metric label="Precipitation" value={isLoading ? "—" : `${current?.precipitation ?? 0} mm`} icon="🌧️" />
        </div>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <section className="rounded-[1.75rem] border border-slate-200/80 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="hourly-heading">
          <div className="flex items-center justify-between gap-3">
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-500">Next 24 hours</p><h2 id="hourly-heading" className="mt-1 text-xl font-bold tracking-tight">Hourly forecast</h2></div>
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-500">Local time</span>
          </div>
          <div className="mt-6 grid grid-cols-4 gap-y-6 sm:grid-cols-8">
            {weather && hourlyIndexes.map((hourIndex, index) => (
              <div className="flex flex-col items-center gap-2 text-center" key={`${weather.hourly.time[hourIndex]}-${index}`}>
                <span className="text-xs font-medium text-slate-500">{index === 0 ? "Now" : new Intl.DateTimeFormat("en-US", { hour: "numeric", timeZone: location.timezone }).format(new Date(weather.hourly.time[hourIndex]))}</span>
                <span className="text-2xl" aria-hidden="true">{weatherSymbol(weather.hourly.weather_code[hourIndex])}</span>
                <span className="text-sm font-bold text-[#1d3152]">{Math.round(weather.hourly.temperature_2m[hourIndex])}°</span>
                <span className="text-[11px] text-blue-500">{weather.hourly.precipitation_probability[hourIndex]}% <span className="text-slate-400">rain</span></span>
              </div>
            ))}
            {!weather && <p className="col-span-full py-8 text-center text-sm text-slate-400">{isLoading ? "Loading hourly forecast..." : "Forecast unavailable."}</p>}
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-slate-200/80 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="week-heading">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-500">Plan ahead</p><h2 id="week-heading" className="mt-1 text-xl font-bold tracking-tight">5-day forecast</h2></div>
          <div className="mt-5 divide-y divide-slate-100">
            {weather && weather.daily.time.map((day, index) => (
              <div className="flex items-center justify-between gap-3 py-3" key={day}>
                <span className="w-12 text-sm font-semibold text-slate-600">{dayLabel(day, index)}</span>
                <span className="text-xl" aria-hidden="true">{weatherSymbol(weather.daily.weather_code[index])}</span>
                <span className="min-w-0 flex-1 truncate text-xs text-slate-400">{weatherDescription(weather.daily.weather_code[index])}</span>
                <div className="flex w-20 justify-end gap-2 text-sm"><span className="font-bold text-[#1d3152]">{Math.round(weather.daily.temperature_2m_max[index])}°</span><span className="text-slate-400">{Math.round(weather.daily.temperature_2m_min[index])}°</span></div>
              </div>
            ))}
            {!weather && <p className="py-8 text-center text-sm text-slate-400">{isLoading ? "Loading daily forecast..." : "Forecast unavailable."}</p>}
          </div>
        </section>
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-2 px-2 py-6 text-xs text-slate-400">
        <span>Weather for wherever the day takes you.</span>
        <span>Weather data by <a className="font-semibold text-slate-500 hover:text-blue-600" href="https://open-meteo.com/" target="_blank" rel="noreferrer">Open-Meteo</a></span>
      </footer>
    </main>
  );
}

function Metric({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-lg" aria-hidden="true">{icon}</span>
      <div><p className="text-xs text-blue-100">{label}</p><p className="mt-0.5 text-sm font-semibold text-white">{value}</p></div>
    </div>
  );
}
