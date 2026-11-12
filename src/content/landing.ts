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
  "site": {
    "name": "채봄머니",
    "headerTitle": "로앤파트너스 법률사무소",
    "logoImage": "",
    "description": "빌려준 돈, 아직도 못 받고 계신가요? 지급명령부터 압류까지 진행 방향을 안내해드립니다.",
    "kakaoUrl": "https://pf.kakao.com/",
    "floatingCtaLabel": "카카오톡 무료 상담"
  },
  "sections": [
    {
      "id": "amount",
      "visible": true
    },
    {
      "id": "hero",
      "visible": true
    },
    {
      "id": "stats",
      "visible": true
    },
    {
      "id": "why",
      "visible": true
    },
    {
      "id": "eligibility",
      "visible": true
    },
    {
      "id": "cta",
      "visible": true
    },
    {
      "id": "process",
      "visible": true
    },
    {
      "id": "cases",
      "visible": true
    },
    {
      "id": "faq",
      "visible": true
    }
  ],
  "amount": {
    "eyebrow": "차용증이 없어도, 연락이 끊겼어도",
    "title": "빌려준 돈, \n못 받을 거라 포기하셨나요?",
    "description": "연락 두절부터 상환 미루기까지,\n 내 돈을 되찾을 방법을 확인하세요.",
    "principal": 30000000,
    "ratePercent": 5,
    "years": 5,
    "principalLabel": "빌려준 원금",
    "interestLabel": "예시 지연손해금",
    "totalLabel": "예시 청구금액",
    "note": "연 5% 단리로 계산한 가상 예시입니다. 실제 청구 가능액은 변제기, 약정, 소멸시효 등에 따라 달라지며 회수를 보장하지 않습니다.",
    "ctaLabel": "못 받은 돈, 회수 가능성 확인하기"
  },
  "hero": {
    "titleLines": [
      "못 받은 돈,",
      "어떻게 받아야 할까요?"
    ],
    "description": "복잡한 절차 없이 지급명령부터 압류까지\n진행 방향을 안내해드립니다.",
    "tags": [
      "차용증 없음",
      "소액",
      "계좌이체",
      "채무자 잠수",
      "빌린돈안갚을때",
      "연락두절"
    ],
    "checks": [
      "차용증 없어도 진행 가능 (계좌이체 내역 OK)",
      "지급명령→확정→회수까지 단계별 안내",
      "판결 후 강제집행 절차 안내",
      "카카오톡 한 번으로 무료 상담 시작"
    ],
    "note": "사건별 사실관계와 증거 및 상황에 따라 \n진행 가능 여부가 달라질 수 있습니다."
  },
  "stats": {
    "eyebrow": "진행 현황",
    "items": [
      {
        "value": "0",
        "unit": "원",
        "label": "초기 상담 비용",
        "caption": "상담 비용 부담 없이 문의"
      },
      {
        "value": "1~2",
        "unit": "주",
        "label": "지급명령 예상 기간",
        "caption": "법원 처리 및 송달 상황에 따라 변동"
      },
      {
        "value": "89",
        "unit": "%",
        "label": "진행 후 만족도",
        "caption": "상담 진행 기준"
      }
    ],
    "badges": [
      "지급명령 및 소송 절차 안내",
      "상담 내용 및 개인정보 보호 관리",
      "언제든 편리하게 실시간 상담 문의",
      "상담 비용 부담 없이 문의"
    ]
  },
  "why": {
    "eyebrow": "WHY US",
    "title": "못 받은 돈, \n혼자 고민하지 마세요.",
    "description": "막막했던 금전 문제, \n상황에 맞는 법적 대응 방향을 안내합니다.",
    "cards": [
      {
        "title": "차용증이 없어도 증거부터 확인",
        "description": "계좌이체 내역과 문자, 카카오톡 대화 등 보유한 자료를 검토합니다."
      },
      {
        "title": "내 상황에 맞는 회수 전략",
        "description": "어떤 상황인지 확인하고 돈을 돌려받을 수 있는 방법 먼저 파악합니다."
      },
      {
        "title": "지급명령부터 강제집행까지",
        "description": "필요한 경우 지급명령, 민사소송, 판결 이후 집행 절차까지 안내합니다."
      }
    ]
  },
  "eligibility": {
    "eyebrow": "진행 가능 사례",
    "title": "이런 상황에서도 가능할까요?",
    "description": "빌려준 돈을 돌려받지 못하고 있다면 \n상황에 맞는 해결 방법을 확인해 보세요.",
    "cards": [
      {
        "label": "CASE 01",
        "title": "빌려준 돈을 갚지 않는 경우",
        "description": "미변제 금액과 증거자료를 확인한 후 지급명령 신청 및 법적 대응 진행"
      },
      {
        "label": "CASE 02",
        "title": "차용증 없이 돈을 빌려준 경우",
        "description": "계좌이체 내역과 대화 기록을 검토해 대여 사실을 입증할 수 있는 방법을 안내"
      },
      {
        "label": "CASE 03",
        "title": "채무자가 연락을 피하는 경우",
        "description": "채무자의 주소와 송달 가능 여부를 확인하고 지급명령 등 적절한 법적 절차 안내"
      },
      {
        "label": "CASE 04",
        "title": "일부만 갚고 나머지는 미루는 경우",
        "description": "남은 원금과 지연손해금을 확인해 미지급 금액에 대한 지급명령 신청 진행"
      }
    ]
  },
  "cta": {
    "eyebrow": "DON'T GIVE UP YOUR MONEY",
    "title": "빌려준 돈, \n계속 기다리기만 하실 건가요?",
    "description": "더 늦기 전에 \n내 돈을 돌려받을 방법부터 확인하세요.",
    "buttonLabel": "내 돈 찾기, 실시간 상담하기 →"
  },
  "process": {
    "eyebrow": "지급명령 진행 단계",
    "title": "못 받은 돈, \n돌려받는 간단한 절차 안내",
    "description": "처음부터 끝까지 1:1로, \n모든 단계는 투명하게 공유됩니다.",
    "steps": [
      {
        "title": "무료 상담 접수",
        "description": "현재 상황과 채무자 정보를 간단히 확인합니다. 금액, 시기, 보유 증거자료 등을 카카오톡으로 알려주세요."
      },
      {
        "title": "진행 가능 여부 검토",
        "description": "지급명령 진행이 가능한지, 회수 가능성이 있는지 사전에 안내드립니다."
      },
      {
        "title": "서류 준비 및 접수 안내",
        "description": "필요한 자료를 안내드리고 지급명령 신청 절차를 단계별로 도와드립니다."
      },
      {
        "title": "지급명령 진행",
        "description": "청구 내용과 증거를 정리해 법원에 지급명령을 신청합니다."
      },
      {
        "title": "확정 후 후속 절차 안내",
        "description": "확정 이후 상황에 따라 재산조회 및 압류 등 추가 절차를 안내드립니다."
      }
    ]
  },
  "cases": {
    "eyebrow": "해결 사례",
    "title": "실제 해결 사례",
    "description": "실제로 해결된 사례들입니다.",
    "note": "※ 개인정보 보호를 위해 일부 정보는 변경되었습니다.",
    "items": [
      {
        "category": "개인 간 금전 대여",
        "amount": "350만원 회수",
        "title": "차용증 없이 계좌이체만으로 전액 회수",
        "body": "2년 전 지인에게 350만원을 이체했으나 연락이 끊겼음. 카카오톡 대화 내역과 계좌이체 내역만으로 지급명령 신청 후 확정, 전액 회수.",
        "tags": [
          "차용증 없음",
          "연락두절",
          "전액회수",
          "소액"
        ]
      },
      {
        "category": "지인 간 대여금",
        "amount": "5,000만원 회수",
        "title": "갚겠다는 메시지로 증거 확보 후 해결",
        "body": "수차례 독촉에도 미루던 채무자. 카카오톡으로 \"곧 갚겠다\"는 메시지를 증거로 활용, 지급명령 확정 후 회수 성공.",
        "tags": [
          "메시지 증거",
          "일부 미지급",
          "전액회수",
          "지인채무"
        ]
      },
      {
        "category": "소액 금전 분쟁",
        "amount": "180만원 회수",
        "title": "소액도 포기하지 않고 지급명령으로 해결",
        "body": "소액이라 포기하려 했지만 상담 후 진행. 온라인 전자소송으로 법원 방문 없이 지급명령 신청 및 확정 완료.",
        "tags": [
          "소액",
          "비대면",
          "전액회수",
          "비대면진행"
        ]
      }
    ]
  },
  "faq": {
    "eyebrow": "FAQ",
    "title": "자주 묻는 질문",
    "description": "더 궁금한 점은 카카오톡으로 문의해주세요.",
    "items": [
      {
        "question": "차용증이 없어도 진행이 가능한가요?",
        "answer": "카카오톡 대화 내용, 계좌이체 내역 등 채무 관계를 입증할 수 있는 자료가 있다면 지급명령 신청이 가능합니다. 무료 상담을 통해 보유하신 자료를 먼저 확인해드립니다."
      },
      {
        "question": "얼마나 빠르게 진행되나요?",
        "answer": "지급명령 신청 후 법원 심사 및 송달까지 통상 2~4주가 소요됩니다. 채무자가 이의 신청을 하지 않으면 그 후 2주 이내에 확정됩니다."
      },
      {
        "question": "소액도 진행할 수 있나요?",
        "answer": "네, 금액 제한 없이 상담 가능합니다. 다만 비용 대비 효율성을 고려하여 진행 가능 여부를 사전에 안내드립니다."
      },
      {
        "question": "서비스 비용이 있나요?",
        "answer": "초기 상담은 무료입니다. 이후 진행 과정에서 발생하는 비용은 상담 시 상세히 안내드립니다."
      },
      {
        "question": "법원에 직접 가야 하나요?",
        "answer": "지급명령 신청은 온라인(대법원 전자소송)으로도 진행할 수 있습니다. 방문 없이 처리할 수 있도록 절차를 안내해드립니다."
      },
      {
        "question": "채무자가 이의 신청을 하면 어떻게 되나요?",
        "answer": "이의 신청 시 소송으로 전환됩니다. 이 경우 추가 대응 방향을 안내드리며, 필요 시 전문가 연결을 지원합니다."
      },
      {
        "question": "채무자 주소를 모르면 어떻게 하나요?",
        "answer": "지급명령 신청에는 채무자의 주소가 필요합니다. 주소 확인 방법에 대해서도 상담 과정에서 함께 안내드립니다."
      },
      {
        "question": "상담은 어떻게 하나요?",
        "answer": "모든 상담은 카카오톡 채널을 통해 진행됩니다. 카카오톡으로 채팅을 시작해 주세요. 평일 09:00~18:00 운영합니다."
      }
    ]
  },
  "footer": {
    "company": [
      {
        "label": "상호",
        "value": "내돈찾아dream"
      },
      {
        "label": "대표자",
        "value": "장재영"
      },
      {
        "label": "로앤파트너스 법률사무소",
        "value": "(148-62-00877)"
      },
      {
        "label": "대표변호사",
        "value": "김가헌"
      },
      {
        "label": "주소",
        "value": "(서울특별시 서초구 서초중앙로114, 일광빌딩 301호)"
      },
      {
        "label": "이메일",
        "value": "(moneydream2026@naver.com)"
      }
    ],
    "copyright": "© 2026 내돈찾아dream. All rights reserved."
  },
  "legal": {
    "privacy": {
      "title": "개인정보처리방침",
      "body": "개인정보처리방침 본문은 이후 단계에서 작성합니다."
    },
    "terms": {
      "title": "이용약관",
      "body": "이용약관 본문은 이후 단계에서 작성합니다."
    }
  }
};

// 기존 import 호환용
export const site = landing.site;
export const footer = landing.footer;
export const legal = landing.legal;
