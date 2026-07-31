import { motion } from "framer-motion";

interface BirthdayLetterProps {
  onNext: () => void;
}

export default function BirthdayLetter({ onNext }: BirthdayLetterProps) {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--purple-main)] opacity-3 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        className="text-center mb-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-xs tracking-[5px] uppercase text-[var(--pink-main)] opacity-60 mb-3">
          Untukmu
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light gold-gradient-text">
          Happy Birthday
        </h2>
      </motion.div>

      {/* Letter */}
      <motion.div
        className="letter-paper rounded-3xl p-6 sm:p-10 md:p-14 max-w-2xl w-full relative"
        initial={{ y: 40, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Decorative corner accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[var(--pink-main)]/20 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[var(--pink-main)]/20 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[var(--pink-main)]/20 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[var(--pink-main)]/20 rounded-br-lg" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <h3 className="font-display text-2xl sm:text-3xl text-center mb-2 text-white font-medium">
            Happy Birthday Sayangku ❤️
          </h3>

          <div
            className="w-16 h-px mx-auto mb-8"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--pink-main), transparent)",
            }}
          />

          <div className="space-y-5 font-elegant text-base sm:text-lg leading-relaxed text-white/75">
            <p>
              Selamat ulang tahun ya sayang! Hari ini hari yang spesial banget
              karena hari ini adalah hari lahir orang yang paling berarti di
              hidupku.
            </p>

            <p>
              Terima kasih udah selalu ada, udah bikin hari-hariku lebih
              bahagia, dan udah jadi alasan aku tersenyum setiap hari. Aku
              bersyukur banget bisa kenal dan punya sayang sampai sekarang.
            </p>

            <p>
              Di umur yang baru ini, aku cuma mau doain semoga semua hal baik
              selalu datang ke hidup sayang. Semoga sehat selalu, panjang umur,
              dimudahkan segala urusannya, dan semua impian sayang bisa tercapai
              satu per satu.
            </p>

            <p>
              Tetap jadi pribadi yang kuat, baik, dan hebat seperti sekarang ya.
              Jangan lupa kalau aku selalu ada buat sayang dalam keadaan apa
              pun.
            </p>

            <p>
              Sekali lagi, selamat ulang tahun sayangku. Semoga hari ini penuh
              kebahagiaan dan tahun ini menjadi tahun terbaik untuk sayang.
            </p>

            <p className="text-center text-[var(--rose)] font-medium pt-2">
              I love you, today, tomorrow, and always. ❤️
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Next button */}
      <motion.div
        className="mt-10"
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
          📸 OUR MEMORIES
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
