import { survey } from "@/content/landing";

/**
 * 상담 신청 접수 → 구글 시트(Apps Script 웹앱)로 한 줄 저장.
 *
 * Vercel 환경 변수 (Settings → Environment Variables):
 *   SHEET_WEBHOOK_URL    : Apps Script 웹앱 배포 URL (https://script.google.com/macros/s/.../exec)
 *   SHEET_WEBHOOK_SECRET : Apps Script 코드의 SECRET 값과 같은 문자열
 */

type Body = {
  name?: unknown;
  phone?: unknown;
  time?: unknown;
  consent?: unknown;
  answers?: unknown;
  website?: unknown;
  attribution?: unknown;
};

const fail = (status: number, message: string) =>
  Response.json({ ok: false, message }, { status });

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: Request) {
  const url = process.env.SHEET_WEBHOOK_URL;
  const secret = process.env.SHEET_WEBHOOK_SECRET;
  if (!url || !secret) {
    console.error("[lead] SHEET_WEBHOOK_URL / SHEET_WEBHOOK_SECRET 환경 변수가 없습니다.");
    return fail(503, "상담 접수 시스템이 아직 연결되지 않았어요.");
  }

  let body: Body;
  try {
    body = await request.json();
  } catch {
    return fail(400, "잘못된 요청이에요.");
  }

  // 스팸 봇이 채우는 숨김 칸: 채워져 있으면 저장하지 않고 성공처럼 응답
  if (str(body.website, 200)) return Response.json({ ok: true });

  const name = str(body.name, 30);
  const phone = str(body.phone, 20).replace(/\D/g, "");
  if (!name) return fail(400, "이름을 입력해 주세요.");
  if (!/^0\d{8,10}$/.test(phone)) return fail(400, "연락처를 정확히 입력해 주세요.");
  if (body.consent !== true) return fail(400, "개인정보 수집·이용 동의가 필요해요.");

  const time = str(body.time, 40);
  const rawAnswers =
    body.answers && typeof body.answers === "object" ? (body.answers as Record<string, unknown>) : {};
  const attr =
    body.attribution && typeof body.attribution === "object"
      ? (body.attribution as Record<string, unknown>)
      : {};

  // 시트 한 줄: 열 이름 → 값. 질문 문구가 바뀌면 시트에 새 열이 자동으로 생깁니다.
  const row: Record<string, string> = {
    접수시각: new Date().toLocaleString("sv-SE", { timeZone: "Asia/Seoul" }),
    이름: name,
    연락처: phone.replace(/^(\d{3})(\d{3,4})(\d{4})$/, "$1-$2-$3"),
    연락희망시간: time,
  };
  for (const q of survey.questions) {
    const v = rawAnswers[q.id];
    const picked = (Array.isArray(v) ? v : [])
      .filter((o): o is string => typeof o === "string" && q.options.includes(o))
      .slice(0, q.options.length);
    row[q.title] = picked.join(", ");
  }
  row["유입_utm_source"] = str(attr.utm_source, 200);
  row["유입_utm_medium"] = str(attr.utm_medium, 200);
  row["유입_utm_campaign"] = str(attr.utm_campaign, 200);
  row["유입_utm_term"] = str(attr.utm_term, 200);
  row["유입_utm_content"] = str(attr.utm_content, 200);
  row["이전페이지"] = str(attr.referrer, 300);
  row["첫방문페이지"] = str(attr.landing_page, 300);
  row["개인정보동의"] = "동의";

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ secret, row }),
      redirect: "follow",
      cache: "no-store",
    });
    const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (!res.ok || !data?.ok) {
      console.error("[lead] 시트 저장 실패", res.status, data?.error);
      return fail(502, "접수 중 문제가 생겼어요.");
    }
  } catch (err) {
    console.error("[lead] 시트 연결 실패", err);
    return fail(502, "접수 중 문제가 생겼어요.");
  }

  return Response.json({ ok: true });
}
