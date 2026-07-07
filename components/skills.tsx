"use client";

import { useLang } from "@/components/language-provider";
import { skills, ui } from "@/lib/content";

export function Skills() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <section id="skills" className="py-16">
      <h2 className="text-2xl font-bold tracking-tight">{t.sections.skills}</h2>
      <div className="mt-8 space-y-6">
        {/* Ур чадварууд content.ts дээр бүлэг бүлгээрээ хадгалагдсан:
            бүлгийн нэр хоёр хэлтэй, items нь хэлээс хамаарахгүй
            (технологийн нэрс орчуулагддаггүй). */}
        {skills.map((group) => (
          <div key={group.group.en}>
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {group.group[lang]}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm dark:border-zinc-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
