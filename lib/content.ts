export type Lang = "en" | "mn";

// --- Хувийн мэдээлэл / Personal info ---
export const profile = {
  name: "Амирда",
  nameEn: "Amirda",
  email: "amirda899@gmail.com",
  github: "https://github.com/amirdaGankhuyag",
  linkedin: "https://www.linkedin.com/in/amirdagankhuyag",
  x: "https://x.com/amirdaGankuyag",
  location: { en: "Ulaanbaatar, Mongolia", mn: "Улаанбаатар" },
};

// --- Хэсэг бүрийн текст / UI copy ---
export const ui = {
  en: {
    nav: { projects: "Projects", skills: "Skills", experience: "Experience" },
    hero: {
      greeting: "Hi, I'm",
      role: "Software Engineer",
      intro:
        "Let’s build something great together. I am currently open to new career opportunities, freelance projects, and professional connections.",
      contactBtn: "Get in touch",
      githubBtn: "GitHub",
    },
    sections: {
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
    },
    projectLinks: { live: "Live", source: "Source" },
  },
  mn: {
    nav: { projects: "Төслүүд", skills: "Ур чадвар", experience: "Туршлага" },
    hero: {
      greeting: "Сайн уу, би",
      role: "Программ хангамжийн инженер",
      intro:
        "Гайхалтай зүйлсийг хамтдаа бүтээцгээе. Би одоогоор карьерын шинэ боломжууд, фриланс төслүүд болон мэргэжлийн хүрээнд танилцаж, холбоо тогтооход нээлттэй байна.",
      contactBtn: "Холбоо барих",
      githubBtn: "GitHub",
    },
    sections: {
      projects: "Төслүүд",
      skills: "Ур чадвар",
      experience: "Ажлын туршлага",
    },
    projectLinks: { live: "Сайт", source: "Код" },
  },
} as const;

// --- Төслүүд / Projects (TODO: өөрийн төслүүдээр солино уу) ---
export const projects = [
  {
    title: "Legal Guide",
    description: {
      en: "A full-stack web app for finding legal service providers (law firms and lawyers) near you on an interactive map.",
      mn: "Хуулийн үйлчилгээ үзүүлэгч байгууллага, хуульчдыг газрын зургаас хайж олох, харьцуулах, сэтгэгдэл үлдээх боломжтой бүрэн ажиллагаатай веб систем.",
    },
    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB Atlas",
      "Leaflet.js",
      "JWT",
      "Nodemailer",
      "Google OAuth 2.0",
    ],
    link: "https://legalguide-mn.vercel.app", // сайтын линк, байхгүй бол null
    repo: "https://github.com/amirdaGankhuyag/legal-guide", // код, байхгүй бол null
  },
];

// --- Ур чадвар / Skills ---
export const skills = [
  {
    group: { en: "Languages", mn: "Хэлүүд" },
    items: ["TypeScript", "JavaScript", "Java", "SQL"],
  },
  {
    group: { en: "Frameworks & Libraries", mn: "Фрэймворк, сангууд" },
    items: ["React", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    group: { en: "Tools & Platforms", mn: "Хэрэгсэл, платформ" },
    items: ["Git", "Docker", "Vercel"],
  },
];

// --- Ажлын туршлага / Experience (TODO: өөрийн туршлагаар солино уу) ---
export const experience = [
  {
    company: "NetCapital Financial Group",
    role: { en: "Frontend Developer", mn: "Frontend хөгжүүлэгч" },
    period: { en: "2024.06 — 2024.09", mn: "2024.06 — 2024.09" },
    points: {
      en: [
        "Worked collaboratively in the frontend development team on the company's internal system.",
        "NetCore",
      ],
      mn: [
        "Байгууллагын дотоод систем дээр frontend хөгжүүлэлтийн багт оролцон хамтран ажилласан.",
        "NetCore",
      ],
    },
  },
];
