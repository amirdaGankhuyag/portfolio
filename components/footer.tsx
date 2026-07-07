"use client";

import { useLang } from "@/components/language-provider";
import { profile, ui } from "@/lib/content";

export function Footer() {
  const { lang } = useLang();
  const t = ui[lang];
  const name = lang === "mn" ? profile.name : profile.nameEn;

  return (
    <footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-6 text-sm text-zinc-500 sm:flex-row sm:justify-between dark:text-zinc-400">
        <p>
          {/* Оныг гараар бичихгүй — жил бүр автоматаар шинэчлэгдэнэ */}©{" "}
          {new Date().getFullYear()} {name} · {t.footer.built}
        </p>
        <div className="flex gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
