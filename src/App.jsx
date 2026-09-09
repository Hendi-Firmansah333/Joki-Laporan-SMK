import React from 'react';
import { motion } from 'framer-motion';
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
  X
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

const HeroTypingText = () => {
  const [line1, setLine1] = React.useState('');
  const [line2, setLine2] = React.useState('');
  const [line3, setLine3] = React.useState('');

  const fullLine1 = "Joki Laporan";
  const fullLine2 = "Solusi Tugas,";
  const line3Words = ["Bukan Drama!", "Pasti Beres!", "Bebas Pusing!", "Nilai Maksimal!"];

  React.useEffect(() => {
    let currentLine = 1;
    let wordIndex = 0;
    let isDeleting = false;
    let text3 = "";

    let timeout;

    const type = () => {
      if (currentLine === 1) {
        setLine1((prev) => {
          const next = fullLine1.substring(0, prev.length + 1);
          if (next === fullLine1) {
            currentLine = 2;
            timeout = setTimeout(type, 500); 
          } else {
            timeout = setTimeout(type, 120);
          }
          return next;
        });
      } else if (currentLine === 2) {
        setLine2((prev) => {
          const next = fullLine2.substring(0, prev.length + 1);
          if (next === fullLine2) {
            currentLine = 3;
            timeout = setTimeout(type, 500); 
          } else {
            timeout = setTimeout(type, 120);
          }
          return next;
        });
      } else if (currentLine === 3) {
        const targetWord = line3Words[wordIndex];
        
        if (!isDeleting) {
          text3 = targetWord.substring(0, text3.length + 1);
          setLine3(text3);
          
          if (text3 === targetWord) {
            isDeleting = true;
            timeout = setTimeout(type, 2500); // Pause before deleting
          } else {
            timeout = setTimeout(type, 120); // Typing speed
          }
        } else {
          text3 = targetWord.substring(0, text3.length - 1);
          setLine3(text3);
          
          if (text3 === "") {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % line3Words.length;
            timeout = setTimeout(type, 600); // Pause before typing new word
          } else {
            timeout = setTimeout(type, 60); // Deleting speed
          }
        }
      }
    };

    timeout = setTimeout(type, 800); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.h1 variants={fadeInUp} className="text-4xl lg:text-6xl font-bold leading-tight text-secondary min-h-[140px] lg:min-h-[200px]">
      <span className="relative inline-block">
        <span className="opacity-0">{fullLine1}</span>
        <span className="absolute left-0 top-0 whitespace-nowrap">{line1}</span>
      </span>
      <br/>
      <span className="text-primary relative inline-block">
        <span className="opacity-0">{fullLine2}</span>
        <span className="absolute left-0 top-0 whitespace-nowrap">{line2}</span>
      </span>
      <br/>
      <span className="relative inline-block">
        <span className="opacity-0">{line3Words.reduce((a, b) => a.length > b.length ? a : b)}</span>
        <span className="absolute left-0 top-0 whitespace-nowrap">{line3}</span>
      </span>
      <motion.span 
        animate={{ opacity: [0, 1, 0] }} 
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[4px] h-[0.9em] bg-primary align-middle ml-2"
      />
    </motion.h1>
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
              <button className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary-light transition-all shadow-md hover:shadow-primary/40">
                Order Sekarang
              </button>
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
            <button className="w-full bg-primary text-white px-6 py-3 rounded-full font-semibold mt-4">
              Order Sekarang
            </button>
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
              <button className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2 px-8 py-4 text-lg">
                Order Sekarang <ChevronRight size={24} />
              </button>
              <button className="w-full sm:w-auto btn-secondary bg-white/80 backdrop-blur-md border border-white shadow-md px-8 py-4 text-lg">
                Lihat Daftar Harga
              </button>
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
              { title: 'Laporan PKL', price: '80.000', desc: 'Laporan lengkap, sesuai pedoman sekolah.', icon: '📘' },
              { title: 'Makalah', price: '60.000', desc: 'Format rapi, isi mendalam, sesuai ketentuan.', icon: '📝' },
              { title: 'Proposal', price: '70.000', desc: 'Untuk kegiatan, penelitian, atau usaha.', icon: '💡' },
              { title: 'Presentasi PPT', price: '30.000', desc: 'Desain menarik, isi jelas, siap presentasi.', icon: '📊' },
              { title: 'Daftar Isi & Tabel', price: '5.000', desc: 'Rapi, otomatis, sesuai format baku.', icon: '📑' },
              { title: 'Tugas Lainnya', price: 'Tanya', desc: 'Tugas sekolah lainnya? Konsultasi aja dulu!', icon: '📁' },
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
                <button className="w-full bg-secondary text-white py-3 rounded-xl font-semibold group-hover:bg-primary transition-colors">
                  Pesan Sekarang
                </button>
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
