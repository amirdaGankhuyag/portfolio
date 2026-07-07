"use client";
// "use client" — энэ компонент browser дээр ажиллана гэсэн үг.
// useState, useEffect, localStorage зэрэг нь зөвхөн browser-т байдаг тул
// хэлний төлөв хадгалдаг энэ файлд заавал хэрэгтэй.

import { createContext, useContext, useEffect, useState } from "react";
import type { Lang } from "@/lib/content";

// Context гэдэг нь "нэг мэдээллийг олон компонентод props дамжуулалгүйгээр
// хүргэх" React-ийн арга. Энд бид сонгосон хэл (lang) болон хэл солих
// функцийг (toggle) сайтын бүх хэсэгт хүргэж байна.
const LanguageContext = createContext<{
  lang: Lang;
  toggle: () => void;
}>({ lang: "en", toggle: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  // Яагаад localStorage-г шууд useState дотор уншихгүй вэ?
  // Next.js эхлээд хуудсыг сервер дээр HTML болгож бэлддэг (энэ нь сайтыг
  // хурдан болгодог давуу тал). Сервер дээр localStorage байхгүй тул
  // эхний render үргэлж "en"-ээр гарна. Хэрэглэгчийн хадгалсан сонголтыг
  // useEffect дотор уншина — учир нь useEffect зөвхөн browser дээр,
  // хуудас гарч ирсний ДАРАА ажилладаг.
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "mn" || saved === "en") setLang(saved);
  }, []);

  // Хэл солигдох бүрт <html lang="..."> атрибутыг шинэчилнэ.
  // Энэ нь browser, дэлгэц уншигч (screen reader)-д ямар хэлээр
  // байгааг мэдэгддэг.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Хэл солиод сонголтыг localStorage-д хадгална — ингэснээр
  // хэрэглэгч дараа орж ирэхэд нь сонгосон хэл нь хэвээр байна.
  const toggle = () => {
    const next = lang === "en" ? "mn" : "en";
    localStorage.setItem("lang", next);
    setLang(next);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Компонент бүрээс useLang() гэж дуудахад одоогийн хэл болон
// солих функц ирнэ. Жишээ: const { lang } = useLang();
export function useLang() {
  return useContext(LanguageContext);
}
