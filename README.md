# JavaScript 20-ta Test va Google Sheets Integratsiyasi

Ushbu loyiha JavaScript bo'yicha 20 ta test savolini o'z ichiga oladi. O'quvchi testni ishlagach:
1. Natija (to'g'ri, noto'g mezonlar, foiz va baho) darhol ekranga chiqadi.
2. Natijalar avtomatik ravishda Google Sheet (Google Jadval) ga tushadi.

---

## 🚀 Google Sheets (Google Jadval) Ulash Qo'llanmasi

1. **Google Sheets oching:**
   - [Google Sheets](https://sheets.google.com) ga kiring va yangi bo'sh jadval yarating.

2. **Apps Script-ni oching:**
   - Yuqori menyudan **Extensions** (Kengaytmalar) -> **Apps Script**-ni tanlang.

3. **Kodni joylang:**
   - Ochilgan redaktordagi barcha kodni o'chirib, `google_script.gs` faylidagi kodni nusxalab joylang va saqlang (Ctrl + S).

4. **Web App sifatida chop etish (Deploy):**
   - O'ng yuqoridagi **Deploy** -> **New deployment** tugmasini bosing.
   - **Select type** (tishli g'ildirak shakli) -> **Web app** ni tanlang.
   - **Description**: `JS Test API`
   - **Execute as**: `Me` (O'zingiz)
   - **Who has access**: `Anyone` (Hamma / Lyuboy polzovatel) - *Bu Juda Muhim!*
   - **Deploy** tugmasini bosing va ruxsat berish so'ralganda (Authorize access) Google akkauntingiz bilan tasdiqlang ("Advanced" -> "Go to Project (unsafe)" -> "Allow").

5. **Web App URL (Link) ni oling:**
   - Tayyor bo'lgan **Web App URL** manzilini nusxalang (masalan: `https://script.google.com/macros/s/AKfycb.../exec`).

6. **Test sahifasiga kiriting:**
   - Test saytiga kirganingizda **Google Web App URL** maydoniga shu nusxalangan linkni qo'ying.
   - Yoki `script.js` faylidagi `googleScriptUrl = ""` o'zgaruvchisiga ushbu linkni doimiy qilib biriktirib qo'yishingiz mumkin.
