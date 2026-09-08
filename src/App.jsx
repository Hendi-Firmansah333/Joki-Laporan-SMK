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

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="font-sans text-secondary bg-background overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-bold text-primary dark">Joki<span className="text-secondary">Laporan</span></span>
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
      <section id="beranda" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="flex-1 text-center lg:text-left space-y-8"
        >
          <motion.div variants={fadeInUp} className="inline-block bg-blue-100 text-primary-dark px-4 py-2 rounded-full font-semibold text-sm mb-4">
            #StudentSupport
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-6xl font-bold leading-tight text-secondary">
            Joki Laporan <br/>
            <span className="text-primary">Solusi Tugas,</span><br/>
            Bukan Drama!
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
            Bantu kerjakan laporan, makalah, proposal, PPT dan segala jenis tugas SMK dengan cepat, rapi, dan berkualitas.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center lg:justify-start gap-4">
            <div className="flex items-center gap-2"><ShieldCheck className="text-primary" size={20}/><span className="font-medium text-sm">100% Aman</span></div>
            <div className="flex items-center gap-2"><ThumbsUp className="text-primary" size={20}/><span className="font-medium text-sm">Revisi OK</span></div>
            <div className="flex items-center gap-2"><Clock className="text-primary" size={20}/><span className="font-medium text-sm">Tepat Waktu</span></div>
            <div className="flex items-center gap-2"><Wallet className="text-primary" size={20}/><span className="font-medium text-sm">Harga Pelajar</span></div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2">
              Order Sekarang <ChevronRight size={20} />
            </button>
            <button className="w-full sm:w-auto btn-secondary">
              Lihat Daftar Harga
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          {/* Placeholder for Hero Illustration */}
          <div className="relative w-full aspect-square max-w-lg mx-auto bg-gradient-to-tr from-blue-100 to-blue-50 rounded-[3rem] shadow-2xl overflow-hidden flex items-center justify-center border-4 border-white">
            <div className="absolute inset-0 bg-primary/10 animate-pulse"></div>
            <span className="text-primary font-bold text-xl relative z-10">[Hero Character Illustration]</span>
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 bg-white p-3 rounded-2xl shadow-lg rotate-12 animate-float">
              <span className="font-bold text-green-500">A+</span>
            </div>
            <div className="absolute bottom-20 left-4 bg-white p-4 rounded-2xl shadow-lg -rotate-6 animate-float" style={{ animationDelay: '1s' }}>
              <span className="font-bold text-primary text-sm">Tugas Beres! 🚀</span>
            </div>
          </div>
        </motion.div>
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
            <div className="text-2xl font-bold text-primary dark">Joki<span className="text-secondary">Laporan</span></div>
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
