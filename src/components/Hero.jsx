import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import herobg from "../assets/herobg.png"

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto overflow-hidden"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* TEXT CONTENT */}
      <div className="absolute inset-0 top-[120px] z-10">
        <div
          className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 h-40 sm:h-80 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Arti</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>
              Building beautiful web <br className="sm:block hidden" />
              experiences, one line <br className="sm:block hidden" />
              of code at a time
            </p>
          </div>
        </div>
      </div>

      {/* CANVAS BACKGROUND (BEHIND TEXT) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <ComputersCanvas />
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;