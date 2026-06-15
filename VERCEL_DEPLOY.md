# رفع MR3 System على Vercel

المشروع جاهز للرفع على Vercel كموقع Static عادي. لا يوجد Backend ولا Build Command ولا Output Directory.

## الطريقة الأفضل: GitHub

1. فك ضغط ملف المشروع.
2. ارفع فولدر المشروع على Repository في GitHub.
3. افتح Vercel وسجل دخولك.
4. اختار Add New ثم Project.
5. اختار Repository بتاع المشروع.
6. الإعدادات:
   - Framework Preset: Other
   - Build Command: اتركه فارغ
   - Output Directory: اتركه فارغ
   - Install Command: اتركه فارغ
7. اضغط Deploy.

## طريقة Vercel CLI

1. افتح CMD داخل فولدر المشروع.
2. لو Vercel CLI مش متسطب، شغله:

```bash
npm i -g vercel
```

3. انشر المشروع:

```bash
vercel --prod
```

4. أول مرة هيسألك شوية أسئلة:
   - Link to existing project? اختار No لو أول مرة.
   - Framework Preset: اختار Other.
   - Build Command: سيبه فاضي.
   - Output Directory: سيبه فاضي.
   - Development Command: سيبه فاضي.

## لو عندك رفع مباشر في Vercel

لو واجهة Vercel عندك فيها اختيار رفع ملفات مباشرة، ارفع فولدر المشروع كامل بعد فك الضغط. نفس الإعدادات: لا Build Command ولا Output Directory.

## بعد الرفع

- افتح رابط Vercel الذي سينتهي غالبا بـ `.vercel.app`.
- صفحة الدخول تكون على `/login` أو `/login.html`.
- بيانات الدخول الافتراضية:
  - Admin: `admin@example.com`
  - Password: `Admin@123456`

## ملاحظات مهمة

- قاعدة البيانات في هذا الإصدار محفوظة داخل متصفح المستخدم Local Storage، لذلك البيانات لا تتشارك تلقائيا بين الأجهزة.
- لو عايز بيانات مشتركة بين كل المستخدمين على الإنترنت، لازم مرحلة Backend وقاعدة بيانات حقيقية لاحقا.
- ملف `vercel.json` موجود في جذر المشروع عشان يظبط الروابط النظيفة مثل `/login` و`/dashboard`.
