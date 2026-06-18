import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <p className="font-mono text-sm">
          {profile.nameEn}
          <span className="text-accent">.</span>
          <span className="ml-3 text-faint">
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </p>

        <div className="flex items-center gap-2">
          <FooterIcon href={`mailto:${profile.email}`} label="Email">
            <MailIcon className="h-4 w-4" />
          </FooterIcon>
          <FooterIcon href={profile.github} label="GitHub" external>
            <GithubIcon className="h-4 w-4" />
          </FooterIcon>
          <FooterIcon href={profile.linkedin} label="LinkedIn" external>
            <LinkedinIcon className="h-4 w-4" />
          </FooterIcon>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({
  href,
  label,
  external = false,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-faint transition-colors hover:border-border-strong hover:text-foreground"
    >
      {children}
    </a>
  );
}
