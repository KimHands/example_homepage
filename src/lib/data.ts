// 투자 유치용 OpenAI / Sam Altman 원페이지에 노출되는 모든 콘텐츠를 한 곳에서 관리한다.
// 수치는 공개 리서치(2026년 6월 기준)를 바탕으로 한 데모 데이터다.

export const profile = {
  name: "샘 알트먼",
  nameEn: "Sam Altman",
  role: "Co-Founder & CEO, OpenAI",
  tagline:
    "안전한 AGI를 만들어 그 혜택을 모든 인류에게 돌려줍니다. 다음 시대를 함께 설계할 파트너를 찾습니다.",
  intro: [
    "샘 알트먼은 OpenAI의 공동 창업자이자 CEO입니다. 2015년 비영리로 출발한 OpenAI를 7년 만에 기업가치 $852B 규모의, 세계에서 가장 영향력 있는 AI 기업으로 키워냈습니다.",
    "스탠퍼드를 중퇴하고 19세에 Loopt를 창업해 엑싯한 뒤, Y Combinator 사장으로 1,900곳이 넘는 스타트업의 성장을 이끌었습니다. 검증된 창업가이자 투자자로서, 그는 기술이 인류 전체의 삶을 끌어올리는 미래를 설계합니다.",
  ],
  email: "ir@openai.com",
  github: "https://github.com/openai",
  linkedin: "https://www.linkedin.com/in/sam-altman/",
  location: "San Francisco, CA",
};

export const navItems = [
  { id: "about", label: "Vision" },
  { id: "skills", label: "Traction" },
  { id: "projects", label: "Portfolio" },
  { id: "experience", label: "Journey" },
  { id: "contact", label: "Invest" },
];

// Hero 하단 핵심 지표
export const stats = [
  { value: "$852B", label: "기업 가치 (2026.03)" },
  { value: "900M+", label: "주간 활성 사용자" },
  { value: "$25B+", label: "연환산 매출 (ARR)" },
];

// About — 투자 논거(why back this team)
export const thesis = [
  {
    title: "검증된 창업·스케일 이력",
    desc: "Loopt 엑싯, Y Combinator에서 1,900+ 스타트업 육성, 그리고 OpenAI까지 — 0에서 시장 지배자를 만들어낸 반복된 성공.",
  },
  {
    title: "압도적 시장 선점",
    desc: "ChatGPT로 생성형 AI 시대를 열고 소비자·엔터프라이즈 양면에서 카테고리를 정의하는 독보적 선도 지위.",
  },
  {
    title: "전례 없는 성장 곡선",
    desc: "7년 만에 기업가치 852배, 월 매출 $2B. 어떤 민간 기술기업도 보여준 적 없는 궤적.",
  },
];

// Traction — 큰 숫자 지표
export const tractionStats = [
  {
    value: "$852B",
    label: "기업 가치",
    note: "2019년 $1B → 2026년 $852B, 7년 만에 852배",
  },
  {
    value: "900M+",
    label: "주간 활성 사용자",
    note: "10M·100M 최단 도달, 10억 사용자 목전",
  },
  {
    value: "$25B+",
    label: "연환산 매출(ARR)",
    note: "월 매출 $2B, 매월 기록 경신",
  },
  {
    value: "1M+",
    label: "기업 고객",
    note: "엔터프라이즈가 전체 매출의 40% 이상",
  },
];

// Traction — 보조 하이라이트
export const tractionHighlights = [
  { k: "역대 최대 펀딩", v: "단일 라운드 $122B 조달 (2026.03, 역사상 최대 규모)" },
  { k: "AI 인프라", v: "Stargate — SoftBank·Oracle·ARM과 $500B 규모 미국 AI 인프라" },
  { k: "프런티어 모델", v: "GPT-5.4 — 에이전트 워크플로에서 기록적 사용량" },
  { k: "성장 속도", v: "역사상 가장 빠르게 1억 사용자에 도달한 기술 플랫폼" },
];

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  problem: string; // 개요
  contribution: string; // 역할 & 지위
  result: string; // 임팩트
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "ChatGPT",
    summary: "세계에서 가장 빠르게 성장한 소비자 AI 제품",
    tags: ["Consumer AI", "2022—", "900M+ WAU"],
    problem:
      "2022년 11월 출시된 대화형 AI로, 출시 5일 만에 100만 가입자를 돌파하며 생성형 AI 대중화를 촉발했습니다.",
    contribution:
      "비전 수립부터 제품·연구 조직 운영까지 OpenAI CEO로서 출시 전 과정을 총괄했습니다.",
    result:
      "주간 활성 사용자 900M+, 유료 구독자 5,000만+. 단일 제품이 회사를 글로벌 카테고리 리더로 끌어올렸습니다.",
    demoUrl: "https://chat.openai.com",
  },
  {
    title: "GPT-5.4 & API Platform",
    summary: "기업의 AI 전환을 떠받치는 프런티어 모델 플랫폼",
    tags: ["Frontier Model", "Platform", "1M+ Customers"],
    problem:
      "최신 프런티어 모델과 개발자 플랫폼으로, 전 세계 기업이 자사 제품에 첨단 AI를 통합할 수 있게 합니다.",
    contribution:
      "연구-제품-상용화를 잇는 전략을 직접 지휘하며 엔터프라이즈 사업을 핵심 성장축으로 키웠습니다.",
    result:
      "100만+ 기업 고객, 엔터프라이즈가 매출의 40% 이상. 에이전트 워크플로에서 기록적 사용량을 기록 중.",
    demoUrl: "https://platform.openai.com",
    repoUrl: "https://github.com/openai",
  },
  {
    title: "Stargate",
    summary: "$500B 규모 미국 AI 인프라 프로젝트",
    tags: ["Infrastructure", "$500B", "2025—"],
    problem:
      "폭증하는 AI 컴퓨트 수요에 대응하기 위한 초대형 인프라 구축 프로젝트입니다.",
    contribution:
      "SoftBank·Oracle·ARM 등과의 합작을 주도하며 차세대 AI 컴퓨트 주권을 설계했습니다.",
    result:
      "$500B 규모의 투자로, 향후 수년간 OpenAI의 모델 확장과 시장 지위를 떠받치는 기반.",
  },
  {
    title: "Y Combinator",
    summary: "세계 최고 스타트업 액셀러레이터로의 확장",
    tags: ["Accelerator", "2014—2019", "1,900+ startups"],
    problem:
      "초기 스타트업을 발굴·육성하는 액셀러레이터로, 알트먼은 사장으로서 규모와 영향력을 비약적으로 키웠습니다.",
    contribution:
      "2014–2019년 사장으로 재직하며 하드테크·딥테크로 투자 영역을 확장했습니다.",
    result:
      "누적 1,900+ 기업 육성. Airbnb·DoorDash·Instacart·Reddit·Twitch 등을 배출.",
  },
  {
    title: "Worldcoin · Tools for Humanity",
    summary: "AI 시대의 신원 증명(proof of personhood)",
    tags: ["Identity", "2019—", "Web3"],
    problem:
      "AI가 보편화된 세상에서 '진짜 사람'을 증명하기 위한 글로벌 신원 인프라입니다.",
    contribution:
      "2019년 공동 창업해 홍채 기반 신원 증명과 토큰 분배 모델을 설계했습니다.",
    result:
      "전 세계 사용자 대상 신원 네트워크 구축, $250M+ 투자 유치.",
  },
  {
    title: "Loopt (Exit)",
    summary: "19세에 창업한 위치 기반 소셜 앱",
    tags: ["Exit", "2005—2012", "$43.4M"],
    problem:
      "스마트폰 초창기, 친구와 위치를 공유하는 소셜 앱으로 Y Combinator 1기 투자 기업이었습니다.",
    contribution:
      "공동 창업자 겸 CEO로 제품과 펀딩을 이끌며 $30M+ 벤처 투자를 유치했습니다.",
    result:
      "2012년 Green Dot Corporation에 $43.4M에 인수되며 첫 엑싯을 달성.",
  },
];

export type Experience = {
  period: string;
  company: string;
  role: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    period: "2015 — 현재",
    company: "OpenAI",
    role: "Co-Founder & CEO",
    points: [
      "비영리로 공동 창업(2015), 2019년부터 CEO로 회사를 전면 지휘",
      "ChatGPT·GPT 시리즈 출시를 이끌며 기업가치를 $852B 규모로 성장시킴",
    ],
  },
  {
    period: "2014 — 2019",
    company: "Y Combinator",
    role: "President",
    points: [
      "세계 최대 스타트업 액셀러레이터로 확장, 누적 1,900+ 기업 육성",
      "하드테크·딥테크로 투자 영역을 적극 확대",
    ],
  },
  {
    period: "2012 — 현재",
    company: "Hydrazine Capital",
    role: "Co-Founder",
    points: [
      "$21M 규모로 출발한 벤처 펀드를 공동 설립, 400+ 기업에 투자",
    ],
  },
  {
    period: "2005 — 2012",
    company: "Loopt",
    role: "Co-Founder & CEO",
    points: [
      "19세에 위치 기반 소셜 앱을 창업, $30M+ 투자 유치",
      "2012년 Green Dot에 $43.4M에 인수되며 엑싯",
    ],
  },
];
