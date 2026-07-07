"use client";

import { useLang } from "@/components/language-provider";
import { experience, ui } from "@/lib/content";

export function Experience() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <section id="experience" className="py-16">
      <h2 className="text-2xl font-bold tracking-tight">
        {t.sections.experience}
      </h2>
      {/* Timeline-ийн босоо шугамыг <ol>-ийн зүүн хүрээ (border-l) үүсгэнэ */}
      <ol className="mt-8 space-y-10 border-l border-zinc-200 dark:border-zinc-800">
        {experience.map((job) => (
          <li key={job.company} className="relative pl-6">
            {/* Ногоон цэг: absolute байрлалаар зүүн шугамын яг дээр нь
                тавьсан. -left-1.25 (5px) = цэгийн өргөний тал хэмжээгээр
                зүүн тийш шилжүүлж, шугамын голд тааруулна. */}
            <span className="absolute top-1.5 -left-1.25 size-2.5 rounded-full bg-emerald-500" />
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {job.period[lang]}
            </p>
            <h3 className="mt-1 font-semibold">
              {job.role[lang]} ·{" "}
              <span className="font-normal text-zinc-600 dark:text-zinc-400">
                {job.company}
              </span>
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {job.points[lang].map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
