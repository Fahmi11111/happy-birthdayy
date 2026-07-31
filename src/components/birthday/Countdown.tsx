import { motion } from "framer-motion";

interface CountdownProps {
  onNext: () => void;
}

export default function Countdown({ onNext }: CountdownProps) {
  // Angka langsung di-set ke 00
  const timerItems = [
    { label: "HARI", value: "00" },
    { label: "JAM", value: "00" },
    { label: "MENIT", value: "00" },
    { label: "DETIK", value: "00" },
  ];

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
        Saatnya membuka kado spesialmu...
      </motion.p>

      {/* Timer Cards (Semua 00) */}
      <motion.div
        className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md w-full mb-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {timerItems.map((item, index) => (
          <div
            key={index}
            className="bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-md shadow-lg flex flex-col items-center justify-center"
          >
            <span className="font-display text-2xl sm:text-4xl text-[var(--pink-main,#f472b6)] font-bold">
              {item.value}
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
