import Reveal from "@/components/Reveal";
import { tractionStats, tractionHighlights } from "@/lib/data";

// Traction — 투자자를 위한 핵심 성장 지표
export default function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Reveal className="mb-14">
          <p className="eyebrow mb-4">02 — Traction</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            성장 지표
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            어떤 민간 기술기업도 보여준 적 없는 속도와 규모. 숫자가 곧 투자
            논거입니다.
          </p>
        </Reveal>

        {/* 큰 숫자 지표 */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {tractionStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70} className="bg-background p-7">
              <p className="text-4xl font-semibold tracking-tight text-accent">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-medium">{stat.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-faint">
                {stat.note}
              </p>
            </Reveal>
          ))}
        </div>

        {/* 보조 하이라이트 */}
        <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {tractionHighlights.map((item, i) => (
            <Reveal
              key={item.k}
              delay={i * 60}
              className="flex flex-col gap-1.5 bg-background p-6 sm:flex-row sm:items-baseline sm:gap-5"
            >
              <span className="shrink-0 font-mono text-xs uppercase tracking-widest text-faint sm:w-28">
                {item.k}
              </span>
              <span className="text-sm leading-relaxed text-muted">
                {item.v}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
