import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  onNext: () => void;
}

export default function Countdown({ onNext }: CountdownProps) {
  const [elapsedTime, setElapsedTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Patokan: Jam 00:00:00 Hari Ini (Jam 12 Malam Tadi)
    const now = new Date();
    const targetDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0
    );

    const updateTimer = () => {
      const currentTime = new Date().getTime();
      // HITUNG MAJU: Selisih waktu sekarang dikurangi jam 12 malam tadi
      const difference = currentTime - targetDate.getTime();

      if (difference >= 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setElapsedTime({ days: d, hours: h, minutes: m, seconds: s });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center relative px-4 text-center z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Sub-header */}
      <motion.p
        className="text-xs sm:text-sm tracking-[5px] uppercase text-[var(--pink-main,#f472b6)] opacity-80 mb-3 font-medium"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        HARI SPESIAL TELAH TIBA
      </motion.p>

      {/* Main Title */}
      <motion.h1
        className="font-display text-3xl sm:text-5xl md:text-6xl text-white font-light mb-2 leading-tight drop-shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Her Special Day is Here! 🎉
      </motion.h1>

      <motion.p
        className="font-elegant text-base sm:text-xl text-white/60 italic mb-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Waktu berlalu sejak ulang tahunmu dimulai...
      </motion.p>

      {/* Timer Cards (Bertambah Tiap Detik) */}
      <motion.div
        className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md w-full mb-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {[
          { label: "HARI", value: elapsedTime.days },
          { label: "JAM", value: elapsedTime.hours },
          { label: "MENIT", value: elapsedTime.minutes },
          { label: "DETIK", value: elapsedTime.seconds },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-md shadow-lg flex flex-col items-center justify-center"
          >
            <span className="font-display text-2xl sm:text-4xl text-[var(--pink-main,#f472b6)] font-bold">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="text-[9px] sm:text-xs text-white/50 tracking-wider mt-1 font-semibold">
              {item.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Action Button (Langsung Aktif & Menyala) */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <button
          onClick={onNext}
          className="px-8 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-xl bg-[var(--pink-main,#f472b6)] text-white hover:scale-105 active:scale-95 cursor-pointer shadow-[0_0_25px_rgba(244,114,182,0.5)]"
        >
          OPEN HER GIFT 🎁
        </button>
      </motion.div>
    </motion.section>
  );
}
