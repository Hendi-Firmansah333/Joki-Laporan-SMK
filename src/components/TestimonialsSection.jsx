import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, User, Users, Star, FileText, ShieldCheck } from 'lucide-react';

export const TestimonialsSection = () => {
  const [filter, setFilter] = React.useState('Semua');
  const [activeIndex, setActiveIndex] = React.useState(0);

  const testimonials = [
    // 7 Laporan PKL
    { category: "Laporan PKL", content: "Gokil sih kak! Laporan PKL gue beres dalam semalam. Typo zero, format rapi bgt. Dosen pembimbing sampe speechless. Payment lunas via Dana ya kak! 🔥", rating: 5, id: 1 },
    { category: "Laporan PKL", content: "Sat set banget pelayanannya! Awalnya overthinking takut ketahuan, ternyata bahasanya natural bgt kek ngetik sendiri. Lunas ya kak pelunasannya via Gopay.", rating: 5, id: 2 },
    { category: "Laporan PKL", content: "Penyelamat hidup pas lagi mepet deadline. Gak nyampe 24 jam udah dikirim draftnya. Mantap pol! Transferan sisa udah beres ya kak.", rating: 5, id: 3 },
    { category: "Laporan PKL", content: "Laporan magang kelar tanpa pusing mikirin bab 4! Analisanya dapet banget. Worth every penny lah pokoknya. Udah trf via Dana kak 🙏", rating: 5, id: 4 },
    { category: "Laporan PKL", content: "Bener-bener anti ribet club! Adminnya asik diajak diskusi soal format laporan yang ribet dari sekolah. Hasilnya? Perfect! Lunas ya kak via OVO.", rating: 5, id: 5 },
    { category: "Laporan PKL", content: "Wah parah sih ini ngebantu banget buat anak STM yang sibuk praktek. Laporannya detail dan sesuai sama kegiatan bengkel. Mutasi BCA aman ya kak.", rating: 5, id: 6 },
    { category: "Laporan PKL", content: "Sempet ragu awalnya, tapi pas file nya dikirim langsung sujud syukur wkwk. Rapih banget sumpah. Next order lagi! TF Mandiri udah done kak.", rating: 5, id: 7 },

    // 5 Makalah
    { category: "Makalah", content: "Valid no debat, ini joki paling worth it! Makalah kelompok gue dapet A. Adminnya fast respon abis. Makasih kak, mutasi BCA udah masuk ya.", rating: 5, id: 8 },
    { category: "Makalah", content: "Effortless dapet nilai bagus berkat JokiLaporan. Makalahnya runtut dan daftar pustakanya valid semua. Makasih kak, TF Bank Jago udah masuk ya.", rating: 5, id: 9 },
    { category: "Makalah", content: "Tugas sejarah kelar sekejap mata. Isinya berbobot gak cuma copas Wikipedia. Best service ever! Cek mutasi Mandiri ya kak udah transfer.", rating: 5, id: 10 },
    { category: "Makalah", content: "Gila cepet banget sehari jadi! Bahasanya juga rapi gak ketahuan kalau dijokiin. Makasih kak, next time aku order lagi buat tugas akhir. Cek mutasi ya kak udah lunas.", rating: 5, id: 11 },
    { category: "Makalah", content: "Suka banget sama pelayanannya. Revisi sekali langsung bener sesuai kemauan guru. Harganya juga gak bikin kantong jebol. Udah lunas via ShopeePay ya.", rating: 5, id: 12 },

    // 3 Proposal
    { category: "Proposal", content: "Proposal usaha buat ujian praktek langsung di-ACC dong! Bahasanya bener-bener pro tapi tetep masuk akal buat anak SMK. Lunas ya kak via ShopeePay.", rating: 5, id: 13 },
    { category: "Proposal", content: "Revisi dikerjain cepet banget, adminnya sabar parah ngadepin gue yg bawel. Proposal kelar, hati tenang. Udah ku TF ya kak pelunasannya.", rating: 5, id: 14 },
    { category: "Proposal", content: "Adminnya ramah banget diajak konsul malem-malem. Proposal usahaku dapet nilai A! Uang jasa udah aku tf ke BCA ya kak, cek aja.", rating: 5, id: 15 },

    // 6 PPT
    { category: "PPT", content: "PPT nya nyala abis bangku! 😭 Transisinya smooth, desainnya ga norak. Guruku nanya pake template apa wkwk. Payment OVO udah meluncur kak.", rating: 5, id: 16 },
    { category: "PPT", content: "Sumpah PPT-nya cakep parah, aesthetic ala-ala Pinterest gitu. Presentasi jadi makin pede. Harga pas di kantong pelajar. Done payment ya kak!", rating: 5, id: 17 },
    { category: "PPT", content: "Keren pol! Animasi dan fontnya pas, gak lebay. Langsung siap presentasi besok. Thank you JokiLaporan, payment udah masuk OVO ya.", rating: 5, id: 18 },
    { category: "PPT", content: "Beneran dibikin interaktif! Gak ngebosenin sumpah, temen-temen sekelas pada nanya bikin di mana. Lunas ya kak payment via Dana.", rating: 5, id: 19 },
    { category: "PPT", content: "Desain minimalis elegan persis kayak yang gue mau. Pengaturannya rapi, teks nya poin-poin gak panjang lebar. Mantap, lunas ya kak via Gopay.", rating: 5, id: 20 },
    { category: "PPT", content: "Slide nya keren banget ada infografisnya segala! Kelompokku jadi juara 1 pas presentasi. Asli recommended. TF BRI udah masuk ya kak.", rating: 5, id: 21 }
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
