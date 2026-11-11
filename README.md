# 채봄머니 랜딩 페이지

광고 랜딩 페이지의 기본 골격입니다. 현재 단계에는 화면 구성과 임시 문구만 포함되어 있습니다.

## 로컬 실행

의존성 설치 후 개발 서버를 실행합니다.

```bash
pnpm install
pnpm dev
```

브라우저에서 http://localhost:3000 을 엽니다.

## 문구와 섹션 순서

- 화면 문구: `src/content/landing.ts`
- 홈 섹션 순서: `src/components/sections/index.ts`
- 공통 Header / Footer: `src/app/layout.tsx`

섹션을 추가하거나 빼려면 `src/components/sections`에 컴포넌트를 두고, `index.ts` 배열만 수정하면 됩니다.

## 스크립트

```bash
pnpm dev
pnpm lint
pnpm build
```
