import { motion } from "motion/react";
import assets from "../assets/assets";

const stats = [
    { value: "50,000",  unit: "sq ft",  label: "Warehouse Facility",     sub: "Miami, Florida" },
    { value: "10,000+", unit: "",        label: "Units in Stock",          sub: "Ready to ship" },
    { value: "500+",    unit: "",        label: "Businesses Served",       sub: "Across the US" },
    { value: "2",       unit: "",        label: "Countries of Operation",  sub: "US & UAE" },
];

const pillars = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
        ),
        title: "Miami Warehouse",
        desc: "50,000 sq ft climate-controlled facility at 7931 NW 68th St — the operational core of NIBX.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
            </svg>
        ),
        title: "Quality Assurance",
        desc: "Every unit powered-on, tested and graded A+ / A / B before leaving our facility. Full documentation included.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
        ),
        title: "Global Reach",
        desc: "US-wide distribution backed by AZC Electronics Trading LLC — our UAE subsidiary serving the GCC market.",
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="relative px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white overflow-hidden"
        >
            {/* subtle bg blob */}
            <img src={assets.bgImage1} alt="" aria-hidden="true" className="absolute -top-60 -right-60 -z-10 dark:hidden pointer-events-none opacity-70" />

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* ── LEFT — text content ── */}
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        viewport={{ once: false }}
                        className="text-xs font-bold uppercase tracking-widest text-primary mb-4"
                    >
                        About NIBX L.L.C.
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        viewport={{ once: false }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-6"
                    >
                        The supply chain behind{" "}
                        <span className="bg-linear-to-r from-primary to-[#4d8cea] bg-clip-text text-transparent">
                            bulk electronics
                        </span>{" "}
                        in the US.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: false }}
                        className="space-y-4 text-sm sm:text-base text-gray-500 dark:text-white/65 leading-relaxed"
                    >
                        <p>
                            <span className="font-semibold text-gray-700 dark:text-white">NIBX L.L.C.</span> is a US-based electronics logistics and distribution company headquartered at{" "}
                            <span className="font-medium text-gray-700 dark:text-white">7931 NW 68th St, Miami, Florida 33166</span>.
                            We manage the full supply chain — from bulk procurement and warehousing to quality grading and nationwide distribution.
                        </p>
                        <p>
                            Our 50,000 sq ft Miami facility serves as the operational core, stocking thousands of laptops, monitors, printers, desktops, components and accessories — all quality-checked before every shipment.
                        </p>
                        <p>
                            Through our UAE subsidiary,{" "}
                            <a href="https://www.azcstore.com/" target="_blank" rel="noopener noreferrer"
                                className="font-semibold text-primary hover:underline underline-offset-2">
                                AZC Electronics Trading LLC
                            </a>
                            {" "}(azcstore.com · azcstore.info), NIBX extends its reach into the GCC market — providing the same US-grade quality and reliability to international partners.
                        </p>
                    </motion.div>

                    {/* pillars */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        transition={{ staggerChildren: 0.12 }}
                        viewport={{ once: false }}
                        className="mt-8 space-y-4"
                    >
                        {pillars.map((p, i) => (
                            <motion.div
                                key={i}
                                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                                transition={{ duration: 0.4 }}
                                className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 hover:bg-primary/3 transition-all duration-300"
                            >
                                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    {p.icon}
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-gray-800 dark:text-white mb-0.5">{p.title}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* ── RIGHT — stats grid + address card ── */}
                <div className="flex flex-col gap-6">

                    {/* stats grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        transition={{ staggerChildren: 0.1 }}
                        viewport={{ once: false }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {stats.map((s, i) => (
                            <motion.div
                                key={i}
                                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                                transition={{ duration: 0.45 }}
                                className="relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 overflow-hidden group hover:border-primary/40 hover:shadow-lg hover:shadow-primary/8 transition-all duration-300"
                            >
                                {/* subtle glow */}
                                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                                <p className="text-3xl font-black bg-linear-to-r from-primary to-[#4d8cea] bg-clip-text text-transparent relative z-10">
                                    {s.value}
                                    {s.unit && <span className="text-base font-semibold ml-1">{s.unit}</span>}
                                </p>
                                <p className="text-sm font-semibold text-gray-700 dark:text-white mt-1 relative z-10">{s.label}</p>
                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 relative z-10">{s.sub}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* address + identity card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.35 }}
                        viewport={{ once: false }}
                        className="relative rounded-2xl overflow-hidden border border-primary/20 bg-linear-to-br from-primary/8 via-indigo-500/5 to-blue-500/8 dark:from-primary/15 dark:via-indigo-500/8 dark:to-blue-500/15 p-6"
                    >
                        {/* decorative hex dot pattern */}
                        <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="about-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <circle cx="2" cy="2" r="1.2" fill="currentColor"/>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#about-dots)" className="text-primary"/>
                        </svg>

                        <div className="relative z-10 space-y-4">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Headquarters</p>
                                <p className="font-semibold text-gray-800 dark:text-white">NIBX L.L.C.</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">7931 NW 68th St</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Miami, Florida 33166</p>
                                <p className="text-sm font-semibold text-gray-700 dark:text-white">United States of America</p>
                            </div>

                            <div className="border-t border-primary/15 pt-4">
                                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">UAE Subsidiary</p>
                                <p className="font-semibold text-gray-800 dark:text-white">AZC Electronics Trading LLC</p>
                                <div className="flex flex-wrap gap-2 mt-1.5">
                                    <a href="https://www.azcstore.com/" target="_blank" rel="noopener noreferrer"
                                        className="text-xs px-3 py-1 rounded-full border border-primary/40 text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-200">
                                        azcstore.com ↗
                                    </a>
                                    <a href="https://www.azcstore.info/" target="_blank" rel="noopener noreferrer"
                                        className="text-xs px-3 py-1 rounded-full border border-primary/40 text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-200">
                                        azcstore.info ↗
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
