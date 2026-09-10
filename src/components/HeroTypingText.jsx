import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const HeroTypingText = () => {
  const el = useRef(null);

  useEffect(() => {
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
