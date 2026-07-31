import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    const audio = new Audio("/audio/Serta Mulia - Sal Priadi.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audio.preload = "auto";
    audioRef.current = audio;

    audio.addEventListener("canplaythrough", () => {
      setIsLoaded(true);
    });

    audio.addEventListener("error", () => {
      console.warn("Background music failed to load");
    });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const startMusic = useCallback(async () => {
    if (!audioRef.current || !isLoaded) return;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
      setShowPrompt(false);
    } catch {
      // Autoplay blocked
    }
  }, [isLoaded]);

  const toggleMusic = useCallback(async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch {
        // failed to play
      }
    }
  }, [isPlaying]);

  // Auto-start on first user click
  useEffect(() => {
    const handleFirstClick = () => {
      if (showPrompt && isLoaded) {
        startMusic();
      }
    };
    document.addEventListener("click", handleFirstClick, { once: true });
    return () => document.removeEventListener("click", handleFirstClick);
  }, [showPrompt, isLoaded, startMusic]);

  return (
    <>
      {/* Music prompt toast */}
      <AnimatePresence>
        {showPrompt && isLoaded && (
          <motion.div
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <div
              className="glass-card px-5 py-3 rounded-full flex items-center gap-3 cursor-pointer border border-[var(--pink-main)]/20 hover:border-[var(--pink-main)]/40 transition-colors"
              onClick={startMusic}
            >
              <motion.span
                className="text-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🎵
              </motion.span>
              <span className="font-elegant text-sm text-white/70 italic">
                Klik untuk memutar musik
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating music toggle button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass-card flex items-center justify-center border border-[var(--pink-main)]/20 hover:border-[var(--pink-main)]/40 transition-all"
        onClick={toggleMusic}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={isPlaying ? "Matikan musik" : "Nyalakan musik"}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              className="flex items-center gap-[3px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[1, 2, 3, 4].map((bar) => (
                <motion.div
                  key={bar}
                  className="w-[3px] rounded-full bg-[var(--pink-main)]"
                  animate={{ height: [8, 16 + bar * 2, 8] }}
                  transition={{
                    duration: 0.6 + bar * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/60"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
