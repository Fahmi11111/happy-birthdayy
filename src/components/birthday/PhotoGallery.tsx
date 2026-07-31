import { motion } from "framer-motion";

interface PhotoGalleryProps {
  onNext: () => void;
}

// 1. TAMBAHKAN JALUR/PATH FOTO DI SINI (simpan foto di folder public/)
const photos = [
  { url: "/foto1.jpeg", rotate: -3, delay: 0.1 },
  { url: "/foto11.jpeg", rotate: 2, delay: 0.2 },
  { url: "/foto15.jpeg", rotate: -1, delay: 0.3 },
  { url: "/foto8.jpeg", rotate: 4, delay: 0.4 },
  { url: "/foto7.jpeg", rotate: -2, delay: 0.5 },
  { url: "/foto14.jpeg", rotate: 3, delay: 0.6 },
  { url: "/foto10.jpeg", rotate: -4, delay: 0.7 },
  { url: "/foto13.jpeg", rotate: 1, delay: 0.8 },
];

const momentLabels = [
  "Momen bersama",
  "Kecantikan alami",
  "Cinta sejati",
  "Kenangan manis",
  "Perayaan",
  "Malam yang tenang",
  "Keindahan hidup",
  "Hadiah dari hati",
];

export default function PhotoGallery({ onNext }: PhotoGalleryProps) {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-10 sm:mb-14"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-xs tracking-[5px] uppercase text-[var(--pink-main)] opacity-60 mb-3">
          MOMENT KITA
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light mb-3 text-white">
          Our Memories
        </h2>
        <p className="font-elegant text-lg text-white/40 italic">
          setiap momen adalah waktu yang berharga
        </p>
      </motion.div>

      {/* Photo grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 max-w-4xl w-full mb-12">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            className="polaroid rounded-lg cursor-pointer overflow-hidden"
            style={{ rotate: photo.rotate }}
            initial={{ opacity: 0, y: 30, rotate: photo.rotate * 2 }}
            animate={{ opacity: 1, y: 0, rotate: photo.rotate }}
            transition={{
              delay: 0.4 + photo.delay,
              duration: 0.6,
              type: "spring",
            }}
            whileHover={{
              scale: 1.08,
              rotate: 0,
              zIndex: 10,
              transition: { duration: 0.3 },
            }}
          >
            {/* 2. TAG FOTO UTAMA */}
            <div className="w-full aspect-square rounded-sm overflow-hidden bg-black/20">
              <img
                src={photo.url}
                alt={momentLabels[i]}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="py-2 text-center">
              <span className="text-[10px] text-gray-400 font-elegant italic">
                {momentLabels[i]}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Next button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.button
          className="btn-gold"
          onClick={onNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🎬 WATCH VIDEO
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
