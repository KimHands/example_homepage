"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import { projects, type Project } from "@/lib/data";
import { ArrowUpRightIcon, CloseIcon } from "@/components/icons";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  // 모달 열림 동안 ESC 닫기 + 배경 스크롤 잠금
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal className="mb-14">
        <p className="eyebrow mb-4">03 — Portfolio</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          제품 &amp; 벤처
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          하나의 제품이 아니라, 카테고리를 만들어 온 연속된 성공. 카드를 눌러
          상세 임팩트를 확인하세요.
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 80} as="article">
            <button
              type="button"
              onClick={() => setSelected(project)}
              className="group flex h-full w-full flex-col rounded-2xl border border-border bg-surface p-7 text-left transition-colors hover:border-border-strong"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRightIcon className="h-5 w-5 text-faint transition-colors group-hover:text-accent" />
              </div>
              <h3 className="text-xl font-medium tracking-tight">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.summary}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-faint"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </button>
          </Reveal>
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-border bg-surface p-8 sm:rounded-3xl sm:p-10">
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-foreground"
        >
          <CloseIcon />
        </button>

        <h3 className="max-w-md text-2xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-faint"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-6">
          <DetailBlock label="개요" text={project.problem} />
          <DetailBlock label="역할 / 지위" text={project.contribution} />
          <DetailBlock label="임팩트 / 성과" text={project.result} accent />
        </div>

        {(project.demoUrl || project.repoUrl) && (
          <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Live Demo
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-2"
              >
                GitHub Repo
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function DetailBlock({
  label,
  text,
  accent = false,
}: {
  label: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-faint">
        {label}
      </p>
      <p
        className={`mt-2 leading-relaxed ${
          accent ? "text-foreground" : "text-muted"
        }`}
      >
        {text}
      </p>
    </div>
  );
}
