export type Lang = "en" | "mn";

// --- Хувийн мэдээлэл / Personal info ---
export const profile = {
  name: "Ганхуяг Амирда",
  nameEn: "Amirda Gankhuyag",
  email: "amirda899@gmail.com",
  github: "https://github.com/amirdaGankhuyag",
  linkedin: "https://www.linkedin.com/in/amirdagankhuyag",
  location: { en: "Ulaanbaatar, Mongolia", mn: "Улаанбаатар, Монгол" },
};

// --- Хэсэг бүрийн текст / UI copy ---
export const ui = {
  en: {
    nav: { projects: "Projects", skills: "Skills", experience: "Experience" },
    hero: {
      greeting: "Hi, I'm",
      role: "Software Developer",
      intro:
        "I build simple, fast and reliable software. Welcome to my corner of the internet — here's what I've been working on.",
      contactBtn: "Get in touch",
      githubBtn: "GitHub",
    },
    sections: {
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
    },
    projectLinks: { live: "Live", source: "Source" },
    footer: { built: "Built with Next.js & Tailwind CSS" },
  },
  mn: {
    nav: { projects: "Төслүүд", skills: "Ур чадвар", experience: "Туршлага" },
    hero: {
      greeting: "Сайн уу, би",
      role: "Программ хөгжүүлэгч",
      intro:
        "Би энгийн, хурдан, найдвартай программ хангамж бүтээдэг. Миний хийсэн ажлуудтай эндээс танилцаарай.",
      contactBtn: "Холбоо барих",
      githubBtn: "GitHub",
    },
    sections: {
      projects: "Төслүүд",
      skills: "Ур чадвар",
      experience: "Ажлын туршлага",
    },
    projectLinks: { live: "Сайт", source: "Код" },
    footer: { built: "Next.js & Tailwind CSS ашиглан бүтээв" },
  },
} as const;

// --- Төслүүд / Projects (TODO: өөрийн төслүүдээр солино уу) ---
export const projects = [
  {
    title: "Project One",
    description: {
      en: "A web application that solves a real problem. Short one-or-two sentence description of what it does and why it matters.",
      mn: "Бодит асуудал шийддэг веб аппликейшн. Юу хийдэг, ямар ач холбогдолтойг нэг-хоёр өгүүлбэрээр тайлбарлана.",
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://example.com", // сайтын линк, байхгүй бол null
    repo: "https://github.com/yourusername/project-one", // код, байхгүй бол null
  },
  {
    title: "Project Two",
    description: {
      en: "A tool or library you built. What problem does it solve? Who is it for?",
      mn: "Таны бүтээсэн хэрэгсэл эсвэл сан. Ямар асуудлыг шийддэг вэ? Хэнд зориулагдсан бэ?",
    },
    tech: ["Node.js", "PostgreSQL"],
    link: null,
    repo: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description: {
      en: "Another project — a mobile app, an API, an experiment. Keep descriptions short and concrete.",
      mn: "Өөр нэг төсөл — мобайл апп, API, туршилт гэх мэт. Тайлбарыг товч, тодорхой бичээрэй.",
    },
    tech: ["React Native", "Firebase"],
    link: null,
    repo: null,
  },
];

// --- Ур чадвар / Skills ---
export const skills = [
  {
    group: { en: "Languages", mn: "Хэлүүд" },
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    group: { en: "Frameworks & Libraries", mn: "Фрэймворк, сангууд" },
    items: ["React", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    group: { en: "Tools & Platforms", mn: "Хэрэгсэл, платформ" },
    items: ["Git", "Docker", "PostgreSQL", "Vercel"],
  },
];

// --- Ажлын туршлага / Experience (TODO: өөрийн туршлагаар солино уу) ---
export const experience = [
  {
    company: "Company Name",
    role: { en: "Software Developer", mn: "Программ хөгжүүлэгч" },
    period: { en: "2024 — Present", mn: "2024 — одоог хүртэл" },
    points: {
      en: [
        "What you built or improved, with concrete impact.",
        "A technology or system you owned.",
      ],
      mn: [
        "Юу бүтээж, сайжруулснаа үр дүнтэй нь бичнэ.",
        "Хариуцаж байсан технологи, систем.",
      ],
    },
  },
  {
    company: "Previous Company",
    role: { en: "Junior Developer", mn: "Туслах хөгжүүлэгч" },
    period: { en: "2022 — 2024", mn: "2022 — 2024" },
    points: {
      en: ["Key responsibility or achievement from this role."],
      mn: ["Энэ ажлын гол үүрэг, амжилт."],
    },
  },
];
