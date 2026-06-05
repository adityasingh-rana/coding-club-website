import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function IntroAnimation() {
  return (
    <motion.div
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      {/* Logo */}
      <motion.img
        src="/icons/hacker.png"
        alt="IET Community"
        className="z-10 w-32 h-32"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Typewriter */}
      <div className="z-10 h-8 mt-6">
        <TypeAnimation
          sequence={[
            "Initializing IET Community...",
            1000,
            "Loading Communities...",
            1000,
            "Loading Events...",
            1000,
            "Ready.",
          ]}
          speed={80}
          cursor={true}
          className="text-[#20B2AA] text-lg font-mono"
        />
      </div>

      {/* Loading Bar */}
      <div className="z-10 mt-8 w-72 h-1 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="z-10 h-full bg-[#20B2AA]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 6,
            ease: "linear",
          }}
        />
      </div>
    </motion.div>
  );
}