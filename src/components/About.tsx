import Image from "next/image";
import Reveal from "@/components/Reveal";
import { profile, thesis } from "@/lib/data";
import { ResponsiveIcon, GaugeIcon, ChatIcon } from "@/components/icons";

const thesisIcons = [GaugeIcon, ResponsiveIcon, ChatIcon];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal className="mb-14">
        <p className="eyebrow mb-4">01 — Vision</p>
        <h2 className="text-balance max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          우리의 미션은 AGI가 모든 인류에게 이롭게 작동하도록 만드는 것입니다.
        </h2>
      </Reveal>

      <div className="grid gap-16 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="flex flex-col gap-8 sm:flex-row sm:items-start">
          {/* 포트폴리오 톤에 맞춘 듀오톤 인물 사진 (호버 시 컬러) */}
          <figure className="group shrink-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-surface sm:w-44">
              <Image
                src="/sam-altman.jpg"
                alt="Sam Altman, Co-Founder & CEO of OpenAI"
                fill
                sizes="(max-width: 640px) 100vw, 176px"
                className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-accent/25 mix-blend-color transition-opacity duration-500 group-hover:opacity-0" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <figcaption className="mt-2 text-[11px] leading-snug text-faint">
              Photo: Steve Jennings / TechCrunch ·{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Sam_Altman_TechCrunch_SF_2019_Day_2_Oct_3_(cropped).jpg"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-border underline-offset-2 hover:text-muted"
              >
                CC BY 2.0
              </a>
            </figcaption>
          </figure>

          <div className="space-y-5 text-base leading-relaxed text-muted">
            {profile.intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <div className="space-y-4">
          {thesis.map((item, i) => {
            const Icon = thesisIcons[i];
            return (
              <Reveal
                key={item.title}
                delay={i * 80}
                className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-accent">
                  <Icon />
                </div>
                <h3 className="text-base font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-faint">
                  {item.desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
