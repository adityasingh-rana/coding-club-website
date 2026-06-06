import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function IntroAnimation() {
  const [moveLogo, setMoveLogo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setMoveLogo(true), 5600);
    const t2 = setTimeout(() => setFadeOut(true), 6200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          className="fixed inset-0 z-9999 overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <motion.img
            src="/icons/hacker.png"
            alt="IET Community"
            className="absolute z-20 h-32 w-32 drop-shadow-2xl will-change-transform"
            initial={{
              left: "50%",
              top: "45%",
              x: "-50%",
              y: "-50%",
              scale: 1,
              opacity: 1,
            }}
            animate={
              moveLogo
                ? {
                    left: "4px",
                    top: "4px",
                    x: 0,
                    y: 0,
                    scale: 0.25,
                    opacity: 1,
                  }
                : {
                    left: "50%",
                    top: "45%",
                    x: "-50%",
                    y: "-50%",
                    scale: 1,
                    opacity: 1,
                  }
            }
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          />

          <div className="absolute left-1/2 top-[58%] z-10 -translate-x-1/2 text-center">
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

          <div className="absolute left-1/2 top-[66%] z-10 w-72 -translate-x-1/2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-0.75 bg-[#20B2AA]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 5.6,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}