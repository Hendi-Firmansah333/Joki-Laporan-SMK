import React from 'react';
import Typed from 'typed.js';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Clock, 
  ThumbsUp, 
  Wallet, 
  ChevronRight, 
  MessageSquare, 
  FileText, 
  CreditCard, 
  Send, 
  Star, 
  Camera, 
  MessageCircle, 
  Menu,
  X,
  ChevronDown,
  Book,
  Monitor,
  User,
  Users,
  Lock,
  HelpCircle,
  FilePlus,
  DollarSign,
  Folder,
  FolderOpen
} from 'lucide-react';
import heroImg from './assets/hero.png';
import logoImg from './assets/logo.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const HeroTypingText = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Bukan Drama!",
        "Pasti Beres!",
        "Bebas Pusing!",
        "Nilai Maksimal!"
      ],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <motion.h1 variants={fadeInUp} className="text-4xl lg:text-6xl font-bold leading-tight text-secondary min-h-[140px] lg:min-h-[200px]">
      Joki Laporan <br/>
      <span className="text-primary">Solusi Tugas,</span><br/>
      <span ref={el}></span>
    </motion.h1>
  );
};

const TestimonialsSection = () => {
  const [filter, setFilter] = React.useState('Semua');
  const [activeIndex, setActiveIndex] = React.useState(0);

  const testimonials = [
    { category: "Laporan PKL", content: "Gokil sih kak! Laporan PKL gue beres dalam semalam. Typo zero, format rapi bgt. Dosen pembimbing sampe speechless. Payment lunas via Dana ya kak! 🔥", rating: 5, id: 1 },
    { category: "Laporan PKL", content: "Sat set banget pelayanannya! Awalnya overthinking takut ketahuan, ternyata bahasanya natural bgt kek ngetik sendiri. Lunas ya kak pelunasannya via Gopay.", rating: 5, id: 2 },
    { category: "Laporan PKL", content: "Penyelamat hidup pas lagi mepet deadline. Gak nyampe 24 jam udah dikirim draftnya. Mantap pol! Transferan sisa udah beres ya kak.", rating: 5, id: 3 },
    { category: "Laporan PKL", content: "Laporan magang kelar tanpa pusing mikirin bab 4! Analisanya dapet banget. Worth every penny lah pokoknya. Udah trf via Dana kak 🙏", rating: 5, id: 4 },

    { category: "Makalah", content: "Valid no debat, ini joki paling worth it! Makalah kelompok gue dapet A. Adminnya fast respon abis. Makasih kak, mutasi BCA udah masuk ya.", rating: 5, id: 5 },
    { category: "Makalah", content: "Effortless dapet nilai bagus berkat JokiLaporan. Makalahnya runtut dan daftar pustakanya valid semua. Makasih kak, TF Bank Jago udah masuk ya.", rating: 5, id: 6 },
    { category: "Makalah", content: "Tugas sejarah kelar sekejap mata. Isinya berbobot gak cuma copas Wikipedia. Best service ever! Cek mutasi Mandiri ya kak udah transfer.", rating: 5, id: 7 },
    { category: "Makalah", content: "Gila cepet banget sehari jadi! Bahasanya juga rapi gak ketahuan kalau dijokiin. Makasih kak, next time aku order lagi buat tugas akhir. Cek mutasi ya kak udah lunas.", rating: 5, id: 8 },

    { category: "Proposal", content: "Proposal usaha buat ujian praktek langsung di-ACC dong! Bahasanya bener-bener pro tapi tetep masuk akal buat anak SMK. Lunas ya kak via ShopeePay.", rating: 5, id: 9 },
    { category: "Proposal", content: "Revisi dikerjain cepet banget, adminnya sabar parah ngadepin gue yg bawel. Proposal kelar, hati tenang. Udah ku TF ya kak pelunasannya.", rating: 5, id: 10 },
    { category: "Proposal", content: "Adminnya ramah banget diajak konsul malem-malem. Proposal usahaku dapet nilai A! Uang jasa udah aku tf ke BCA ya kak, cek aja.", rating: 5, id: 11 },
    { category: "Proposal", content: "Gak nyangka proposal PKWU dapet pujian dari guru. Ide bisnisnya dikembangin makin keren. Makasih banyak kak, udah lunas ya paymentnya.", rating: 5, id: 12 },

    { category: "PPT", content: "PPT nya nyala abis bangku! 😭 Transisinya smooth, desainnya ga norak. Guruku nanya pake template apa wkwk. Payment OVO udah meluncur kak.", rating: 5, id: 13 },
    { category: "PPT", content: "Sumpah PPT-nya cakep parah, aesthetic ala-ala Pinterest gitu. Presentasi jadi makin pede. Harga pas di kantong pelajar. Done payment ya kak!", rating: 5, id: 14 },
    { category: "PPT", content: "Keren pol! Animasi dan fontnya pas, gak lebay. Langsung siap presentasi besok. Thank you JokiLaporan, payment udah masuk OVO ya.", rating: 5, id: 15 },
    { category: "PPT", content: "Beneran dibikin interaktif! Gak ngebosenin sumpah, temen-temen sekelas pada nanya bikin di mana. Lunas ya kak payment via Dana.", rating: 5, id: 16 }
  ];

  const filteredTestimonials = filter === 'Semua' ? testimonials : testimonials.filter(t => t.category === filter);
  
  // Slider Logic
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);

  React.useEffect(() => {
    setActiveIndex(0);
  }, [filter]);

  React.useEffect(() => {
    if (totalPages <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages, activeIndex]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimoni" className="py-20 bg-[#F4F7FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="flex-1 max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-gray-600 font-semibold px-4 py-2 rounded-full text-xs tracking-wide mb-4 uppercase">
              <MessageCircle size={14} className="text-gray-500" /> TESTIMONI
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-6 leading-tight">
              Cerita Mereka, <br/>
              <span className="text-primary">Bukti Nyata!</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Berpengalaman melayani ribuan siswa SMK <span className="font-bold text-primary">sejak tahun 2023 hingga sekarang</span>. Berikut adalah bukti nyata dari mereka yang puas dengan layanan kami (Identitas disamarkan demi privasi).
            </p>
            <div className="flex items-center gap-4">
               <div className="flex -space-x-4">
                 {[...Array(4)].map((_, i) => (
                   <div key={i} className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-xs ${['bg-gray-400', 'bg-gray-500', 'bg-gray-600', 'bg-gray-700'][i]}`}>
                     <User size={16} />
                   </div>
                 ))}
               </div>
               <div className="text-sm text-gray-600 font-medium">
                 Dipercaya oleh banyak<br/>siswa SMK di seluruh Indonesia
               </div>
               <svg className="w-10 h-10 text-primary ml-2 hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17l5-5-5-5"/><path d="M15 12H3"/></svg>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
            <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center shrink-0">
              <Users size={28} />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1E293B]">500+</div>
              <div className="text-sm font-semibold text-[#1E293B]">Siswa SMK</div>
              <div className="text-xs text-gray-500 mt-1">Telah mempercayakan tugasnya</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:border-l md:border-gray-100 md:pl-8 text-center md:text-left">
            <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center shrink-0">
              <Star size={28} className="fill-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1E293B]">4.9/5</div>
              <div className="text-sm font-semibold text-[#1E293B]">Rating Kepuasan</div>
              <div className="text-xs text-gray-500 mt-1">Dari para pelanggan</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:border-l md:border-gray-100 md:pl-8 text-center md:text-left">
            <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center shrink-0">
              <FileText size={28} />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1E293B]">1.000+</div>
              <div className="text-sm font-semibold text-[#1E293B]">Tugas Selesai</div>
              <div className="text-xs text-gray-500 mt-1">Berbagai jenis tugas SMK</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:border-l md:border-gray-100 md:pl-8 text-center md:text-left">
            <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center shrink-0">
              <ShieldCheck size={28} />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1E293B]">100%</div>
              <div className="text-sm font-semibold text-[#1E293B]">Aman & Terpercaya</div>
              <div className="text-xs text-gray-500 mt-1">Privasi selalu kami jaga</div>
            </div>
          </div>
        </div>

        {/* Apa Kata Mereka Header */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 bg-blue-100 text-primary font-bold px-4 py-2 rounded-full text-xs tracking-wide mb-4">
            <Star size={14} className="fill-primary" /> TESTIMONI PELANGGAN
          </span>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">Apa Kata <span className="text-primary">Mereka?</span></h3>
              <p className="text-gray-600">Ini adalah cuplikan chat asli dari siswa SMK yang sudah menggunakan layanan JokiLaporan. Mereka puas, tugas beres, dan privasi 100% terjaga!</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Semua', 'Laporan PKL', 'Makalah', 'Proposal', 'PPT'].map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${filter === cat ? 'bg-primary text-white shadow-md' : 'bg-blue-50/50 text-gray-600 hover:bg-blue-100'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid Cards with Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex + filter}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredTestimonials.slice(activeIndex * itemsPerPage, (activeIndex + 1) * itemsPerPage).map((testi) => (
                <div 
                  key={testi.id}
                  className="bg-white border border-gray-100 p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] relative flex flex-col h-full group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Dots Icon */}
                  <div className="absolute top-8 right-8 text-gray-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/>
                    </svg>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center shadow-inner shrink-0">
                      <User size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1E293B]">Siswa SMK</h4>
                      <p className="text-xs text-green-500 font-medium flex items-center gap-1"><ShieldCheck size={12}/> Privasi Terjaga</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-6">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-600 relative z-10 leading-relaxed flex-1 font-medium">"{testi.content}"</p>

                  {/* Big Quote Icon */}
                  <div className="absolute bottom-6 right-6 text-blue-100 opacity-60">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21L16.417 14.604C16.657 13.984 16.897 13.404 17.137 12.864C17.377 12.324 17.597 11.844 17.797 11.424C17.997 11.004 18.177 10.664 18.337 10.404C18.497 10.144 18.657 9.984 18.817 9.924H14.017V3H21.017V9.924C21.017 11.524 20.677 13.204 19.997 14.964C19.317 16.724 18.417 18.734 17.297 21H14.017ZM3.017 21L5.417 14.604C5.657 13.984 5.897 13.404 6.137 12.864C6.377 12.324 6.597 11.844 6.797 11.424C6.997 11.004 7.177 10.664 7.337 10.404C7.497 10.144 7.657 9.984 7.817 9.924H3.017V3H10.017V9.924C10.017 11.524 9.677 13.204 8.997 14.964C8.317 16.724 7.417 18.734 6.297 21H3.017Z" />
                    </svg>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Indicators */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-10">
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => handleDotClick(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-primary w-8' : 'bg-blue-200 hover:bg-blue-300'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
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

  return (
    <section id="FAQ" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-blue-100/50 text-primary font-bold px-4 py-2 rounded-full text-sm mb-4 shadow-sm border border-blue-100">
            <HelpCircle size={16} /> PERTANYAAN YANG SERING DITANYAKAN
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Masih ada yang bikin bingung? Tenang, mungkin pertanyaan kamu sudah ada jawabannya di sini.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {faqs.map((faq, idx) => (
            <div 
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="font-sans text-secondary bg-background overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <img src={logoImg} alt="JokiLaporan Logo" className="h-10 w-auto" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#beranda" className="text-secondary hover:text-primary font-medium transition-colors">Beranda</a>
              <a href="#layanan" className="text-secondary hover:text-primary font-medium transition-colors">Layanan</a>
              <a href="#cara-order" className="text-secondary hover:text-primary font-medium transition-colors">Cara Order</a>
              <a href="#testimoni" className="text-secondary hover:text-primary font-medium transition-colors">Testimoni</a>
              <a href="#FAQ" className="text-secondary hover:text-primary font-medium transition-colors">FAQ</a>
              
              <div className="flex items-center gap-3 border-l pl-6 border-gray-200">
                <a href="https://wa.me/6289507931092" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors" title="Hubungi via WhatsApp">
                  <MessageCircle size={22} />
                </a>
                <a href="https://www.instagram.com/jokikuy.laporanpkl/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors" title="Ikuti kami di Instagram">
                  <InstagramIcon size={22} />
                </a>
              </div>

              <a href="https://wa.me/6289507931092" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary-light transition-all shadow-md hover:shadow-primary/40 ml-2 inline-block">
                Order Sekarang
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-secondary hover:text-primary">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4 shadow-lg absolute w-full">
            <a href="#beranda" onClick={() => setIsMenuOpen(false)} className="block text-secondary font-medium">Beranda</a>
            <a href="#layanan" onClick={() => setIsMenuOpen(false)} className="block text-secondary font-medium">Layanan</a>
            <a href="#cara-order" onClick={() => setIsMenuOpen(false)} className="block text-secondary font-medium">Cara Order</a>
            <a href="#testimoni" onClick={() => setIsMenuOpen(false)} className="block text-secondary font-medium">Testimoni</a>
            <a href="#FAQ" onClick={() => setIsMenuOpen(false)} className="block text-secondary font-medium">FAQ</a>
            
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <a href="https://wa.me/6289507931092" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-50 text-green-500 rounded-full flex items-center justify-center shadow-sm">
                <MessageCircle size={20} />
              </a>
              <a href="https://www.instagram.com/jokikuy.laporanpkl/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-pink-50 text-pink-500 rounded-full flex items-center justify-center shadow-sm">
                <InstagramIcon size={20} />
              </a>
            </div>

            <a href="https://wa.me/6289507931092" target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-primary text-white px-6 py-3 rounded-full font-semibold mt-4">
              Order Sekarang
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative pt-24 lg:pt-28 pb-10 h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Hero Background" className="w-full h-full object-cover object-right md:object-center" />
          {/* Gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          {/* Bottom gradient to blend smoothly with next section */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="text-left space-y-4 lg:space-y-5 max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="inline-block bg-primary/10 text-primary-dark px-4 py-2 rounded-full font-semibold text-sm mb-2 border border-primary/20 backdrop-blur-md shadow-sm">
              #StudentSupport
            </motion.div>
            <HeroTypingText />
            <motion.p variants={fadeInUp} className="text-lg text-gray-700 font-medium max-w-xl">
              Bantu kerjakan laporan, makalah, proposal, PPT dan segala jenis tugas SMK dengan cepat, rapi, dan berkualitas.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white shadow-sm"><ShieldCheck className="text-primary" size={20}/><span className="font-bold text-sm text-secondary">100% Aman</span></div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white shadow-sm"><ThumbsUp className="text-primary" size={20}/><span className="font-bold text-sm text-secondary">Revisi OK</span></div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white shadow-sm"><Clock className="text-primary" size={20}/><span className="font-bold text-sm text-secondary">Tepat Waktu</span></div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white shadow-sm"><Wallet className="text-primary" size={20}/><span className="font-bold text-sm text-secondary">Harga Pelajar</span></div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a href="https://wa.me/6289507931092" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2 px-8 py-4 text-lg">
                Order Sekarang <ChevronRight size={24} />
              </a>
              <a href="#layanan" className="w-full sm:w-auto btn-secondary bg-white/80 backdrop-blur-md border border-white shadow-md px-8 py-4 text-lg text-center block sm:inline-block hover:bg-white transition-colors">
                Lihat Daftar Harga
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider text-sm bg-blue-50 px-4 py-2 rounded-full">LAYANAN KAMI</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">Pilih Layanan Sesuai Kebutuhanmu</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Harga terjangkau, hasil maksimal! Khusus untuk kantong pelajar.</p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Service Cards */}
            {[
              { title: 'Laporan PKL', price: '80.000', desc: 'Laporan lengkap, sesuai pedoman sekolah.', icon: '📘', waText: 'Halo admin JokiLaporan, saya ingin bertanya/memesan jasa pembuatan *Laporan PKL*. Bisa dibantu?' },
              { title: 'Makalah', price: '60.000', desc: 'Format rapi, isi mendalam, sesuai ketentuan.', icon: '📝', waText: 'Halo admin JokiLaporan, saya ingin bertanya/memesan jasa pembuatan *Makalah*. Bisa dibantu?' },
              { title: 'Proposal', price: '70.000', desc: 'Untuk kegiatan, penelitian, atau usaha.', icon: '💡', waText: 'Halo admin JokiLaporan, saya ingin bertanya/memesan jasa pembuatan *Proposal*. Bisa dibantu?' },
              { title: 'Presentasi PPT', price: '30.000', desc: 'Desain menarik, isi jelas, siap presentasi.', icon: '📊', waText: 'Halo admin JokiLaporan, saya ingin bertanya/memesan jasa pembuatan *Presentasi PPT*. Bisa dibantu?' },
              { title: 'Daftar Isi & Tabel', price: '5.000', desc: 'Rapi, otomatis, sesuai format baku.', icon: '📑', waText: 'Halo admin JokiLaporan, saya ingin bertanya/memesan jasa pembuatan *Daftar Isi & Tabel Otomatis*. Bisa dibantu?' },
              { title: 'Tugas Lainnya', price: 'Tanya', desc: 'Tugas sekolah lainnya? Konsultasi aja dulu!', icon: '📁', waText: 'Halo admin JokiLaporan, saya mau *konsultasi tentang tugas sekolah lainnya*. Bisa dibantu?' },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className="bg-background rounded-3xl p-8 border border-gray-100 hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors"></div>
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <div className="mb-4">
                  <span className="text-gray-500 text-sm">Mulai dari</span><br/>
                  <span className="text-3xl font-bold text-primary">{service.price !== 'Tanya' ? `Rp ${service.price}` : 'Harga Menyesuaikan'}</span>
                </div>
                <p className="text-gray-600 mb-8 h-12">{service.desc}</p>
                <a href={`https://wa.me/6289507931092?text=${encodeURIComponent(service.waText)}`} target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-secondary text-white py-3 rounded-xl font-semibold group-hover:bg-primary transition-colors">
                  Pesan Sekarang
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kenapa Pilih <span className="text-primary-light">JokiLaporan?</span></h2>
            <p className="text-gray-400">Karena kami bukan cuma ngerjain tugas, tapi juga peduli dengan masa depan kamu.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Star size={32}/>, title: 'Hasil Berkualitas', desc: 'Original, rapi, sesuai pedoman.' },
              { icon: <Clock size={32}/>, title: 'Proses Cepat', desc: 'Gak perlu nunggu lama, langsung dikerjakan.' },
              { icon: <ShieldCheck size={32}/>, title: 'Aman & Privasi', desc: 'Data kamu 100% aman dan rahasia.' },
              { icon: <ThumbsUp size={32}/>, title: 'Revisi Sampai OK', desc: 'Kamu puas, kami juga senang.' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-secondary-light/50 p-6 rounded-2xl border border-white/10 hover:bg-secondary-light transition-colors">
                <div className="text-primary-light mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section id="cara-order" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider text-sm bg-blue-50 px-4 py-2 rounded-full">CARA ORDER</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">Gampang Banget!</h2>
            <p className="text-gray-500">Cukup 4 langkah, tugas kamu langsung kami kerjakan.</p>
          </div>

          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: 1, icon: <MessageSquare/>, title: 'Chat & Konsultasi', desc: 'DM / WhatsApp, ceritakan tugas kamu.' },
                { step: 2, icon: <FileText/>, title: 'Kirim Detail', desc: 'Sertakan file, format, dan deadline.' },
                { step: 3, icon: <CreditCard/>, title: 'Pembayaran', desc: 'Lakukan pembayaran setelah deal.' },
                { step: 4, icon: <Send/>, title: 'Kerjakan & Dikirim', desc: 'Tugas kami kerjakan & dikirim tepat waktu.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center relative hover:-translate-y-2 transition-transform">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-white shadow-md">
                    {item.step}
                  </div>
                  <div className="text-primary mx-auto w-fit mb-4 p-3 bg-blue-50 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Banner */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto bg-secondary rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-30"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Masih Bingung? Konsultasi Dulu Aja!</h2>
              <p className="text-gray-300 mb-8">Tim kami siap membantu kamu 24/7. Tanya gratis, gak ada ruginya!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold transition-colors">
                  <MessageCircle size={20} /> Chat via WhatsApp
                </button>
                <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-bold transition-colors">
                  <Camera size={20} /> DM Instagram
                </button>
              </div>
            </div>
            
            <div className="w-48 h-48 bg-white/10 backdrop-blur-md rounded-full border-4 border-white/20 flex items-center justify-center shrink-0">
               <span className="text-white font-bold text-center">Admin<br/>Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <img src={logoImg} alt="JokiLaporan Logo" className="h-8 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
            <div className="flex gap-6 text-sm font-medium text-gray-500">
              <a href="#beranda" className="hover:text-primary">Beranda</a>
              <a href="#layanan" className="hover:text-primary">Layanan</a>
              <a href="#cara-order" className="hover:text-primary">Cara Order</a>
              <a href="#FAQ" className="hover:text-primary">FAQ</a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"><Camera size={20}/></a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"><MessageCircle size={20}/></a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"><Send size={20}/></a>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 JokiLaporan. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-600">Kebijakan Privasi</a>
              <a href="#" className="hover:text-gray-600">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
