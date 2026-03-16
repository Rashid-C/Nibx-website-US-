import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";
import Title from "../components/Title";
import { products, categoryList, catMeta } from "../data/products.jsx";

const ITEMS_PER_PAGE = 24;

const tagColors = {
    "Best Seller": "bg-primary/10 text-primary border border-primary/20",
    "New Arrival": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
    "Bulk Deal":   "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20",
};

const gradeColors = {
    "Grade A+": "bg-primary/10 text-primary border border-primary/20 font-bold",
    "Grade A":  "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-semibold",
    "Grade B":  "bg-gray-100 dark:bg-gray-700/60 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-600 font-medium",
};

const catIcons = {
    All:         <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
    Laptops:     <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M1 20h22"/></svg>,
    Monitors:    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    Printers:    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/><path d="M6 4h12v4H6z"/></svg>,
    Desktops:    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><circle cx="12" cy="10" r="2"/></svg>,
    Components:  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M2 15h2M2 9h2M15 20v2M9 20v2M20 15h2M20 9h2"/></svg>,
    Accessories: <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
};

const slideVariants = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ?  60 : -60 }),
    center:       ({ opacity: 1, x: 0 }),
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -60 :  60 }),
};

/* ── component ─────────────────────────────────────────── */
const Products = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [page, setPage]       = useState(0);
    const [direction, setDirection] = useState(1);
    const navigate = useNavigate();

    const filtered     = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory);
    const totalPages   = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const currentItems = filtered.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

    const selectCategory = (cat) => { setActiveCategory(cat); setPage(0); };
    const goTo = (i) => { setDirection(i > page ? 1 : -1); setPage(i); };

    return (
        <div className="relative overflow-hidden text-gray-700 dark:text-white">

            {/* bg blobs */}
            <img src={assets.bgImage2} alt="" aria-hidden="true" className="absolute -top-40 -left-60 -z-10 dark:hidden pointer-events-none" />
            <img src={assets.bgImage1} alt="" aria-hidden="true" className="absolute top-0 -right-60 -z-10 dark:hidden pointer-events-none" />

            {/* ── header ──────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center text-center gap-5 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 pb-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-4 py-1.5 rounded-full text-xs font-medium text-gray-500 dark:text-gray-400"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    US-Grade Bulk Electronics · Quality Checked
                </motion.div>

                <Title
                    title="Our Product Range"
                    desc="Laptops, monitors, printers, desktops, components & accessories — sourced, stored and shipped in bulk across the United States."
                />

                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="flex flex-wrap items-center justify-center gap-3"
                >
                    {[
                        { icon: "🇺🇸", text: "US Operations" },
                        { icon: "📦", text: "Bulk Orders" },
                        { icon: "✅", text: "Quality Checked" },
                        { icon: "🏢", text: "UAE: AZC Electronics" },
                    ].map((b, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 font-medium">
                            {b.icon} {b.text}
                        </span>
                    ))}
                    <a href="https://www.azcstore.com/" target="_blank" rel="noopener noreferrer"
                        className="btn-secondary min-h-9 px-4 text-xs">
                        azcstore.com ↗
                    </a>
                </motion.div>
            </motion.div>

            {/* ── category filter ──────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3 justify-center px-4 sm:px-12 lg:px-24 xl:px-40 pb-10"
            >
                {categoryList.map((label) => (
                    <button
                        key={label}
                        onClick={() => selectCategory(label)}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                            activeCategory === label
                                ? "btn-primary"
                                : "btn-secondary"
                        }`}
                    >
                        {catIcons[label]} {label}
                    </button>
                ))}
            </motion.div>

            {/* ── product grid ─────────────────────────── */}
            <div className="px-4 sm:px-12 lg:px-24 xl:px-40 overflow-hidden">

                <motion.p
                    key={activeCategory}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs text-gray-400 dark:text-gray-500 mb-6"
                >
                    Showing <span className="text-gray-600 dark:text-gray-300 font-semibold">{filtered.length}</span> product{filtered.length !== 1 ? "s" : ""}{activeCategory !== "All" ? ` in ${activeCategory}` : ""}
                </motion.p>

                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={`${activeCategory}-${page}`}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                    >
                        {currentItems.map((product, index) => {
                            const meta = catMeta[product.category] || catMeta.Laptops;
                            return (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 28 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.06 }}
                                    onClick={() => navigate(`/products/${product.id}`)}
                                    className="group cursor-pointer relative flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-xl hover:shadow-gray-200/60 dark:hover:shadow-black/30 hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300"
                                >
                                    {/* ── icon panel ── */}
                                    <div className={`relative h-44 flex items-center justify-center bg-linear-to-br ${meta.gradient} overflow-hidden`}>

                                        {/* subtle dot texture */}
                                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <pattern id={`dots-${product.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                                    <circle cx="2" cy="2" r="1" fill="currentColor" opacity=".15"/>
                                                </pattern>
                                            </defs>
                                            <rect width="100%" height="100%" fill={`url(#dots-${product.id})`}/>
                                        </svg>

                                        {/* glow */}
                                        <div className="absolute w-32 h-32 rounded-full bg-white/20 blur-3xl -top-6 -right-6 group-hover:scale-150 transition-transform duration-700" />

                                        {/* icon — currentColor from catMeta */}
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.45, delay: index * 0.06 + 0.1 }}
                                            className={`relative z-10 ${meta.color} group-hover:scale-110 transition-transform duration-500`}
                                        >
                                            {product.icon(60)}
                                        </motion.div>

                                        {/* tag badge */}
                                        {product.tag && (
                                            <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[product.tag]}`}>
                                                {product.tag}
                                            </span>
                                        )}
                                        {/* grade badge */}
                                        {product.grade && (
                                            <span className={`absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full ${gradeColors[product.grade]}`}>
                                                {product.grade}
                                            </span>
                                        )}
                                    </div>

                                    {/* ── content ── */}
                                    <div className="p-5 flex flex-col gap-2 flex-1">
                                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{product.category}</p>
                                        <h3 className="font-bold text-sm leading-snug line-clamp-2 text-gray-800 dark:text-white">{product.name}</h3>
                                        <p className="text-xs text-gray-400 dark:text-gray-500 line-clamp-1">{product.tagline}</p>

                                        {/* spec chips */}
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {product.spec.split(" | ").map((s, i) => (
                                                <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-medium leading-4">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>

                                        {/* view details CTA */}
                                        <div className="mt-auto pt-3 flex items-center justify-between border-t border-gray-100 dark:border-gray-800">
                                            <span className="text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1">
                                                View Details
                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                            </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors duration-200"><path d="m9 18 6-6-6-6"/></svg>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {/* ── pagination ── */}
                {totalPages > 1 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="flex items-center justify-center gap-3 mt-12"
                    >
                        <button onClick={() => goTo(page - 1)} disabled={page === 0} aria-label="Previous page"
                            className="btn-icon disabled:opacity-30 disabled:cursor-not-allowed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                        </button>
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button key={i} onClick={() => goTo(i)} aria-label={`Page ${i + 1}`} aria-current={page === i ? "page" : undefined}
                                className={`${page === i ? "btn-primary !h-11 !w-11 !px-0" : "btn-icon"} text-sm font-semibold`}>
                                {i + 1}
                            </button>
                        ))}
                        <button onClick={() => goTo(page + 1)} disabled={page === totalPages - 1} aria-label="Next page"
                            className="btn-icon disabled:opacity-30 disabled:cursor-not-allowed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </button>
                    </motion.div>
                )}
            </div>

            {/* ── bulk CTA banner ─────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: false }}
                className="mx-4 sm:mx-12 lg:mx-24 xl:mx-40 mt-24 mb-20 rounded-2xl overflow-hidden relative"
            >
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-indigo-500/5 to-blue-500/10 dark:from-primary/20 dark:via-indigo-500/10 dark:to-blue-500/20" />
                <div className="absolute inset-0 border border-primary/20 rounded-2xl" />
                <div className="relative px-8 sm:px-14 py-12 sm:py-16 text-center">
                    <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} viewport={{ once: false }}
                        className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                        Custom Bulk Orders
                    </motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: false }}
                        className="text-2xl sm:text-4xl font-medium mb-4">
                        Need a specific quantity or spec?
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: false }}
                        className="text-gray-500 dark:text-white/60 max-w-lg mx-auto mb-8 text-sm sm:text-base">
                        Tell us your specs, quantity and timeline. NIBX handles sourcing, quality-checking and delivery across the US — and internationally via{" "}
                        <a href="https://www.azcstore.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline underline-offset-2">AZC Electronics</a>{" "}in the UAE.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: false }}
                        className="flex flex-wrap items-center justify-center gap-4">
                        <a href="/#contact-us"
                            className="btn-primary px-8">
                            Get a Bulk Quote
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </a>
                        <a href="https://www.azcstore.com/" target="_blank" rel="noopener noreferrer"
                            className="btn-secondary px-8">
                            Visit AZC Store ↗
                        </a>
                    </motion.div>
                </div>
            </motion.div>

        </div>
    );
};

export default Products;
