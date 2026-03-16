import { motion } from "motion/react";

/* ── glass card base style ─────────────────────────────── */
const glass = "bg-white/70 dark:bg-white/4 backdrop-blur-2xl border border-white/80 dark:border-white/8 shadow-2xl shadow-gray-200/50 dark:shadow-black/50";

const About = () => {
    return (
        <section
            id="about"
            className="relative px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 pb-24 overflow-hidden text-gray-700 dark:text-white"
        >
            {/* ── background decorations ───────────────── */}
            <div className="absolute -top-52 -right-52 w-150 h-150 bg-primary/8 dark:bg-primary/6 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500/7 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-linear-to-b from-transparent via-gray-200/60 dark:via-white/4 to-transparent pointer-events-none -z-10" />

            {/* dot grid */}
            <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="ab-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                        <circle cx="1.2" cy="1.2" r="1" fill="currentColor" opacity=".035" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ab-dots)" className="text-primary" />
            </svg>

            {/* ── section header ───────────────────────── */}
            <div className="mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: false }}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/8 dark:bg-primary/15 border border-primary/20 px-4 py-2 rounded-full mb-5"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                    About NIBX L.L.C.
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                    viewport={{ once: false }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5"
                >
                    Built on Precision.{" "}
                    <span className="bg-linear-to-r from-primary to-[#4d8cea] bg-clip-text text-transparent">
                        Scaled
                    </span>{" "}
                    for Volume.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false }}
                    className="text-base sm:text-lg text-gray-500 dark:text-white/55 max-w-2xl leading-relaxed"
                >
                    A US-registered electronics logistics company operating from Miami, Florida —
                    managing procurement, warehousing, quality grading and distribution at scale.
                </motion.p>
            </div>

            {/* ── main grid ────────────────────────────── */}
            <div className="grid lg:grid-cols-5 gap-5 items-start">

                {/* LEFT — company profile glass card (3 cols) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    viewport={{ once: false }}
                    className={`lg:col-span-3 ${glass} rounded-3xl p-8 sm:p-10 relative overflow-hidden`}
                >
                    {/* card bg accent */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/4 dark:bg-primary/6 rounded-full blur-2xl pointer-events-none" />

                    {/* entity header row */}
                    <div className="flex items-center gap-3 mb-8 relative z-10">
                        <div className="w-11 h-11 rounded-2xl bg-linear-to-br from-primary to-[#4d8cea] flex items-center justify-center shadow-lg shadow-primary/30 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                                <line x1="12" y1="22" x2="12" y2="15.5" />
                                <polyline points="22 8.5 12 15.5 2 8.5" />
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-black text-base text-gray-900 dark:text-white leading-none">NIBX L.L.C.</p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Electronics Logistics · Miami, Florida · USA</p>
                        </div>
                        <span className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Active Operations
                        </span>
                    </div>

                    {/* story */}
                    <div className="space-y-4 text-sm sm:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                        <p>
                            <span className="font-semibold text-gray-900 dark:text-white">NIBX L.L.C.</span> is a registered US company headquartered at{" "}
                            <span className="font-medium text-gray-800 dark:text-white/90">7931 NW 68th St, Miami, Florida 33166</span>. We operate a 50,000 sq ft climate-controlled warehouse facility — the central hub for all procurement, storage, quality inspection and distribution activity.
                        </p>
                        <p>
                            We serve enterprises, resellers, school districts and institutions across all 50 states — supplying bulk laptops, monitors, printers, desktops, components and accessories. Every unit is quality-graded and fully documented before leaving our facility.
                        </p>
                        <p>
                            Our international arm,{" "}
                            <a href="https://www.azcstore.com/" target="_blank" rel="noopener noreferrer"
                                className="font-semibold text-primary hover:underline underline-offset-2">
                                AZC Electronics Trading LLC
                            </a>
                            , extends NIBX operations into the UAE and GCC market — providing the same precision logistics to international partners.
                        </p>
                    </div>

                    {/* divider */}
                    <div className="border-t border-gray-100 dark:border-white/[0.07] my-7 relative z-10" />

                    {/* address block */}
                    <div className="flex items-start gap-4 relative z-10 mb-5">
                        <div className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-white/[0.06] flex items-center justify-center shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">US Headquarters</p>
                            <p className="font-semibold text-sm text-gray-800 dark:text-white">7931 NW 68th St</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Miami, Florida 33166</p>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">United States of America</p>
                        </div>
                    </div>

                    {/* AZC subsidiary card */}
                    <div className="relative z-10 rounded-2xl bg-primary/6 dark:bg-primary/10 border border-primary/15 dark:border-primary/20 p-5">
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-3">UAE Subsidiary</p>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                            </div>
                            <p className="font-bold text-sm text-gray-800 dark:text-white">AZC Electronics Trading LLC</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <a href="https://www.azcstore.com/" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-primary border border-primary/30 bg-white/60 dark:bg-white/6 hover:bg-primary hover:text-white hover:border-primary px-3 py-1.5 rounded-full transition-all duration-200">
                                azcstore.com
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                            </a>
                            <a href="https://www.azcstore.info/" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-primary border border-primary/30 bg-white/60 dark:bg-white/6 hover:bg-primary hover:text-white hover:border-primary px-3 py-1.5 rounded-full transition-all duration-200">
                                azcstore.info
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT — stat cards (2 cols) */}
                <div className="lg:col-span-2 flex flex-col gap-4">

                    {/* marquee stat — warehouse size */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, delay: 0.15 }}
                        viewport={{ once: false }}
                        className={`${glass} rounded-3xl p-7 relative overflow-hidden group`}
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-primary/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                        <div className="absolute bottom-0 right-0 w-28 h-28 bg-primary/[0.07] rounded-full blur-2xl" />
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 relative z-10">Miami Warehouse</p>
                        <p className="text-5xl font-black text-gray-900 dark:text-white leading-none relative z-10">
                            50,000
                            <span className="text-xl font-semibold text-gray-400 dark:text-gray-500 ml-1.5">sq ft</span>
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 relative z-10">Climate-controlled · 24/7 monitored</p>
                        <div className="mt-5 pt-4 border-t border-gray-100 dark:border-white/6 relative z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="text-primary/40">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                                <line x1="3" y1="14" x2="7" y2="14" />
                                <line x1="17" y1="14" x2="21" y2="14" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* two smaller stats side by side */}
                    <div className="grid grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: 0.25 }}
                            viewport={{ once: false }}
                            className={`${glass} rounded-2xl p-5 relative overflow-hidden group`}
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                            <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2 relative z-10">In Stock</p>
                            <p className="text-3xl font-black text-gray-900 dark:text-white leading-none relative z-10">10,000<span className="text-primary">+</span></p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1.5 relative z-10">Units ready to ship</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: 0.32 }}
                            viewport={{ once: false }}
                            className={`${glass} rounded-2xl p-5 relative overflow-hidden group`}
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                            <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2 relative z-10">Served</p>
                            <p className="text-3xl font-black text-gray-900 dark:text-white leading-none relative z-10">500<span className="text-primary">+</span></p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1.5 relative z-10">US businesses</p>
                        </motion.div>
                    </div>

                    {/* US + UAE presence card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.38 }}
                        viewport={{ once: false }}
                        className={`${glass} rounded-2xl p-5 relative overflow-hidden`}
                    >
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">Global Presence</p>
                        <div className="flex items-center gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="w-5 h-3.5 inline-block rounded-sm overflow-hidden shrink-0" style={{ background: "linear-gradient(180deg,#B22234 33%,#fff 33%,#fff 66%,#3C3B6E 66%)" }}>
                                        <span className="block w-full h-full" style={{ background: "repeating-linear-gradient(180deg,#B22234 0,#B22234 14%,#fff 14%,#fff 28%,#B22234 28%)" }} /></span>
                                    <p className="text-xs font-bold text-gray-800 dark:text-white">United States</p>
                                </div>
                                <p className="text-[10px] text-gray-400 dark:text-gray-500">All 50 states · Miami HQ</p>
                            </div>
                            <div className="w-px h-8 bg-gray-200 dark:bg-white/10 shrink-0" />
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="w-5 h-3.5 inline-block rounded-sm shrink-0 bg-linear-to-r from-[#00732F] via-white to-black" />
                                    <p className="text-xs font-bold text-gray-800 dark:text-white">UAE / GCC</p>
                                </div>
                                <p className="text-[10px] text-gray-400 dark:text-gray-500">Via AZC Electronics LLC</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.45 }}
                        viewport={{ once: false }}
                    >
                        <a href="#contact-us"
                            className="w-full flex items-center justify-center gap-2 bg-primary text-white rounded-2xl py-4 text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300">
                            Request a Bulk Quote
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* ── bottom operation pillars ──────────────── */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.1 }}
                viewport={{ once: false }}
                className="grid sm:grid-cols-3 gap-5 mt-5"
            >
                {[
                    {
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                                <line x1="3" y1="14" x2="7" y2="14" />
                                <line x1="17" y1="14" x2="21" y2="14" />
                            </svg>
                        ),
                        label: "Warehousing",
                        title: "Miami Facility",
                        desc: "50,000 sq ft of climate-controlled, 24/7 monitored storage at 7931 NW 68th St — the operational core of NIBX.",
                        color: "from-primary/10 to-indigo-500/5",
                        border: "group-hover:border-primary/30",
                    },
                    {
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <polyline points="9 12 11 14 15 10" />
                            </svg>
                        ),
                        label: "Quality Assurance",
                        title: "Grade A/A+/B Certified",
                        desc: "Every unit is powered-on, functionally tested and graded before shipment. Full inspection documentation included with every order.",
                        color: "from-emerald-500/8 to-teal-500/5",
                        border: "group-hover:border-emerald-500/30",
                    },
                    {
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="1" y="3" width="15" height="13" rx="1" />
                                <path d="M16 8h4l3 3v5h-7V8z" />
                                <circle cx="5.5" cy="18.5" r="2.5" />
                                <circle cx="18.5" cy="18.5" r="2.5" />
                            </svg>
                        ),
                        label: "Distribution",
                        title: "US-Wide & International",
                        desc: "Freight from single pallets to full truckloads — covering all 50 states, with cross-border capability to UAE and GCC markets.",
                        color: "from-blue-500/8 to-cyan-500/5",
                        border: "group-hover:border-blue-500/30",
                    },
                ].map((p, i) => (
                    <motion.div
                        key={i}
                        variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.45 }}
                        className={`group ${glass} rounded-2xl p-6 relative overflow-hidden border border-gray-200/60 dark:border-white/8 ${p.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                    >
                        <div className={`absolute inset-0 bg-linear-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                        <div className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-white/[0.07] flex items-center justify-center text-primary mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                            {p.icon}
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1 relative z-10">{p.label}</p>
                        <h3 className="font-bold text-sm text-gray-800 dark:text-white mb-2 relative z-10">{p.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed relative z-10">{p.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default About;
