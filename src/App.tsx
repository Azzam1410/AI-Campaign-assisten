import React, { useState } from "react";
import { 
  Sparkles, 
  Megaphone, 
  FileText, 
  Check, 
  Copy, 
  HelpCircle, 
  AlertTriangle, 
  Info, 
  Layers, 
  Palette, 
  Share2,
  Calendar,
  Clock,
  DollarSign,
  Users,
  Mic,
  ChevronRight,
  TrendingDown,
  Percent,
  Pencil,
  Trash2,
  Plus,
  Save,
  RotateCcw,
  X
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
- Palet Warna: Indigo Blue #6366F1, Vibrant Purple #A855F7, Solar Yellow #F59E0B, Deep Slate #1E293B
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

#GlowUpCareer #EventKampus #MahasiswaTingkatAkhir #KarierSukses #PersiapanKerja #CampaignAI

## TIMELINE & PEMBAGIAN TIM
Garis waktu pematangan acara kampus (Backward Timeline):
- **H-4 Minggu**: Pembentukan panitia inti, perancangan proposal kegiatan, penetapan sasaran/target peserta, penyusunan rancangan awal anggaran kegiatan, pembuatan ide kemitraan usaha.
- **H-2 Minggu**: Penyebaran draf proposal ke birokrasi kampus dan calon sponsor, pembuatan desain pertama poster, publikasi pra-event (teaser media sosial), pemanasan pengisi acara.
- **H-1 Minggu**: Finalisasi sponsor dan pendanaan, penyebaran siaran pers, pembukaan pendaftaran utama, pemantapan rundown kegiatan, konfirmasi kehadiran pembicara dan MC.
- **Hari H**: Eksekusi rundown teratur, koordinasi konsumsi dan sound, pembagian souvenir, dokumentasi real-time, evaluasi ringkas pasca kegiatan.

Pembagian divisi utama mahasiswa:
- **Ketua/Inti**: Penanggung jawab total, menyetujui anggaran, koordinasi birokrasi fakultas/kampus, kontrol kemajuan tiap divisi.
- **Divisi Acara**: Menyusun rundown acara, briefing MC, kurasi panggung, koordinasi pemapar (narasumber).
- **Divisi Humas/Publikasi**: Menjaring kerja sama eksternal, blast siaran media grup WA/telegram, mengelola akun media sosial utama.
- **Divisi PDD/Logistik**: Dekorasi panggung, pemeliharaan sound system, pembuatan link pendaftaran, dokumentasi, menyiapkan presensi kehadiran.

## MANAJEMEN ANGGARAN
Tabel estimasi biaya low-budget (ramah mahasiswa):
- **Honorarium Pemateri** | Rp1.000.000 | Divisi Acara
- **Konsumsi Pembicara & Panitia** | Rp450.000 | Divisi Inti/Umum
- **Sertifikat Digital & Souvenir** | Rp150.000 | Divisi PDD/Logistik
- **Promosi Media Berbayar (IG Ads)** | Rp100.000 | Divisi Humas/Publikasi
- **Keperluan Tak Terduga** | Rp200.000 | Divisi Inti
- **Total Dana Dibutuhkan**: **Rp1.900.000**

## RUNDOWN ACARA
Agenda acara detak waktu terhitung menit:
- **08.30 - 09.00** | Presensi Kehadiran Peserta & Pemutaran Teaser Video | PJ: Divisi PDD & Logistik
- **09.00 - 09.10** | Pembukaan Resmi oleh MC & Pembacaan Doa | PJ: Divisi Acara / MC
- **09.10 - 09.20** | Sambutan Ketua Pelaksana & Ketua Himpunan | PJ: Ketua / Core Team
- **09.20 - 10.30** | Pemaparan Materi Inti & Sesi Workshop | PJ: Divisi Acara (PJ Pemateri)
- **10.30 - 11.00** | Sesi Diskusi Panel Tanya Jawab & interaktif | PJ: Moderator / Divisi Acara
- **11.00 - 11.15** | Penyerahan Plakat Penghargaan, Sesi Foto Bersama, Pembagian Doorprize | PJ: Divisi PDD & Dokumentasi
- **11.15 - 11.20** | Penutup Acara oleh MC & Pengisian Evaluasi Presensi | PJ: MC / Divisi PDD

## CUE CARD MC
Teks Pembawa Acara (Semi-Formal Mode):
- **Opening**: "Selamat pagi rekan-rekan mahasiswa semuanya! Selamat datang di acara kebanggaan kita bersama, Glow-Up Career 2026. Senang sekali saya [Nama MC] selaku pembawa acara akan mendampingi Anda semua pagi ini. Mari kita sambut hari istimewa ini dengan semangat baru untuk terus bertransformasi!"
- **Bridging**: "Terima kasih kepada Ketua Pelaksana atas sambutannya yang luar biasa. Rekan-rekan sekalian, kini tibalah kita pada sesi yang paling dinanti: Pemaparan taktik adaptasi digital dan tips karier langsung dari pemateri hebat kita. Mari beri tepuk tangan yang meriah..."
- **Closing**: "Wah, tidak terasa kita sudah sampai di penghujung acara yang sarat akan ilmu berharga ini. Sebelum kita berpisah, mohon nyalakan kamera rekan-rekan untuk sesi dokumentasi bersama panitia, dipandu oleh tim PDD. Saya mewakili seluruh panitia pamit undur diri, selamat mengudara di masa depan!"`;

function getParsedBudgetItemsFromText(budgetingText: string) {
  const rawBudget = budgetingText || "";
  const itemsList: Array<{ name: string; cost: number; div: string }> = [];
  
  // Parse lines written as "- Item | Rp xxx | Divisi" or similar
  const lines = rawBudget.split("\n");
  for (const line of lines) {
    if (line.includes("|") || line.includes("Rp") || line.includes("Rp.")) {
      const parts = line.split("|");
      if (parts.length >= 2) {
        const namePart = parts[0].replace(/^-\s+\*\*/, "").replace(/\*\*/, "").replace(/^-/, "").trim();
        
        if (namePart.toLowerCase().includes("total dana") || namePart.toLowerCase().includes("total anggaran")) {
          continue; // Skip total lines, we calculate live!
        }

        const costStr = parts[1] || "";
        const cleanCost = parseInt(costStr.replace(/[^\d]/g, ""), 10);
        
        const divPart = parts[2] ? parts[2].trim() : "Divisi Inti";

        if (namePart && !isNaN(cleanCost)) {
          itemsList.push({
            name: namePart,
            cost: cleanCost,
            div: divPart
          });
        }
      }
    }
  }

  // If parsing produced nothing, return a default mock structured list matching typical low budget
  if (itemsList.length === 0) {
    return [
      { name: "Honorarium Pemateri Utama", cost: 1000000, div: "Divisi Acara" },
      { name: "Konsumsi Pembicara (2 orang) & Panitia (15 orang)", cost: 450000, div: "Divisi Inti/Umum" },
      { name: "Plakat Akrilik Mini & Souvenir Pemateri", cost: 150000, div: "Divisi PDD/Logistik" },
      { name: "Ads / Publikasi Berbayar Instagram", cost: 100000, div: "Divisi Humas/Publikasi" },
      { name: "Keperluan Taktis Tak Terduga", cost: 200000, div: "Divisi Inti" },
    ];
  }

  return itemsList;
}

function getParsedRundownFromText(rundownText: string) {
  const rawRun = rundownText || "";
  const lines = rawRun.split("\n");
  const parsed: Array<{ time: string; activity: string; pj: string }> = [];

  for (const line of lines) {
    if (line.includes("|") || line.includes("-") || line.includes("—")) {
      const parts = line.split("|");
      if (parts.length >= 2) {
        const timePart = parts[0].replace(/^-\s+/, "").replace(/^\*\*/, "").replace(/\*\*/, "").trim();
        const activityPart = parts[1].trim();
        const pjPart = parts[2] ? parts[2].replace(/^PJ:\s*/i, "").trim() : "Divisi Acara";
        
        if (timePart && activityPart) {
          parsed.push({
            time: timePart,
            activity: activityPart,
            pj: pjPart
          });
        }
      }
    }
  }

  if (parsed.length === 0) {
    return [
      { time: "08.30 - 09.00", activity: "Presensi Kehadiran Peserta & Pemutaran Teaser Video", pj: "Divisi PDD & Logistik" },
      { time: "09.00 - 09.10", activity: "Pembukaan Resmi oleh MC & Pembacaan Doa", pj: "Divisi Acara / MC" },
      { time: "09.10 - 09.20", activity: "Sambutan Ketua Pelaksana", pj: "Ketua Pelaksana" },
      { time: "09.20 - 10.30", activity: "Pemaparan Materi Inti & Workshop Praktis", pj: "Divisi Acara" },
      { time: "10.30 - 11.00", activity: "Sesi Tanya Jawab (Q&A) & Diskusi Interaktif", pj: "Moderator" },
      { time: "11.00 - 11.15", activity: "Penyerahan Plakat Penghargaan, Foto Bersama, Pembagian Doorprize", pj: "Divisi PDD & Dokumentasi" },
      { time: "11.15 - 11.20", activity: "Penutup oleh MC", pj: "MC / Divisi Acara" },
    ];
  }

  return parsed;
}

type TabType = "kreatif" | "visual" | "broadcast" | "caption" | "timeline" | "budgeting" | "rundown" | "mc";

export default function App() {
  const [name, setName] = useState("Glow-Up Career 2026");
  const [type, setType] = useState("Seminar & Workshop");
  const [audience, setAudience] = useState("Mahasiswa Tingkat Akhir");
  const [budgetLimit, setBudgetLimit] = useState<string>("2000000");
  const [eventTime, setEventTime] = useState<string>("08.30 - 11.20");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  // Custom client-side budget modifier to make the budgeting tab interactive!
  const [costMultiplier, setCostMultiplier] = useState<number>(1);
  const [customItemName, setCustomItemName] = useState("");
  const [customItemCost, setCustomItemCost] = useState("");
  const [customItemDiv, setCustomItemDiv] = useState("Divisi Acara");

  // Parse the initial campaign data as default state
  const [campaignResult, setCampaignResult] = useState<CampaignPackage>(() => {
    return parseCampaignOutput(initialCampaignText, "Glow-Up Career 2026", "Seminar & Workshop", "Mahasiswa Tingkat Akhir");
  });

  // Unified states for editable components (full Client-side CRUD support!)
  const [editableCampaign, setEditableCampaign] = useState<CampaignPackage>(() => {
    return parseCampaignOutput(initialCampaignText, "Glow-Up Career 2026", "Seminar & Workshop", "Mahasiswa Tingkat Akhir");
  });

  // Text editor states
  const [isEditingText, setIsEditingText] = useState(false);
  const [editingTextValue, setEditingTextValue] = useState("");

  // Budget state list (Unified with initial & custom items)
  const [budgetItems, setBudgetItems] = useState<Array<{ id: string; name: string; cost: number; div: string }>>([]);
  const [editingBudgetItemId, setEditingBudgetItemId] = useState<string | null>(null);
  const [editingBudgetItemName, setEditingBudgetItemName] = useState("");
  const [editingBudgetItemCost, setEditingBudgetItemCost] = useState("");
  const [editingBudgetItemDiv, setEditingBudgetItemDiv] = useState("");

  // Rundown state list
  const [rundownItems, setRundownItems] = useState<Array<{ id: string; time: string; activity: string; pj: string }>>([]);
  const [editingRundownItemId, setEditingRundownItemId] = useState<string | null>(null);
  const [editingRundownItemTime, setEditingRundownItemTime] = useState("");
  const [editingRundownItemActivity, setEditingRundownItemActivity] = useState("");
  const [editingRundownItemPj, setEditingRundownItemPj] = useState("");

  const [customRundownTime, setCustomRundownTime] = useState("");
  const [customRundownActivity, setCustomRundownActivity] = useState("");
  const [customRundownPj, setCustomRundownPj] = useState("Divisi Acara");

  // Synchronize campaign content with editable state when campaignResult changes
  React.useEffect(() => {
    if (campaignResult) {
      setEditableCampaign(campaignResult);

      const parsedBudget = getParsedBudgetItemsFromText(campaignResult.budgeting || "");
      setBudgetItems(parsedBudget.map((item, idx) => ({
        id: `budget-${idx}-${Date.now()}`,
        name: item.name,
        cost: item.cost,
        div: item.div
      })));

      const parsedRundown = getParsedRundownFromText(campaignResult.rundown || "");
      setRundownItems(parsedRundown.map((item, idx) => ({
        id: `rundown-${idx}-${Date.now()}`,
        time: item.time,
        activity: item.activity,
        pj: item.pj
      })));

      setIsEditingText(false);
      setEditingBudgetItemId(null);
      setEditingRundownItemId(null);
    }
  }, [campaignResult]);

  const [activeTab, setActiveTab] = useState<TabType>("kreatif");
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
        body: JSON.stringify({ name, type, audience, budgetLimit, eventTime }),
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

  // Helper parser for visual or simple bullet rendering in tabs
  const renderMarkdownText = (text: string) => {
    if (!text) return <p className="text-slate-400 italic">Konten draf kosong.</p>;
    
    return text.split("\n").map((line, idx) => {
      // Highlight bold text: **some text** or *some text*
      const cleanLine = line.replace(/\*\*/g, "").replace(/\*/g, "");

      if (line.trim().startsWith("- ")) {
        // Strip out the star indicators
        return (
          <li key={idx} className="ml-4 list-disc text-slate-700 text-sm leading-relaxed mb-2">
            {line.replace(/^-\s+/, "").replace(/\*\*/g, "").replace(/\*/g, "")}
          </li>
        );
      }

      // Check header or bullet markers inside markdown text to style elegantly
      if (line.trim().startsWith("###") || line.trim().startsWith("Copywriting Poster:") || line.trim().startsWith("Rekomendasi visual:")) {
        return (
          <h4 key={idx} className="text-sm font-bold text-slate-800 uppercase tracking-wide mt-5 mb-2.5 border-l-4 border-indigo-500 pl-2">
            {cleanLine}
          </h4>
        );
      }

      if (line.trim().match(/^[0-9]+\.\s/)) {
        return (
          <p key={idx} className="ml-4 text-sm text-slate-700 leading-relaxed mb-2 font-medium">
            {cleanLine}
          </p>
        );
      }

      return (
        <p key={idx} className="text-sm text-slate-700 leading-relaxed mb-1.5 min-h-[0.8rem]">
          {cleanLine}
        </p>
      );
    });
  };

  // Function to add a custom item to the budgeting calculator
  const addCustomBudgetItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customItemName.trim() || !customItemCost) return;
    const costNum = parseFloat(customItemCost.replace(/[^\d]/g, ""));
    if (isNaN(costNum)) return;

    setBudgetItems([...budgetItems, {
      id: `budget-custom-${Date.now()}`,
      name: customItemName.trim(),
      cost: costNum,
      div: customItemDiv
    }]);

    setCustomItemName("");
    setCustomItemCost("");
  };

  // Function to add a custom item to rundown timeline
  const addCustomRundownItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customRundownTime.trim() || !customRundownActivity.trim()) return;

    setRundownItems([...rundownItems, {
      id: `rundown-custom-${Date.now()}`,
      time: customRundownTime.trim(),
      activity: customRundownActivity.trim(),
      pj: customRundownPj
    }]);

    setCustomRundownTime("");
    setCustomRundownActivity("");
  };

  // Delete budget item
  const deleteBudgetItem = (id: string) => {
    setBudgetItems(budgetItems.filter(item => item.id !== id));
  };

  // Start edit inline for budget item
  const startEditBudgetItem = (id: string, name: string, cost: number, div: string) => {
    setEditingBudgetItemId(id);
    setEditingBudgetItemName(name);
    setEditingBudgetItemCost(cost.toString());
    setEditingBudgetItemDiv(div);
  };

  // Save edit for budget item
  const saveBudgetItemEdit = (id: string) => {
    const costNum = parseFloat(editingBudgetItemCost.replace(/[^\d]/g, ""));
    if (!editingBudgetItemName.trim() || isNaN(costNum)) return;
    
    setBudgetItems(budgetItems.map(item => {
      if (item.id === id) {
        return {
          ...item,
          name: editingBudgetItemName.trim(),
          cost: costNum,
          div: editingBudgetItemDiv
        };
      }
      return item;
    }));
    setEditingBudgetItemId(null);
  };

  // Delete rundown item
  const deleteRundownItem = (id: string) => {
    setRundownItems(rundownItems.filter(item => item.id !== id));
  };

  // Start edit inline for rundown item
  const startEditRundownItem = (id: string, time: string, activity: string, pj: string) => {
    setEditingRundownItemId(id);
    setEditingRundownItemTime(time);
    setEditingRundownItemActivity(activity);
    setEditingRundownItemPj(pj);
  };

  // Save edit for rundown item
  const saveRundownItemEdit = (id: string) => {
    if (!editingRundownItemTime.trim() || !editingRundownItemActivity.trim()) return;
    
    setRundownItems(rundownItems.map(item => {
      if (item.id === id) {
        return {
          ...item,
          time: editingRundownItemTime.trim(),
          activity: editingRundownItemActivity.trim(),
          pj: editingRundownItemPj
        };
      }
      return item;
    }));
    setEditingRundownItemId(null);
  };

  // Helper to get active draft text key
  const getActiveTextKey = (): keyof CampaignPackage | null => {
    switch (activeTab) {
      case "kreatif": return "creativeConcept";
      case "visual": return "visualPoster";
      case "broadcast": return "broadcastCopy";
      case "caption": return "socialCaption";
      case "timeline": return "timelineTeam";
      case "mc": return "mcCueCard";
      default: return null;
    }
  };

  // Get active text
  const getActiveText = (): string => {
    const key = getActiveTextKey();
    if (!key || !editableCampaign) return "";
    return editableCampaign[key] as string || "";
  };

  // Save custom text modifications
  const handleSaveTextEdit = () => {
    const key = getActiveTextKey();
    if (!key) return;
    
    setEditableCampaign({
      ...editableCampaign,
      [key]: editingTextValue
    });
    setIsEditingText(false);
  };

  // Start editing text
  const handleStartTextEdit = () => {
    setEditingTextValue(getActiveText());
    setIsEditingText(true);
  };

  // Reset current text to original AI draft
  const handleResetTextToAIDraft = () => {
    const key = getActiveTextKey();
    if (!key || !campaignResult) return;
    
    setEditableCampaign({
      ...editableCampaign,
      [key]: campaignResult[key]
    });
    setEditingTextValue(campaignResult[key] as string || "");
    setIsEditingText(false);
  };

  // Live calculated status values
  const calculatedTotal = budgetItems.reduce((acc, item) => acc + (item.cost * costMultiplier), 0);
  const budgetLimitNumber = parseFloat((budgetLimit || "0").replace(/[^\d]/g, "")) || 0;
  const budgetDifference = budgetLimitNumber - calculatedTotal;
  const isBudgetSafe = budgetDifference >= 0;

  return (
    <div id="app-root" className="flex h-screen w-screen bg-slate-50 font-sans overflow-hidden">
      
      {/* SIDEBAR FOR CONTROLS */}
      <aside className="w-80 bg-white border-r border-slate-200 flex flex-col shrink-0 custom-shadow">
        
        {/* Brand Header with gradient box */}
        <div className="p-6 border-b border-slate-100 flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-md">
            C
          </div>
          <div>
            <h1 className="font-extrabold text-slate-800 text-base leading-tight">
              CampaignAI
            </h1>
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">Campus Manager</span>
          </div>
        </div>

        {/* Form Inputs Section */}
        <div className="p-6 flex-1 overflow-y-auto space-y-6">
          <form onSubmit={handleGenerate} className="space-y-5">
            
            {/* Input Name */}
            <div className="space-y-1.5">
              <label htmlFor="name-input" className="block text-xs font-black text-slate-500 uppercase tracking-wider">
                Nama Acara Kampus 🎒
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
            <div className="space-y-1.5">
              <label htmlFor="type-select" className="block text-xs font-black text-slate-500 uppercase tracking-wider">
                Jenis Acara 🔖
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
            <div className="space-y-1.5">
              <label htmlFor="audience-input" className="block text-xs font-black text-slate-500 uppercase tracking-wider">
                Target Audiens (Peserta) 👥
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

            {/* Target Budget Input */}
            <div className="space-y-1.5">
              <label htmlFor="budget-input" className="block text-xs font-black text-slate-500 uppercase tracking-wider">
                Target Anggaran Maksimal (Rp) 💰
              </label>
              <input
                id="budget-input"
                type="number"
                value={budgetLimit}
                onChange={(e) => setBudgetLimit(e.target.value)}
                placeholder="Misal: 1900000"
                min="0"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white transition-all text-slate-800"
              />
              <span className="text-[10px] text-slate-400 block ml-1 font-medium">Batas biaya kegiatan.</span>
            </div>

            {/* Event Time Input */}
            <div className="space-y-1.5">
              <label htmlFor="time-input" className="block text-xs font-black text-slate-500 uppercase tracking-wider">
                Estimasi Waktu Event ⏰
              </label>
              <input
                id="time-input"
                type="text"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
                placeholder="Misal: 08.30 - 11.20 WIB atau 13.00 - 17.00"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white transition-all text-slate-800"
              />
              <span className="text-[10px] text-slate-400 block ml-1 font-medium">Rentang waktu rundown pada hari-H.</span>
            </div>

            {/* Error Indicator if any */}
            {errorMsg && (
              <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl flex items-start gap-2 text-rose-600 text-xs font-semibold">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Generate Action Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-4 ${
                loading ? "opacity-75 cursor-wait" : ""
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-sm">Merancang Program...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span className="text-sm">Rancang Konsep Acara ✨</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Stats Widget */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60 font-medium">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Rekomendasi Alat Kampus:</span>
            <p className="text-xs text-slate-600 leading-relaxed mb-2">Desain dengan Canva/Figma gratis, sembarkan di WA malam hari pukul 19.30.</p>
            <div className="flex gap-2">
              <span className="text-[10px] bg-indigo-50 text-indigo-700 font-bold px-2 py-0.5 rounded">Figma</span>
              <span className="text-[10px] bg-purple-50 text-purple-700 font-bold px-2 py-0.5 rounded">Canva</span>
              <span className="text-[10px] bg-green-50 text-green-700 font-bold px-2 py-0.5 rounded">WA Broadcast</span>
            </div>
          </div>
        </div>

        {/* AI Engine Status Footnote */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 shrink-0">
          <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
            <span>AI Engine: Gemini Pro Active Planner</span>
          </div>
        </div>

      </aside>

      {/* MAIN VIEW AREA */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50">
        
        {/* Navigation Tabs Header (scrollable horizontally if needed for ultra-wide selection) */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-6 justify-between shrink-0 overflow-x-auto">
          
          <div className="flex gap-1 h-full items-center min-w-max">
            
            <button
              onClick={() => setActiveTab("kreatif")}
              className={`h-full px-4 text-xs font-extrabold flex items-center gap-1.5 border-b-2 transition-all ${
                activeTab === "kreatif"
                  ? "border-b-indigo-600 text-indigo-600 font-black"
                  : "border-b-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Tema Kreatif</span>
            </button>

            <button
              onClick={() => setActiveTab("visual")}
              className={`h-full px-4 text-xs font-extrabold flex items-center gap-1.5 border-b-2 transition-all ${
                activeTab === "visual"
                  ? "border-b-indigo-600 text-indigo-600 font-black"
                  : "border-b-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Gaya Visual & Poster</span>
            </button>

            <button
              onClick={() => setActiveTab("broadcast")}
              className={`h-full px-4 text-xs font-extrabold flex items-center gap-1.5 border-b-2 transition-all ${
                activeTab === "broadcast"
                  ? "border-b-indigo-600 text-indigo-600 font-black"
                  : "border-b-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Megaphone className="w-4 h-4" />
              <span>Siaran WA Broadcast</span>
            </button>

            <button
              onClick={() => setActiveTab("caption")}
              className={`h-full px-4 text-xs font-extrabold flex items-center gap-1.5 border-b-2 transition-all ${
                activeTab === "caption"
                  ? "border-b-indigo-600 text-indigo-600 font-black"
                  : "border-b-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Caption Sosmed</span>
            </button>

            <button
              onClick={() => setActiveTab("timeline")}
              className={`h-full px-4 text-xs font-extrabold flex items-center gap-1.5 border-b-2 transition-all ${
                activeTab === "timeline"
                  ? "border-b-indigo-600 text-indigo-600 font-black"
                  : "border-b-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Timeline & Pembagian Tim</span>
            </button>

            <button
              onClick={() => setActiveTab("budgeting")}
              className={`h-full px-4 text-xs font-extrabold flex items-center gap-1.5 border-b-2 transition-all ${
                activeTab === "budgeting"
                  ? "border-b-indigo-600 text-indigo-600 font-black"
                  : "border-b-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span>Manajemen Anggaran</span>
            </button>

            <button
              onClick={() => setActiveTab("rundown")}
              className={`h-full px-4 text-xs font-extrabold flex items-center gap-1.5 border-b-2 transition-all ${
                activeTab === "rundown"
                  ? "border-b-indigo-600 text-indigo-600 font-black"
                  : "border-b-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Rundown Hari H</span>
            </button>

            <button
              onClick={() => setActiveTab("mc")}
              className={`h-full px-4 text-xs font-extrabold flex items-center gap-1.5 border-b-2 transition-all ${
                activeTab === "mc"
                  ? "border-b-indigo-600 text-indigo-600 font-black"
                  : "border-b-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Mic className="w-4 h-4" />
              <span>Cue Card MC</span>
            </button>

          </div>

          <div className="flex items-center gap-3 shrink-0 ml-4 hidden md:flex">
            {campaignResult && (
              <span className="text-xs font-extrabold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-ping"></span>
                Kampanye Siap
              </span>
            )}
          </div>

        </header>

        {/* Dynamic Display Panel */}
        <div id="display-panel" className="flex-1 p-6 md:p-8 overflow-y-auto">
          
          {loading ? (
            /* Loader Skeleton matching look */
            <div className="max-w-4xl mx-auto space-y-6 animate-pulse">
              <div className="h-6 bg-slate-200 rounded w-1/4"></div>
              <div className="h-12 bg-slate-200 rounded w-1/2"></div>
              <div className="space-y-3 pt-4">
                <div className="h-6 bg-slate-200 rounded"></div>
                <div className="h-6 bg-slate-200 rounded w-5/6"></div>
                <div className="h-6 bg-slate-200 rounded w-4/5"></div>
              </div>
              <div className="h-44 bg-slate-200 rounded-2xl mt-6"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-28 bg-slate-200 rounded-xl"></div>
                <div className="h-28 bg-slate-200 rounded-xl"></div>
                <div className="h-28 bg-slate-200 rounded-xl"></div>
              </div>
            </div>
          ) : campaignResult ? (
            
            <div className="max-w-5xl mx-auto space-y-6">
              
              {/* Event Context Banner */}
              <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-md relative overflow-hidden border border-indigo-900/40">
                <div className="absolute top-0 right-0 p-8 text-indigo-400 opacity-10 pointer-events-none">
                  <Layers className="w-32 h-32" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-black uppercase tracking-widest bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded">
                        {campaignResult.type || type || "Event"}
                      </span>
                      <span className="text-xs text-indigo-300 font-semibold">untuk {campaignResult.audience || audience || "Mahasiswa"}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-1 leading-tight">
                      {campaignResult.title || name}
                    </h2>
                    <p className="text-indigo-200 text-xs font-medium">
                      Paket Draf Manajemen Kampanye Acara Divisi Humas, Publikasi & Dokumentasi (HPD) Himpunan Mahasiswa.
                    </p>
                  </div>
                </div>
              </div>

              {/* Handlers for SARA Inappropriate Context */}
              {campaignResult.isInappropriate && (
                <div className="bg-rose-50 border border-rose-200 rounded-2xl p-8 flex flex-col items-center text-center max-w-2xl mx-auto space-y-4">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Konten Tidak Pantas Ditemukan</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kami mendeteksi konten yang kurang ramah untuk iklim akademis atau positif. Sila masukkan kata kunci acara kampus lain yang edukatif, positif, inklusif, atau kreatif.
                  </p>
                </div>
              )}

              {/* Handlers for MINIM INPUT / CLARIFICATION STAGE */}
              {!campaignResult.isInappropriate && campaignResult.isMinim && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                  <div className="flex gap-3 items-start">
                    <div className="p-2 bg-amber-100 rounded-xl text-amber-700 shrink-0">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-900 text-sm mb-1">Draf Diklarifikasi (Nama Acara Terlalu Pendek)</h3>
                      <p className="text-xs text-amber-800 leading-relaxed mb-4">
                        Kami merancang draf umum sebagai titik awal di bawah ini, tetapi mohon jawab 3 klarifikasi poin agar hasil draf berikutnya maksimal:
                      </p>
                      
                      {campaignResult.clarification ? (
                        <div className="bg-white p-4 rounded-xl border border-amber-200 text-sm text-amber-950 space-y-2">
                          {renderMarkdownText(campaignResult.clarification)}
                        </div>
                      ) : (
                        <ul className="list-decimal list-inside text-xs text-amber-900 space-y-1 font-semibold">
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  
                  {/* Left Column (2-Thirds): Active Tab Renderer */}
                  <div className="lg:col-span-2 space-y-6">
                    
                    {/* TABS 1: KONSEP KREATIF & TEMA */}
                    {activeTab === "kreatif" && (
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
                          <div>
                            <h3 className="text-lg font-extrabold text-slate-800">1. Konsep Kreatif & Pilihan Tema</h3>
                            <p className="text-slate-500 text-xs">Pilihan tema branding beserta slogan persuasif untuk peserta.</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {isEditingText ? (
                              <>
                                <button
                                  onClick={handleSaveTextEdit}
                                  className="text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-lg border border-indigo-700 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                >
                                  <Save className="w-3.5 h-3.5" />
                                  <span>Simpan ✅</span>
                                </button>
                                <button
                                  onClick={() => setIsEditingText(false)}
                                  className="text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                >
                                  <X className="w-3.5 h-3.5" />
                                  <span>Batal</span>
                                </button>
                                <button
                                  onClick={handleResetTextToAIDraft}
                                  className="text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-200 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                  title="Kembalikan isi ke bawaan rancangan AI asli"
                                >
                                  <RotateCcw className="w-3.5 h-3.5" />
                                  <span>Reset AI 🔄</span>
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  onClick={handleStartTextEdit}
                                  className="text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-100 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                >
                                  <Pencil className="w-3.5 h-3.5" />
                                  <span>Edit Konten 📝</span>
                                </button>
                                <button
                                  onClick={() => handleCopy(getActiveText(), "kreatif")}
                                  className="text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-100 flex items-center gap-1.5 transition-colors shrink-0"
                                >
                                  {copiedSection === "kreatif" ? (
                                    <>
                                      <Check className="w-3.5 h-3.5 text-green-600" />
                                      <span className="text-green-600">Copied!</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3.5 h-3.5" />
                                      <span>Salin Teks</span>
                                    </>
                                  )}
                                </button>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="p-4 border border-indigo-100 bg-indigo-50 rounded-xl mb-4">
                          <span className="text-[10px] bg-indigo-200 text-indigo-800 px-2 py-0.5 rounded uppercase font-extrabold text-xs block w-max">Formula Direkomendasikan</span>
                          <p className="text-xs font-semibold text-indigo-900 mt-2">
                            Pilihlah tagline yang provokatif dan solutif. Mahasiswa menyukai tantangan nyata dan komitmen praktis yang memberikan dampak karir atau skill langsung.
                          </p>
                        </div>

                        {isEditingText ? (
                          <div className="relative">
                            <textarea
                              value={editingTextValue}
                              onChange={(e) => setEditingTextValue(e.target.value)}
                              className="w-full h-96 p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white transition-all text-slate-800 font-sans leading-relaxed"
                              placeholder="Ketik konten baru atau ubah isi draf di sini..."
                            />
                            <p className="text-[10px] text-slate-400 mt-1">Ubah draf sesuai kebutuhan, lalu klik Simpan.</p>
                          </div>
                        ) : (
                          <div className="prose max-w-none text-slate-700 whitespace-pre-wrap leading-relaxed pr-2">
                            {getActiveText() ? (
                              renderMarkdownText(getActiveText())
                            ) : (
                              <p className="text-slate-400 italic">Draf konsep kreatif sedang diramu...</p>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* TABS 2: GAYA VISUAL & KONTEN POSTER */}
                    {activeTab === "visual" && (
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
                          <div>
                            <h3 className="text-lg font-extrabold text-slate-800">2. Gaya Visual & Contoh Copywriting Poster</h3>
                            <p className="text-slate-500 text-xs">Aturan palet warna, ornamen visual grafis, dan isi ketikan poster acara.</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {isEditingText ? (
                              <>
                                <button
                                  onClick={handleSaveTextEdit}
                                  className="text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-lg border border-indigo-700 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                >
                                  <Save className="w-3.5 h-3.5" />
                                  <span>Simpan ✅</span>
                                </button>
                                <button
                                  onClick={() => setIsEditingText(false)}
                                  className="text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                >
                                  <X className="w-3.5 h-3.5" />
                                  <span>Batal</span>
                                </button>
                                <button
                                  onClick={handleResetTextToAIDraft}
                                  className="text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-200 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                  title="Kembalikan isi ke bawaan rancangan AI asli"
                                >
                                  <RotateCcw className="w-3.5 h-3.5" />
                                  <span>Reset AI 🔄</span>
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  onClick={handleStartTextEdit}
                                  className="text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-100 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                >
                                  <Pencil className="w-3.5 h-3.5" />
                                  <span>Edit Konten 📝</span>
                                </button>
                                <button
                                  onClick={() => handleCopy(getActiveText(), "visual")}
                                  className="text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-100 flex items-center gap-1.5 transition-colors shrink-0"
                                >
                                  {copiedSection === "visual" ? (
                                    <>
                                      <Check className="w-3.5 h-3.5 text-green-600" />
                                      <span className="text-green-600">Copied!</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3.5 h-3.5" />
                                      <span>Salin Teks Poster</span>
                                    </>
                                  )}
                                </button>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Interactive Live Color Palette box */}
                        {campaignResult.colors && campaignResult.colors.length > 0 && (
                          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 mb-6">
                            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest block mb-3">Live Color Palette (Terdeteksi dalam Teks):</span>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                              {campaignResult.colors.map((hex, i) => (
                                <div key={i} className="flex flex-col items-stretch bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:scale-105 transition-all">
                                  <div 
                                    className="h-10 w-full" 
                                    style={{ backgroundColor: hex }}
                                  ></div>
                                  <div className="p-2 text-center">
                                    <span className="font-mono text-xs text-slate-700 font-extrabold block">{hex}</span>
                                    <span className="text-[9px] text-slate-400 font-bold block uppercase font-mono">Accent {i+1}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {isEditingText ? (
                          <div className="relative">
                            <textarea
                              value={editingTextValue}
                              onChange={(e) => setEditingTextValue(e.target.value)}
                              className="w-full h-96 p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white transition-all text-slate-800 font-sans leading-relaxed"
                              placeholder="Ketik konten baru atau ubah isi draf di sini..."
                            />
                            <p className="text-[10px] text-slate-400 mt-1">Ubah draf copywriting poster di atas, lalu klik Simpan.</p>
                          </div>
                        ) : (
                          <>
                            <div className="bg-slate-950 p-6 rounded-2xl text-slate-200 font-mono text-xs leading-relaxed mb-6">
                              <p className="text-emerald-400 font-bold mb-1">// COPYWRITING POSTER DRAF</p>
                              <div className="whitespace-pre-wrap">
                                {getActiveText() ? (
                                  getActiveText().substring(getActiveText().indexOf("Copywriting Poster:") > -1 ? getActiveText().indexOf("Copywriting Poster:") : 0)
                                ) : (
                                  "Belum di-generate"
                                )}
                              </div>
                            </div>

                            <div className="prose max-w-none text-slate-700 whitespace-pre-wrap leading-relaxed pr-2">
                              {renderMarkdownText(getActiveText())}
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {/* TABS 3: BROACAST MESSAGE */}
                    {activeTab === "broadcast" && (
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
                          <div>
                            <h3 className="text-lg font-extrabold text-slate-800">3. Copywriting Siaran (WhatsApp/Telegram Groups)</h3>
                            <p className="text-slate-500 text-xs">Pesan promosi berstruktur rapi dengan tata letak emoji paling disukai mahasiswa.</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {isEditingText ? (
                              <>
                                <button
                                  onClick={handleSaveTextEdit}
                                  className="text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-lg border border-indigo-700 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                >
                                  <Save className="w-3.5 h-3.5" />
                                  <span>Simpan ✅</span>
                                </button>
                                <button
                                  onClick={() => setIsEditingText(false)}
                                  className="text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                >
                                  <X className="w-3.5 h-3.5" />
                                  <span>Batal</span>
                                </button>
                                <button
                                  onClick={handleResetTextToAIDraft}
                                  className="text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-200 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                  title="Kembalikan isi ke bawaan rancangan AI asli"
                                >
                                  <RotateCcw className="w-3.5 h-3.5" />
                                  <span>Reset AI 🔄</span>
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  onClick={handleStartTextEdit}
                                  className="text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-100 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                >
                                  <Pencil className="w-3.5 h-3.5" />
                                  <span>Edit Konten 📝</span>
                                </button>
                                <button
                                  onClick={() => handleCopy(getActiveText(), "broadcast")}
                                  className="text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-100 flex items-center gap-1.5 transition-colors shrink-0"
                                >
                                  {copiedSection === "broadcast" ? (
                                    <>
                                      <Check className="w-3.5 h-3.5 text-green-600" />
                                      <span className="text-green-600">Copied!</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3.5 h-3.5" />
                                      <span>Salin Siaran WA</span>
                                    </>
                                  )}
                                </button>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="p-4 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-xl mb-4 font-medium text-xs leading-relaxed">
                          💡 **Tips Penyiaran (Broadcast Humas)**: Berikan jeda dua baris antar paragraf agar mudah dibaca pada perangkat mobile. Masukkan link bit.ly pendaftaran Anda di akhir.
                        </div>

                        {isEditingText ? (
                          <div className="relative">
                            <textarea
                              value={editingTextValue}
                              onChange={(e) => setEditingTextValue(e.target.value)}
                              className="w-full h-96 p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white transition-all text-slate-800 font-sans leading-relaxed"
                              placeholder="Ketik konten baru atau ubah isi draf di sini..."
                            />
                            <p className="text-[10px] text-slate-400 mt-1">Ubah draf penyiaran Anda, lalu klik Simpan.</p>
                          </div>
                        ) : (
                          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 font-sans text-sm text-slate-800 whitespace-pre-wrap leading-relaxed max-h-[500px] overflow-y-auto">
                            {getActiveText() ? (
                              getActiveText()
                            ) : (
                              <p className="text-slate-400 italic">Draf broadcast sedang disusun atau kosong...</p>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* TABS 4: SOCIAL CAPTION */}
                    {activeTab === "caption" && (
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
                          <div>
                            <h3 className="text-lg font-extrabold text-slate-800 text-indigo-950">4. Caption Media Sosial (Instagram/TikTok Feed)</h3>
                            <p className="text-slate-500 text-xs font-medium text-indigo-600">Formula &rdquo;Hook - Story - Offer&rdquo; yang meningkatkan rasio simpan dan klik tautan.</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {isEditingText ? (
                              <>
                                <button
                                  onClick={handleSaveTextEdit}
                                  className="text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-lg border border-indigo-700 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                >
                                  <Save className="w-3.5 h-3.5" />
                                  <span>Simpan ✅</span>
                                </button>
                                <button
                                  onClick={() => setIsEditingText(false)}
                                  className="text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                >
                                  <X className="w-3.5 h-3.5" />
                                  <span>Batal</span>
                                </button>
                                <button
                                  onClick={handleResetTextToAIDraft}
                                  className="text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-200 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                  title="Kembalikan isi ke bawaan rancangan AI asli"
                                >
                                  <RotateCcw className="w-3.5 h-3.5" />
                                  <span>Reset AI 🔄</span>
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  onClick={handleStartTextEdit}
                                  className="text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-100 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                >
                                  <Pencil className="w-3.5 h-3.5" />
                                  <span>Edit Konten 📝</span>
                                </button>
                                <button
                                  onClick={() => handleCopy(getActiveText(), "caption")}
                                  className="text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-100 flex items-center gap-1.5 transition-colors shrink-0"
                                >
                                  {copiedSection === "caption" ? (
                                    <>
                                      <Check className="w-3.5 h-3.5 text-green-600" />
                                      <span className="text-green-600">Copied!</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3.5 h-3.5" />
                                      <span>Salin Caption</span>
                                    </>
                                  )}
                                </button>
                              </>
                            )}
                          </div>
                        </div>

                        {isEditingText ? (
                          <div className="relative">
                            <textarea
                              value={editingTextValue}
                              onChange={(e) => setEditingTextValue(e.target.value)}
                              className="w-full h-96 p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white transition-all text-slate-800 font-sans leading-relaxed"
                              placeholder="Ketik konten baru atau ubah isi draf di sini..."
                            />
                            <p className="text-[10px] text-slate-400 mt-1">Ubah draf caption, lalu klik Simpan.</p>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <div className="prose max-w-none text-slate-700 whitespace-pre-wrap leading-relaxed pr-2">
                              {getActiveText() ? (
                                renderMarkdownText(getActiveText())
                              ) : (
                                <p className="text-slate-400 italic">Draf caption instagram masih kosong...</p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* TABS 5: TIMELINE & PEMBAGIAN TIM */}
                    {activeTab === "timeline" && (
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
                          <div>
                            <h3 className="text-lg font-extrabold text-slate-800">5. Timeline Kerja Mundur & Pembagian Divisi SDM</h3>
                            <p className="text-slate-500 text-xs">Garis waktu taktis kerja bertahap dari H-4 minggu sampai Hari H acara.</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {isEditingText ? (
                              <>
                                <button
                                  onClick={handleSaveTextEdit}
                                  className="text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-lg border border-indigo-700 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                >
                                  <Save className="w-3.5 h-3.5" />
                                  <span>Simpan ✅</span>
                                </button>
                                <button
                                  onClick={() => setIsEditingText(false)}
                                  className="text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                >
                                  <X className="w-3.5 h-3.5" />
                                  <span>Batal</span>
                                </button>
                                <button
                                  onClick={handleResetTextToAIDraft}
                                  className="text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-200 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                  title="Kembalikan isi ke bawaan rancangan AI asli"
                                >
                                  <RotateCcw className="w-3.5 h-3.5" />
                                  <span>Reset AI 🔄</span>
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  onClick={handleStartTextEdit}
                                  className="text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-100 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                >
                                  <Pencil className="w-3.5 h-3.5" />
                                  <span>Edit Konten 📝</span>
                                </button>
                                <button
                                  onClick={() => handleCopy(getActiveText(), "timeline")}
                                  className="text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-100 flex items-center gap-1.5 transition-colors shrink-0"
                                >
                                  {copiedSection === "timeline" ? (
                                    <>
                                      <Check className="w-3.5 h-3.5 text-green-600" />
                                      <span className="text-green-600">Copied!</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3.5 h-3.5" />
                                      <span>Salin Timeline</span>
                                    </>
                                  )}
                                </button>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 mb-6 text-xs text-slate-600 flex gap-2.5 items-start">
                          <Users className="w-4 h-4 text-indigo-600 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-700">Skema SDM Kampus:</span> Panduan ini membagi beban secara seimbang pada 4 lini utama agar tidak terjadi penumpukan tugas di satu orang (overwork).
                          </div>
                        </div>

                        {isEditingText ? (
                          <div className="relative">
                            <textarea
                              value={editingTextValue}
                              onChange={(e) => setEditingTextValue(e.target.value)}
                              className="w-full h-96 p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white transition-all text-slate-800 font-sans leading-relaxed"
                              placeholder="Ketik konten baru atau ubah isi draf di sini..."
                            />
                            <p className="text-[10px] text-slate-400 mt-1">Ubah draf timeline kerja mundur Anda, lalu klik Simpan.</p>
                          </div>
                        ) : (
                          <div className="prose max-w-none text-slate-700 whitespace-pre-wrap leading-relaxed font-sans text-sm pr-2">
                            {getActiveText() ? (
                              renderMarkdownText(getActiveText())
                            ) : (
                              <p className="text-slate-400 italic">Data draf sdm sedang disusun...</p>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* TABS 6: BUDGETING (INTERACTIVE WORKBENCH WITH INLINE CRUD) */}
                    {activeTab === "budgeting" && (
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-extrabold text-slate-800">6. Estimasi Anggaran Acara (Low Budget Kampus)</h3>
                            <p className="text-slate-500 text-xs">Simulasi keuangan fleksibel. Edit faktor pengali, klik nama item untuk edit inline, atau hapus dan tambah pengeluaran baru.</p>
                          </div>
                          <button
                            onClick={() => {
                              const listText = budgetItems.map(it => `- ${it.name} | Rp ${it.cost} | ${it.div}`).join("\n") + `\n\nTotal Pengeluaran: Rp ${calculatedTotal}`;
                              handleCopy(listText, "budgeting");
                            }}
                            className="text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-100 flex items-center gap-1.5 transition-colors shrink-0"
                          >
                            {copiedSection === "budgeting" ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-green-600" />
                                <span className="text-green-600">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Salin Anggaran</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Interactive cost multiplier bar */}
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 mb-6 space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                                Faktor Skala Estimasi Biaya
                              </label>
                              <div className="flex items-center gap-3">
                                <input 
                                  type="range" 
                                  min="0.5" 
                                  max="2.5" 
                                  step="0.1" 
                                  value={costMultiplier} 
                                  onChange={(e) => setCostMultiplier(parseFloat(e.target.value))}
                                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                />
                                <span className="text-xs font-extrabold text-indigo-600 shrink-0 w-12 text-right">
                                  {costMultiplier}x
                                </span>
                              </div>
                              <span className="text-[10px] text-slate-400 block mt-1">Ubah pengali tergantung kuantitas peserta / harga daerah Anda.</span>
                            </div>

                            <div className="bg-white p-3 rounded-lg border border-slate-200/60 flex items-center justify-between">
                              <div>
                                <span className="text-[10px] uppercase font-bold text-slate-400">Total Anggaran Saat Ini</span>
                                <p className="text-lg font-black text-indigo-600">
                                  Rp {calculatedTotal.toLocaleString("id-ID")}
                                </p>
                              </div>
                              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                                <TrendingDown className="w-4 h-4" />
                              </div>
                            </div>
                          </div>

                          {/* Live Budget Comparison Dashboard */}
                          {budgetLimitNumber > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200/60">
                              <div className="bg-white p-3 rounded-lg border border-slate-200/60">
                                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Batas Anggaran Tersedia</span>
                                <span className="text-sm font-extrabold text-slate-800">
                                  Rp {budgetLimitNumber.toLocaleString("id-ID")}
                                </span>
                              </div>
                              <div className={`p-3 rounded-lg border ${
                                isBudgetSafe 
                                  ? "bg-emerald-50 border-emerald-150 text-emerald-800" 
                                  : "bg-rose-50 border-rose-150 text-rose-800"
                              }`}>
                                <span className="text-[10px] uppercase font-bold opacity-75 block mb-0.5">Sisa Anggaran Sesuai Batas</span>
                                <div className="flex items-center justify-between text-sm font-extrabold gap-2">
                                  <span>
                                    {isBudgetSafe ? "+" : ""}Rp {budgetDifference.toLocaleString("id-ID")}
                                  </span>
                                  <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${
                                    isBudgetSafe 
                                      ? "bg-emerald-100/80 text-emerald-900" 
                                      : "bg-rose-100/80 text-rose-900 animate-pulse"
                                  }`}>
                                    {isBudgetSafe ? "Aman ✅" : "Over Budget! ⚠️"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Interactive items list with inline CRUD */}
                        <div className="border border-slate-100 rounded-xl overflow-hidden mb-6">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-slate-50/80 border-b border-slate-200">
                                <th className="p-3 text-xs font-black uppercase text-slate-500 font-sans tracking-wide">Item Rincian</th>
                                <th className="p-3 text-xs font-black uppercase text-slate-500 font-sans tracking-wide text-right">Estimasi Biaya</th>
                                <th className="p-3 text-xs font-black uppercase text-slate-500 font-sans tracking-wide text-right">Penanggung Jawab / Aksi</th>
                              </tr>
                            </thead>
                            <tbody>
                              {budgetItems.map((item) => (
                                <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                  {editingBudgetItemId === item.id ? (
                                    <>
                                      <td className="p-2">
                                        <input
                                          type="text"
                                          value={editingBudgetItemName}
                                          onChange={(e) => setEditingBudgetItemName(e.target.value)}
                                          className="w-full text-xs p-1.5 border border-indigo-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 font-semibold"
                                        />
                                      </td>
                                      <td className="p-2 text-right">
                                        <input
                                          type="text"
                                          value={editingBudgetItemCost}
                                          onChange={(e) => setEditingBudgetItemCost(e.target.value)}
                                          className="w-32 text-xs p-1.5 border border-indigo-200 rounded-md text-right focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono font-bold"
                                        />
                                      </td>
                                      <td className="p-2">
                                        <div className="flex gap-2 items-center justify-end">
                                          <select
                                            value={editingBudgetItemDiv}
                                            onChange={(e) => setEditingBudgetItemDiv(e.target.value)}
                                            className="text-[10px] p-1 bg-white border border-slate-200 rounded"
                                          >
                                            <option>Divisi Acara</option>
                                            <option>Divisi Humas/Publikasi</option>
                                            <option>Divisi PDD/Logistik</option>
                                            <option>Divisi Inti/Umum</option>
                                          </select>
                                          <button
                                            onClick={() => saveBudgetItemEdit(item.id)}
                                            className="p-1 text-green-600 hover:bg-green-50 rounded"
                                            title="Simpan"
                                          >
                                            <Save className="w-4 h-4" />
                                          </button>
                                          <button
                                            onClick={() => setEditingBudgetItemId(null)}
                                            className="p-1 text-slate-400 hover:bg-slate-100 rounded"
                                            title="Batal"
                                          >
                                            <X className="w-4 h-4" />
                                          </button>
                                        </div>
                                      </td>
                                    </>
                                  ) : (
                                    <>
                                      <td className="p-3 text-sm text-slate-700 font-semibold">{item.name}</td>
                                      <td className="p-3 text-sm text-slate-800 font-bold text-right font-mono">
                                        Rp {(item.cost * costMultiplier).toLocaleString("id-ID")}
                                      </td>
                                      <td className="p-3 text-xs text-right flex items-center justify-end gap-2.5 h-full">
                                        <span className="bg-indigo-50 px-2.5 py-1 rounded text-indigo-700 text-[10px] border border-indigo-100 font-bold">
                                          {item.div}
                                        </span>
                                        <div className="flex items-center gap-1">
                                          <button
                                            onClick={() => startEditBudgetItem(item.id, item.name, item.cost, item.div)}
                                            className="p-1 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors"
                                            title="Edit Item"
                                          >
                                            <Pencil className="w-3.5 h-3.5" />
                                          </button>
                                          <button
                                            onClick={() => deleteBudgetItem(item.id)}
                                            className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition-colors"
                                            title="Hapus Item"
                                          >
                                            <Trash2 className="w-3.5 h-3.5" />
                                          </button>
                                        </div>
                                      </td>
                                    </>
                                  )}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Form to add customized expense values - Beautifully packaged aligned */}
                        <form onSubmit={addCustomBudgetItem} className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                          <div className="flex items-center gap-2 mb-4">
                            <Plus className="w-4 h-4 text-indigo-600 shrink-0" />
                            <span className="text-xs font-black text-slate-650 uppercase tracking-widest block">
                               Tambah Anggaran Kustomisasi
                            </span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div className="flex flex-col gap-1">
                              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Nama Pengeluaran</span>
                              <input 
                                type="text" 
                                placeholder="misal: Sewa Lisensi Zoom Pro" 
                                value={customItemName}
                                onChange={(e) => setCustomItemName(e.target.value)}
                                className="p-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none transition-all"
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Estimasi Biaya (Rp)</span>
                              <input 
                                type="text" 
                                placeholder="misal: 150000" 
                                value={customItemCost}
                                onChange={(e) => setCustomItemCost(e.target.value)}
                                className="p-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none transition-all"
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Penanggung Jawab</span>
                              <div className="flex gap-2">
                                <select 
                                  value={customItemDiv}
                                  onChange={(e) => setCustomItemDiv(e.target.value)}
                                  className="p-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-indigo-500 focus:outline-none flex-1 transition-all"
                                >
                                  <option>Divisi Acara</option>
                                  <option>Divisi Humas/Publikasi</option>
                                  <option>Divisi PDD/Logistik</option>
                                  <option>Divisi Inti/Umum</option>
                                </select>
                                <button 
                                  type="submit"
                                  className="px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl text-xs cursor-pointer flex items-center gap-1.5 shrink-0 shadow-sm shadow-indigo-200 hover:shadow-md transition-all h-[38px] mt-px"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                  <span>Tambah</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    )}

                    {/* TABS 7: RUNDOWN ACARA (WITH TIMELINE ROW CRUD) */}
                    {activeTab === "rundown" && (
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <h3 className="text-lg font-extrabold text-slate-800">7. Rundown Acara Hari-H (Berbasis Menit & SDM)</h3>
                            <p className="text-slate-500 text-xs">Jadwal ketat alur waktu kegiatan serta penanggung jawab operasional di lapangan. Hover baris untuk Edit/Hapus.</p>
                          </div>
                          <button
                            onClick={() => {
                              const listText = rundownItems.map(it => `- ${it.time} | ${it.activity} | PJ: ${it.pj}`).join("\n");
                              handleCopy(listText, "rundown");
                            }}
                            className="text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-100 flex items-center gap-1.5 transition-colors shrink-0"
                          >
                            {copiedSection === "rundown" ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-green-600" />
                                <span className="text-green-600">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Salin Rundown</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Estimasi Waktu Event info card */}
                        {eventTime && (
                          <div className="p-4 bg-indigo-50/60 border border-indigo-100/80 text-indigo-950 rounded-xl mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs leading-relaxed">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-indigo-600 animate-pulse shrink-0" />
                              <span className="font-bold text-slate-700">Estimasi Rentang Waktu Acara:</span>
                              <span className="bg-indigo-600 text-white font-extrabold px-2.5 py-0.5 rounded-md text-[11px] font-mono shadow-xs">
                                {eventTime}
                              </span>
                            </div>
                            <span className="text-[10px] text-indigo-700/80 font-semibold bg-white px-2 py-0.5 rounded-md border border-indigo-100">
                              Konsep Draf Terikat Waktu ⏱️
                            </span>
                          </div>
                        )}

                        {/* Interactive timeline rundown cards with Edit/Delete */}
                        <div className="space-y-4 relative">
                          {rundownItems.map((item, idx) => (
                            <div key={item.id} className="flex gap-4 items-start relative group">
                              {idx < rundownItems.length - 1 && (
                                <div className="absolute top-10 bottom-0 left-6 border-l-2 border-slate-150 h-[calc(100%-8px)] pointer-events-none"></div>
                              )}
                              
                              {editingRundownItemId === item.id ? (
                                <div className="flex-1 bg-indigo-50/50 p-4 rounded-xl border-2 border-indigo-400 space-y-3">
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    <div className="flex flex-col gap-1">
                                      <span className="text-[9px] text-slate-400 font-extrabold uppercase">Durasi Waktu</span>
                                      <input
                                        type="text"
                                        value={editingRundownItemTime}
                                        onChange={(e) => setEditingRundownItemTime(e.target.value)}
                                        className="p-1 px-2 text-xs bg-white border border-slate-200 rounded-md font-semibold text-slate-800 focus:outline-none"
                                      />
                                    </div>
                                    <div className="flex flex-col gap-1 sm:col-span-2">
                                      <span className="text-[9px] text-slate-400 font-extrabold uppercase">Nama Kegiatan</span>
                                      <input
                                        type="text"
                                        value={editingRundownItemActivity}
                                        onChange={(e) => setEditingRundownItemActivity(e.target.value)}
                                        className="p-1 px-2 text-xs bg-white border border-slate-200 rounded-md font-semibold text-slate-800 focus:outline-none"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-between gap-3 pt-2 border-t border-indigo-100">
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-[9px] text-slate-400 font-extrabold uppercase">PJ:</span>
                                      <select
                                        value={editingRundownItemPj}
                                        onChange={(e) => setEditingRundownItemPj(e.target.value)}
                                        className="text-xs p-1 bg-white border border-slate-200 rounded text-slate-700 font-medium"
                                      >
                                        <option>Divisi Acara</option>
                                        <option>Divisi Humas/Publikasi</option>
                                        <option>Divisi PDD/Logistik</option>
                                        <option>Divisi Inti/Umum</option>
                                      </select>
                                    </div>
                                    <div className="flex gap-1.5">
                                      <button
                                        onClick={() => saveRundownItemEdit(item.id)}
                                        className="p-1 px-2 bg-green-600 hover:bg-green-700 text-white rounded text-[10px] font-bold flex items-center gap-1 cursor-pointer"
                                      >
                                        <Save className="w-3 h-3" />
                                        <span>Simpan</span>
                                      </button>
                                      <button
                                        onClick={() => setEditingRundownItemId(null)}
                                        className="p-1 px-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded text-[10px] font-bold flex items-center gap-1 cursor-pointer"
                                      >
                                        <X className="w-3 h-3" />
                                        <span>Batal</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <>
                                  {/* Time Circle */}
                                  <div className="w-12 h-12 bg-indigo-55 border border-indigo-200 rounded-full flex flex-col items-center justify-center shrink-0 shadow-xs relative">
                                    <Clock className="w-3.5 h-3.5 text-indigo-600 mb-0.5" />
                                    <span className="text-[8px] font-black text-slate-500 font-mono tracking-tighter">
                                      {item.time.replace(" - ", "-")}
                                    </span>
                                  </div>

                                  {/* Activity Card */}
                                  <div className="flex-1 bg-slate-50/50 p-4 rounded-xl border border-slate-200/60 hover:border-indigo-300 transition-all flex justify-between items-start gap-3">
                                    <div className="flex-1">
                                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                                        <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100/40 w-max">
                                          {item.time}
                                        </span>
                                        <span className="text-[10px] text-indigo-700/80 font-extrabold flex items-center gap-1 bg-white border border-indigo-100 px-2 py-0.5 rounded">
                                          PJ: {item.pj}
                                        </span>
                                      </div>
                                      <h4 className="text-sm font-bold text-slate-800 leading-snug">{item.activity}</h4>
                                    </div>
                                    
                                    {/* Actions */}
                                    <div className="flex items-center gap-1 shrink-0 opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                      <button
                                        onClick={() => startEditRundownItem(item.id, item.time, item.activity, item.pj)}
                                        className="p-1 text-indigo-650 hover:bg-indigo-50 rounded transition-colors"
                                        title="Edit Kegiatan"
                                      >
                                        <Pencil className="w-3.5 h-3.5" />
                                      </button>
                                      <button
                                        onClick={() => deleteRundownItem(item.id)}
                                        className="p-1 text-rose-600 hover:bg-rose-50 rounded transition-colors"
                                        title="Hapus Kegiatan"
                                      >
                                        <Trash2 className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Form to add customizable rundown values */}
                        <form onSubmit={addCustomRundownItem} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 mt-8">
                          <div className="flex items-center gap-2 mb-4">
                            <Plus className="w-4 h-4 text-indigo-600 shrink-0" />
                            <span className="text-xs font-black text-slate-600 uppercase tracking-widest block">
                               Tambah Acara / Kegiatan Rundown
                            </span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div className="flex flex-col gap-1">
                              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Durasi Waktu</span>
                              <input 
                                type="text" 
                                placeholder="misal: 11.20 - 11.40" 
                                value={customRundownTime}
                                onChange={(e) => setCustomRundownTime(e.target.value)}
                                className="p-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none transition-all"
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Nama Kegiatan</span>
                              <input 
                                type="text" 
                                placeholder="misal: Sesi Evaluasi & Bersih-Bersih" 
                                value={customRundownActivity}
                                onChange={(e) => setCustomRundownActivity(e.target.value)}
                                className="p-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none transition-all"
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Penanggung Jawab</span>
                              <div className="flex gap-2">
                                <select 
                                  value={customRundownPj}
                                  onChange={(e) => setCustomRundownPj(e.target.value)}
                                  className="p-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-indigo-500 focus:outline-none flex-1 transition-all"
                                >
                                  <option>Divisi Acara</option>
                                  <option>Divisi Humas/Publikasi</option>
                                  <option>Divisi PDD/Logistik</option>
                                  <option>Divisi Inti/Umum</option>
                                </select>
                                <button 
                                  type="submit"
                                  className="px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl text-xs cursor-pointer flex items-center gap-1.5 shrink-0 shadow-sm shadow-indigo-200 hover:shadow-md transition-all h-[38px] mt-px"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                  <span>Tambah</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    )}

                    {/* TABS 8: CUE CARD MC */}
                    {activeTab === "mc" && (
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
                          <div>
                            <h3 className="text-lg font-extrabold text-slate-800">8. Cue Card MC & Panduan Teks Pembawa Acara</h3>
                            <p className="text-slate-500 text-xs">Draf naskah MC instan siap pakai untuk sesi Opening, Bridging transisi, dan Closing foto bersama.</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {isEditingText ? (
                              <>
                                <button
                                  onClick={handleSaveTextEdit}
                                  className="text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-lg border border-indigo-700 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                >
                                  <Save className="w-3.5 h-3.5" />
                                  <span>Simpan ✅</span>
                                </button>
                                <button
                                  onClick={() => setIsEditingText(false)}
                                  className="text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                >
                                  <X className="w-3.5 h-3.5" />
                                  <span>Batal</span>
                                </button>
                                <button
                                  onClick={handleResetTextToAIDraft}
                                  className="text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-200 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                  title="Kembalikan isi ke bawaan rancangan AI asli"
                                >
                                  <RotateCcw className="w-3.5 h-3.5" />
                                  <span>Reset AI 🔄</span>
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  onClick={handleStartTextEdit}
                                  className="text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-100 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                                >
                                  <Pencil className="w-3.5 h-3.5" />
                                  <span>Edit Konten 📝</span>
                                </button>
                                <button
                                  onClick={() => handleCopy(getActiveText(), "mc")}
                                  className="text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-100 flex items-center gap-1.5 transition-colors shrink-0"
                                >
                                  {copiedSection === "mc" ? (
                                    <>
                                      <Check className="w-3.5 h-3.5 text-green-600" />
                                      <span className="text-green-600">Copied!</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3.5 h-3.5" />
                                      <span>Salin Cue Card</span>
                                    </>
                                  )}
                                </button>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="p-4 bg-purple-50 border border-purple-100 text-purple-800 rounded-xl mb-6 font-medium text-xs leading-relaxed">
                          🎤 **Pro-Tip MC**: Gunakan intonasi yang antusias dan hangat untuk acara semi-formal. Jika pembicara berhalangan, siapkan gurauan ringan atau mini kuis tentang materi sponsor sejenak.
                        </div>

                        {isEditingText ? (
                          <div className="relative">
                            <textarea
                              value={editingTextValue}
                              onChange={(e) => setEditingTextValue(e.target.value)}
                              className="w-full h-96 p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white transition-all text-slate-800 font-sans leading-relaxed"
                              placeholder="Ketik konten baru atau ubah isi draf di sini..."
                            />
                            <p className="text-[10px] text-slate-400 mt-1">Ubah draf cue card MC Anda, lalu klik Simpan.</p>
                          </div>
                        ) : (
                          <div className="prose max-w-none text-slate-700 whitespace-pre-wrap leading-relaxed pr-2">
                            {getActiveText() ? (
                              renderMarkdownText(getActiveText())
                            ) : (
                              <p className="text-slate-400 italic">Cue card pembawa acara sedang dirumuskan...</p>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                  </div>

                  {/* Right Column (1-Third): Useful information and actionable cards */}
                  <div className="space-y-6">
                    
                    {/* Visual Art / Typography Tips */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                      <h4 className="text-xs font-black text-slate-400 tracking-wider uppercase mb-4">
                        Rekomendasi Kombinasi Font
                      </h4>
                      <div className="space-y-4">
                        <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-extrabold flex items-center justify-center text-sm shrink-0">
                            Aa
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-800">Montserrat & Inter</p>
                            <span className="text-[10px] text-slate-500 uppercase font-semibold">Teks Poster / Headline</span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 font-extrabold flex items-center justify-center text-sm shrink-0">
                            Ab
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-800">Space Grotesk & Code</p>
                            <span className="text-[10px] text-slate-500 uppercase font-semibold">Desain Tema Tech & Modern</span>
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
                        Kirim draft pesan siaran grup WA/Telegram tepat di jam istirahat shalat/makan (12.15) atau malam hari pukul 19.30 malam. Mahasiswa cenderung santai dan membuka ponsel pada jam tersebut!
                      </p>
                      <div className="mt-4 pt-3 border-t border-white/20 flex justify-between items-center text-[11px] text-indigo-200 font-semibold">
                        <span>Penyalinan Sekali Klik</span>
                        <span>Figma/Canva Gratis</span>
                      </div>
                    </div>

                    {/* Checklist share status card */}
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl gap-3 flex">
                      <div className="w-9 h-9 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center shrink-0">
                        <Share2 className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <h5 className="font-bold text-emerald-800 mb-0.5">Satu-Klik Salin Terintegrasi</h5>
                        <p className="text-emerald-700 leading-relaxed font-medium">
                          Gunakan tombol salin di setiap kepala tab draf di atas untuk langsung mengirim atau memasang materi di admin WA atau Canva divisi PDD.
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
