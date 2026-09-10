import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, CreditCard, MessageCircle, Info } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const PaymentMethods = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const waLink = "https://wa.me/6289507931092";

  const paymentGroups = [
    {
      title: "Bank Transfer (Virtual Account / Manual)",
      items: [
        { name: "Bank BRI", desc: "Transfer ke rekening Bank Rakyat Indonesia", color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-100" },
        { name: "Bank BCA", desc: "Transfer ke rekening Bank Central Asia", color: "text-blue-800", bg: "bg-blue-50", border: "border-blue-100" },
        { name: "Bank Mandiri", desc: "Transfer ke rekening Bank Mandiri", color: "text-yellow-600", bg: "bg-yellow-50", border: "border-yellow-100" },
        { name: "SeaBank", desc: "Transfer bebas biaya admin", color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100" },
        { name: "Wondr by BNI", desc: "Transfer ke rekening Bank BNI", color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-100" },
      ]
    },
    {
      title: "E-Wallet (Dompet Digital)",
      items: [
        { name: "DANA", desc: "Pembayaran via aplikasi DANA", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-100" },
        { name: "GoPay", desc: "Pembayaran via aplikasi Gojek/GoPay", color: "text-sky-500", bg: "bg-sky-50", border: "border-sky-100" },
        { name: "OVO", desc: "Pembayaran via aplikasi OVO", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-secondary selection:bg-primary/20 selection:text-primary pb-20">
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
            <CreditCard size={32} />
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-4">
            Metode Pembayaran
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp} className="text-lg text-gray-500">
            Kami menyediakan berbagai metode pembayaran yang aman, mudah, dan bebas repot untuk memudahkan transaksi Anda.
          </motion.p>
        </div>
      </section>

      {/* Important Notice */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center shrink-0">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h4 className="font-bold text-yellow-800 text-lg mb-1">Transaksi 100% Aman</h4>
            <p className="text-yellow-700 text-sm">Nomor rekening/virtual account hanya akan diberikan melalui WhatsApp resmi kami setelah kesepakatan harga. Jangan melakukan transfer ke rekening yang tidak diberikan oleh Admin kami.</p>
          </div>
        </motion.div>
      </div>

      {/* Payment Options Grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-12">
          {paymentGroups.map((group, groupIdx) => (
            <div key={groupIdx}>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                {group.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.items.map((item, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
                    <div className={`w-20 h-12 flex items-center justify-center rounded-xl ${item.bg} border ${item.border}`}>
                      <span className={`font-black tracking-tight ${item.color} italic text-sm`}>{item.name}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Step by Step Info */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Punya pertanyaan seputar pembayaran?</h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Jika Anda memiliki kendala atau ingin menanyakan metode pembayaran lain yang tidak tertera di atas, silakan hubungi admin kami.</p>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:-translate-y-1">
            <MessageCircle size={20} />
            Hubungi Admin Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
