import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, FileText, HelpCircle, Scale } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const pageData = {
  "ketentuan-layanan": {
    title: "Ketentuan Layanan",
    subtitle: "Aturan dasar penggunaan layanan JokiLaporan",
    icon: <Scale className="w-12 h-12 text-primary" />,
    lastUpdated: "1 September 2024",
    sections: [
      {
        heading: "1. Ruang Lingkup Layanan",
        content: "JokiLaporan menyediakan jasa pembuatan tugas sekolah/kampus seperti Laporan PKL, Makalah, Proposal, PPT, dan sejenisnya, khusus untuk tujuan referensi dan pembelajaran. Kami tidak bertanggung jawab atas penyalahgunaan hasil pekerjaan di luar tujuan tersebut."
      },
      {
        heading: "2. Proses Pemesanan",
        content: "Pemesanan sah jika dilakukan melalui saluran komunikasi resmi (WhatsApp / Instagram). Pengguna diwajibkan memberikan brief / instruksi tugas selengkap dan sejelas mungkin sejak awal transaksi."
      },
      {
        heading: "3. Sistem Revisi",
        content: "Revisi gratis diberikan selama tidak menyimpang dari brief atau instruksi awal. Jika instruksi berubah total dari kesepakatan awal, maka akan dihitung sebagai pesanan baru atau dikenakan biaya tambahan."
      },
      {
        heading: "4. Hak Cipta",
        content: "Seluruh hasil pengerjaan mutlak menjadi milik pemesan setelah pelunasan selesai. Kami tidak akan mempublikasikan ulang atau menjual hasil karya Anda kepada pihak lain."
      }
    ]
  },
  "kebijakan-privasi": {
    title: "Kebijakan Privasi",
    subtitle: "Bagaimana kami melindungi data dan identitas Anda",
    icon: <Shield className="w-12 h-12 text-primary" />,
    lastUpdated: "1 September 2024",
    sections: [
      {
        heading: "1. Keamanan Identitas",
        content: "Kami sangat menghargai privasi Anda. Segala bentuk data pribadi seperti Nama, Nama Sekolah/Kampus, Nomor Induk, dan Kontak Anda dijamin 100% aman dan dirahasiakan dari pihak mana pun."
      },
      {
        heading: "2. Penggunaan Data",
        content: "Data dan materi/file pendukung yang Anda berikan kepada kami hanya digunakan murni untuk keperluan penyelesaian tugas Anda. File akan dihapus secara permanen dari server/database kami setelah 30 hari tugas selesai untuk mencegah kebocoran."
      },
      {
        heading: "3. Transparansi Testimoni",
        content: "Testimoni pelanggan yang kami tampilkan di website maupun media sosial telah melalui proses sensor nama, identitas lembaga, dan foto demi melindungi privasi pelanggan yang bersangkutan."
      }
    ]
  },
  "syarat-ketentuan": {
    title: "Syarat & Ketentuan",
    subtitle: "Kewajiban dan hak antara JokiLaporan dan Pelanggan",
    icon: <FileText className="w-12 h-12 text-primary" />,
    lastUpdated: "1 September 2024",
    sections: [
      {
        heading: "1. Persetujuan Pembayaran",
        content: "Klien diwajibkan melakukan pembayaran DP (Down Payment) minimal 50% sebelum proses pengerjaan dimulai. Pelunasan sisa tagihan wajib diselesaikan sebelum file final (tanpa watermark) dikirimkan."
      },
      {
        heading: "2. Pembatalan Pesanan",
        content: "Pembatalan sepihak oleh klien saat pesanan sedang diproses tidak akan mengembalikan dana DP yang telah dibayarkan, karena dialokasikan untuk kompensasi waktu kerja tim."
      },
      {
        heading: "3. Keterlambatan Waktu",
        content: "Jika terjadi keterlambatan pengiriman draft dari waktu deadline yang disepakati akibat kelalaian tim kami (force majeure tidak termasuk), klien berhak mengajukan potongan harga atau pengembalian dana penuh."
      }
    ]
  },
  "pusat-bantuan": {
    title: "Pusat Bantuan",
    subtitle: "Jawaban dan bantuan cepat untuk masalah Anda",
    icon: <HelpCircle className="w-12 h-12 text-primary" />,
    lastUpdated: "Update setiap hari",
    sections: [
      {
        heading: "Bagaimana jika saya butuh revisi?",
        content: "Silakan langsung chat admin WhatsApp kami dan lampirkan catatan revisi dari guru/dosen Anda. Tim kami akan memprioritaskan antrean revisi agar tugas Anda cepat selesai."
      },
      {
        heading: "Berapa lama proses pengerjaan?",
        content: "Tergantung tingkat kesulitan dan panjang halaman. Normalnya 1-3 hari. Namun, kami juga melayani pesanan kilat (Express) yang bisa selesai dalam hitungan kurang dari 24 jam dengan biaya tambahan."
      },
      {
        heading: "Kendala Pembayaran",
        content: "Jika Anda salah nominal transfer atau gangguan sistem bank, simpan struk/bukti transfer yang ada dan serahkan kepada Admin WhatsApp. Kami akan melakukan pengecekan mutasi manual."
      }
    ]
  }
};

const InfoPage = () => {
  const { pageId } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageId]);

  // Default to ketentuan-layanan if not found
  const data = pageData[pageId] || pageData["ketentuan-layanan"];

  return (
    <div className="min-h-screen bg-background font-sans text-secondary pb-20 selection:bg-primary/20 selection:text-primary">
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

      {/* Header */}
      <section className="pt-16 pb-12 px-4 relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[100%] rounded-full bg-blue-100 blur-[120px] -z-10 opacity-50"></div>
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-blue-100">
            {data.icon}
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-4">
            {data.title}
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp} className="text-lg text-gray-500 mb-4">
            {data.subtitle}
          </motion.p>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp} className="text-sm text-gray-400 bg-white px-4 py-2 rounded-full inline-block border border-gray-100 shadow-sm">
            Terakhir Diperbarui: <span className="font-semibold text-gray-600">{data.lastUpdated}</span>
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="space-y-10">
            {data.sections.map((section, idx) => (
              <div key={idx} className="pb-10 border-b border-gray-100 last:border-0 last:pb-0">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{section.heading}</h3>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InfoPage;
