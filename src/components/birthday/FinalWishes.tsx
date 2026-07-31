import { motion } from "framer-motion";
import { useState } from "react";

interface FinalWishesProps {
  onRestart: () => void;
}

export default function FinalWishes({ onRestart }: FinalWishesProps) {
  const [phase, setPhase] = useState(0);

  const handleNext = () => {
    if (phase < 2) {
      setPhase(phase + 1);
    }
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--purple-main)] opacity-3 blur-[120px] rounded-full pointer-events-none" />

      {/* Phase 0: Birthday wishes card */}
      {phase === 0 && (
        <motion.div
          className="letter-paper rounded-3xl p-8 sm:p-12 max-w-xl w-full text-center"
          initial={{ y: 40, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <span className="text-4xl">🎂</span>
          </motion.div>

          <h2 className="font-display text-2xl sm:text-3xl font-light mt-6 mb-4 gold-gradient-text">
            Birthday Wishes
          </h2>

          <div
            className="w-16 h-px mx-auto mb-6"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--pink-main), transparent)",
            }}
          />

          <p className="font-elegant text-base sm:text-lg leading-relaxed text-white/65 italic">
            "I wish you happiness, good health, success, and endless blessings
            in this new chapter of your life. May every step you take be
            blessed, every dream come true, and every day bring a new smile to
            your face."
          </p>

          <motion.button
            className="btn-outline mt-8"
            onClick={handleNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            ONE MORE THING ✨
          </motion.button>
        </motion.div>
      )}

      {/* Phase 1: Happy Birthday cycling text */}
      {phase === 1 && (
        <motion.div
          className="text-center max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-5xl">💝</span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6"
            key={phase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="gold-gradient-text">Happy Birthday</span>
          </motion.h1>

          <motion.p
            className="font-elegant text-xl sm:text-2xl text-white/50 italic mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            With All My Love
          </motion.p>

          <motion.p
            className="font-elegant text-lg text-[var(--pink)]/60 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Always & Forever
          </motion.p>

          <motion.button
            className="btn-outline mt-10"
            onClick={handleNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            ONE MORE THING 💕
          </motion.button>
        </motion.div>
      )}

      {/* Phase 2: Final message */}
      {phase === 2 && (
        <motion.div
          className="text-center max-w-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Floating hearts */}
          <div className="relative mb-8">
            {[...Array(7)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-lg"
                style={{
                  left: `${10 + i * 13}%`,
                  top: `${-20 - (i % 3) * 15}px`,
                }}
                animate={{
                  y: [0, -30, -60],
                  opacity: [0, 0.7, 0],
                  x: [0, i % 2 === 0 ? 10 : -10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                ❤️
              </motion.span>
            ))}
          </div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl font-light gold-gradient-text mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Happy Birthday
          </motion.h1>

          <motion.div
            className="w-20 h-px mx-auto mb-8"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--pink-main), transparent)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />

          <motion.p
            className="font-elegant text-lg sm:text-xl leading-relaxed text-white/55 italic mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Terima kasih udah jadi bagian dari hidupku.
          </motion.p>

          <motion.p
            className="font-elegant text-lg sm:text-xl leading-relaxed text-white/55 italic mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Semoga hadiah kecil ini bisa membuat hari spesialmu semakin indah.
          </motion.p>

          <motion.p
            className="font-elegant text-xl sm:text-2xl text-[var(--pink)] font-medium italic mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            Forever yours. ❤️
          </motion.p>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            <motion.button
              className="btn-outline"
              onClick={onRestart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🔄 REPLAY FROM START
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}
