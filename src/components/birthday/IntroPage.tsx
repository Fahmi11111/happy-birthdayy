import { motion } from "framer-motion";

interface IntroPageProps {
  onNext: () => void;
}

// Konfigurasi posisi dan ukuran foto (Diperbesar & Dipanjangkan untuk HP)
const floatingPhotos = [
  {
    url: "/foto1.jpeg",
    rotate: -8,
    y: 0,
    delay: 0.2,
    // Sudut Kiri Atas
    pos: "top-2 left-1 sm:top-10 sm:left-8 md:top-12 md:left-12",
    size: "w-28 h-36 sm:w-32 sm:h-40 md:w-40 md:h-52", // HP dinaikkan ke w-28 h-36
  },
  {
    url: "/foto2.jpeg",
    rotate: 6,
    y: -10,
    delay: 0.4,
    // Sudut Kanan Atas
    pos: "top-3 right-1 sm:top-10 sm:right-8 md:top-12 md:right-12",
    size: "w-28 h-36 sm:w-32 sm:h-40 md:w-40 md:h-52",
  },
  {
    url: "/foto17.jpeg",
    rotate: -5,
    y: 10,
    delay: 0.6,
    // Sudut Kiri Bawah
    pos: "bottom-10 left-1 sm:bottom-12 sm:left-8 md:bottom-12 md:left-12",
    size: "w-28 h-36 sm:w-32 sm:h-40 md:w-40 md:h-52",
  },
  {
    url: "/foto18.jpeg",
    rotate: 8,
    y: -5,
    delay: 0.8,
    // Sudut Kanan Bawah
    pos: "bottom-10 right-1 sm:bottom-12 sm:right-8 md:bottom-12 md:right-12",
    size: "w-28 h-36 sm:w-32 sm:h-40 md:w-40 md:h-52",
  },
];

export default function IntroPage({ onNext }: IntroPageProps) {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center relative px-2 sm:px-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating polaroid decorations (Background) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {floatingPhotos.map((photo, i) => (
          <motion.div
            key={i}
            className={`absolute ${photo.pos} ${photo.size} p-1.5 pb-5 sm:p-2 sm:pb-6 bg-white/90 shadow-xl rounded-sm`}
            initial={{ opacity: 0, scale: 0.8, rotate: photo.rotate * 2 }}
            animate={{
              opacity: [0, 0.85, 0.75],
              scale: 1,
              y: [0, photo.y, 0],
              rotate: photo.rotate,
            }}
            transition={{
              duration: 1.5,
              delay: photo.delay,
              ease: "easeOut",
            }}
          >
            {/* Foto Polaroid */}
            <div className="w-full h-full overflow-hidden bg-gray-200 rounded-xs">
              <img
                src={photo.url}
                alt={`Memory ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Animasi Melayang */}
            <motion.div
              className="absolute inset-0"
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}

        {/* Floating hearts */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-sm sm:text-xl z-0"
            style={{
              left: `${25 + i * 18}%`,
              top: `${22 + (i % 2) * 45}%`,
            }}
            animate={{
              y: [0, -12, 0],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.7,
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      {/* Main content (Foreground Layer) */}
      <motion.div
        className="text-center z-10 relative max-w-[240px] xs:max-w-xs sm:max-w-xl mx-auto"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          className="mb-2 sm:mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        >
          <span className="text-3xl sm:text-5xl">🎂</span>
        </motion.div>

        <motion.p
          className="text-[10px] sm:text-sm tracking-[3px] sm:tracking-[4px] uppercase text-[var(--pink-main)] mb-2 sm:mb-4 opacity-80 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.7 }}
        >
          A LOVE LETTER FOR YOU
        </motion.p>

        <motion.h1
          className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-3 sm:mb-4 text-white leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Your Special Day
        </motion.h1>

        <motion.div
          className="w-16 sm:w-28 h-px mx-auto mb-3 sm:mb-6"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--pink-main), transparent)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />

        <motion.p
          className="font-elegant text-base sm:text-2xl text-white/80 italic max-w-xs sm:max-w-lg mx-auto drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          Dibuat sepenuh hati untuk orang tersayangkuu
        </motion.p>

        <motion.div
          className="mt-6 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <motion.button
            className="btn-gold shadow-lg text-xs sm:text-base px-6 py-2.5 sm:px-8 sm:py-3"
            onClick={onNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            READ MY LETTER
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
