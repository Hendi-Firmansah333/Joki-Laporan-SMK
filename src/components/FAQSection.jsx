import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, DollarSign, FileText, Book, Clock, Monitor, 
  ThumbsUp, MessageSquare, FilePlus, User, Lock, Users, 
  HelpCircle, ChevronDown 
} from 'lucide-react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    { q: "Apakah order di JokiLaporan aman?", a: "Aman banget! Data, identitas, dan file tugas kamu kami jaga sebagai privasi. Semua informasi hanya digunakan untuk keperluan pengerjaan sesuai kesepakatan. Tenang, data kamu nggak akan kami sebarkan ke pihak lain.", icon: <ShieldCheck size={20} /> },
    { q: "Berapa harga jasanya?", a: "Harga menyesuaikan tingkat kesulitan dan deadline. Untuk detailnya bisa langsung chat kami ya!", icon: <DollarSign size={20} /> },
    { q: "Bisa ngerjain laporan PKL?", a: "Tentu bisa! Kami sudah berpengalaman mengerjakan berbagai macam laporan PKL dari berbagai jurusan.", icon: <FileText size={20} /> },
    { q: "Kalau tugasnya susah, harganya bisa berubah?", a: "Iya, harga bisa menyesuaikan setelah kami mengecek detail tugas dan tingkat kesulitannya.", icon: <DollarSign size={20} /> },
    { q: "Selain laporan PKL, bisa tugas SMK lainnya?", a: "Sangat bisa. Kami mengerjakan Makalah, PPT, Proposal, dan tugas harian lainnya.", icon: <Book size={20} /> },
    { q: "Bisa deadline mepet?", a: "Bisa! Kami menyediakan layanan express untuk tugas dengan deadline mepet.", icon: <Clock size={20} /> },
    { q: "Bagaimana cara ordernya?", a: "Cukup hubungi kami via WhatsApp atau DM Instagram, kirim detail tugas, lalu sepakati harga dan deadline.", icon: <Monitor size={20} /> },
    { q: "Kalau hasilnya kurang sesuai, bisa revisi?", a: "Pasti. Kami memberikan garansi revisi sampai tugas kamu sesuai dengan format atau ketentuan awal.", icon: <ThumbsUp size={20} /> },
    { q: "Sebelum bayar boleh konsultasi dulu?", a: "Boleh banget! Konsultasi 100% gratis. Kamu bebas tanya-tanya dulu sebelum deal.", icon: <MessageSquare size={20} /> },
    { q: "Kalau sudah punya sebagian tugas, masih bisa dibantu?", a: "Bisa. Kami bisa bantu melanjutkan atau merapikan tugas yang sudah setengah jalan.", icon: <FilePlus size={20} /> },
    { q: "Bisa sesuai jurusan saya?", a: "Bisa, kami memiliki tim yang sanggup menangani berbagai macam jurusan SMK.", icon: <User size={20} /> },
    { q: "Takut hasilnya ketahuan kayak bukan buatan sendiri?", a: "Tenang saja. Kami selalu menyesuaikan gaya penulisan agar terlihat natural dan sesuai dengan gaya bahasamu.", icon: <Lock size={20} /> },
    { q: "Data PKL saya aman nggak?", a: "Sangat aman. Kami tidak akan pernah membocorkan data perusahaan tempat kamu PKL ke pihak manapun.", icon: <Users size={20} /> },
    { q: "Pertanyaan lain?", a: "Jika masih ada pertanyaan lain, jangan ragu untuk langsung chat admin kami 24/7!", icon: <HelpCircle size={20} /> },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="FAQ" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInDown}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-blue-100/50 text-primary font-bold px-4 py-2 rounded-full text-sm mb-4 shadow-sm border border-blue-100">
            <HelpCircle size={16} /> PERTANYAAN YANG SERING DITANYAKAN
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Masih ada yang bikin bingung? Tenang, mungkin pertanyaan kamu sudah ada jawabannya di sini.</p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {faqs.map((faq, idx) => (
            <motion.div 
              variants={fadeInUp}
              key={idx} 
              className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === idx 
                  ? 'border-primary bg-white shadow-lg scale-[1.01]' 
                  : 'border-transparent bg-white hover:border-gray-200 shadow-sm hover:shadow-md'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center gap-4 p-5 md:p-6 text-left focus:outline-none"
              >
                <div className={`p-3 rounded-xl transition-colors duration-300 ${
                  openIndex === idx ? 'bg-primary text-white shadow-md' : 'bg-blue-50 text-primary'
                }`}>
                  {faq.icon}
                </div>
                <h3 className={`font-bold flex-1 text-base md:text-lg transition-colors duration-300 ${
                  openIndex === idx ? 'text-primary' : 'text-secondary'
                }`}>
                  {faq.q}
                </h3>
                <div className={`w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  openIndex === idx ? 'bg-primary/10 text-primary' : 'bg-gray-50 text-gray-400'
                }`}>
                  <ChevronDown className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} size={20} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 md:p-6 pt-0 md:pt-0 pl-[76px] md:pl-[88px] text-gray-600 leading-relaxed text-sm md:text-base border-t border-gray-50 mt-1">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
