import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  CheckCircle2, 
  MessageCircle,
  FileText,
  BookOpen,
  LayoutTemplate
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const serviceData = {
  "laporan-pkl": {
    title: "Jasa Pembuatan Laporan PKL",
    subtitle: "Solusi Cepat, Rapi, dan Lulus Sidang Tanpa Revisi Ribet!",
    description: "Kami memahami bahwa menyusun Laporan Praktik Kerja Lapangan (PKL) atau Magang bisa menjadi tugas yang sangat menyita waktu. Apalagi ditambah format dari sekolah/kampus yang rumit. Serahkan pada kami, dan fokuslah pada persiapan sidang Anda!",
    benefits: [
      "Bebas Plagiarisme (Original Content)",
      "Format Sesuai Panduan Sekolah/Kampus",
      "Revisi Sampai ACC Pembimbing",
      "Pengerjaan Super Cepat (Bisa 24 Jam)"
    ],
    structure: [
      { bab: "BAB I", title: "Pendahuluan", desc: "Latar belakang, tujuan, dan manfaat PKL yang disusun dengan argumen kuat." },
      { bab: "BAB II", title: "Tinjauan Umum", desc: "Sejarah, struktur organisasi, dan profil tempat kamu magang/PKL." },
      { bab: "BAB III", title: "Pelaksanaan PKL", desc: "Penjabaran kegiatan harian, analisis masalah, dan pemecahannya secara logis." },
      { bab: "BAB IV", title: "Penutup", desc: "Kesimpulan yang padat dan saran yang membangun." },
      { bab: "Lampiran", title: "Dokumentasi & Jurnal", desc: "Penyusunan foto kegiatan dan jurnal harian yang rapi." }
    ],
    icon: <BookOpen className="w-12 h-12 text-primary" />
  },
  "makalah": {
    title: "Jasa Pembuatan Makalah",
    subtitle: "Makalah Terstruktur, Referensi Valid, Nilai Maksimal",
    description: "Tugas makalah numpuk? Bingung cari referensi jurnal atau buku yang valid? Tim kami siap membantu menyusun makalah dari berbagai mata pelajaran dengan standar akademis yang baik.",
    benefits: [
      "Referensi Jurnal & Buku Valid (Bukan Wikipedia)",
      "Format APA/MLA Style",
      "Daftar Pustaka Otomatis & Rapi",
      "Pembahasan Tajam dan Sesuai Topik"
    ],
    structure: [
      { bab: "Cover & Pengantar", title: "Halaman Depan", desc: "Desain rapi dan formal sesuai standar instansi." },
      { bab: "BAB I", title: "Pendahuluan", desc: "Latar belakang masalah yang jelas dan rumusan masalah yang tepat." },
      { bab: "BAB II", title: "Pembahasan", desc: "Analisis mendalam bersumber dari literatur terpercaya." },
      { bab: "BAB III", title: "Penutup", desc: "Kesimpulan padat dan saran." },
      { bab: "Daftar Pustaka", title: "Referensi", desc: "Penulisan daftar pustaka yang valid dan sesuai format." }
    ],
    icon: <FileText className="w-12 h-12 text-primary" />
  },
  "proposal": {
    title: "Jasa Pembuatan Proposal",
    subtitle: "Proposal Kegiatan & Usaha Langsung ACC!",
    description: "Membuat proposal membutuhkan bahasa yang persuasif dan logis, terutama jika tujuannya untuk mencari dana (sponsorship) atau penilaian tugas kewirausahaan. Kami ahlinya!",
    benefits: [
      "Bahasa Formal & Persuasif",
      "RAB (Rencana Anggaran Biaya) Logis",
      "Desain Proposal Menarik (Opsional)",
      "Struktur Terorganisir"
    ],
    structure: [
      { bab: "Pendahuluan", title: "Dasar Pemikiran", desc: "Alasan kuat mengapa kegiatan/usaha ini penting." },
      { bab: "Profil", title: "Detail Kegiatan/Usaha", desc: "Penjelasan komprehensif terkait apa yang diajukan." },
      { bab: "RAB", title: "Anggaran Dana", desc: "Perhitungan biaya yang detail, logis, dan rapi." },
      { bab: "Penawaran", title: "Sponsorship", desc: "Paket penawaran kerja sama yang menguntungkan." }
    ],
    icon: <LayoutTemplate className="w-12 h-12 text-primary" />
  }
};

const ServiceEducation = () => {
  const { serviceId } = useParams();
  const waLink = "https://wa.me/6289507931092";

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  // Default to PKL if service not found in data
  const data = serviceData[serviceId] || serviceData["laporan-pkl"];

  return (
    <div className="min-h-screen bg-background font-sans text-secondary selection:bg-primary/20 selection:text-primary">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <ArrowLeft size={20} />
              </div>
              <span className="font-bold text-gray-700 group-hover:text-primary transition-colors">Kembali ke Beranda</span>
            </Link>
            <div className="hidden sm:block font-bold text-xl tracking-tight">
              Joki<span className="text-primary">Laporan</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100 blur-[100px] -z-10 opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-blue-200 blur-[80px] -z-10 opacity-50"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-6 flex justify-center">
            <div className="p-4 bg-white rounded-3xl shadow-lg border border-gray-100 inline-block">
              {data.icon}
            </div>
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-6 leading-tight">
            {data.title}
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp} className="text-xl text-primary font-semibold mb-6">
            {data.subtitle}
          </motion.p>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp} className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            {data.description}
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 hover:scale-105">
              <MessageCircle size={24} />
              Pesan Sekarang via WA
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider text-sm bg-blue-50 px-4 py-2 rounded-full">KEUNGGULAN KAMI</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">Kenapa Harus JokiLaporan?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.benefits.map((benefit, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:bg-blue-50 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="font-bold text-gray-800">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider text-sm bg-blue-50 px-4 py-2 rounded-full">STRUKTUR PENULISAN</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">Apa Saja yang Akan Anda Dapatkan?</h2>
            <p className="text-gray-500">Struktur lengkap yang kami kerjakan untuk memastikan nilai maksimal.</p>
          </div>

          <div className="space-y-6">
            {data.structure.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="sm:w-32 shrink-0">
                  <div className="inline-block px-4 py-2 bg-blue-50 text-primary font-bold rounded-xl text-sm">
                    {item.bab}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#1d4ed8] to-[#1e3a8a] rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Tunggu Apa Lagi?</h2>
          <p className="text-blue-100 text-lg mb-10 relative z-10">Tugas selesai, hati tenang. Percayakan pada ahli yang sudah berpengalaman.</p>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-primary hover:bg-gray-50 font-bold py-4 px-10 rounded-full shadow-xl transition-all hover:-translate-y-1 relative z-10">
            Konsultasi Gratis Sekarang
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServiceEducation;
