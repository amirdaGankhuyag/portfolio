"use client";
// useLang() hook ашигладаг тул client компонент байх ёстой.

import { useLang } from "@/components/language-provider";
import { profile, ui } from "@/lib/content";

export function Nav() {
  const { lang, toggle } = useLang();
  // t = сонгосон хэлний бүх текст. ui["en"] эсвэл ui["mn"] гэсэн үг.
  const t = ui[lang];
  const name = lang === "mn" ? profile.name : profile.nameEn;

  // Цэсний линкүүдийг массив болгосноор нэг л загварыг
  // гурван линкэд давтаж бичихгүй, map-аар гүйлгэнэ.
  const links = [
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
  ];

  return (
    // sticky top-0 — гүйлгэхэд цэс дэлгэцийн дээд хэсэгт наалдаж үлдэнэ.
    // backdrop-blur + bg-white/80 — цэсний ард орсон контент бүдэг харагдана.
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <a href="#top" className="font-semibold tracking-tight">
          {name}
        </a>
        <div className="flex items-center gap-5 text-sm">
          {links.map((link) => (
            // hidden sm:block — жижиг дэлгэц (утас) дээр линкүүд нуугдаж,
            // зөвхөн хэлний товч үлдэнэ. Хэсгүүд рүү гүйлгээд л хүрнэ.
            <a
              key={link.href}
              href={link.href}
              className="hidden text-zinc-600 transition-colors hover:text-zinc-950 sm:block dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggle}
            aria-label={lang === "en" ? "Монгол хэл рүү шилжих" : "Switch to English"}
            className="rounded-full border border-zinc-300 px-3 py-1 font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-50"
          >
            {/* Товч дээр ОДООГИЙНХ биш, СОЛИГДОХ хэлийг харуулна */}
            {lang === "en" ? "МН" : "EN"}
          </button>
        </div>
      </nav>
    </header>
  );
}
