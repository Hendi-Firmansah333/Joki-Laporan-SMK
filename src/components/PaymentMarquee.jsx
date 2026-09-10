import React from 'react';

export const PaymentMarquee = () => {
  const payments = [
    { name: "BRI", color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-100" },
    { name: "DANA", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-100" },
    { name: "SeaBank", color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100" },
    { name: "Wondr by BNI", color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-100" },
    { name: "Mandiri", color: "text-yellow-600", bg: "bg-yellow-50", border: "border-yellow-100" },
    { name: "BCA", color: "text-blue-800", bg: "bg-blue-50", border: "border-blue-100" },
    { name: "OVO", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
    { name: "GoPay", color: "text-sky-500", bg: "bg-sky-50", border: "border-sky-100" },
  ];

  // Triple the array for seamless infinite marquee loop on wide screens
  const marqueeItems = [...payments, ...payments, ...payments];

  return (
    <div className="w-full bg-white py-10 border-y border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center relative z-20">
        <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">Mendukung berbagai metode pembayaran</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        {/* Gradient fades for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {marqueeItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`mx-3 md:mx-4 flex items-center justify-center px-6 md:px-8 py-2 md:py-3 rounded-xl ${item.bg} border ${item.border} shadow-sm transition-transform hover:-translate-y-1 cursor-pointer`}
            >
              <span className={`font-black text-lg md:text-xl tracking-tight ${item.color} italic`}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
