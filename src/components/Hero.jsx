import assets from "../assets/assets";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const floatVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section
            id="hero"
            className="relative px-4 sm:px-12 lg:px-24 xl:px-40 pt-14 pb-20 overflow-hidden text-gray-700 dark:text-white"
        >
            {/* Background blobs */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute -top-32 -left-40 w-150 h-150 rounded-full bg-primary/6 dark:bg-primary/10 blur-3xl" />
                <div className="absolute top-20 right-0 w-100 h-100 rounded-full bg-sky-400/6 dark:bg-sky-400/8 blur-3xl" />
                <img src={assets.bgImage1} alt="" aria-hidden="true" className="absolute top-0 right-0 dark:hidden opacity-50" />
                <img src={assets.bgImage2} alt="" aria-hidden="true" className="absolute bottom-0 left-0 dark:hidden opacity-50" />
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* ── LEFT ── */}
                <div className="flex flex-col gap-7">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2.5 self-start border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Miami, FL · NIBX L.L.C.</span>
                        <span className="w-px h-3 bg-gray-300 dark:bg-gray-600" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">500+ US businesses</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 36 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-bold leading-[1.08] tracking-tight"
                    >
                        Electronics{" "}
                        <span className="bg-linear-to-r from-primary via-violet-500 to-sky-400 bg-clip-text text-transparent">
                            Logistics
                        </span>
                        {" "}&amp; Distribution,{" "}
                        <br className="hidden sm:block" />
                        <span className="text-gray-400 dark:text-gray-500 font-medium">Built for Scale.</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-base sm:text-lg text-gray-500 dark:text-white/55 max-w-lg leading-relaxed"
                    >
                        NIBX L.L.C. manages bulk procurement, warehousing, quality grading and
                        nationwide distribution — operated from our 50,000 sq ft Miami facility.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-3"
                    >
                        <button onClick={() => navigate("/products")} className="btn-primary">
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

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap w-full sm:w-auto overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700/60 divide-x divide-gray-200 dark:divide-gray-700/60 bg-white/50 dark:bg-gray-900/30 backdrop-blur-sm shadow-sm"
                    >
                        {[
                            { value: "50,000 sq ft", label: "Miami Warehouse" },
                            { value: "10,000+",      label: "Units in Stock" },
                            { value: "US & UAE",     label: "Global Ops" },
                        ].map((stat, i) => (
                            <div key={i} className="flex-1 px-5 py-4">
                                <p className="text-lg sm:text-2xl font-black bg-linear-to-r from-primary to-sky-400 bg-clip-text text-transparent whitespace-nowrap">
                                    {stat.value}
                                </p>
                                <p className="text-[11px] text-gray-500 dark:text-white/45 mt-0.5 whitespace-nowrap">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* ── RIGHT — image + floating cards ── */}
                <motion.div
                    initial={{ opacity: 0, x: 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative hidden lg:flex items-center justify-center"
                >
                    <img
                        src={assets.hero_img}
                        alt="NIBX electronics showcase"
                        className="w-full rounded-3xl shadow-2xl shadow-primary/10"
                    />

                    {/* Floating card — bottom left */}
                    <motion.div
                        variants={floatVariant}
                        initial="initial"
                        whileInView="animate"
                        transition={{ duration: 0.5, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="absolute -left-8 bottom-10 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-4 shadow-2xl shadow-gray-200/60 dark:shadow-black/40"
                    >
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">In Stock</p>
                        <p className="text-2xl font-black text-gray-900 dark:text-white leading-none">10,000<span className="text-primary">+</span></p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Units ready to ship</p>
                    </motion.div>

                    {/* Floating card — top right */}
                    <motion.div
                        variants={floatVariant}
                        initial="initial"
                        whileInView="animate"
                        transition={{ duration: 0.5, delay: 0.85 }}
                        viewport={{ once: true }}
                        className="absolute -right-6 top-10 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-4 shadow-2xl shadow-gray-200/60 dark:shadow-black/40"
                    >
                        <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-1">Quality Assured</p>
                        <p className="text-2xl font-black text-gray-900 dark:text-white leading-none">Grade <span className="text-primary">A+</span></p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Every unit tested</p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Mobile hero image */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="lg:hidden mt-10"
            >
                <img
                    src={assets.hero_img}
                    alt="NIBX electronics showcase"
                    className="w-full rounded-2xl shadow-xl shadow-primary/10"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
