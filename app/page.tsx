import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LanguageProvider } from "@/components/language-provider";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

// Нүүр хуудас — зөвхөн хэсгүүдээ дараалуулж угсарна.
// Энэ файлд "use client" байхгүй тул Next.js үүнийг сервер дээр
// урьдчилан HTML болгож бэлддэг (build үед л нэг удаа). Ингэснээр
// сайт статик файл шиг маш хурдан ачаалагдана.
export default function Home() {
  return (
    // LanguageProvider бүх хэсгийг ороосноор дотор нь байгаа
    // компонент бүр useLang()-аар сонгосон хэлийг мэдэж чадна.
    <LanguageProvider>
      <Nav />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
