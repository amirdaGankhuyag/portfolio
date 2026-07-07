"use client";

import { useLang } from "@/components/language-provider";
import { profile, ui } from "@/lib/content";

export function Hero() {
  const { lang } = useLang();
  const t = ui[lang];
  const name = lang === "mn" ? profile.name : profile.nameEn;

  return (
    // id="top" — цэсний нэр дээр дарахад энэ хэсэг рүү гүйлгэж очно.
    <section id="top" className="pt-20 pb-16 sm:pt-28">
      <p className="text-emerald-600 dark:text-emerald-400">{t.hero.greeting}</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
        {name}
      </h1>
      {/* profile.location[lang] — location объектоос сонгосон хэлний
          утгыг авна: lang нь "mn" бол location.mn, "en" бол location.en */}
      <p className="mt-3 text-xl text-zinc-600 dark:text-zinc-400">
        {t.hero.role} · {profile.location[lang]}
      </p>
      <p className="mt-6 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
        {t.hero.intro}
      </p>
      <div className="mt-8 flex gap-3">
        {/* mailto: линк — дарахад хэрэглэгчийн имэйл програм нээгдэнэ */}
        <a
          href={`mailto:${profile.email}`}
          className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          {t.hero.contactBtn}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:border-zinc-500 dark:hover:bg-zinc-900"
        >
          {t.hero.githubBtn}
        </a>
      </div>
    </section>
  );
}
