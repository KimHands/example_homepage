import Reveal from "@/components/Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-border bg-surface/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Reveal className="mb-14">
          <p className="eyebrow mb-4">02 — Skills</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            기술 스택
          </h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.category}
              delay={i * 70}
              className="bg-background p-8"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-faint">
                {group.category}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-muted transition-colors hover:border-border-strong hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
