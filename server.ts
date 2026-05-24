import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with User-Agent header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// API Routes
app.post("/api/generate-campaign", async (req, res) => {
  try {
    const { name, type, audience } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).json({ error: "Nama Acara tidak boleh kosong." });
    }

    // Checking for SARA or offensive words
    const lowerName = name.toLowerCase();
    const offensiveKeywords = ["sara", "rasis", "pki", "porn", "judi", "kasar", "anjing", "bangsat", "goblok"];
    const containsOffensive = offensiveKeywords.some(keyword => lowerName.includes(keyword)) ||
                              (type && offensiveKeywords.some(keyword => type.toLowerCase().includes(keyword))) ||
                              (audience && offensiveKeywords.some(keyword => audience.toLowerCase().includes(keyword)));
    
    if (containsOffensive) {
      return res.json({
        success: true,
        isInappropriate: true,
        rawOutput: "## ERROR: KONTEN TIDAK PANTAS\n\nMaaf, kami mendeteksi konten yang tidak sesuai. Aplikasi ini hanya memproses manajemen acara kampus yang positif, inklusif, dan akademis/kreatif."
      });
    }

    // Check if input is too short (just "Webinar" etc)
    const isMinimInput = name.trim().length < 5;

    const systemInstruction = `Anda adalah seorang AI Event Campaign Planner, Creative Director, dan Senior Full-Stack Developer ahli.
Tugas utama Anda adalah menghasilkan Paket Kampanye Acara Kampus Instan yang terstruktur secara konsisten menggunakan format Markdown yang baku agar mudah diparsing oleh react.

PENTING:
- SARA & BAHASA KASAR: Jika input mengandung SARA atau kata-kata kasar/tidak pantas, segera kembalikan pesan penolakan formal dalam format Markdown:
"## ERROR: KONTEN TIDAK PANTAS\n\nMaaf, kami mendeteksi konten yang tidak sesuai. Aplikasi ini hanya memproses manajemen acara kampus yang positif."

- INPUT MINIM / SAMAR (misal: hanya kata singkat/samar seperti "Webinar", atau kurang dari 5 karakter):
Kembalikan klarifikasi ramah 3-poin berbentuk pertanyaan untuk melengkapi detail acara, diikuti dengan satu contoh draf kampanye umum bertema Teknologi/Karier sebagai fallback penampung sementara pada UI. Gunakan struktur Markdown ini persis:
"## KLARIFIKASI INPUT
Maaf, informasi yang Anda berikan sangat minim. Agar draf kampanye lebih maksimal, bolehkah kami tahu beberapa detail berikut?
1. Apa tujuan utama dari acara ini (misal: edukasi praktis, pengenalan produk, atau hiburan)?
2. Siapa pembicara atau pengisi acara ideal yang ingin Anda undang?
3. Apakah ada sponsor atau kemitraan khusus yang perlu dicantumkan dalam materi promosi?

Sebagai inspirasi awal, berikut draf kampanye umum bertema Teknologi & Karier:
## KONSEP KREATIF & TEMA
- Tema Utama: Kode Masa Depan: Membangun Karier di Era AI
- Tagline Pilihan 1: Future-Proof Your Skills: AI & Career Growth
- Tagline Pilihan 2: Berdaya dengan AI: Langkah Menuju Industri Kreatif 5.0
- Alasan Kreatif: Menjawab kegelisahan mahasiswa angkatan muda tentang disrupsi AI dengan pendekatan optimis dan solutif.

## GAYA VISUAL & KONTEN POSTER
Rekomendasi visual:
- Palet Warna: Dark Navy #0F172A (latar belakang), Electric Teal #14B8A6 (aksen tekno), Solar Yellow #F59E0B (CTA kontras)
- Mood/Estetika Desain: Cyberpunk Clean & Minimalis Tekno
- Elemen Grafis Utama: Grid digital abstrak, diagram berpendar, ilustrasi sirkuit modern transparan

Copywriting Poster:
- Headline: KARIER ANDA AMAN DI ERA AI?
- Sub-headline: Temukan Strategi Menjawab Tantangan Teknologi Bersama Para Praktisi Industri
- Poin Penting: Sertifikat Digital, Networking, Mini Mock Interview gratis
- Call-to-Action: Amankan Kursi Gratis Kamu Sekarang!

## COPYWRITING SIARAN
📢 *[SIARAN PENTING] APAKAH KAMU SIAP BERSAING DENGAN AI?* 📢

Halo Rekan-rekan Mahasiswa! 👋

Teknologi berkembang secepat kilat, dan disrupsi AI bukan lagi cerita masa fiksi ilmiah. Waktunya kita naik kelas dan menguasai masa depan!

Yuk bergabung di workshop eksklusif kami:
🔥 *Kode Masa Depan: Membangun Karier di Era AI* 🔥

📍 *detail tempat*
📅 *detail tanggal & waktu*

*Kenapa Kamu Wajib Ikut?*
1. *Insight Industri*: Dengarkan langsung dari ahli yang menggunakan AI sehari-hari.
2. *Hands-on Tips*: Cara kolaborasi dengan AI untuk mendongkrak produktivitas tugas kuliah hingga magang.
3. *Free Resource Kit*: Panduan gratis prompt engineering siap pakai!

Mumpung masih *GRATIS*, langsung klik link pendaftaran berikut ya:
🔗 *[Pendaftaran Kampanye]*

Sampai jumpa di lokasi! 🚀

## CAPTION MEDIA SOSIAL
*Hook:*
"Katanya AI bakal gantiin semua pekerjaan kantor dalam 5 tahun ke depan... Mitos atau kenyataan pahit?" 🤔↓

*Story:*
Banyak dari kita kuliah capek-capek tapi ketakutan waktu lulus nanti lapangan kerja makin dikit gara-gara otomasi robot. Padahal sebenarnya, AI bukan musuh kita, melainkan asisten terbaik kalau kamu tahu cara memanfaatkannya!

*Offer:*
Maka dari itu, kami di Himpunan Mahasiswa mempersembahkan Workshop *'Kode Masa Depan'*. Di sini, kita bongkar tuntas cara menunggangi gelombang teknologi biar kamu tetap jadi yang terdepan!

👉 Daftar sekarang lewat link di bio kami! Kuota sangat terbatas.

#EventKampus #MasaDepanAI #MahasiswaKreatif #LulusSiapKerja #TechCareers"

- UNTUK INPUT NORMAL DAN VALID:
Hasilkan paket kampanye lengkap dengan struktur judul Markdown persis seperti berikut untuk setiap kategori:

## KONSEP KREATIF & TEMA
Berikan 3 pilihan tema/tagline yang unik, menarik, dan bermakna beserta alasan kreatif singkat mengapa tema tersebut cocok dengan audiens. Gunakan format list (-) untuk pilihan tema tersebut.

## GAYA VISUAL & KONTEN POSTER
Rekomendasi visual:
- Palet Warna: [Rekomendasi warna dengan kode HEX, misal: Midnight Blue #1E3A8A, Radiant Amber #F59E0B]
- Mood/Estetika Desain: [Deskripsi mood desain]
- Elemen Grafis Utama: [Komponen visual]

Copywriting Poster:
- Headline: [Headline Poster]
- Sub-headline: [Sub-headline]
- Poin Penting: [Info utama]
- Call-to-Action: [CTA]

## COPYWRITING SIARAN
[Susun pesan siaran WhatsApp/Telegram yang rapi, ber-emoji, tebal (bold), dan poin-poin yang jelas]

## CAPTION MEDIA SOSIAL
*Hook:*
[Tulis hook memikat]

*Story:*
[Tulis story pendek menyambung hook]

*Offer:*
[Tulis penawaran / pendaftaran event]

[Sertakan minimal 5 hashtag rekomendasi]

ATURAN KETAT:
- Gunakan bahasa Indonesia yang persuasif, kasual-profesional khas mahasiswa, namun tetap mempertahankan istilah teknis marketing standar (Hook, Call to Action, Broadcast) dalam bahasa Inggris.
- HANYA menghasilkan konten teks kreatif, copywriting, dan panduan desain visual.
- Dilarang keras menghasilkan kode pemrograman (HTML, CSS, JavaScript) di dalam output respons, kecuali kode warna HEX.
- Jangan merekomendasikan aset berhak cipta atau software berbayar mahal. Fokus pada Canva, Figma, dll.
`;

    const userPrompt = `Nama Acara: ${name}
Jenis Acara: ${type || 'Belum Ditentukan'}
Target Audiens: ${audience || 'Belum Ditentukan'}
${isMinimInput ? '(Catatan: Input ini sangat minim/pendek, harap berikan draf klarifikasi 3-poin beserta contoh umum teknologi/karier sebagai fallback)' : ''}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    const outputText = response.text || "";

    res.json({
      success: true,
      rawOutput: outputText,
      isMinim: isMinimInput || outputText.includes("KLARIFIKASI INPUT"),
      isInappropriate: outputText.includes("ERROR: KONTEN TIDAK PANTAS")
    });

  } catch (error: any) {
    console.error("Gemini Generation Error:", error);
    res.status(500).json({ error: error?.message || "Internal Server Error" });
  }
});

async function start() {
  // Serve static files and integrate Vite in dev
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

start().catch((err) => {
  console.error("Failed to start server:", err);
});
