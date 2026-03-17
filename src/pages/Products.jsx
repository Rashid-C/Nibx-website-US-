import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";
import Title from "../components/Title";
import { products, categoryList, catMeta } from "../data/products.jsx";

const ITEMS_PER_PAGE = 12;

const tagColors = {
    "Best Seller": "bg-primary/90 text-white",
    "New Arrival": "bg-emerald-500/90 text-white",
    "Bulk Deal":   "bg-amber-500/90 text-white",
};

const gradeColors = {
    "Grade A+": "bg-white/90 text-primary border border-primary/30 font-bold",
    "Grade A":  "bg-white/90 text-blue-600 border border-blue-300 font-semibold",
    "Grade B":  "bg-white/80 text-gray-500 border border-gray-300 font-medium",
};

const catIcons = {
    All:  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
    HP:   <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M1 20h22"/></svg>,
    ASUS: <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    Dell: <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><circle cx="12" cy="10" r="2"/></svg>,
};

const slideVariants = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ?  60 : -60 }),
    center:       ({ opacity: 1, x: 0 }),
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -60 :  60 }),
};

const ProductCard = ({ product, index, onClick }) => {
    const meta = catMeta[product.category] || catMeta.HP;
    const [imgError, setImgError] = useState(false);
    const cardImage = Array.isArray(product.image) ? product.image[0] : product.image;

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
            onClick={onClick}
            className="group cursor-pointer flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700/50 hover:border-primary/30 dark:hover:border-primary/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/8 dark:hover:shadow-black/40 transition-all duration-400 ease-out"
        >
            {/* Image area */}
            <div className="relative overflow-hidden h-52 bg-gray-50 dark:bg-gray-800">
                {!imgError ? (
                    <img
                        src={cardImage}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${meta.gradient} ${meta.color}`}>
                        {product.icon(60)}
                    </div>
                )}

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Hover CTA pill */}
                <div className="absolute inset-0 flex items-end justify-center pb-5 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400">
                    <span className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-xl border border-gray-100 dark:border-gray-700 inline-flex items-center gap-1.5">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                </div>

                {/* Tag badge */}
                {product.tag && (
                    <span className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm ${tagColors[product.tag]}`}>
                        {product.tag}
                    </span>
                )}
                {/* Grade badge */}
                {product.grade && (
                    <span className={`absolute top-3 right-3 text-[10px] px-2 py-1 rounded-full backdrop-blur-sm ${gradeColors[product.grade]}`}>
                        {product.grade}
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-2 flex-1">
                <p className={`text-[10px] font-bold uppercase tracking-widest ${meta.color}`}>{product.category}</p>
                <h3 className="font-bold text-sm leading-snug line-clamp-2 text-gray-800 dark:text-white">{product.name}</h3>
                <p className="text-xs text-gray-400 dark:text-gray-500 line-clamp-1">{product.tagline}</p>

                {/* Spec chips */}
                <div className="flex flex-wrap gap-1 mt-1">
                    {product.spec.split(" | ").slice(0, 3).map((s, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-medium">
                            {s}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                    <span className="text-[10px] text-gray-300 dark:text-gray-600 font-medium">
                        {product.specs?.Condition || "New"}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

/* ── component ── */
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

    const getCatCount = (cat) => cat === "All" ? products.length : products.filter(p => p.category === cat).length;

    return (
        <div className="relative overflow-hidden text-gray-700 dark:text-white">

            {/* bg blobs */}
            <img src={assets.bgImage2} alt="" aria-hidden="true" className="absolute -top-40 -left-60 -z-10 dark:hidden pointer-events-none" />
            <img src={assets.bgImage1} alt="" aria-hidden="true" className="absolute top-0 -right-60 -z-10 dark:hidden pointer-events-none" />

            {/* Floating ambient orbs */}
            <div className="absolute top-32 left-1/4 w-96 h-96 rounded-full bg-primary/4 dark:bg-primary/8 blur-3xl -z-10 pointer-events-none" />
            <div className="absolute top-64 right-1/4 w-72 h-72 rounded-full bg-blue-500/4 dark:bg-blue-500/8 blur-3xl -z-10 pointer-events-none" />

            {/* ── header ── */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center text-center gap-5 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 pb-10"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-4 py-1.5 rounded-full text-xs font-medium text-gray-500 dark:text-gray-400"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Bulk Electronics · HP · ASUS · Dell · Quality Checked
                </motion.div>

                <Title
                    title="Our Laptop Catalog"
                    desc="HP, ASUS and Dell laptops — sourced, tested and shipped in bulk across the United States and globally via AZC Electronics UAE."
                />

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="flex flex-wrap items-center justify-center gap-3"
                >
                    {[
                        { icon: "📦", text: `${products.length} Models In Stock` },
                        { icon: "✅", text: "Quality Checked" },
                        { icon: "🇺🇸", text: "US Operations" },
                        { icon: "🏢", text: "UAE: AZC Electronics" },
                    ].map((b, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 font-medium">
                            {b.icon} {b.text}
                        </span>
                    ))}
                </motion.div>
            </motion.div>

            {/* ── category filter ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-wrap gap-2.5 justify-center px-4 sm:px-12 lg:px-24 xl:px-40 pb-10"
            >
                {categoryList.map((label) => (
                    <button
                        key={label}
                        onClick={() => selectCategory(label)}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-250 ${
                            activeCategory === label
                                ? "btn-primary shadow-lg shadow-primary/20"
                                : "btn-secondary"
                        }`}
                    >
                        {catIcons[label]} {label}
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-5 text-center ${
                            activeCategory === label
                                ? "bg-white/20 text-white"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                        }`}>
                            {getCatCount(label)}
                        </span>
                    </button>
                ))}
            </motion.div>

            {/* ── product grid ── */}
            <div className="px-4 sm:px-12 lg:px-24 xl:px-40 overflow-hidden">

                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-between mb-6"
                >
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                        Showing <span className="text-gray-700 dark:text-gray-200 font-bold">{filtered.length}</span> laptop{filtered.length !== 1 ? "s" : ""}
                        {activeCategory !== "All" ? <span> · <span className={catMeta[activeCategory]?.color}>{activeCategory}</span></span> : ""}
                    </p>
                    {totalPages > 1 && (
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                            Page <span className="font-semibold text-gray-600 dark:text-gray-300">{page + 1}</span> of {totalPages}
                        </p>
                    )}
                </motion.div>

                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={`${activeCategory}-${page}`}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                    >
                        {currentItems.map((product, index) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                index={index}
                                onClick={() => navigate(`/products/${product.id}`)}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* ── pagination ── */}
                {totalPages > 1 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center justify-center gap-2 mt-12"
                    >
                        <button onClick={() => goTo(page - 1)} disabled={page === 0} aria-label="Previous page"
                            className="btn-icon disabled:opacity-30 disabled:cursor-not-allowed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                        </button>
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button key={i} onClick={() => goTo(i)} aria-label={`Page ${i + 1}`}
                                className={`${page === i ? "btn-primary h-10! w-10! px-0! shadow-md shadow-primary/30" : "btn-icon"} text-sm font-bold`}>
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

            {/* ── bulk CTA banner ── */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: false }}
                className="mx-4 sm:mx-12 lg:mx-24 xl:mx-40 mt-24 mb-20 rounded-3xl overflow-hidden relative"
            >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-indigo-500/5 to-blue-500/10 dark:from-primary/20 dark:via-indigo-500/10 dark:to-blue-500/20" />
                <div className="absolute inset-0 border border-primary/15 rounded-3xl" />

                {/* Orb decorations */}
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary/10 blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-blue-500/10 blur-2xl" />

                <div className="relative px-8 sm:px-16 py-14 sm:py-20 text-center">
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} viewport={{ once: false }}
                        className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Custom Bulk Orders
                    </motion.div>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: false }}
                        className="text-2xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Need a specific quantity or spec?
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: false }}
                        className="text-gray-500 dark:text-white/60 max-w-lg mx-auto mb-8 text-sm sm:text-base leading-relaxed">
                        Tell us your specs, quantity and timeline. NIBX handles sourcing, quality-checking and delivery — and internationally via{" "}
                        <a href="https://www.azcstore.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline underline-offset-2">AZC Electronics</a>{" "}in the UAE.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: false }}
                        className="flex flex-wrap items-center justify-center gap-4">
                        <a href="/#contact-us" className="btn-primary px-8 shadow-lg shadow-primary/25">
                            Get a Bulk Quote
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </a>
                        <a href="https://www.azcstore.com/" target="_blank" rel="noopener noreferrer" className="btn-secondary px-8">
                            Visit AZC Store ↗
                        </a>
                    </motion.div>
                </div>
            </motion.div>

        </div>
    );
};

export default Products;
