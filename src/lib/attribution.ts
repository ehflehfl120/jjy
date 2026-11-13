/**
 * 유입 경로(광고 UTM, 이전 페이지) 기록.
 * 고객이 처음 들어온 페이지의 정보를 기억해 두었다가 상담 신청 시 함께 저장합니다.
 */

export type Attribution = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  referrer: string;
  landing_page: string;
};

const KEY = "lead-attribution-v1";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

const empty = (): Attribution => ({
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_content: "",
  referrer: "",
  landing_page: "",
});

/** 첫 방문 시 한 번만 저장. 새 UTM이 붙어 들어오면 갱신합니다. */
export function captureAttribution() {
  try {
    const params = new URLSearchParams(window.location.search);
    const hasUtm = UTM_KEYS.some((k) => params.get(k));
    if (sessionStorage.getItem(KEY) && !hasUtm) return;

    const data = empty();
    for (const k of UTM_KEYS) data[k] = (params.get(k) ?? "").slice(0, 200);
    const ref = document.referrer;
    data.referrer = ref && !ref.startsWith(window.location.origin) ? ref.slice(0, 300) : "";
    data.landing_page = (window.location.pathname + window.location.search).slice(0, 300);
    sessionStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // 저장소를 쓸 수 없는 브라우저에서는 기록하지 않습니다.
  }
}

export function readAttribution(): Attribution {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (raw) return { ...empty(), ...JSON.parse(raw) };
  } catch {
    // 무시
  }
  return empty();
}
