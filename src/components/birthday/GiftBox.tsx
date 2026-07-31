import { motion } from "framer-motion";

interface GiftBoxProps {
  onOpen: () => void;
}

export default function GiftBox({ onOpen }: GiftBoxProps) {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center relative px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 rounded-full bg-[var(--purple-main)] opacity-5 blur-3xl" />
      </div>

      <motion.div
        className="text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Gift icon */}
        <motion.div
          className="relative mb-8 cursor-pointer"
          onClick={onOpen}
          animate={{
            scale: [1, 1.05, 1, 1.05, 1],
            rotate: [0, -3, 0, 3, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              width: 140,
              height: 140,
              margin: "auto",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(232, 107, 155, 0.2), 0 0 40px rgba(232, 107, 155, 0.1)",
                "0 0 40px rgba(232, 107, 155, 0.4), 0 0 80px rgba(232, 107, 155, 0.2)",
                "0 0 20px rgba(232, 107, 155, 0.2), 0 0 40px rgba(232, 107, 155, 0.1)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full glass-card flex items-center justify-center border border-[var(--pink-main)]/30">
            <span className="text-5xl sm:text-6xl">🎁</span>
          </div>

          {/* Sparkle particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-[var(--pink-main)] rounded-full"
              style={{
                top: `${20 + Math.sin(i * 1.2) * 30}%`,
                left: `${20 + Math.cos(i * 1.2) * 30}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -20, -40],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </motion.div>

        <motion.h2
          className="font-display text-3xl sm:text-4xl md:text-5xl font-light mb-4 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Ada Sesuatu
        </motion.h2>
        <motion.h2
          className="font-display text-3xl sm:text-4xl md:text-5xl font-light mb-6 gold-gradient-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Untukmu
        </motion.h2>

        <motion.p
          className="font-elegant text-lg text-white/50 italic mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Klik untuk membuka kadonya
        </motion.p>

        <motion.button
          className="btn-outline"
          onClick={onOpen}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Buka Sekarang ✨
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
