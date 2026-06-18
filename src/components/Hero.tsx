import { profile, stats } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-32">
        <p className="eyebrow reveal is-visible mb-6">
          {profile.nameEn} · {profile.role}
        </p>

        <h1 className="text-balance max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          AGI가 모든 인류에게
          <br />
          <span className="text-muted">이롭도록</span> 만듭니다.
        </h1>

        <p className="text-balance mt-8 max-w-xl text-lg leading-relaxed text-muted">
          {profile.tagline}
        </p>

        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-muted">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
          커서 학습을 위해 테스트 중인 페이지 입니다.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            투자 제안하기
          </a>
          <a
            href="#skills"
            className="rounded-full border border-border-strong px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
          >
            성장 지표 보기
          </a>
          <div className="ml-1 flex items-center gap-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
            >
              <GithubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <dl className="mt-20 grid max-w-lg grid-cols-3 gap-8 border-t border-border pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-3xl font-semibold tracking-tight">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs leading-snug text-faint">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
