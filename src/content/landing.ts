/**
 * 랜딩 페이지 임시 문구.
 * 화면 문구는 이 파일에서 수정하면 각 섹션에 반영됩니다.
 */

export type TextCard = {
  title: string;
  description: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const site = {
  name: "채봄머니",
  logoText: "채봄머니",
  description: "서비스 소개 문구가 들어갈 영역입니다.",
};

export const navItems = [
  { label: "서비스 소개", href: "/#information" },
  { label: "주요 혜택", href: "/#benefits" },
  { label: "이용 절차", href: "/#process" },
  { label: "자주 묻는 질문", href: "/#faq" },
];

export const hero = {
  eyebrow: "서비스 안내",
  title: "메인 제목을 이곳에 작성합니다",
  description:
    "보조 설명이 들어갈 영역입니다. 고객에게 전달할 핵심 메시지를 한두 문장으로 작성합니다.",
  ctaLabel: "상담 신청하기",
  imageLabel: "이미지 영역",
};

export const information = {
  id: "information",
  eyebrow: "서비스 소개",
  title: "서비스 설명 제목",
  description: "서비스에 대한 설명을 이 영역에 작성합니다.",
  cards: [
    {
      title: "소개 카드 제목 1",
      description: "첫 번째 카드에 들어갈 짧은 설명을 작성합니다.",
    },
    {
      title: "소개 카드 제목 2",
      description: "두 번째 카드에 들어갈 짧은 설명을 작성합니다.",
    },
    {
      title: "소개 카드 제목 3",
      description: "세 번째 카드에 들어갈 짧은 설명을 작성합니다.",
    },
  ] satisfies TextCard[],
};

export const benefits = {
  id: "benefits",
  eyebrow: "주요 혜택",
  title: "서비스의 주요 장점",
  description: "고객이 얻을 수 있는 장점을 이 영역에 정리합니다.",
  cards: [
    {
      title: "혜택 카드 제목 1",
      description: "첫 번째 장점에 대한 설명을 작성합니다.",
    },
    {
      title: "혜택 카드 제목 2",
      description: "두 번째 장점에 대한 설명을 작성합니다.",
    },
    {
      title: "혜택 카드 제목 3",
      description: "세 번째 장점에 대한 설명을 작성합니다.",
    },
  ] satisfies TextCard[],
};

export const processSection = {
  id: "process",
  eyebrow: "이용 절차",
  title: "이용 절차 안내",
  description: "서비스를 이용하는 순서를 단계별로 안내합니다.",
  steps: [
    {
      step: "STEP 01",
      title: "절차 제목 1",
      description: "첫 번째 단계에서 진행하는 내용을 작성합니다.",
    },
    {
      step: "STEP 02",
      title: "절차 제목 2",
      description: "두 번째 단계에서 진행하는 내용을 작성합니다.",
    },
    {
      step: "STEP 03",
      title: "절차 제목 3",
      description: "세 번째 단계에서 진행하는 내용을 작성합니다.",
    },
  ] satisfies ProcessStep[],
};

export const faq = {
  id: "faq",
  eyebrow: "FAQ",
  title: "자주 묻는 질문",
  description: "고객이 자주 묻는 질문과 답변을 이 영역에 정리합니다.",
  items: [
    {
      question: "임시 질문 1을 작성합니다.",
      answer: "임시 답변 1을 작성합니다.",
    },
    {
      question: "임시 질문 2를 작성합니다.",
      answer: "임시 답변 2를 작성합니다.",
    },
    {
      question: "임시 질문 3을 작성합니다.",
      answer: "임시 답변 3을 작성합니다.",
    },
  ] satisfies FaqItem[],
};

export const footer = {
  company: [
    { label: "상호", value: "(회사명)" },
    { label: "대표자", value: "(대표자명)" },
    { label: "사업자등록번호", value: "(000-00-00000)" },
    { label: "주소", value: "(주소)" },
    { label: "이메일", value: "(email@example.com)" },
  ],
  copyright: "© 2026 채봄머니. All rights reserved.",
};

export const legal = {
  privacy: {
    title: "개인정보처리방침",
    body: "개인정보처리방침 본문은 이후 단계에서 작성합니다.",
  },
  terms: {
    title: "이용약관",
    body: "이용약관 본문은 이후 단계에서 작성합니다.",
  },
};
