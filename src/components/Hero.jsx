import assets from "../assets/assets";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      {/* top badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2.5 border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm px-4 py-2 rounded-full"
      >
        <span className="flex items-center gap-1.5 text-xs font-semibold text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Miami, Florida · Est. NIBX L.L.C.
        </span>
        <span className="w-px h-3 bg-gray-300 dark:bg-gray-600" />
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Trusted by 500+ US businesses</p>
      </motion.div>

      {/* headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl"
      >
        Electronics Logistics &amp;{" "}
        <span className="bg-linear-to-r from-primary to-[#4d8cea] bg-clip-text text-transparent">
          Distribution,
        </span>{" "}
        Built for Scale.
      </motion.h1>

      {/* subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.85 }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/70 max-w-xl pb-3"
      >
        NIBX L.L.C. manages bulk procurement, warehousing, quality grading and
        nationwide distribution of electronics — operated from our Miami, FL facility.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-4 pt-1"
      >
        <button
          onClick={() => navigate("/products")}
          className="btn-primary"
        >
          Browse Products
          <img src={assets.arrow_icon} width={14} alt="" aria-hidden="true" />
        </button>
        <button
          onClick={() => document.querySelector("#contact-us")?.scrollIntoView({ behavior: "smooth" })}
          className="btn-secondary"
        >
          Request a Quote
        </button>
      </motion.div>

      {/* stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-stretch justify-center gap-0 pt-6 text-center divide-x divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden"
      >
        {[
          { value: "50,000 sq ft", label: "Miami Warehouse" },
          { value: "10,000+",      label: "Units in Stock" },
          { value: "US & UAE",     label: "Global Operations" },
        ].map((stat, i) => (
          <div key={i} className="px-8 py-4">
            <p className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-primary to-[#4d8cea] bg-clip-text text-transparent">
              {stat.value}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-white/55 mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.5 }}
        viewport={{ once: true }}
        className="relative w-full max-w-6xl"
      >
        <img
          src={assets.hero_img}
          alt="NIBX electronics showcase"
          className="w-full"
        />
        <img
          src={assets.bgImage1}
          alt=""
          aria-hidden="true"
          className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
