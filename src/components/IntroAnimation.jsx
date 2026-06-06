import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function IntroAnimation() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <motion.img
        layoutId="site-logo"
        src="/icons/hacker.png"
        alt="IET Community"
        className="h-32 w-32"
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      />

      {/* Typewriter */}
      <div className="mt-6 h-8">
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
          className="font-mono text-lg text-[#20B2AA]"
        />
      </div>

      {/* Loading Bar */}
      <div className="mt-8 h-1 w-72 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full bg-[#20B2AA]"
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