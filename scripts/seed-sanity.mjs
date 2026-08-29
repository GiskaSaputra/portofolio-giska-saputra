/**
 * Sanity Seed Script
 * Jalankan dengan: node scripts/seed-sanity.mjs
 *
 * Script ini akan mengisi semua data statis portofolio ke Sanity CMS secara otomatis.
 * Pastikan .env.local sudah berisi NEXT_PUBLIC_SANITY_PROJECT_ID dan NEXT_PUBLIC_SANITY_DATASET.
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync } from "fs";

// Load .env.local
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, "../.env.local");
const envContent = readFileSync(envPath, "utf-8");
dotenv.populate(
  process.env,
  Object.fromEntries(
    envContent
      .split("\n")
      .filter((l) => l && !l.startsWith("#"))
      .map((l) => l.split("=").map((s) => s.replace(/^["']|["']$/g, "").trim()))
  )
);

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: false,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
});

// =============================================
// DATA PORTOFOLIO
// =============================================

const profile = {
  _type: "profile",
  _id: "profile-singleton",
  name: "Sayyida Zidna",
  fullName: "Sayyida Zidna Nadhifatul'Ulya",
  role: "Accounting Student",
  university: "Universitas Pekalongan",
  headline: "I turn numbers into",
  headlineHighlight: "meaningful insight.",
  subtext:
    "Mahasiswa S1 Akuntansi Universitas Pekalongan dengan IPK 3,80/4,00. Aktif di kompetisi, project, dan organisasi — menggabungkan analytical thinking dengan digital innovation.",
  gpa: "3.80 / 4.00",
  location: "Pekalongan",
  email: "sayyidazidna@email.com",
  linkedin: "https://linkedin.com",
  instagram: "https://instagram.com",
  github: "https://github.com",
  aboutParagraphs: [
    "Mahasiswa semester 5 Program Studi S1 Akuntansi Universitas Pekalongan dengan IPK 3,80/4,00. Memiliki ketertarikan pada bidang accounting, business, innovation, dan problem solving.",
    "Aktif mengikuti berbagai kompetisi, project, serta kegiatan akademik dan organisasi. Memiliki pengalaman dalam mengembangkan ide dan solusi melalui essay, business plan, serta project berbasis inovasi.",
    "Didukung latar belakang Teknik Komputer dan Jaringan, saya memiliki kemampuan berpikir analitis, komunikasi, teamwork, dan adaptasi terhadap teknologi.",
  ],
};

const education = [
  {
    _type: "education",
    _id: "education-01",
    degree: "S1 Akuntansi",
    school: "Universitas Pekalongan",
    period: "2024 — Present",
    semester: "Semester 5",
    score: "IPK 3,80 / 4,00",
    description:
      "Menempuh pendidikan S1 Akuntansi dengan fokus pada pemahaman akuntansi, pelaporan keuangan, analisis keuangan, perpajakan, dan auditing. Aktif mengikuti berbagai kompetisi, project, serta kegiatan akademik untuk mengembangkan kemampuan analitis, problem solving, teamwork, dan komunikasi.",
    tags: ["Accounting", "Auditing", "Financial Analysis", "Business", "Digital Innovation"],
    order: 1,
  },
  {
    _type: "education",
    _id: "education-02",
    degree: "Teknik Komputer dan Jaringan",
    school: "SMK Negeri 2 Pekalongan",
    period: "2021 — 2024",
    description:
      "Mempelajari dasar-dasar teknologi komputer dan jaringan, meliputi instalasi dan konfigurasi jaringan, perangkat keras, sistem komputer, serta troubleshooting. Latar belakang teknologi ini membangun kemampuan berpikir logis, problem solving, dan adaptasi terhadap perkembangan teknologi.",
    tags: ["Networking", "Hardware", "Troubleshooting", "Problem Solving"],
    order: 2,
  },
];

const achievements = [
  {
    _type: "achievement",
    _id: "achievement-01",
    title: "1st Place — Essay Competition",
    organizer: "UIN K.H. Abdurrahman Wahid Pekalongan",
    level: "Tingkat Kota Pekalongan",
    year: "2026",
    rank: "1st",
    order: 1,
  },
  {
    _type: "achievement",
    _id: "achievement-02",
    title: "3rd Place — National Business Plan Competition",
    organizer: "BEM FEB Universitas Pekalongan",
    level: "Tingkat Nasional",
    year: "2025",
    rank: "3rd",
    order: 2,
  },
  {
    _type: "achievement",
    _id: "achievement-03",
    title: "Top 8 Finalist — Paper Competition",
    organizer: "HIMA Prodi Manajemen Universitas Pekalongan",
    level: "Tingkat Nasional",
    year: "2025",
    rank: "Top 8",
    order: 3,
  },
];

const experience = [
  {
    _type: "experience",
    _id: "experience-01",
    number: "01",
    role: "Koordinator Divisi Penelitian dan Pengembangan",
    org: "KAMAKIP Universitas Pekalongan",
    period: "Mar 2026 — Present",
    type: "organization",
    points: [
      "Mengoordinasikan kegiatan riset dan pengembangan divisi.",
      "Menyusun program kerja tahunan bidang penelitian.",
    ],
    order: 1,
  },
  {
    _type: "experience",
    _id: "experience-02",
    number: "02",
    role: "Anggota Divisi Penelitian dan Pengembangan",
    org: "Himpunan Mahasiswa Prodi Akuntansi Universitas Pekalongan",
    period: "Okt 2024 — Present",
    type: "organization",
    points: [
      "Mendukung kegiatan penelitian tingkat himpunan.",
      "Terlibat dalam publikasi dan kajian internal.",
    ],
    order: 2,
  },
  {
    _type: "experience",
    _id: "experience-03",
    number: "03",
    role: "Anggota Divisi Eksternal",
    org: "Forum OSIS Jawa Tengah",
    period: "Agu 2023 — Agu 2024",
    type: "organization",
    points: [],
    order: 3,
  },
  {
    _type: "experience",
    _id: "experience-04",
    number: "04",
    role: "Anggota Divisi Internal dan Humas",
    org: "Forum OSIS Kota Batik",
    period: "Jul 2023 — Jun 2024",
    type: "organization",
    points: [],
    order: 4,
  },
  {
    _type: "experience",
    _id: "experience-05",
    number: "05",
    role: "Koordinator Seksi Bidang 6",
    org: "OSIS SMKN 2 Pekalongan",
    period: "Okt 2021 — Okt 2023",
    type: "organization",
    points: [],
    order: 5,
  },
  {
    _type: "experience",
    _id: "experience-internship",
    number: "INT",
    role: "Student Intern — Teknik Komputer dan Jaringan",
    org: "Galeri Komputer Batang",
    period: "2024",
    type: "internship",
    points: [
      "Melakukan perakitan dan pembongkaran komputer untuk pemeriksaan dan perawatan perangkat.",
      "Melakukan instalasi sistem operasi Windows pada perangkat komputer.",
      "Membantu melakukan identifikasi dan pengecekan komponen hardware.",
      "Melakukan maintenance dan troubleshooting dasar pada perangkat komputer.",
      "Membantu menangani permasalahan teknis terkait hardware dan software.",
    ],
    order: 6,
  },
];

const skills = [
  { _type: "skill", _id: "skill-h01", name: "Microsoft Excel", desc: "Mengolah data, rumus dasar, serta menyusun laporan terstruktur.", type: "hard", order: 1 },
  { _type: "skill", _id: "skill-h02", name: "Microsoft Word", desc: "Menyusun dokumen, laporan, proposal, dan karya tulis secara sistematis.", type: "hard", order: 2 },
  { _type: "skill", _id: "skill-h03", name: "Microsoft PowerPoint", desc: "Menyusun materi presentasi yang informatif dan terstruktur.", type: "hard", order: 3 },
  { _type: "skill", _id: "skill-h04", name: "Canva", desc: "Membuat desain presentasi, konten visual, dan kebutuhan publikasi.", type: "hard", order: 4 },
  { _type: "skill", _id: "skill-h05", name: "Basic Accounting", desc: "Pencatatan transaksi, siklus akuntansi, dan laporan keuangan.", type: "hard", order: 5 },
  { _type: "skill", _id: "skill-h06", name: "Financial Analysis", desc: "Menganalisis informasi keuangan untuk memahami kinerja entitas.", type: "hard", order: 6 },
  { _type: "skill", _id: "skill-h07", name: "Research & Academic Writing", desc: "Riset, karya tulis, essay, paper, dan proposal.", type: "hard", order: 7 },
  { _type: "skill", _id: "skill-h08", name: "Business Plan Development", desc: "Mengembangkan ide bisnis dan menyusun konsep model bisnis.", type: "hard", order: 8 },
  { _type: "skill", _id: "skill-s01", name: "Analytical Thinking", desc: "Menganalisis masalah secara logis dan menyusun solusi.", type: "soft", order: 1 },
  { _type: "skill", _id: "skill-s02", name: "Critical Thinking", desc: "Mengevaluasi informasi dari berbagai perspektif.", type: "soft", order: 2 },
  { _type: "skill", _id: "skill-s03", name: "Communication", desc: "Menyampaikan ide secara jelas, lisan maupun tulisan.", type: "soft", order: 3 },
  { _type: "skill", _id: "skill-s04", name: "Public Speaking", desc: "Mempresentasikan gagasan di depan individu maupun kelompok.", type: "soft", order: 4 },
  { _type: "skill", _id: "skill-s05", name: "Leadership", desc: "Koordinasi tim melalui berbagai peran kepemimpinan.", type: "soft", order: 5 },
  { _type: "skill", _id: "skill-s06", name: "Teamwork", desc: "Bekerja sama dengan tim untuk mencapai tujuan bersama.", type: "soft", order: 6 },
  { _type: "skill", _id: "skill-s07", name: "Problem Solving", desc: "Mengidentifikasi masalah dan mengembangkan alternatif solusi.", type: "soft", order: 7 },
  { _type: "skill", _id: "skill-s08", name: "Time Management", desc: "Mengatur prioritas kuliah, organisasi, kompetisi, dan proyek.", type: "soft", order: 8 },
];

const publicSpeaking = [
  {
    _type: "publicSpeaking",
    _id: "speaking-mc",
    role: "Master of Ceremony",
    desc: "Memandu jalannya acara secara terstruktur, berkoordinasi dengan panitia, menyampaikan informasi kepada peserta, serta menjaga alur kegiatan agar berjalan sesuai susunan acara.",
    events: [
      { event: "LKMM-TD FEB Universitas Pekalongan", year: "2025" },
      { event: "Pengabdian Masyarakat HIMATA", year: "2025" },
      { event: "Paper Competition HIMATA", year: "2026" },
    ],
    order: 1,
  },
  {
    _type: "publicSpeaking",
    _id: "speaking-moderator",
    role: "Moderator Seminar",
    desc: "Memoderasi jalannya diskusi, memperkenalkan narasumber, mengarahkan sesi tanya jawab, serta menjaga komunikasi antara narasumber dan peserta.",
    events: [
      { event: "Seminar Nasional HIMATA Universitas Pekalongan", year: "2026" },
      { event: "Workshop Karya Tulis Ilmiah HIMATA Universitas Pekalongan", year: "2026" },
    ],
    order: 2,
  },
];

const projects = [
  { _type: "project", _id: "project-01", number: "01", title: "STREAMHEAL", category: "Essay · AI · Mental Wellness", description: "Inovasi AI-Anxiety Assessment dan SOS Panic Button untuk membebaskan live streamer dari belenggu burnout.", tags: ["Artificial Intelligence", "Mental Wellness"], order: 1 },
  { _type: "project", _id: "project-02", number: "02", title: "GARUDA", category: "Essay · AI · Auditing", description: "Ekosistem keamanan data berbasis AI untuk memperkuat audit preventif pengelolaan Dana Desa.", tags: ["Artificial Intelligence", "Auditing"], order: 2 },
  { _type: "project", _id: "project-03", number: "03", title: "KLINIK SAKU", category: "Essay · AI · Healthcare", description: "Diagnostik cerdas & telemedisin terintegrasi untuk memperluas akses layanan kesehatan di daerah 3T.", tags: ["Artificial Intelligence", "Telemedicine"], order: 3 },
  { _type: "project", _id: "project-04", number: "04", title: "MAWADDAH", category: "Essay · AI · Social Impact", description: "Smart digital safeguarding berbasis AI untuk mengawal integritas pesantren dan moderasi beragama.", tags: ["Artificial Intelligence", "Social Impact"], order: 4 },
  { _type: "project", _id: "project-05", number: "05", title: "INFRATAX TRACE", category: "Essay · Blockchain · Taxation", description: "Pelacak alokasi dana pajak infrastruktur dengan crowdsourcing, AI Auditor, dan blockchain.", tags: ["Blockchain", "Public Finance"], order: 5 },
  { _type: "project", _id: "project-06", number: "06", title: "KNEECYCLE", category: "Innovation · Healthcare", description: "Inovasi terapi lutut berkelanjutan dengan teknologi deteksi gerakan real-time.", tags: ["Healthcare", "Motion Detection"], order: 6 },
  { _type: "project", _id: "project-07", number: "07", title: "SPOTING", category: "Paper · Tech · Sustainability", description: "Inovasi teknologi pengelolaan sampah berbasis SPOTING untuk membangun ekosistem wirausaha muda.", tags: ["Technology", "Sustainability"], order: 7 },
  { _type: "project", _id: "project-08", number: "08", title: "E-WASTE", category: "Business Plan · Digital Innovation", description: "Aplikasi pengelolaan sampah sebagai solusi digital untuk pengelolaan limbah dan peluang ekonomi.", tags: ["Digital Innovation", "Entrepreneurship"], order: 8 },
  { _type: "project", _id: "project-09", number: "09", title: "PKM-PM", category: "PKM-PM · Community Empowerment", description: "Program pemberdayaan masyarakat disabilitas melalui jadwal produktif. Lolos Seleksi Internal Perguruan Tinggi.", tags: ["Community", "Social Impact"], badge: "Lolos Seleksi Internal", order: 9 },
];

// =============================================
// MAIN SEEDER
// =============================================

async function seed() {
  console.log("🌱 Memulai proses seeding ke Sanity...\n");

  const allDocs = [
    profile,
    ...education,
    ...achievements,
    ...experience,
    ...skills,
    ...publicSpeaking,
    ...projects,
  ];

  // Use createOrReplace so re-running is safe
  const transaction = client.transaction();
  for (const doc of allDocs) {
    transaction.createOrReplace(doc);
  }

  try {
    const result = await transaction.commit();
    console.log(`✅ Berhasil mengisi ${allDocs.length} dokumen ke Sanity!`);
    console.log(`   Buka http://localhost:3000/studio untuk melihat hasilnya.\n`);
  } catch (err) {
    if (err.message?.includes("Unauthorized") || err.message?.includes("authentication")) {
      console.error("\n❌ Error: Token tidak valid atau belum diset.\n");
      console.error("   Ikuti langkah berikut:");
      console.error("   1. Buka https://www.sanity.io/manage → pilih project Anda");
      console.error("   2. Klik tab 'API' → 'Tokens' → 'Add API token'");
      console.error("   3. Beri nama 'Seeder', set permission ke 'Editor'");
      console.error("   4. Salin tokennya, lalu tambahkan ke .env.local:");
      console.error("      SANITY_API_WRITE_TOKEN=token_anda_di_sini\n");
    } else {
      console.error("❌ Error:", err.message);
    }
    process.exit(1);
  }
}

seed();
