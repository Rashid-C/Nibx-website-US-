import { company_logos } from "../assets/assets";
import { motion } from "motion/react";

const TrustedBy = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80"
        >
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
                className="font-semibold text-gray-400 dark:text-white/40 text-xs tracking-widest uppercase"
            >
                Brands We Carry
            </motion.h3>

            {/* logo assets row */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.08 }}
                viewport={{ once: false }}
                className="flex items-center justify-center flex-wrap gap-8 sm:gap-12"
            >
                {company_logos.map((logo, index) => (
                    <motion.img
                        variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        whileHover={{ scale: 1.1 }}
                        key={index}
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        className="h-8 sm:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300"
                    />
                ))}
            </motion.div>

            {/* trust badges */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.1 }}
                viewport={{ once: false }}
                className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
                {[
                    { icon: "🇺🇸", label: "US Based Operations" },
                    { icon: "🏢", label: "UAE Partner: AZC Electronics" },
                    { icon: "📦", label: "Bulk Orders Welcome" },
                    { icon: "✅", label: "Quality Checked Stock" },
                ].map((badge, i) => (
                    <motion.div
                        key={i}
                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400 hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                        <span>{badge.icon}</span>
                        <span>{badge.label}</span>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default TrustedBy;
