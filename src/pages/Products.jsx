import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";
import Title from "../components/Title";
import { products, categoryList, catMeta } from "../data/products.jsx";

const ITEMS_PER_PAGE = 24;

const tagColors = {
    "Best Seller": "bg-primary text-white",
    "New Arrival": "bg-emerald-500 text-white",
    "Bulk Deal":   "bg-amber-500 text-white",
};

const gradeColors = {
    "Grade A+": "text-primary border border-primary/40 bg-primary/8",
    "Grade A":  "text-blue-600 dark:text-blue-400 border border-blue-400/40 bg-blue-500/8",
    "Grade B":  "text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800",
};

const catIcons = {
    All:  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
    HP:   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M1 20h22"/></svg>,
    ASUS: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    Dell: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><circle cx="12" cy="10" r="2"/></svg>,
};

/* category bg colors for the padded image panel */
const catBg = {
    HP:   "bg-blue-50   dark:bg-blue-950/40",
    ASUS: "bg-violet-50 dark:bg-violet-950/40",
    Dell: "bg-indigo-50 dark:bg-indigo-950/40",
};

const ProductCard = ({ product, index, onClick }) => {
    const meta = catMeta[product.category] || catMeta.HP;
    const bg   = catBg[product.category]   || catBg.HP;
    const [imgError, setImgError] = useState(false);
    const cardImage = Array.isArray(product.image) ? product.image[0] : product.image;

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.5), ease: "easeOut" }}
            onClick={onClick}
            className="group cursor-pointer flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-primary/25 dark:hover:border-primary/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/8 dark:hover:shadow-black/50 transition-all duration-300 ease-out"
        >
            {/* Image panel — colored bg + padding */}
            <div className={`relative ${bg} shrink-0 p-5 pt-12`}>

                {/* Category label — top-left badge like screenshot */}
                <span className={`absolute top-4 left-4 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg bg-primary text-white shadow-sm`}>
                    {product.category}
                </span>

                {/* Grade — top-right */}
                {product.grade && (
                    <span className={`absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-sm ${gradeColors[product.grade]}`}>
                        {product.grade}
                    </span>
                )}

                {/* Image with rounded corners + shadow inside the panel */}
                <div className="relative overflow-hidden rounded-xl h-44 bg-white/60 dark:bg-gray-800/60 shadow-md">
                    {!imgError ? (
                        <img
                            src={cardImage}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        <div className={`w-full h-full flex items-center justify-center ${meta.color}`}>
                            {product.icon(56)}
                        </div>
                    )}

                    {/* CTA on hover */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white text-gray-800 text-xs font-bold px-4 py-2 rounded-full shadow-lg inline-flex items-center gap-1.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            View Details
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </span>
                    </div>
                </div>

                {/* Tag badge — bottom-left of panel */}
                {product.tag && (
                    <span className={`absolute bottom-4 left-5 text-[10px] font-bold px-2.5 py-1 rounded-full ${tagColors[product.tag]}`}>
                        {product.tag}
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-1.5 flex-1">
                <h3 className="font-bold text-sm leading-snug text-gray-800 dark:text-white line-clamp-2">{product.name}</h3>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 line-clamp-1">{product.tagline}</p>

                {/* Spec chips */}
                <div className="flex flex-wrap gap-1 mt-1.5">
                    {product.spec.split(" | ").slice(0, 3).map((s, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-medium">
                            {s}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                        Certified Refurbished
                    </span>
                    <span className="text-[10px] text-gray-300 dark:text-gray-600">{product.specs?.Warranty || ""}</span>
                </div>
            </div>
        </motion.div>
    );
};

/* ── Pagination ── */
const Pagination = ({ page, totalPages, onGoTo }) => {
    const getPages = () => {
        if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i);
        const pages = [];
        if (page <= 3) {
            pages.push(0, 1, 2, 3, 4, "...", totalPages - 1);
        } else if (page >= totalPages - 4) {
            pages.push(0, "...", totalPages - 5, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1);
        } else {
            pages.push(0, "...", page - 1, page, page + 1, "...", totalPages - 1);
        }
        return pages;
    };

    return (
        <div className="flex items-center justify-center gap-1.5 mt-12">
            <button
                onClick={() => onGoTo(page - 1)}
                disabled={page === 0}
                className="h-9 w-9 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-primary/40 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>

            {getPages().map((p, i) =>
                p === "..." ? (
                    <span key={`dots-${i}`} className="h-9 w-9 flex items-center justify-center text-gray-400 text-sm">…</span>
                ) : (
                    <button
                        key={p}
                        onClick={() => onGoTo(p)}
                        className={`h-9 w-9 flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 ${
                            page === p
                                ? "bg-primary text-white shadow-md shadow-primary/25"
                                : "border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-primary/40 hover:text-primary"
                        }`}
                    >
                        {p + 1}
                    </button>
                )
            )}

            <button
                onClick={() => onGoTo(page + 1)}
                disabled={page === totalPages - 1}
                className="h-9 w-9 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-primary/40 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
        </div>
    );
};

/* ── Main Component ── */
const Products = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    const filtered     = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory);
    const totalPages   = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const currentItems = filtered.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

    const selectCategory = (cat) => { setActiveCategory(cat); setPage(0); };
    const goTo = (i) => { setPage(i); window.scrollTo({ top: 0, behavior: "smooth" }); };
    const getCatCount = (cat) => cat === "All" ? products.length : products.filter(p => p.category === cat).length;

    return (
        <div className="relative overflow-hidden text-gray-700 dark:text-white">

            {/* bg blobs */}
            <img src={assets.bgImage2} alt="" aria-hidden="true" className="absolute -top-40 -left-60 -z-10 dark:hidden pointer-events-none" />
            <img src={assets.bgImage1} alt="" aria-hidden="true" className="absolute top-0 -right-60 -z-10 dark:hidden pointer-events-none" />
            <div className="absolute top-32 left-1/4 w-96 h-96 rounded-full bg-primary/4 dark:bg-primary/8 blur-3xl -z-10 pointer-events-none" />
            <div className="absolute top-64 right-1/4 w-72 h-72 rounded-full bg-blue-500/4 dark:bg-blue-500/8 blur-3xl -z-10 pointer-events-none" />

            {/* ── Header ── */}
            <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center text-center gap-5 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 pb-10"
            >
                <div className="inline-flex items-center gap-2 border border-gray-200 dark:border-gray-700 px-4 py-1.5 rounded-full text-xs font-medium text-gray-500 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Bulk Electronics · HP · ASUS · Dell · Quality Checked
                </div>

                <Title
                    title="Our Laptop Catalog"
                    desc="Certified refurbished HP, ASUS and Dell laptops — individually tested, quality-graded and shipped in bulk across the United States."
                />

                <div className="flex flex-wrap items-center justify-center gap-2.5">
                    {[
                        { label: `${products.length} Models` },
                        { label: "Quality Checked" },
                        { label: "US Operations" },
                        { label: "All 50 US States" },
                    ].map((b) => (
                        <span key={b.label} className="text-xs px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 font-medium">
                            {b.label}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* ── Category Filter ── */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-2 justify-center px-4 sm:px-12 lg:px-24 xl:px-40 pb-10"
            >
                {categoryList.map((label) => (
                    <button
                        key={label}
                        onClick={() => selectCategory(label)}
                        className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                            activeCategory === label
                                ? "btn-primary shadow-md shadow-primary/20"
                                : "btn-secondary"
                        }`}
                    >
                        {catIcons[label]}
                        {label}
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

            {/* ── Grid ── */}
            <div className="px-4 sm:px-12 lg:px-24 xl:px-40">

                {/* Result bar */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-between mb-6"
                >
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                        Showing{" "}
                        <span className="text-gray-700 dark:text-gray-200 font-semibold">{currentItems.length}</span>
                        {" "}of{" "}
                        <span className="text-gray-700 dark:text-gray-200 font-semibold">{filtered.length}</span>
                        {" "}laptop{filtered.length !== 1 ? "s" : ""}
                        {activeCategory !== "All" && (
                            <span> · <span className={catMeta[activeCategory]?.color}>{activeCategory}</span></span>
                        )}
                    </p>
                    {totalPages > 1 && (
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                            Page <span className="font-semibold text-gray-600 dark:text-gray-300">{page + 1}</span> / {totalPages}
                        </p>
                    )}
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeCategory}-${page}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
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

                {/* Pagination */}
                {totalPages > 1 && (
                    <Pagination page={page} totalPages={totalPages} onGoTo={goTo} />
                )}
            </div>

            {/* ── Bulk CTA ── */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: false }}
                className="mx-4 sm:mx-12 lg:mx-24 xl:mx-40 mt-24 mb-20 rounded-3xl overflow-hidden relative"
            >
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-indigo-500/5 to-blue-500/10 dark:from-primary/20 dark:via-indigo-500/10 dark:to-blue-500/20" />
                <div className="absolute inset-0 border border-primary/15 rounded-3xl" />
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary/10 blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-blue-500/10 blur-2xl" />

                <div className="relative px-8 sm:px-16 py-14 sm:py-20 text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Custom Bulk Orders
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Need a specific quantity or spec?
                    </h2>
                    <p className="text-gray-500 dark:text-white/60 max-w-lg mx-auto mb-8 text-sm sm:text-base leading-relaxed">
                        Tell us your specs, quantity and timeline. NIBX handles sourcing, quality-checking and bulk delivery across all 50 US states.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a href="/#contact-us" className="btn-primary px-8 shadow-lg shadow-primary/25">
                            Get a Bulk Quote
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </a>
                        <a href="/#contact-us" className="btn-secondary px-8">
                            Contact Us
                        </a>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default Products;
