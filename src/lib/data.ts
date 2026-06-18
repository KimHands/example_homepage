// 포트폴리오에 노출되는 모든 콘텐츠를 한 곳에서 관리한다.

export const profile = {
  name: "김도현",
  nameEn: "Dohyun Kim",
  role: "Frontend Developer",
  tagline: "복잡한 요구사항을 가볍고 안정적인 사용자 경험으로 옮깁니다.",
  intro: [
    "6년차 프론트엔드 개발자로, 커머스·SaaS 도메인에서 대규모 트래픽을 다루는 웹 서비스를 설계하고 구현해 왔습니다. 디자인 시스템과 컴포넌트 아키텍처를 기반으로, 빠르게 성장하는 제품이 흔들리지 않도록 토대를 만드는 일을 좋아합니다.",
    "단순히 화면을 그리는 데 그치지 않고, 성능·접근성·유지보수성까지 책임지는 것을 원칙으로 합니다. 기획·디자인·백엔드와 적극적으로 소통하며 제품의 완성도를 함께 끌어올립니다.",
  ],
  email: "dohyun.dev@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "Seoul, KR",
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: "6+", label: "Years of experience" },
  { value: "30+", label: "Shipped projects" },
  { value: "12", label: "Open-source repos" },
];

export const strengths = [
  {
    title: "반응형 & 디자인 시스템",
    desc: "픽셀 단위의 디자인 재현과 재사용 가능한 컴포넌트 설계로 일관된 UI를 구축합니다.",
  },
  {
    title: "성능 최적화",
    desc: "렌더링·번들·이미지 최적화로 Core Web Vitals를 개선하고 체감 속도를 끌어올립니다.",
  },
  {
    title: "협업 & 커뮤니케이션",
    desc: "기획·디자인·백엔드와의 명확한 소통으로 일정과 품질을 함께 책임집니다.",
  },
];

export const skillGroups = [
  {
    category: "Language",
    items: ["TypeScript", "JavaScript", "HTML", "CSS / Sass"],
  },
  {
    category: "Framework · Library",
    items: ["React", "Next.js", "React Query", "Zustand", "Tailwind CSS"],
  },
  {
    category: "Tooling",
    items: ["Vite", "Webpack", "Storybook", "Vitest", "Playwright"],
  },
  {
    category: "Collaboration",
    items: ["Git", "Figma", "Jira", "Notion", "Slack"],
  },
];

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  problem: string;
  contribution: string;
  result: string;
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "커머스 플랫폼 리뉴얼",
    summary: "월 200만 사용자 규모 커머스의 프론트엔드 전면 개편",
    tags: ["Next.js", "TypeScript", "React Query"],
    problem:
      "레거시 SPA의 느린 초기 로딩과 낮은 SEO 점수로 신규 유입과 전환율이 정체되어 있었습니다.",
    contribution:
      "App Router 기반 SSR/ISR 구조로 전환하고, 데이터 패칭 레이어를 React Query로 표준화했습니다. 핵심 화면의 컴포넌트를 디자인 시스템으로 재정비했습니다.",
    result:
      "LCP 4.1s → 1.6s, Lighthouse 성능 62 → 95. 검색 유입 38% 증가, 구매 전환율 21% 개선.",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "SaaS 대시보드 디자인 시스템",
    summary: "40여 개 화면을 지탱하는 컴포넌트 라이브러리 구축",
    tags: ["React", "Storybook", "Tailwind CSS"],
    problem:
      "팀별로 제각각인 UI 구현으로 디자인 일관성이 깨지고 중복 코드가 누적되고 있었습니다.",
    contribution:
      "토큰 기반 테마와 60여 개 공용 컴포넌트를 설계하고 Storybook 문서화 및 시각 회귀 테스트를 도입했습니다.",
    result:
      "신규 화면 개발 리드타임 45% 단축, UI 관련 버그 리포트 60% 감소.",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "실시간 데이터 시각화 콘솔",
    summary: "대용량 스트리밍 데이터를 다루는 모니터링 콘솔",
    tags: ["React", "WebSocket", "Canvas"],
    problem:
      "초당 수천 건의 이벤트를 렌더링하면서 프레임 드랍과 메모리 누수가 발생했습니다.",
    contribution:
      "가상화와 Canvas 렌더링, 워커 기반 데이터 가공으로 렌더링 파이프라인을 재설계했습니다.",
    result:
      "안정적인 60fps 유지, 메모리 사용량 35% 절감, 운영팀 대응 속도 향상.",
    repoUrl: "https://github.com",
  },
  {
    title: "디자인 토큰 자동화 파이프라인",
    summary: "Figma 변수를 코드 토큰으로 동기화하는 사내 도구",
    tags: ["TypeScript", "Figma API", "Node.js"],
    problem:
      "디자인 변경이 코드에 반영되기까지 수작업이 많아 시간이 오래 걸렸습니다.",
    contribution:
      "Figma 변수를 CSS/JS 토큰으로 변환·배포하는 CLI를 만들고 CI에 연동했습니다.",
    result:
      "토큰 반영 시간 수시간 → 수분, 디자인-개발 간 불일치 이슈 대폭 감소.",
    repoUrl: "https://github.com",
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
    period: "2022 — 현재",
    company: "Lumina Commerce",
    role: "Senior Frontend Engineer",
    points: [
      "커머스 웹 프론트엔드 리뉴얼 리드, 성능·SEO 핵심 지표 개선",
      "프론트엔드 코드 리뷰 문화 정착 및 주니어 멘토링",
    ],
  },
  {
    period: "2020 — 2022",
    company: "Northwind SaaS",
    role: "Frontend Engineer",
    points: [
      "대시보드 디자인 시스템 구축 및 사내 표준화 주도",
      "테스트 자동화 도입으로 배포 안정성 향상",
    ],
  },
  {
    period: "2019 — 2020",
    company: "Atlas Studio",
    role: "Web Developer",
    points: [
      "다수의 기업 웹사이트·랜딩 페이지 반응형 구현",
      "퍼블리싱 가이드 및 컴포넌트 정리로 협업 효율 개선",
    ],
  },
];
