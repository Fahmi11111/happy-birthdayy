import { motion } from "framer-motion";

interface VideoSectionProps {
  onNext: () => void;
}

export default function VideoSection({ onNext }: VideoSectionProps) {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-6 sm:mb-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-[10px] sm:text-xs tracking-[5px] uppercase text-[var(--pink-main)] opacity-60 mb-2">
          SEBUAH MOMEN
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light mb-2 text-white">
          A Moment For You
        </h2>
        <p className="font-elegant text-base sm:text-lg text-white/40 italic">
          pesan video spesial
        </p>
      </motion.div>

      {/* Video Player Area - Mode Portrait & Responsif */}
      <motion.div
        className="glass-card rounded-3xl p-2.5 sm:p-3 max-w-[280px] sm:max-w-xs md:max-w-sm w-full mb-6 shadow-2xl"
        initial={{ y: 40, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Aspect ratio diubah ke 9:16 (Portrait) */}
        <div className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-black flex items-center justify-center shadow-inner">
          <video
            src="/public/video1.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-cover rounded-2xl"
          >
            Browser kamu tidak mendukung pemutar video ini.
          </video>
        </div>
      </motion.div>

      {/* Message */}
      <motion.p
        className="font-elegant text-center text-white/50 italic max-w-xs sm:max-w-md mb-6 text-sm sm:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        "Setiap tawa, setiap momen, setiap kenangan — semuanya begitu berharga."
      </motion.p>

      {/* Next button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
      >
        <motion.button
          className="btn-gold shadow-lg text-xs sm:text-base px-6 py-2.5 sm:px-8 sm:py-3"
          onClick={onNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          💌 BIRTHDAY WISHES
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
