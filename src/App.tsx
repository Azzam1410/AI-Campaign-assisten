import React, { useState } from "react";
import { 
  Sparkles, 
  Megaphone, 
  FileText, 
  Image as ImageIcon, 
  Check, 
  Copy, 
  HelpCircle, 
  AlertTriangle, 
  Info, 
  Layers, 
  Palette, 
  Share2 
} from "lucide-react";
import { parseCampaignOutput, CampaignPackage } from "./utils/parser";

// Realistic initial sample campaign based on the prompt's recommended defaults
const initialCampaignText = `## KONSEP KREATIF & TEMA
- **Tema Utama**: Glow-Up Career 2026: Navigasi Karier di Era Digital
- **Tagline Pilihan 1**: *Beyond the Degree*: Siapkan Skill Rahasia Menuju Industri Impian
- **Tagline Pilihan 2**: *The Catalyst Code*: Mempercepat Karier Masa Depan Tanpa Batas
- **Tagline Pilihan 3**: *Ready, Set, Grow!*: Menembus Zona Nyaman Demi Masa Depan Gemilang
- **Alasan Kreatif**: Mahasiswa tingkat akhir membutuhkan motivasi kuat dan arah yang jelas. Tema ini berfokus pada pengembangan diri di luar kurikulum formal untuk menghadapi dunia kerja yang kompetitif dan tangguh.

## GAYA VISUAL & KONTEN POSTER
Rekomendasi visual:
- Palet Warna: Indigo Blue #6366F1 (utama), Vibrant Purple #A855F7 (modern aksen), Solar Yellow #F59E0B (CTA kontras), deep slate #1E293B (teks utama)
- Mood/Estetika Desain: Modern Bento Grid, Vibrant Gradient Overlay, 3D Abstract Shapes
- Elemen Grafis Utama: Grid digital abstrak, diagram berpendar, ilustrasi sirkuit modern transparan

Copywriting Poster:
- Headline: SIAP JADI REBUTAN HRD SETELAH LULUS?
- Sub-headline: Kuasai skill 'invisible' yang tidak diajarkan di kampus di Glow-Up Career 2026.
- Poin Penting: Portofolio Review, Mock Interview Selevel HRD, Tips Negosiasi Gaji
- Call-to-Action: Amankan Kursi Gratis Kamu Sekarang! 👉 bit.ly/GlowUp2026

## COPYWRITING SIARAN
📢 *[SIARAN PENTING] APAKAH KAMU SIAP BERSAING DI DUNIA KERJA NYATA?* 📢

Halo Rekan-rekan Mahasiswa! 👋

Pernah gak sih merasa cemas, *"Nanti setelah lulus kuliah mau kerja di mana ya? Skill aku udah cukup belum ya?"* 🤔

Jangan biarkan kekhawatiran itu bikin kamu overthinking tanpa solusi! Waktunya upgrade dirimu ke tingkat profesional!

Yuk bergabung di seminar & workshop eksklusif kami:
🔥 *Glow-Up Career 2026: Navigasi Karier di Era Digital* 🔥

📍 *Auditorium Kampus Utama*
📅 *Sabtu, 14 Juni 2026*
⏰ *09.00 - 15.00 WIB*

*Benefit Spesial untuk Kamu:*
1. 💡 *Practical Skill*: Cara jitu bikin CV ATS-friendly yang dilirik rekruter top tier.
2. 🗣️ *Mock Interview*: Demo langsung menjawab pertanyaan sulit HRD secara tenang dan persuasif.
3. 🎁 *Free Template Kit*: Resume & cover letter siap pakai langsung dipandu praktisi ahli.

Acara ini *100% GRATIS* khusus mahasiswa aktif kampus. Tapi ingat, slot sangat terbatas!

Daftar sekarang melalui tautan berikut:
🔗 *bit.ly/GlowUp2026*

Sampai jumpa di lokasi! Bersiap menjadi lulusan unggul yang dinanti industri! 🚀

## CAPTION MEDIA SOSIAL
*Hook:*
"Lulus kuliah dapet ijazah itu wajib, tapi diincar HRD sebelum wisuda? Itu baru luar biasa!" 😎🚀↓

*Story:*
Banyak mahasiswa tingkat akhir yang terjebak mitos bahwa nilai IPK tinggi adalah satu-satunya penentu kesuksesan karier. Padahal di dunia kerja modern, soft skills, portfolio praktis, dan ketajaman networking seringkali jadi 'senjata rahasia' utama yang tidak diajarkan secara eksplisit di bangku kuliah.

*Offer:*
Sebab itu kami menghadirkan *'Glow-Up Career 2026'*: Sebuah wadah akselerasi karier di mana kami merangkum semua framework taktis langsung dari praktisi rekrutmen profesional!

👉 Segera amankan kursimu lewat link di bio instagram kami! Kuota terbatas demi menjaga interaksi kelompok yang berkualitas.

#GlowUpCareer #EventKampus #MahasiswaTingkatAkhir #KarierSukses #PersiapanKerja #CampaignAI`;

export default function App() {
  const [name, setName] = useState("Glow-Up Career 2026");
  const [type, setType] = useState("Seminar & Workshop");
  const [audience, setAudience] = useState("Mahasiswa Tingkat Akhir");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  // Parse the initial campaign data as default state
  const [campaignResult, setCampaignResult] = useState<CampaignPackage>(() => {
    return parseCampaignOutput(initialCampaignText, "Glow-Up Career 2026", "Seminar & Workshop", "Mahasiswa Tingkat Akhir");
  });

  const [activeTab, setActiveTab] = useState<"kreatif" | "visual" | "broadcast" | "caption">("kreatif");
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedSection(key);
    setTimeout(() => {
      setCopiedSection(null);
    }, 2000);
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg("Nama Acara tidak boleh kosong.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/generate-campaign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, type, audience }),
      });

      if (!response.ok) {
        throw new Error("Gagal menghubungi server kampanye AI.");
      }

      const data = await response.json();
      if (data.success) {
        const parsed = parseCampaignOutput(data.rawOutput, name, type, audience);
        setCampaignResult(parsed);
        
        // Auto-focus the relevant main preview tabs depending on output type
        if (parsed.isInappropriate) {
          // Stay on current but show warning
        } else if (parsed.isMinim) {
          setActiveTab("kreatif");
        }
      } else {
        setErrorMsg(data.error || "Gagal memproses draf kampanye.");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Terjadi kesalahan koneksi atau backend.");
    } finally {
      setLoading(false);
    }
  };

  // Helper render lines formatting (e.g. highlights of sub-sections or code formats)
  const renderMarkdownText = (text: string) => {
    if (!text) return <p className="text-slate-400 italic">Konten draf kosong.</p>;
    
    return text.split("\n").map((line, idx) => {
      // Highlight bold text: **some text** or *some text*
      let renderedLine = line;
      
      // Match bold markdown **text**
      const boldRegex = /\*\*(.*?)\*\*/g;
      
      // Keep it simple and safe for rendering
      if (line.trim().startsWith("- ")) {
        const value = line.substring(2);
        return (
          <li key={idx} className="ml-4 list-disc text-slate-700 text-sm leading-relaxed mb-2">
            {value.replace(/\*\*/g, "")}
          </li>
        );
      }

      // Check for bullet elements or customized copywriting headers
      if (line.trim().startsWith("Copywriting Poster:") || line.trim().startsWith("Rekomendasi visual:")) {
        return (
          <h4 key={idx} className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-4 mb-2">
            {line}
          </h4>
        );
      }

      return (
        <p key={idx} className="text-sm text-slate-700 leading-relaxed mb-2 min-h-[1rem]">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    });
  };

  return (
    <div id="app-root" className="flex h-screen w-screen bg-slate-50 font-sans overflow-hidden">
      
      {/* SIDEBAR FOR CONTROLS */}
      <aside className="w-80 bg-white border-r border-slate-200 flex flex-col shrink-0">
        
        {/* Brand Header */}
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-indigo-200">
            C
          </div>
          <div>
            <h1 className="font-extrabold text-slate-800 text-lg leading-tight">
              CampaignAI
            </h1>
            <span className="text-xs font-semibold text-indigo-600 tracking-wider uppercase">Campus Planner</span>
          </div>
        </div>

        {/* Form Inputs Section */}
        <div className="p-6 flex-1 overflow-y-auto space-y-6">
          <form onSubmit={handleGenerate} className="space-y-5">
            
            {/* Input Name */}
            <div className="space-y-2">
              <label htmlFor="name-input" className="block text-xs font-black text-slate-500 uppercase tracking-wider">
                Nama Acara Kampus
              </label>
              <input
                id="name-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Misal: Glow-Up Career 2026, Hackfest..."
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white transition-all text-slate-800"
              />
            </div>

            {/* Event Type Select */}
            <div className="space-y-2">
              <label htmlFor="type-select" className="block text-xs font-black text-slate-500 uppercase tracking-wider">
                Jenis Acara
              </label>
              <select
                id="type-select"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white transition-all text-slate-800"
              >
                <option value="Seminar & Workshop">Seminar & Workshop 💡</option>
                <option value="Kompetisi / Hackathon">Kompetisi / Hackathon 🏆</option>
                <option value="Exhibition & Bazar">Exhibition & Bazar 🛍️</option>
                <option value="Konser & Festival Seni">Konser & Festival Seni 🎸</option>
                <option value="Charity / Pengabdian Masyarakat">Charity / Pengabdian 🤝</option>
              </select>
            </div>

            {/* Target Audience Input */}
            <div className="space-y-2">
              <label htmlFor="audience-input" className="block text-xs font-black text-slate-500 uppercase tracking-wider">
                Target Audiens (Peserta)
              </label>
              <input
                id="audience-input"
                type="text"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                placeholder="Misal: Mahasiswa Tingkat Akhir, Mahasiswa Baru..."
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white transition-all text-slate-800"
              />
            </div>

            {/* Error Indicator if any */}
            {errorMsg && (
              <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl flex items-start gap-2 text-rose-600 text-xs font-medium">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Generate Action Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:opacity-95 flex items-center justify-center gap-2 relative overflow-hidden ${
                loading ? "opacity-75 cursor-wait" : ""
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Meracik Konsep...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Generate Kampanye ✨</span>
                </>
              )}
            </button>
          </form>

          {/* Guidelines Mini Disclaimer Box */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-500 leading-relaxed">
            <span className="font-bold text-slate-600 block mb-1">💡 Tips Kampanye Sukses:</span>
            Berikan nama acara yang menarik dan target spesifik agar copywriter AI menyusun gaya bahasa yang paling relevan dengan mereka.
          </div>
        </div>

        {/* AI Engine Status Footnote */}
        <div className="p-4 bg-slate-50 border-t border-slate-200">
          <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
            <span>AI Engine: Gemini 3.5 Flash Campus Agent</span>
          </div>
        </div>

      </aside>

      {/* MAIN VIEW AREA */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Navigation Tabs Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-8 justify-between shrink-0">
          
          <div className="flex gap-1 h-full items-center">
            
            <button
              onClick={() => setActiveTab("kreatif")}
              className={`h-full px-4 text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
                activeTab === "kreatif"
                  ? "border-b-indigo-600 text-indigo-600"
                  : "border-b-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Konsep Kreatif & Tema</span>
            </button>

            <button
              onClick={() => setActiveTab("visual")}
              className={`h-full px-4 text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
                activeTab === "visual"
                  ? "border-b-indigo-600 text-indigo-600"
                  : "border-b-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Gaya Visual & Poster</span>
            </button>

            <button
              onClick={() => setActiveTab("broadcast")}
              className={`h-full px-4 text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
                activeTab === "broadcast"
                  ? "border-b-indigo-600 text-indigo-600"
                  : "border-b-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Megaphone className="w-4 h-4" />
              <span>Siaran WhatsApp</span>
            </button>

            <button
              onClick={() => setActiveTab("caption")}
              className={`h-full px-4 text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
                activeTab === "caption"
                  ? "border-b-indigo-600 text-indigo-600"
                  : "border-b-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Caption Media Sosial</span>
            </button>

          </div>

          <div className="flex items-center gap-3">
            {campaignResult && (
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full flex items-center gap-1.5 animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                Draf Terbuat
              </span>
            )}
          </div>

        </header>

        {/* Dynamic Display Panel */}
        <div id="display-panel" className="flex-1 p-8 overflow-y-auto">
          
          {loading ? (
            /* Loader Skeleton */
            <div className="max-w-4xl mx-auto space-y-6 animate-pulse">
              <div className="h-4 bg-slate-200 rounded w-1/4"></div>
              <div className="h-10 bg-slate-200 rounded w-1/2"></div>
              <div className="space-y-3 pt-4">
                <div className="h-6 bg-slate-200 rounded"></div>
                <div className="h-6 bg-slate-200 rounded w-5/6"></div>
                <div className="h-6 bg-slate-200 rounded w-4/5"></div>
              </div>
              <div className="h-40 bg-slate-200 rounded-2xl mt-6"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-28 bg-slate-200 rounded-xl"></div>
                <div className="h-28 bg-slate-200 rounded-xl"></div>
                <div className="h-28 bg-slate-200 rounded-xl"></div>
              </div>
            </div>
          ) : campaignResult ? (
            
            <div className="max-w-5xl mx-auto space-y-6">
              
              {/* Event Context Banner */}
              <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-indigo-400 opacity-10 pointer-events-none">
                  <Layers className="w-32 h-32" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-extrabold uppercase tracking-widest bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded">
                        {campaignResult.type || "Event"}
                      </span>
                      <span className="text-xs text-indigo-300">untuk {campaignResult.audience || "Mahasiswa"}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-1">
                      {campaignResult.title || name}
                    </h2>
                    <p className="text-indigo-200 text-xs">
                      Kelola dan adaptasikan materi promosi di bawah ini agar sesuai kebutuhan seksi Humas & Publikasi Anda.
                    </p>
                  </div>
                </div>
              </div>

              {/* Handlers for SARA Inappropriate Context */}
              {campaignResult.isInappropriate && (
                <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 flex flex-col items-center text-center max-w-2xl mx-auto space-y-4">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Konten Ditangguhkan</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Sistem mendeteksi kata-kata sensitif atau parameter negatif di luar kode etik kampus yang positif. Harap ubah kata pencarian atau input Nama Acara Anda kembali dengan konten edukatif/positif.
                  </p>
                </div>
              )}

              {/* Handlers for MINIM INPUT / CLARIFICATION STAGE */}
              {!campaignResult.isInappropriate && campaignResult.isMinim && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-6">
                  <div className="flex gap-3 items-start">
                    <div className="p-2 bg-amber-100 rounded-xl text-amber-700">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-900 mb-1">Klarifikasi Kebutuhan Kampanye</h3>
                      <p className="text-sm text-amber-800 leading-relaxed mb-4">
                        Data input Anda terdeteksi sangat singkat. Kami telah menyiapkan draf generik di bawah sebagai penampung sementara, namun silakan lengkapi pertanyaan berikut agar draf lebih tajam:
                      </p>
                      
                      {campaignResult.clarification ? (
                        <div className="bg-white/80 p-4 rounded-xl border border-amber-200 text-sm text-amber-950 space-y-2">
                          {renderMarkdownText(campaignResult.clarification)}
                        </div>
                      ) : (
                        <ul className="list-decimal list-inside text-sm text-amber-900 space-y-1 font-medium">
                          <li>Apa target spesifik atau keunikan utama kegiatan?</li>
                          <li>Siapa narasumber/pengisi utama yang diundang?</li>
                          <li>Bagaimanakah skema pendaftaran peserta? (misal: gratis, berbayar)</li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* TABS CONTENT RENDERING (Valid Normal Outputs) */}
              {!campaignResult.isInappropriate && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* Left Two-Thirds: Tab Specific Campaign Detail */}
                  <div className="lg:col-span-2 space-y-6">
                    
                    {/* Dynamic Active Tab Content */}
                    {activeTab === "kreatif" && (
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 animate-fade-in">
                        <div className="flex justify-between items-center mb-6">
                          <div>
                            <h3 className="text-lg font-extrabold text-slate-800">Paket Konsep Kreatif & Tema</h3>
                            <p className="text-slate-500 text-xs">Pilihan narasi dan tagline inspiratif utama untuk meluluhkan audiens mahasiswa.</p>
                          </div>
                          <button
                            onClick={() => handleCopy(campaignResult.creativeConcept || "", "kreatif")}
                            className="text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-100 flex items-center gap-1.5 transition-colors"
                          >
                            {copiedSection === "kreatif" ? (
                              <>
                                <Check className="w-3..5 h-3.5 text-green-600" />
                                <span className="text-green-600">Ter-copy!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Salin Konsep</span>
                              </>
                            )}
                          </button>
                        </div>

                        <div className="space-y-4">
                          <div className="prose max-w-none text-slate-700">
                            {campaignResult.creativeConcept ? (
                              <div className="whitespace-pre-wrap leading-relaxed pr-2">
                                {renderMarkdownText(campaignResult.creativeConcept)}
                              </div>
                            ) : (
                              <p className="text-sm text-slate-400 italic">Draf konsep kreatif sedang disusun atau tidak merespons.</p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "visual" && (
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 animate-fade-in">
                        <div className="flex justify-between items-center mb-6">
                          <div>
                            <h3 className="text-lg font-extrabold text-slate-800">Panduan Visual & Copywriting Poster</h3>
                            <p className="text-slate-500 text-xs">Kombinasi rancangan desain grafis estetis dan isi teks poster utama.</p>
                          </div>
                          <button
                            onClick={() => handleCopy(campaignResult.visualPoster || "", "visual")}
                            className="text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-100 flex items-center gap-1.5 transition-colors"
                          >
                            {copiedSection === "visual" ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-green-600" />
                                <span className="text-green-600">Ter-copy!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Salin Teks Poster</span>
                              </>
                            )}
                          </button>
                        </div>

                        <div className="space-y-6">
                          {campaignResult.colors && campaignResult.colors.length > 0 && (
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-3">Live Color Palette:</span>
                              <div className="flex flex-wrap gap-4">
                                {campaignResult.colors.map((hex, i) => (
                                  <div key={i} className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200/60 shadow-xs">
                                    <div 
                                      className="w-6 h-6 rounded-full border border-slate-100 shrink-0" 
                                      style={{ backgroundColor: hex }}
                                    ></div>
                                    <span className="font-mono text-xs text-slate-700 font-bold">{hex}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="whitespace-pre-wrap leading-relaxed">
                            {renderMarkdownText(campaignResult.visualPoster || "")}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "broadcast" && (
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 animate-fade-in">
                        <div className="flex justify-between items-center mb-6">
                          <div>
                            <h3 className="text-lg font-extrabold text-slate-800">Template Pesan Siaran (Broadcast)</h3>
                            <p className="text-slate-500 text-xs">Siap dikirim ke grup WhatsApp angkatan, pengurus himpunan, dan UKM.</p>
                          </div>
                          <button
                            onClick={() => handleCopy(campaignResult.broadcastCopy || "", "broadcast")}
                            className="text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-100 flex items-center gap-1.5 transition-colors"
                          >
                            {copiedSection === "broadcast" ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-green-600" />
                                <span className="text-green-600">Ter-copy!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Salin Pesan WA</span>
                              </>
                            )}
                          </button>
                        </div>

                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 font-sans text-sm text-slate-800 whitespace-pre-wrap leading-relaxed max-h-[500px] overflow-y-auto">
                          {campaignResult.broadcastCopy ? (
                            campaignResult.broadcastCopy
                          ) : (
                            <p className="text-slate-400 italic">Draf siaran pesan kosong atau gagal dimuat.</p>
                          )}
                        </div>
                      </div>
                    )}

                    {activeTab === "caption" && (
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 animate-fade-in">
                        <div className="flex justify-between items-center mb-6">
                          <div>
                            <h3 className="text-lg font-extrabold text-slate-800">Caption Feed & Reels Media Sosial</h3>
                            <p className="text-slate-500 text-xs text-indigo-600 font-medium">Formula &rdquo;Hook - Story - Offer&rdquo; interaktif mahasiswa.</p>
                          </div>
                          <button
                            onClick={() => handleCopy(campaignResult.socialCaption || "", "caption")}
                            className="text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-100 flex items-center gap-1.5 transition-colors"
                          >
                            {copiedSection === "caption" ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-green-600" />
                                <span className="text-green-600">Ter-copy!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Salin Caption Instagram</span>
                              </>
                            )}
                          </button>
                        </div>

                        <div className="space-y-4">
                          <div className="prose max-w-none text-slate-700 whitespace-pre-wrap leading-relaxed">
                            {renderMarkdownText(campaignResult.socialCaption || "")}
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Right One-Third: Secondary widgets, Tips & Quick Tricks */}
                  <div className="space-y-6">
                    
                    {/* Visual Art Direction card */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                      <h4 className="text-xs font-black text-slate-400 tracking-wider uppercase mb-4">
                        Rekomendasi Font Populer
                      </h4>
                      <div className="space-y-4">
                        <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-extrabold flex items-center justify-center text-sm shrink-0">
                            Aa
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-800">Montserrat / Inter</p>
                            <span className="text-[10px] text-slate-500 uppercase font-semibold">Teks Poster & Headline</span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 font-extrabold flex items-center justify-center text-sm shrink-0">
                            Ab
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-800">Syne / Space Grotesk</p>
                            <span className="text-[10px] text-slate-500 uppercase font-semibold">Judul Dekoratif Organik</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pro Tip Card */}
                    <div className="bg-indigo-600 bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-2xl text-white shadow-lg relative overflow-hidden">
                      <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full"></div>
                      <h4 className="font-bold text-base mb-1.5 flex items-center gap-1.5">
                        <Info className="w-4 h-4 text-amber-300" />
                        Pro-Tip Humas Kampus
                      </h4>
                      <p className="text-xs text-indigo-100 leading-relaxed">
                        Cobalah mengirim pesan siaran WhatsApp di malam hari pukul 19.30 - 21.00 atau jam istirahat siang (12.15). Ini adalah waktu prima di mana mahasiswa senggang membuka gadget mereka.
                      </p>
                      <div className="mt-4 pt-3 border-t border-white/20 flex justify-between items-center text-[11px] text-indigo-200 font-semibold">
                        <span>Penyalinan Sekali Klik</span>
                        <span>Sewa Canva/Figma Gratis</span>
                      </div>
                    </div>

                    {/* Quick Share Alert */}
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl gap-3 flex">
                      <div className="w-9 h-9 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center shrink-0">
                        <Share2 className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <h5 className="font-bold text-emerald-800 mb-0.5">Siap Publikasikan!</h5>
                        <p className="text-emerald-700 leading-relaxed">
                          Gunakan tombol salin di setiap bagian, lalu tempel di admin dashboard WhatsApp maupun tools desain Canva milik divisi media.
                        </p>
                      </div>
                    </div>

                  </div>

                </div>
              )}

            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-12 text-center h-full">
              <Sparkles className="w-12 h-12 text-slate-300 mb-3 animate-pulse" />
              <p className="text-slate-500 text-sm">Masukkan detail acara kampus Anda untuk meracik paket kampanye.</p>
            </div>
          )}

        </div>

      </main>

    </div>
  );
}
