import { company_logos } from "../assets/assets";
import { motion } from "motion/react";

const TrustedBy = () => {
    const doubled = [...company_logos, ...company_logos];

    return (
        <section className="relative px-4 sm:px-12 lg:px-24 xl:px-40 py-16 overflow-hidden text-gray-700 dark:text-white">

            {/* Label */}
            <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-white/30 mb-10"
            >
                Brands We Carry
            </motion.p>

            {/* Marquee track */}
            <div className="relative overflow-hidden">
                {/* left fade */}
                <div className="absolute left-0 top-0 h-full w-20 bg-linear-to-r from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />
                {/* right fade */}
                <div className="absolute right-0 top-0 h-full w-20 bg-linear-to-l from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />

                <div className="flex animate-marquee gap-12 sm:gap-16 w-max">
                    {doubled.map((logo, i) => (
                        <img
                            key={i}
                            src={logo.src}
                            alt={`${logo.name} logo`}
                            className="h-7 sm:h-9 w-auto object-contain opacity-50 dark:opacity-30 hover:opacity-90 dark:hover:opacity-70 transition-opacity duration-300 shrink-0"
                        />
                    ))}
                </div>
            </div>

            {/* Trust badges */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-2.5 mt-10"
            >
                {[
                    { icon: "🇺🇸", label: "US Based Operations" },
                    { icon: "🏢", label: "UAE Partner: AZC Electronics" },
                    { icon: "📦", label: "Bulk Orders Welcome" },
                    { icon: "✅", label: "Quality Checked Stock" },
                ].map((badge, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35, delay: i * 0.07 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400 bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm hover:border-primary/40 hover:text-primary transition-all duration-200"
                    >
                        {badge.icon} {badge.label}
                    </motion.span>
                ))}
            </motion.div>
        </section>
    );
};

export default TrustedBy;
