"use client";

import { useLang } from "@/components/language-provider";
import { projects, ui } from "@/lib/content";

export function Projects() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl font-bold tracking-tight">{t.sections.projects}</h2>
      {/* grid sm:grid-cols-2 — утсан дээр нэг багана, том дэлгэцэд хоёр багана */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {/* content.ts дахь projects массивыг гүйлгэж карт бүрийг зурна.
            Шинэ төсөл нэмэхэд энд юу ч өөрчлөх шаардлагагүй —
            зөвхөн content.ts дээр нэмээд л болно. */}
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-zinc-200 p-5 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
          >
            <h3 className="font-semibold">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.description[lang]}
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-zinc-100 px-2.5 py-0.5 font-mono text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
                >
                  {tech}
                </li>
              ))}
            </ul>
            {/* Линкийн мөрийг зөвхөн link эсвэл repo байгаа үед л харуулна.
                {шалгалт && <JSX />} — шалгалт үнэн бол JSX-г зурна гэсэн
                React-ийн түгээмэл хэллэг. */}
            {(project.link || project.repo) && (
              <div className="mt-4 flex gap-4 text-sm font-medium">
                {project.link && (
                  <a
                    href={project.link}
                    // target="_blank" — шинэ tab-д нээнэ.
                    // rel="noopener noreferrer" — шинэ tab-аас манай хуудсанд
                    // хандах боломжийг хааж, аюулгүй байдлыг хангана.
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline dark:text-emerald-400"
                  >
                    {t.projectLinks.live} ↗
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline dark:text-emerald-400"
                  >
                    {t.projectLinks.source} ↗
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
