# Portfolio

Хувийн танилцуулга вебсайт — Next.js 16 + Tailwind CSS 4, бүрэн статик, Монгол/Англи хоёр хэлтэй.

## Контент засварлах

Бүх текст, төсөл, туршлагын мэдээлэл **`lib/content.ts`** гэсэн ганц файлд байгаа.
Файл доторх `TODO` тэмдэглэгээтэй хэсгүүдийг өөрийн мэдээллээр солино уу:

- `profile` — нэр, имэйл, GitHub/LinkedIn линк
- `projects` — өөрийн төслүүд
- `skills` — ур чадварууд
- `experience` — ажлын туршлага

Мөн `app/layout.tsx` доторх `metadata` (сайтын гарчиг, тайлбар)-г шинэчлээрэй.

## Хөгжүүлэлт

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build шалгах
```

## Vercel дээр deploy хийх

1. Өөрчлөлтөө GitHub руу push хийнэ
2. [vercel.com](https://vercel.com) дээр GitHub эрхээрээ нэвтэрнэ
3. **Add New → Project** дараад энэ repo-г сонгоно
4. Тохиргоог өөрчлөх шаардлагагүй — **Deploy** дарна

Үүний дараа `main` branch руу push хийх бүрт автоматаар шинэчлэгдэнэ.

### Домайн холбох

1. Vercel төслийн **Settings → Domains** руу орно
2. Домайн нэрээ оруулна
3. Vercel-ийн зааврын дагуу домайн бүртгэгч дээрээ DNS бичлэг нэмнэ:
   - Үндсэн домайн: `A` record → `76.76.21.21`
   - `www`: `CNAME` → `cname.vercel-dns.com`
