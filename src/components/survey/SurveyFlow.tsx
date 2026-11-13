"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { pageContainerClass } from "@/components/ui/pageContainer";
import { site, survey } from "@/content/landing";
import { readAttribution } from "@/lib/attribution";

type Answers = Record<string, string[]>;

const questions = survey.questions;
const CONTACT_STEP = questions.length;
const DONE_STEP = questions.length + 1;

function formatPhone(raw: string) {
  const d = raw.replace(/\D/g, "").slice(0, 11);
  if (d.length < 4) return d;
  if (d.length < 8) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, d.length - 4)}-${d.slice(-4)}`;
}

export function SurveyFlow() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState(survey.contact.timeOptions[0] ?? "");
  const [consent, setConsent] = useState(false);
  const [showConsent, setShowConsent] = useState(false);
  const [website, setWebsite] = useState(""); // 스팸 방지용 숨김 칸
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const advanceTimer = useRef<number | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => () => {
    if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
  }, []);

  useEffect(() => {
    topRef.current?.scrollIntoView({ block: "start" });
  }, [step]);

  function goTo(next: number) {
    setError("");
    setStep(next);
  }

  function choose(qid: string, option: string, multi: boolean) {
    setAnswers((prev) => {
      const cur = prev[qid] ?? [];
      if (!multi) return { ...prev, [qid]: [option] };
      return {
        ...prev,
        [qid]: cur.includes(option) ? cur.filter((o) => o !== option) : [...cur, option],
      };
    });
    if (!multi) {
      if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
      advanceTimer.current = window.setTimeout(() => goTo(step + 1), 220);
    }
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (!name.trim()) return setError(`${survey.contact.nameLabel}을(를) 입력해 주세요.`);
    if (!/^0\d{8,10}$/.test(digits)) return setError("연락처를 숫자로 정확히 입력해 주세요. 예: 010-1234-5678");
    if (!consent) return setError("개인정보 수집·이용에 동의해 주셔야 신청할 수 있어요.");

    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: digits,
          time,
          consent,
          answers,
          website,
          attribution: readAttribution(),
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) throw new Error(data?.message || "접수 중 문제가 생겼어요.");
      goTo(DONE_STEP);
    } catch (err) {
      setError(
        `${err instanceof Error ? err.message : "접수 중 문제가 생겼어요."} 잠시 후 다시 시도하시거나 카카오톡으로 바로 문의해 주세요.`,
      );
    } finally {
      setSubmitting(false);
    }
  }

  const progress = Math.min(step, CONTACT_STEP + 1) / (CONTACT_STEP + 1);

  return (
    <div ref={topRef} className="scroll-mt-16">
      {step < DONE_STEP ? (
        <div className="sticky top-16 z-30 bg-white">
          <div className="h-1 w-full bg-[#F2F4F6]">
            <div
              className="h-1 bg-[#3182F6] transition-[width] duration-300"
              style={{ width: `${Math.max(progress, 0.04) * 100}%` }}
            />
          </div>
        </div>
      ) : null}

      <div className={`${pageContainerClass} pb-16 pt-6`}>
        {step > 0 && step < DONE_STEP ? (
          <button
            type="button"
            onClick={() => goTo(step - 1)}
            className="-ml-2 mb-2 inline-flex min-h-10 items-center px-2 text-[14px] font-medium text-[#6B7684]"
          >
            ← 이전
          </button>
        ) : null}

        {step === 0 ? (
          <div className="mb-6">
            <p className="text-[13px] font-semibold text-[#3182F6]">{survey.eyebrow}</p>
            <h1 className="mt-2 whitespace-pre-line text-[22px] font-bold leading-[1.4] tracking-tight text-[#191F28]">
              {survey.title}
            </h1>
            <p className="mt-2 text-[14px] leading-6 text-[#6B7684]">{survey.description}</p>
          </div>
        ) : null}

        {step < CONTACT_STEP ? (
          <QuestionStep
            index={step}
            total={questions.length}
            question={questions[step]}
            selected={answers[questions[step].id] ?? []}
            onChoose={choose}
            onNext={() => goTo(step + 1)}
          />
        ) : null}

        {step === CONTACT_STEP ? (
          <form onSubmit={submit} noValidate>
            <h2 className="text-[22px] font-bold leading-[1.4] tracking-tight text-[#191F28]">
              {survey.contact.title}
            </h2>
            <p className="mt-2 text-[14px] leading-6 text-[#6B7684]">{survey.contact.description}</p>

            <div className="mt-6 space-y-5">
              <Field id="lead-name" label={survey.contact.nameLabel}>
                <input
                  id="lead-name"
                  value={name}
                  onChange={(e) => setName(e.target.value.slice(0, 30))}
                  autoComplete="name"
                  placeholder="홍길동"
                  className="w-full rounded-xl border border-[#E5E8EB] bg-[#F9FAFB] px-4 py-3.5 text-[16px] text-[#191F28] outline-none focus:border-[#3182F6] focus:bg-white"
                />
              </Field>
              <Field id="lead-phone" label={survey.contact.phoneLabel}>
                <input
                  id="lead-phone"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="010-1234-5678"
                  className="w-full rounded-xl border border-[#E5E8EB] bg-[#F9FAFB] px-4 py-3.5 text-[16px] tabular-nums text-[#191F28] outline-none focus:border-[#3182F6] focus:bg-white"
                />
              </Field>
              <div>
                <p className="mb-2 text-[13px] font-semibold text-[#4E5968]">{survey.contact.timeLabel}</p>
                <div className="grid grid-cols-2 gap-2">
                  {survey.contact.timeOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setTime(opt)}
                      aria-pressed={time === opt}
                      className={`min-h-11 rounded-xl border px-3 py-2 text-[14px] font-medium ${
                        time === opt
                          ? "border-[#3182F6] bg-[#E8F3FF] text-[#1B64DA]"
                          : "border-[#E5E8EB] bg-white text-[#4E5968]"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
                aria-hidden
              />

              <div className="rounded-xl bg-[#F2F4F6] p-4">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-5 w-5 shrink-0 accent-[#3182F6]"
                  />
                  <span className="text-[14px] font-medium leading-6 text-[#191F28]">
                    {survey.contact.consentLabel}
                  </span>
                </label>
                <button
                  type="button"
                  onClick={() => setShowConsent((v) => !v)}
                  className="mt-2 text-[13px] text-[#6B7684] underline underline-offset-2"
                >
                  {showConsent ? "내용 접기" : "내용 보기"}
                </button>
                {showConsent ? (
                  <p className="mt-2 whitespace-pre-line text-[12px] leading-5 text-[#6B7684]">
                    {survey.contact.consentBody}
                  </p>
                ) : null}
              </div>
            </div>

            {error ? (
              <p role="alert" className="mt-4 rounded-xl bg-[#FFEEEE] p-3 text-[14px] leading-6 text-[#D22030]">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex h-14 w-full items-center justify-center rounded-2xl bg-[#3182F6] text-[17px] font-semibold text-white disabled:opacity-60"
            >
              {submitting ? "접수 중…" : survey.contact.submitLabel}
            </button>
            {error ? (
              <a
                href={site.kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex h-14 w-full items-center justify-center rounded-2xl bg-[#FEE500] text-[17px] font-semibold text-[#191919]"
              >
                {survey.done.kakaoLabel}
              </a>
            ) : null}
          </form>
        ) : null}

        {step === DONE_STEP ? (
          <div className="pt-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F3FF] text-[28px] font-bold text-[#3182F6]">
              ✓
            </div>
            <h2 className="mt-5 text-[22px] font-bold leading-[1.4] tracking-tight text-[#191F28]">
              {survey.done.title}
            </h2>
            <p className="mt-3 whitespace-pre-line text-[15px] leading-6 text-[#6B7684]">
              {survey.done.description}
            </p>
            <a
              href={site.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-14 w-full items-center justify-center rounded-2xl bg-[#FEE500] text-[17px] font-semibold text-[#191919]"
            >
              {survey.done.kakaoLabel}
            </a>
            <Link
              href="/"
              className="mt-3 inline-flex h-12 w-full items-center justify-center text-[15px] font-medium text-[#6B7684]"
            >
              {survey.done.homeLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function QuestionStep({
  index,
  total,
  question,
  selected,
  onChoose,
  onNext,
}: {
  index: number;
  total: number;
  question: (typeof questions)[number];
  selected: string[];
  onChoose: (qid: string, option: string, multi: boolean) => void;
  onNext: () => void;
}) {
  const multi = question.type === "multi";

  return (
    <fieldset>
      <legend className="block w-full">
        <span className="text-[13px] font-semibold tabular-nums text-[#3182F6]">
          Q{index + 1} / {total}
        </span>
        <span className="mt-1 block text-[20px] font-bold leading-[1.4] tracking-tight text-[#191F28]">
          {question.title}
        </span>
        {multi ? <span className="mt-1 block text-[13px] text-[#8B95A1]">여러 개 선택할 수 있어요</span> : null}
      </legend>
      <div className="mt-5 flex flex-col gap-2.5">
        {question.options.map((opt) => {
          const on = selected.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              role={multi ? "checkbox" : "radio"}
              aria-checked={on}
              onClick={() => onChoose(question.id, opt, multi)}
              className={`flex min-h-14 w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left text-[16px] font-medium transition-colors ${
                on ? "border-[#3182F6] bg-[#E8F3FF] text-[#1B64DA]" : "border-[#E5E8EB] bg-white text-[#191F28]"
              }`}
            >
              <span
                aria-hidden
                className={`flex h-5 w-5 shrink-0 items-center justify-center border-2 text-[12px] font-bold ${
                  multi ? "rounded-md" : "rounded-full"
                } ${on ? "border-[#3182F6] bg-[#3182F6] text-white" : "border-[#D1D6DB] text-transparent"}`}
              >
                ✓
              </span>
              <span className="min-w-0">{opt}</span>
            </button>
          );
        })}
      </div>
      {multi || selected.length > 0 ? (
        <button
          type="button"
          onClick={onNext}
          disabled={selected.length === 0}
          className="mt-6 inline-flex h-14 w-full items-center justify-center rounded-2xl bg-[#3182F6] text-[17px] font-semibold text-white disabled:bg-[#D1D6DB]"
        >
          다음
        </button>
      ) : null}
    </fieldset>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[13px] font-semibold text-[#4E5968]">
        {label}
      </label>
      {children}
    </div>
  );
}
