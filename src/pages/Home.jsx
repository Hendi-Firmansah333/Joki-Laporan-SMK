import React from 'react';
import { Link } from 'react-router-dom';
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
  FolderOpen,
  ArrowRight,
  Zap,
  Mail
} from 'lucide-react';
import heroImg from '../assets/hero.png';
import logoImg from '../assets/logo.png';
import ctaBannerImg from '../assets/cta-banner.png';

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

import { InstagramIcon, TiktokIcon, YoutubeIcon } from '../components/Icons';
import { HeroTypingText } from '../components/HeroTypingText';
import { PaymentMarquee } from '../components/PaymentMarquee';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
function Home() {
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

      {/* Payment Marquee Section */}
      <PaymentMarquee />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Banner */}
      <section className="py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto relative flex justify-center">
          {/* Full Image */}
          <img 
            src={ctaBannerImg} 
            alt="Konsultasi Joki Laporan" 
            className="w-full h-auto rounded-[1rem] md:rounded-[3rem] shadow-[0_20px_50px_rgb(0,0,0,0.15)] object-cover"
          />
          
          {/* Absolute overlay for content perfectly centered in the blue space, adjusted slightly down and right */}
          <div className="absolute top-[4%] sm:top-[6%] bottom-0 left-[32%] sm:left-[30%] md:left-[28%] right-[13%] sm:right-[14%] md:right-[16%] flex flex-col items-center justify-center text-center z-10 pointer-events-none">
             <div className="flex flex-col items-center w-full max-w-3xl text-center pointer-events-auto">
               <h2 className="text-[10px] sm:text-sm md:text-lg lg:text-2xl xl:text-3xl font-extrabold mb-0.5 sm:mb-1 md:mb-2 text-white drop-shadow-md leading-tight whitespace-nowrap">
                 Masih Bingung? Konsultasi <span className="text-[#00ffff]">Dulu Aja!</span>
               </h2>
               <p className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-sm xl:text-base text-gray-100 mb-1.5 sm:mb-2 md:mb-4 font-medium drop-shadow leading-snug">
                 Tim kami siap membantu kamu <span className="text-[#00ffff] font-bold">24/7. Tanya gratis,</span> gak ada ruginya!
               </p>
               <div className="flex flex-row gap-1.5 sm:gap-3 md:gap-4 lg:gap-6 justify-center mt-0.5 sm:mt-1">
                 <a href="https://wa.me/6289507931092" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-2 sm:px-3 md:px-5 lg:px-6 py-1 sm:py-1.5 md:py-2 rounded-full font-bold transition-all hover:scale-105 shadow-md border border-green-400/50">
                   <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                     <div className="bg-white text-green-500 rounded-full p-0.5 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex items-center justify-center shrink-0">
                       <MessageCircle className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" fill="currentColor" />
                     </div>
                     <span className="text-[5px] sm:text-[6px] md:text-[8px] lg:text-xs xl:text-sm text-left whitespace-nowrap">Chat via WhatsApp</span>
                   </div>
                   <ArrowRight className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 ml-0.5 sm:ml-1 md:ml-2 opacity-90 shrink-0" />
                 </a>
                 <a href="https://www.instagram.com/jokikuy.laporanpkl/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white px-2 sm:px-3 md:px-5 lg:px-6 py-1 sm:py-1.5 md:py-2 rounded-full font-bold transition-all hover:scale-105 shadow-md border border-white/20">
                   <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                     <div className="bg-white text-[#dc2743] rounded-full p-0.5 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex items-center justify-center shrink-0">
                       <InstagramIcon className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
                     </div>
                     <div className="text-left leading-tight whitespace-nowrap">
                       <div className="text-[5px] sm:text-[6px] md:text-[8px] lg:text-xs xl:text-sm">DM Instagram</div>
                       <div className="text-[4px] sm:text-[4px] md:text-[6px] lg:text-[9px] xl:text-[10px] font-normal opacity-90">@jokikuy.laporanpkl</div>
                     </div>
                   </div>
                   <ArrowRight className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 ml-0.5 sm:ml-1 md:ml-2 opacity-90 shrink-0" />
                 </a>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            
            {/* Column 1: Brand & Features (Span 4) */}
            <div className="lg:col-span-4 flex flex-col">
              <img src={logoImg} alt="JokiLaporan Logo" className="h-10 w-auto object-contain self-start mb-6" />
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                Bantu kerjakan laporan, makalah, proposal, PPT dan segala jenis tugas SMK dengan cepat, rapi, dan berkualitas.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl mb-2">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">Aman & Privasi</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl mb-2">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">Proses Cepat</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl mb-2">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">Harga Bersahabat</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl mb-2">
                    <ThumbsUp className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">Revisi Sampai OK</span>
                </div>
              </div>
            </div>

            {/* Column 2: Navigasi (Span 2) */}
            <div className="lg:col-span-2 flex flex-col">
              <h3 className="text-gray-900 font-bold text-base mb-6">Navigasi</h3>
              <ul className="flex flex-col gap-3 text-sm text-gray-500">
                <li><a href="#beranda" className="hover:text-primary transition-colors">Beranda</a></li>
                <li><a href="#layanan" className="hover:text-primary transition-colors">Layanan</a></li>
                <li><a href="#cara-order" className="hover:text-primary transition-colors">Cara Order</a></li>
                <li><a href="#testimoni" className="hover:text-primary transition-colors">Testimoni</a></li>
                <li><a href="#FAQ" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="https://wa.me/6289507931092" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Kontak</a></li>
              </ul>
            </div>

            {/* Column 3: Layanan Kami (Span 2) */}
            <div className="lg:col-span-2 flex flex-col">
              <h3 className="text-gray-900 font-bold text-base mb-6">Layanan Kami</h3>
              <ul className="flex flex-col gap-3 text-sm text-gray-500">
                <li><Link to="/edukasi/laporan-pkl" className="hover:text-primary transition-colors">Laporan PKL</Link></li>
                <li><Link to="/edukasi/makalah" className="hover:text-primary transition-colors">Makalah</Link></li>
                <li><Link to="/edukasi/proposal" className="hover:text-primary transition-colors">Proposal</Link></li>
                <li><Link to="/edukasi/ppt" className="hover:text-primary transition-colors">PPT</Link></li>
                <li><Link to="/edukasi/daftar-isi" className="hover:text-primary transition-colors">Daftar Isi & Tabel</Link></li>
                <li><Link to="/edukasi/lainnya" className="hover:text-primary transition-colors">Tugas SMK Lainnya</Link></li>
              </ul>
            </div>

            {/* Column 4: Bantuan (Span 2) */}
            <div className="lg:col-span-2 flex flex-col">
              <h3 className="text-gray-900 font-bold text-base mb-6">Bantuan</h3>
              <ul className="flex flex-col gap-3 text-sm text-gray-500">
                <li><a href="#cara-order" className="hover:text-primary transition-colors">Cara Order</a></li>
                <li><Link to="/bantuan/metode-pembayaran" className="hover:text-primary transition-colors">Metode Pembayaran</Link></li>
                <li><Link to="/info/ketentuan-layanan" className="hover:text-primary transition-colors">Ketentuan Layanan</Link></li>
                <li><Link to="/info/kebijakan-privasi" className="hover:text-primary transition-colors">Kebijakan Privasi</Link></li>
                <li><Link to="/info/syarat-ketentuan" className="hover:text-primary transition-colors">Syarat & Ketentuan</Link></li>
                <li><Link to="/info/pusat-bantuan" className="hover:text-primary transition-colors">Pusat Bantuan</Link></li>
              </ul>
            </div>

            {/* Column 5: Hubungi Kami (Span 2) */}
            <div className="lg:col-span-2 flex flex-col">
              <h3 className="text-gray-900 font-bold text-base mb-6">Hubungi Kami</h3>
              <ul className="flex flex-col gap-4 text-sm text-gray-500 mb-8">
                <li>
                  <a href="https://wa.me/6289507931092" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-green-500 transition-colors">
                    <div className="bg-green-50 text-green-500 p-1.5 rounded-full"><MessageCircle className="w-4 h-4" /></div>
                    <span>Chat via WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/jokikuy.laporanpkl/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-pink-500 transition-colors">
                    <div className="bg-pink-50 text-pink-500 p-1.5 rounded-full"><InstagramIcon className="w-4 h-4" /></div>
                    <span>DM Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 hover:text-blue-500 transition-colors">
                    <div className="bg-blue-50 text-blue-500 p-1.5 rounded-full"><Send className="w-4 h-4" /></div>
                    <span>Chat via Telegram</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:jokilaporan@gmail.com" className="flex items-center gap-3 hover:text-gray-900 transition-colors">
                    <div className="bg-gray-100 text-gray-600 p-1.5 rounded-full"><Mail className="w-4 h-4" /></div>
                    <span>jokilaporan@gmail.com</span>
                  </a>
                </li>
              </ul>
              
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-gray-900 font-bold text-sm mb-1">Jam Operasional</span>
                  <span className="text-gray-500 text-xs">Setiap Hari</span>
                  <span className="text-gray-500 text-xs">08.00 - 22.00 WIB</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2024 JokiLaporan. All rights reserved.</p>
            
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Link to="/info/kebijakan-privasi" className="hover:text-primary transition-colors">Kebijakan Privasi</Link>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <Link to="/info/syarat-ketentuan" className="hover:text-primary transition-colors">Syarat & Ketentuan</Link>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <a href="https://wa.me/6289507931092" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Kontak</a>
            </div>

            <div className="flex gap-3">
              <a href="https://www.instagram.com/jokikuy.laporanpkl/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#E1306C] hover:text-white transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://wa.me/6289507931092" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#25D366] hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#0088cc] hover:text-white transition-colors">
                <Send className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-colors">
                <TiktokIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#FF0000] hover:text-white transition-colors">
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
