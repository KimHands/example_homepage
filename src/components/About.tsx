import Reveal from "@/components/Reveal";
import { profile, strengths } from "@/lib/data";
import { ResponsiveIcon, GaugeIcon, ChatIcon } from "@/components/icons";

const strengthIcons = [ResponsiveIcon, GaugeIcon, ChatIcon];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal className="mb-14">
        <p className="eyebrow mb-4">01 — About</p>
        <h2 className="text-balance max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          제품이 성장해도 흔들리지 않는 프론트엔드를 만듭니다.
        </h2>
      </Reveal>

      <div className="grid gap-16 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted">
          {profile.intro.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>

        <div className="space-y-4">
          {strengths.map((strength, i) => {
            const Icon = strengthIcons[i];
            return (
              <Reveal
                key={strength.title}
                delay={i * 80}
                className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-accent">
                  <Icon />
                </div>
                <h3 className="text-base font-medium">{strength.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-faint">
                  {strength.desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
