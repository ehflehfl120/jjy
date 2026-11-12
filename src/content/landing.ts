/**
 * 랜딩 페이지 문구 / 섹션 순서.
 *
 * 이 파일만 수정하면 화면 전체가 바뀝니다.
 * editor/index.html(편집기)에서 수정 → "landing.ts 내보내기"로 이 파일을 통째로 교체해도 됩니다.
 */

export type SectionId =
  | "amount"
  | "hero"
  | "stats"
  | "why"
  | "eligibility"
  | "cta"
  | "process"
  | "cases"
  | "faq";

export type LandingContent = {
  site: {
    name: string;
    headerTitle: string;
    logoImage: string;
    description: string;
    kakaoUrl: string;
    floatingCtaLabel: string;
  };
  sections: { id: SectionId; visible: boolean }[];
  amount: {
    eyebrow: string;
    title: string;
    description: string;
    principal: number;
    ratePercent: number;
    years: number;
    principalLabel: string;
    interestLabel: string;
    totalLabel: string;
    note: string;
    ctaLabel: string;
  };
  hero: {
    titleLines: string[];
    description: string;
    tags: string[];
    checks: string[];
    note: string;
  };
  stats: {
    eyebrow: string;
    items: { value: string; unit: string; label: string; caption: string }[];
    badges: string[];
  };
  why: {
    eyebrow: string;
    title: string;
    description: string;
    cards: { title: string; description: string }[];
  };
  eligibility: {
    eyebrow: string;
    title: string;
    description: string;
    cards: { label: string; title: string; description: string }[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  cases: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    items: {
      category: string;
      amount: string;
      title: string;
      body: string;
      tags: string[];
    }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: { question: string; answer: string }[];
  };
  footer: {
    company: { label: string; value: string }[];
    copyright: string;
  };
  legal: {
    privacy: { title: string; body: string };
    terms: { title: string; body: string };
  };
};

export const landing: LandingContent = {
  site: {
    name: "채봄머니",
    headerTitle: "로앤파트너스 법률사무소",
    logoImage: "",
    description:
      "빌려준 돈, 아직도 못 받고 계신가요? 지급명령부터 압류까지 진행 방향을 안내해드립니다.",
    kakaoUrl: "https://pf.kakao.com/",
    floatingCtaLabel: "카카오톡 무료 상담",
  },
  sections: [
    { id: "amount", visible: true },
    { id: "hero", visible: true },
    { id: "stats", visible: true },
    { id: "why", visible: true },
    { id: "eligibility", visible: true },
    { id: "cta", visible: true },
    { id: "process", visible: true },
    { id: "cases", visible: true },
    { id: "faq", visible: true },
  ],
  amount: {
    eyebrow: "빌려준 돈, 아직도 못 받고 계신가요?",
    title: "빌려준 돈에 지연손해금까지,\n청구 가능한 금액을 확인해보세요.",
    description: "원금 외에 지연손해금도 청구할 수 있는 경우가 있습니다.",
    principal: 10000000,
    ratePercent: 5,
    years: 5,
    principalLabel: "빌려준 원금",
    interestLabel: "예시 지연손해금",
    totalLabel: "예시 청구금액",
    note: "연 5% 단리로 계산한 가상 예시입니다. 실제 청구 가능액은 변제기, 약정, 소멸시효 등에 따라 달라지며 회수를 보장하지 않습니다.",
    ctaLabel: "카카오톡으로 무료 상담 시작",
  },
  hero: {
    titleLines: ["못 받은 돈,", "어떻게 받아야 할까요?"],
    description:
      "복잡한 절차 없이 지급명령부터 압류까지\n진행 방향을 안내해드립니다.",
    tags: ["차용증 없음", "소액", "계좌이체", "채무자 연락두절"],
    checks: [
      "차용증 없어도 진행 가능 (계좌이체 내역 OK)",
      "카카오톡 한 번으로 무료 상담 시작",
      "지급명령 → 확정 → 회수까지 단계별 안내",
    ],
    note: "사건 상황에 따라 진행 방법은 달라질 수 있습니다.",
  },
  stats: {
    eyebrow: "진행 현황",
    items: [
      { value: "1,000", unit: "+", label: "누적 상담 건수", caption: "실제 수치로 바꿔주세요" },
      { value: "90", unit: "%", label: "진행 후 만족도", caption: "상담 진행 기준" },
      { value: "3", unit: "주", label: "평균 확정 소요 기간", caption: "사안별 상이할 수 있음" },
    ],
    badges: ["대법원 전자소송 안내", "개인정보 보호 처리", "카카오톡 실시간 상담", "초기 상담 무료"],
  },
  why: {
    eyebrow: "WHY US",
    title: "혼자 고민하지 마세요",
    description: "개인 간 금전 문제, 혼자 놓치지 않게\n회수 가능성을 높여드립니다.",
    cards: [
      {
        title: "지급명령 진행 방향 안내",
        description: "법원 절차를 단계별로 안내하고, 서류 준비까지 함께 도와드립니다.",
      },
      {
        title: "회수 가능성 사전 진단",
        description: "상담 전 간단한 확인으로 진행 가능 여부를 먼저 파악합니다.",
      },
      {
        title: "전문가 연결 지원",
        description: "필요 시 전문가와 연결해 상황에 맞는 방향을 함께 찾아드립니다.",
      },
    ],
  },
  eligibility: {
    eyebrow: "진행 가능 사례",
    title: "이런 상황에도\n진행 가능합니다",
    description: "카카오톡으로 간단히 확인 후 진행 가능 여부를 안내드립니다.",
    cards: [
      {
        label: "CASE 01",
        title: "돈을 빌려줬는데 연락이 끊긴 경우",
        description: "채무자 연락 두절 → 법적 절차로 해결 가능",
      },
      {
        label: "CASE 02",
        title: "차용증 없이 계좌이체 내역만 있는 경우",
        description: "이체 내역·메신저 대화로 입증 가능",
      },
      {
        label: "CASE 03",
        title: "갚겠다고 하고 계속 미루는 경우",
        description: "이행 약속 메시지도 증거로 활용 가능",
      },
      {
        label: "CASE 04",
        title: "일부만 갚고 나머지가 미지급 상태",
        description: "잔여 금액에 대한 지급명령 신청 가능",
      },
    ],
  },
  cta: {
    eyebrow: "LEGAL PROFESSIONAL TEAM",
    title: "해당 사항이 있으신가요?",
    description: "복잡한 절차 없이, 저희가 도와드리겠습니다.",
    buttonLabel: "카카오톡으로 바로 확인하기",
  },
  process: {
    eyebrow: "이용 절차",
    title: "5단계로 진행되는\n간단한 절차",
    description: "처음부터 끝까지 1:1로, 모든 단계는 투명하게 공유됩니다.",
    steps: [
      {
        title: "무료 상담 접수",
        description:
          "현재 상황과 채무자 정보를 간단히 확인합니다. 금액, 시기, 보유 증거자료 등을 카카오톡으로 알려주세요.",
      },
      {
        title: "진행 가능 여부 검토",
        description: "지급명령 진행이 가능한지, 회수 가능성이 있는지 사전에 안내드립니다.",
      },
      {
        title: "서류 준비 및 접수 안내",
        description: "필요한 자료를 안내드리고 지급명령 신청 절차를 단계별로 도와드립니다.",
      },
      {
        title: "지급명령 진행",
        description:
          "법원에 지급명령 신청이 접수되며, 송달 및 확정 절차가 진행됩니다. (통상 2~4주 소요)",
      },
      {
        title: "확정 후 후속 절차 안내",
        description: "확정 이후 상황에 따라 재산조회 및 압류 등 추가 절차를 안내드립니다.",
      },
    ],
  },
  cases: {
    eyebrow: "해결 사례",
    title: "실제 해결 사례",
    description: "실제로 해결된 사례들입니다.",
    note: "※ 개인정보 보호를 위해 일부 정보는 변경되었습니다.",
    items: [
      {
        category: "개인 간 금전 대여",
        amount: "350만원 회수",
        title: "차용증 없이 계좌이체만으로 전액 회수",
        body: "2년 전 지인에게 350만원을 이체했으나 연락이 끊겼음. 카카오톡 대화 내역과 계좌이체 내역만으로 지급명령 신청 후 확정, 전액 회수.",
        tags: ["차용증 없음", "연락두절", "전액회수"],
      },
      {
        category: "지인 간 대여금",
        amount: "5,000만원 회수",
        title: "갚겠다는 메시지로 증거 확보 후 해결",
        body: "수차례 독촉에도 미루던 채무자. 카카오톡으로 \"곧 갚겠다\"는 메시지를 증거로 활용, 지급명령 확정 후 회수 성공.",
        tags: ["메시지 증거", "일부 미지급", "전액회수"],
      },
      {
        category: "소액 금전 분쟁",
        amount: "180만원 회수",
        title: "소액도 포기하지 않고 지급명령으로 해결",
        body: "소액이라 포기하려 했지만 상담 후 진행. 온라인 전자소송으로 법원 방문 없이 지급명령 신청 및 확정 완료.",
        tags: ["소액", "비대면", "전액회수"],
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "자주 묻는 질문",
    description: "더 궁금한 점은 카카오톡으로 문의해주세요.",
    items: [
      {
        question: "차용증이 없어도 진행이 가능한가요?",
        answer:
          "카카오톡 대화 내용, 계좌이체 내역 등 채무 관계를 입증할 수 있는 자료가 있다면 지급명령 신청이 가능합니다. 무료 상담을 통해 보유하신 자료를 먼저 확인해드립니다.",
      },
      {
        question: "얼마나 빠르게 진행되나요?",
        answer:
          "지급명령 신청 후 법원 심사 및 송달까지 통상 2~4주가 소요됩니다. 채무자가 이의 신청을 하지 않으면 그 후 2주 이내에 확정됩니다.",
      },
      {
        question: "소액도 진행할 수 있나요?",
        answer:
          "네, 금액 제한 없이 상담 가능합니다. 다만 비용 대비 효율성을 고려하여 진행 가능 여부를 사전에 안내드립니다.",
      },
      {
        question: "서비스 비용이 있나요?",
        answer: "초기 상담은 무료입니다. 이후 진행 과정에서 발생하는 비용은 상담 시 상세히 안내드립니다.",
      },
      {
        question: "법원에 직접 가야 하나요?",
        answer:
          "지급명령 신청은 온라인(대법원 전자소송)으로도 진행할 수 있습니다. 방문 없이 처리할 수 있도록 절차를 안내해드립니다.",
      },
      {
        question: "채무자가 이의 신청을 하면 어떻게 되나요?",
        answer:
          "이의 신청 시 소송으로 전환됩니다. 이 경우 추가 대응 방향을 안내드리며, 필요 시 전문가 연결을 지원합니다.",
      },
      {
        question: "채무자 주소를 모르면 어떻게 하나요?",
        answer:
          "지급명령 신청에는 채무자의 주소가 필요합니다. 주소 확인 방법에 대해서도 상담 과정에서 함께 안내드립니다.",
      },
      {
        question: "상담은 어떻게 하나요?",
        answer:
          "모든 상담은 카카오톡 채널을 통해 진행됩니다. 카카오톡으로 채팅을 시작해 주세요. 평일 09:00~18:00 운영합니다.",
      },
    ],
  },
  footer: {
    company: [
      { label: "상호", value: "(회사명)" },
      { label: "대표자", value: "(대표자명)" },
      { label: "사업자등록번호", value: "(000-00-00000)" },
      { label: "주소", value: "(주소)" },
      { label: "이메일", value: "(email@example.com)" },
    ],
    copyright: "© 2026 채봄머니. All rights reserved.",
  },
  legal: {
    privacy: {
      title: "개인정보처리방침",
      body: "개인정보처리방침 본문은 이후 단계에서 작성합니다.",
    },
    terms: {
      title: "이용약관",
      body: "이용약관 본문은 이후 단계에서 작성합니다.",
    },
  },
};

// 기존 import 호환용
export const site = landing.site;
export const footer = landing.footer;
export const legal = landing.legal;
