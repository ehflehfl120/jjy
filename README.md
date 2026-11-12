# 로앤파트너스 법률사무소 랜딩 페이지

빌려준 돈 회수(지급명령) 상담 광고용 모바일 랜딩 페이지입니다. Next.js + Tailwind CSS.

## 로컬 실행

```bash
pnpm install
pnpm dev
```

브라우저에서 http://localhost:3000 을 엽니다.

## 문구 수정 방법

### 1) 편집기로 수정 (추천)

`editor/index.html` 파일을 브라우저로 열면 왼쪽에서 문구를 고치고 오른쪽 휴대폰 화면에서 바로 확인할 수 있습니다.

- 섹션 순서 변경(▲▼), 숨김/표시
- 카드·FAQ·사례 등 항목 추가/삭제/순서 변경
- 상담 버튼 링크(카카오톡 채널 URL) 한 곳에서 변경
- 수정 내용은 그 브라우저에 자동 저장
- 완료 후 **landing.ts 내보내기 → 코드 복사** → `src/content/landing.ts` 내용을 통째로 교체 → 커밋

### 2) 코드에서 직접 수정

- 모든 문구, 섹션 순서·노출: `src/content/landing.ts`
- 섹션 컴포넌트: `src/components/sections/*`
- 섹션 id ↔ 컴포넌트 연결: `src/components/sections/index.ts`
- 공통 Header / Footer / 하단 고정 버튼: `src/components/layout/*`

## 섹션 구성

| id | 내용 |
| --- | --- |
| amount | 원금 + 지연손해금 예시 계산 (원금·이율·기간으로 자동 계산) |
| hero | 메인 소개, 태그, 체크 항목 |
| stats | 진행 현황 숫자, 신뢰 배지 |
| why | 차별점 카드 |
| eligibility | 진행 가능 사례 |
| cta | 상담 배너 |
| process | 5단계 진행 절차 |
| cases | 해결 사례 |
| faq | 자주 묻는 질문 |

## 스크립트

```bash
pnpm dev
pnpm lint
pnpm build
```
