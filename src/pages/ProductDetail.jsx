import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { products, catMeta } from "../data/products.jsx";

const tagColors = {
    "Best Seller": "bg-primary text-white",
    "New Arrival": "bg-emerald-500 text-white",
    "Bulk Deal":   "bg-amber-500 text-white",
};

const gradeColors = {
    "Grade A+": "bg-primary/10 text-primary border border-primary/25 font-bold",
    "Grade A":  "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-400/25 font-semibold",
    "Grade B":  "bg-gray-100 dark:bg-gray-700/60 text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600",
};

const ProductDetail = () => {
    const { id }   = useParams();
    const navigate = useNavigate();
    const [activeThumb, setActiveThumb] = useState(0);
    const [activeTab, setActiveTab]     = useState("specs");

    const product = products.find(p => p.id === Number(id));

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-gray-500 dark:text-gray-400 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-30"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                <p className="text-lg font-semibold">Product not found.</p>
                <button onClick={() => navigate("/products")} className="btn-secondary">← Back to Products</button>
            </div>
        );
    }

    const meta    = catMeta[product.category] || catMeta.HP;
    const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
    const thumbs  = product.images
        ? product.images
        : Array.isArray(product.image)
        ? product.image
        : [product.image];

    return (
        <div className="text-gray-700 dark:text-white">

            {/* ── Breadcrumb ── */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="px-4 sm:px-12 lg:px-24 xl:px-40 pt-6 pb-2"
            >
                <nav className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    <span className={`font-semibold line-clamp-1 max-w-xs ${meta.color}`}>{product.name}</span>
                </nav>
            </motion.div>

            {/* ── Main Detail ── */}
            <div className="px-4 sm:px-12 lg:px-24 xl:px-40 pt-8 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* LEFT — Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -32 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        className="flex flex-col gap-4 lg:sticky lg:top-6"
                    >
                        {/* Main image */}
                        <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeThumb}
                                    src={thumbs[activeThumb]}
                                    alt={product.name}
                                    initial={{ opacity: 0, scale: 1.03 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = "none";
                                        e.target.nextSibling.style.display = "flex";
                                    }}
                                />
                            </AnimatePresence>
                            {/* Icon fallback */}
                            <div className={`hidden absolute inset-0 items-center justify-center bg-linear-to-br ${meta.gradient} ${meta.color}`}>
                                {product.icon(100)}
                            </div>

                            {/* Badges */}
                            {product.tag && (
                                <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full ${tagColors[product.tag]}`}>
                                    {product.tag}
                                </span>
                            )}
                            {product.grade && (
                                <span className={`absolute top-4 right-4 text-xs px-3 py-1.5 rounded-full backdrop-blur-sm ${gradeColors[product.grade]}`}>
                                    {product.grade}
                                </span>
                            )}
                        </div>

                        {/* Thumbnails — only if more than 1 */}
                        {thumbs.length > 1 && (
                            <div className="flex gap-2.5">
                                {thumbs.map((src, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveThumb(i)}
                                        className={`relative rounded-xl overflow-hidden aspect-4/3 flex-1 border-2 transition-all duration-200 ${
                                            activeThumb === i
                                                ? "border-primary shadow-md shadow-primary/20"
                                                : "border-gray-100 dark:border-gray-700 opacity-55 hover:opacity-100"
                                        }`}
                                    >
                                        <img src={src} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Quick spec chips */}
                        <div className="flex flex-wrap gap-1.5">
                            {product.spec.split(" | ").map((s, i) => (
                                <span key={i} className="text-xs px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium border border-gray-200 dark:border-gray-700">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT — Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 32 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
                        className="flex flex-col gap-6 py-2"
                    >
                        {/* Category badge */}
                        <span className={`inline-flex items-center gap-1.5 self-start text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${meta.color} bg-gray-100 dark:bg-gray-800`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                            {product.category} Laptop
                        </span>

                        {/* Name & tagline */}
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-2 text-gray-900 dark:text-white">{product.name}</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{product.tagline}</p>
                        </div>

                        {/* Description */}
                        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 border-l-2 border-primary/30 pl-4">
                            {product.description}
                        </p>

                        {/* Tabs */}
                        <div>
                            <div className="flex gap-0 border-b border-gray-100 dark:border-gray-800 mb-5">
                                {["specs", "condition"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 border-b-2 -mb-px ${
                                            activeTab === tab
                                                ? "border-primary text-primary"
                                                : "border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                        }`}
                                    >
                                        {tab === "specs" ? "Specifications" : "Condition & Warranty"}
                                    </button>
                                ))}
                            </div>

                            <AnimatePresence mode="wait">
                                {activeTab === "specs" && product.specs && (
                                    <motion.div
                                        key="specs"
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.2 }}
                                        className="rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden"
                                    >
                                        <div className="divide-y divide-gray-50 dark:divide-gray-800">
                                            {Object.entries(product.specs).map(([key, val]) => (
                                                <div
                                                    key={key}
                                                    className="flex items-center px-4 py-3 gap-4 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
                                                >
                                                    <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 w-28 shrink-0">{key}</span>
                                                    <span className="text-xs text-gray-700 dark:text-gray-200 font-medium">{val}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === "condition" && (
                                    <motion.div
                                        key="condition"
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex flex-col gap-2.5"
                                    >
                                        {[
                                            { icon: "🛡️", label: "Condition",      val: "Certified Refurbished" },
                                            { icon: "✅", label: "Quality Check",  val: "Individually tested by NIBX" },
                                            { icon: "📋", label: "Warranty",       val: product.specs?.Warranty || "1 year" },
                                            { icon: "📦", label: "Bulk Available", val: "Yes — contact us for volume pricing" },
                                            { icon: "🚚", label: "Shipping",       val: "US nationwide · All 50 states, tracked & insured" },
                                        ].map((row) => (
                                            <div key={row.label} className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
                                                <span className="text-base mt-0.5">{row.icon}</span>
                                                <div>
                                                    <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 mb-0.5">{row.label}</p>
                                                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{row.val}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* CTA buttons */}
                        <div className="flex flex-wrap gap-3 pt-1">
                            <a href="/#contact-us" className="btn-primary shadow-lg shadow-primary/25">
                                I'm Interested
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </a>
                            <a href="/#contact-us" className="btn-secondary">
                                Request Bulk Quote
                            </a>
                        </div>

                        {/* Trust strip */}
                        <div className="flex flex-wrap gap-4 pt-2 border-t border-gray-100 dark:border-gray-800">
                            {[
                                { icon: "🛡️", text: "Quality Checked" },
                                { icon: "📦", text: "Bulk Orders" },
                                { icon: "🇺🇸", text: "US-Based Ops" },
                            ].map((t) => (
                                <span key={t.text} className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 font-medium">
                                    {t.icon} {t.text}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Related Products ── */}
            {related.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    viewport={{ once: true }}
                    className="px-4 sm:px-12 lg:px-24 xl:px-40 pb-20"
                >
                    <div className="border-t border-gray-100 dark:border-gray-800 mb-10" />

                    <div className="flex items-center justify-between mb-7">
                        <div>
                            <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${meta.color}`}>More from {product.category}</p>
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Related Products</h2>
                        </div>
                        <button onClick={() => navigate("/products")} className="btn-secondary text-xs px-5">
                            View All
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </button>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {related.map((rel, index) => {
                            const relMeta   = catMeta[rel.category] || catMeta.HP;
                            const relImage  = Array.isArray(rel.image) ? rel.image[0] : rel.image;
                            return (
                                <RelatedCard
                                    key={rel.id}
                                    rel={rel}
                                    relMeta={relMeta}
                                    relImage={relImage}
                                    index={index}
                                    onNavigate={() => navigate(`/products/${rel.id}`)}
                                />
                            );
                        })}
                    </div>
                </motion.div>
            )}

        </div>
    );
};

const RelatedCard = ({ rel, relMeta, relImage, index, onNavigate }) => {
    const [imgErr, setImgErr] = useState(false);
    const tagColors = {
        "Best Seller": "bg-primary text-white",
        "New Arrival": "bg-emerald-500 text-white",
        "Bulk Deal":   "bg-amber-500 text-white",
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
            onClick={onNavigate}
            className="group cursor-pointer flex flex-col rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl hover:shadow-gray-200/60 dark:hover:shadow-black/30 hover:border-primary/25 hover:-translate-y-1 transition-all duration-300"
        >
            <div className="relative overflow-hidden h-44 bg-gray-50 dark:bg-gray-800">
                {!imgErr ? (
                    <img
                        src={relImage}
                        alt={rel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() => setImgErr(true)}
                    />
                ) : (
                    <div className={`w-full h-full flex items-center justify-center bg-linear-to-br ${relMeta.gradient} ${relMeta.color}`}>
                        {rel.icon(48)}
                    </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {rel.tag && (
                    <span className={`absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full ${tagColors[rel.tag]}`}>
                        {rel.tag}
                    </span>
                )}
            </div>
            <div className="p-4 flex flex-col gap-1.5">
                <p className={`text-[10px] font-extrabold uppercase tracking-widest ${relMeta.color}`}>{rel.category}</p>
                <h3 className="font-bold text-[13px] leading-snug line-clamp-2 text-gray-800 dark:text-white">{rel.name}</h3>
                <p className="text-xs text-gray-400 dark:text-gray-500 line-clamp-1">{rel.tagline}</p>
                <div className="mt-2 pt-2.5 border-t border-gray-100 dark:border-gray-800">
                    <span className="text-xs font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-1.5 transition-all duration-200">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductDetail;
