"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";
import { MailIcon, GithubIcon, LinkedinIcon } from "@/components/icons";

type Errors = { name?: string; email?: string; message?: string };
type Toast = { type: "success" | "error"; text: string } | null;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [toast, setToast] = useState<Toast>(null);
  const [submitting, setSubmitting] = useState(false);

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form);
    const next: Errors = {};
    if (!String(data.get("name") ?? "").trim()) next.name = "이름을 입력해 주세요.";
    const email = String(data.get("email") ?? "").trim();
    if (!email) next.email = "이메일을 입력해 주세요.";
    else if (!emailPattern.test(email)) next.email = "올바른 이메일 형식이 아닙니다.";
    if (!String(data.get("message") ?? "").trim())
      next.message = "메시지를 입력해 주세요.";
    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setToast({ type: "error", text: "입력값을 다시 확인해 주세요." });
      return;
    }

    // 백엔드 연동 전: 클라이언트 측 전송 성공 피드백
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setToast({
        type: "success",
        text: "제안이 전송되었습니다. IR팀이 곧 회신드립니다.",
      });
      form.reset();
    }, 600);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div className="grid gap-16 md:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="eyebrow mb-4">05 — Invest</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            OpenAI와 함께
            <br />
            다음 시대를 만들 파트너를 찾습니다.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            전략적 투자·파트너십 제안을 환영합니다. 아래 양식을 남겨주시면 IR팀이
            빠르게 회신드립니다. 직접 연락도 가능합니다.
          </p>

          <div className="mt-10 space-y-3">
            <ContactLink
              href={`mailto:${profile.email}`}
              icon={<MailIcon />}
              label={profile.email}
            />
            <ContactLink
              href={profile.github}
              icon={<GithubIcon />}
              label="GitHub"
              external
            />
            <ContactLink
              href={profile.linkedin}
              icon={<LinkedinIcon />}
              label="LinkedIn"
              external
            />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <Field label="이름" name="name" error={errors.name} required>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="form-input"
              />
            </Field>
            <Field label="이메일" name="email" error={errors.email} required>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="form-input"
              />
            </Field>
            <Field label="기관 / 펀드명" name="company" optional>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="form-input"
              />
            </Field>
            <Field
              label="투자 관심 및 메시지"
              name="message"
              error={errors.message}
              required
            >
              <textarea
                id="message"
                name="message"
                rows={5}
                className="form-input resize-none"
              />
            </Field>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {submitting ? "전송 중…" : "투자 제안 보내기"}
            </button>
          </form>
        </Reveal>
      </div>

      {toast && (
        <div
          role="status"
          className={`fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-full border px-5 py-3 text-sm shadow-lg backdrop-blur-md ${
            toast.type === "success"
              ? "border-accent/40 bg-surface text-foreground"
              : "border-red-500/40 bg-surface text-foreground"
          }`}
          onAnimationEnd={() => {}}
        >
          {toast.text}
          <button
            onClick={() => setToast(null)}
            className="ml-3 text-faint hover:text-foreground"
            aria-label="알림 닫기"
          >
            ✕
          </button>
        </div>
      )}

      <style>{`
        .form-input {
          width: 100%;
          border-radius: 0.875rem;
          border: 1px solid var(--border);
          background: var(--surface);
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          color: var(--foreground);
          transition: border-color 0.2s;
        }
        .form-input::placeholder { color: var(--faint); }
        .form-input:focus { border-color: var(--border-strong); outline: none; }
      `}</style>
    </section>
  );
}

function Field({
  label,
  name,
  error,
  required = false,
  optional = false,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 flex items-center gap-1.5 text-sm text-muted"
      >
        {label}
        {required && <span className="text-accent">*</span>}
        {optional && <span className="text-xs text-faint">(선택)</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function ContactLink({
  href,
  icon,
  label,
  external = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group flex items-center gap-3 text-muted transition-colors hover:text-foreground"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-faint transition-colors group-hover:border-border-strong group-hover:text-accent">
        {icon}
      </span>
      <span className="text-sm">{label}</span>
    </a>
  );
}
