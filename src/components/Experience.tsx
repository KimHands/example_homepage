import Reveal from "@/components/Reveal";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border bg-surface/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Reveal className="mb-14">
          <p className="eyebrow mb-4">04 — Experience</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            경력
          </h2>
        </Reveal>

        <ol className="relative border-l border-border pl-8 md:pl-10">
          {experiences.map((exp, i) => (
            <Reveal
              key={exp.company}
              as="li"
              delay={i * 80}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background md:-left-[45px]" />
              <p className="font-mono text-xs tracking-widest text-faint">
                {exp.period}
              </p>
              <div className="mt-2 flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-xl font-medium tracking-tight">
                  {exp.company}
                </h3>
                <span className="text-sm text-muted">{exp.role}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
