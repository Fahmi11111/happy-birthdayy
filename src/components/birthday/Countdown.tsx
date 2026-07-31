import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  targetDate: string;
  onComplete: () => void;
}

export default function Countdown({ targetDate, onComplete }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const update = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const handleOpen = () => {
    onComplete(); // Langsung pindah ke halaman berikutnya saat diklik
  };

  const timeUnits = [
    { label: "HARI", value: timeLeft.days },
    { label: "JAM", value: timeLeft.hours },
    { label: "MENIT", value: timeLeft.minutes },
    { label: "DETIK", value: timeLeft.seconds },
  ];

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center relative px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[var(--pink-main)] rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <motion.div
        className="text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p className="text-sm tracking-[6px] uppercase text-[var(--pink-main)] mb-4 font-body opacity-70">
          MENGHITUNG HARI
        </p>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light mb-6 text-white">
          Her Special Day is Coming
        </h2>

        <p className="font-elegant text-lg sm:text-xl text-white/60 mb-12 italic max-w-md mx-auto">
          Sesuatu yang indah sedang menunggumu
        </p>
      </motion.div>

      {/* Countdown boxes */}
      <motion.div
        className="flex gap-3 sm:gap-5 mb-12"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {timeUnits.map((unit, i) => (
          <motion.div
            key={unit.label}
            className="flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 + i * 0.1 }}
          >
            <div className="glass-card w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-2">
              <motion.span
                key={unit.value}
                className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-gold"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {String(unit.value).padStart(2, "0")}
              </motion.span>
            </div>
            <span className="text-[10px] sm:text-xs tracking-[3px] text-white/40 uppercase">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Open button (Selalu muncul & bisa diklik) */}
      <AnimatePresence>
        <motion.button
          className="btn-gold"
          onClick={handleOpen}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          OPEN HER GIFT
        </motion.button>
      </AnimatePresence>

      {/* Bottom decorative line */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[var(--pink-main)] to-transparent opacity-30"
        animate={{ opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.section>
  );
}
