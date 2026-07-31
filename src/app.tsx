import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import StarBackground from "./components/birthday/StarBackground";
import Countdown from "./components/birthday/Countdown";
import GiftBox from "./components/birthday/GiftBox";
import IntroPage from "./components/birthday/IntroPage";
import BirthdayLetter from "./components/birthday/BirthdayLetter";
import PhotoGallery from "./components/birthday/PhotoGallery";
import VideoSection from "./components/birthday/VideoSection";
import FinalWishes from "./components/birthday/FinalWishes";
import BackgroundMusic from "./components/birthday/BackgroundMusic";

type Section =
  | "countdown"
  | "gift"
  | "intro"
  | "letter"
  | "gallery"
  | "video"
  | "final";

// Set your partner's birthday here (YYYY-MM-DD)
const BIRTHDAY_DATE = "2026-07-28T00:00:00";

function App() {
  const [currentSection, setCurrentSection] = useState<Section>("countdown");

  const goNext = useCallback((next: Section) => {
    setCurrentSection(next);
  }, []);

  const getMidnightTarget = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0); // Jam 12 Malam Nanti (00:00:00)
    return tomorrow.toISOString();
  };

  const handleCountdownComplete = useCallback(() => {
    goNext("gift");
  }, [goNext]);

  const handleGiftOpen = useCallback(() => {
    goNext("intro");
  }, [goNext]);

  const handleRestart = useCallback(() => {
    setCurrentSection("countdown");
  }, []);

  const renderSection = () => {
    switch (currentSection) {
      /* ✅ BENAR: Menggunakan getMidnightTarget() dan handleCountdownComplete */
      case "countdown":
        return (
          <Countdown
            key="countdown"
            targetDate={getMidnightTarget()}
            onComplete={handleCountdownComplete}
          />
        );
      case "gift":
        return <GiftBox key="gift" onOpen={handleGiftOpen} />;
      case "intro":
        return <IntroPage key="intro" onNext={() => goNext("letter")} />;
      case "letter":
        return <BirthdayLetter key="letter" onNext={() => goNext("gallery")} />;
      case "gallery":
        return <PhotoGallery key="gallery" onNext={() => goNext("video")} />;
      case "video":
        return <VideoSection key="video" onNext={() => goNext("final")} />;
      case "final":
        return <FinalWishes key="final" onRestart={handleRestart} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-[var(--dark)] overflow-hidden">
      <StarBackground />
      <BackgroundMusic />
      <div className="relative z-10">
        <AnimatePresence mode="wait">{renderSection()}</AnimatePresence>
      </div>
    </div>
  );
}

export default App;
