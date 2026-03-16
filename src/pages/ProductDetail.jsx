import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "motion/react";
import { products, catMeta } from "../data/products.jsx";

const tagColors = {
    "Best Seller": "bg-primary/10 text-primary border border-primary/20",
    "New Arrival": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
    "Bulk Deal":   "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20",
};

const gradeColors = {
    "Grade A+": "bg-primary/10 text-primary border border-primary/20 font-bold",
    "Grade A":  "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-semibold",
    "Grade B":  "bg-gray-100 dark:bg-gray-700/60 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-600",
};

const ProductDetail = () => {
    const { id }   = useParams();
    const navigate = useNavigate();

    const product = products.find(p => p.id === Number(id));

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-gray-500 dark:text-gray-400 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-30"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                <p className="text-lg font-semibold">Product not found.</p>
                <button onClick={() => navigate("/products")}
                    className="btn-secondary">
                    ← Back to Products
                </button>
            </div>
        );
    }

    const meta    = catMeta[product.category] || catMeta.Laptops;
    const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

    return (
        <div className="text-gray-700 dark:text-white">

            {/* ── breadcrumb ──────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="px-4 sm:px-12 lg:px-24 xl:px-40 pt-6 pb-2"
            >
                <nav className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    <span className="text-gray-600 dark:text-gray-300 font-medium line-clamp-1 max-w-xs">{product.name}</span>
                </nav>
            </motion.div>

            {/* ── main detail ─────────────────────────── */}
            <div className="px-4 sm:px-12 lg:px-24 xl:px-40 pt-6 pb-16">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* LEFT — visual panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className={`relative rounded-3xl overflow-hidden bg-linear-to-br ${meta.gradient} aspect-square max-h-115 flex items-center justify-center`}
                    >
                        {/* dot texture */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="detail-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                                    <circle cx="2" cy="2" r="1.2" fill="currentColor" opacity=".12"/>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#detail-dots)"/>
                        </svg>

                        {/* glow blobs */}
                        <div className="absolute w-72 h-72 rounded-full bg-white/20 blur-3xl -top-20 -left-20" />
                        <div className="absolute w-48 h-48 rounded-full bg-white/10 blur-2xl bottom-0 right-0" />

                        {/* large icon */}
                        <motion.div
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            className={`relative z-10 ${meta.color}`}
                        >
                            {product.icon(140)}
                        </motion.div>

                        {/* floating badges */}
                        {product.tag && (
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                                className={`absolute top-5 left-5 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm ${tagColors[product.tag]}`}
                            >
                                {product.tag}
                            </motion.span>
                        )}
                        {product.grade && (
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                className={`absolute top-5 right-5 text-xs px-3 py-1.5 rounded-full backdrop-blur-sm ${gradeColors[product.grade]}`}
                            >
                                {product.grade}
                            </motion.span>
                        )}
                    </motion.div>

                    {/* RIGHT — product info */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="flex flex-col gap-5 py-2"
                    >
                        {/* category badge */}
                        <div>
                            <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${meta.color} bg-gray-100 dark:bg-gray-800`}>
                                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                                {product.category}
                            </span>
                        </div>

                        {/* name & tagline */}
                        <div>
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-2 text-gray-900 dark:text-white">{product.name}</h1>
                            <p className="text-base text-gray-500 dark:text-gray-400 font-medium">{product.tagline}</p>
                        </div>

                        {/* description */}
                        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 border-l-2 border-primary/30 pl-4">
                            {product.description}
                        </p>

                        {/* spec chips row */}
                        <div className="flex flex-wrap gap-1.5">
                            {product.spec.split(" | ").map((s, i) => (
                                <span key={i} className="text-xs px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium border border-gray-200 dark:border-gray-700">
                                    {s}
                                </span>
                            ))}
                        </div>

                        {/* specs table */}
                        {product.specs && (
                            <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                                <div className="px-4 py-2.5 bg-gray-50 dark:bg-gray-800/60 border-b border-gray-200 dark:border-gray-700">
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Specifications</p>
                                </div>
                                <div className="divide-y divide-gray-100 dark:divide-gray-800">
                                    {Object.entries(product.specs).map(([key, val]) => (
                                        <div key={key} className="flex items-start px-4 py-2.5 gap-4 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                                            <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 min-w-27.5 shrink-0 pt-px">{key}</span>
                                            <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">{val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* CTA buttons */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <a href="/#contact-us"
                                className="btn-primary">
                                I am Interested
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </a>
                            <a href="/#contact-us"
                                className="btn-secondary">
                                Request Bulk Quote
                            </a>
                        </div>

                        {/* trust note */}
                        <p className="text-xs text-gray-400 dark:text-gray-600 flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            Quality-checked by NIBX · US-Based Operations · Bulk orders welcome
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* ── related products ────────────────────── */}
            {related.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className="px-4 sm:px-12 lg:px-24 xl:px-40 pb-20"
                >
                    {/* divider */}
                    <div className="border-t border-gray-100 dark:border-gray-800 mb-10" />

                    <div className="flex items-center justify-between mb-7">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">More in {product.category}</p>
                            <h2 className="text-xl font-bold">Related Products</h2>
                        </div>
                        <button onClick={() => navigate("/products")}
                            className="btn-secondary min-h-10 px-5 text-xs">
                            View All
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </button>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {related.map((rel, index) => {
                            const relMeta = catMeta[rel.category] || catMeta.Laptops;
                            return (
                                <motion.div
                                    key={rel.id}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: false }}
                                    onClick={() => navigate(`/products/${rel.id}`)}
                                    className="group cursor-pointer flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-xl hover:shadow-gray-200/60 dark:hover:shadow-black/30 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
                                >
                                    {/* icon area */}
                                    <div className={`relative h-36 flex items-center justify-center bg-linear-to-br ${relMeta.gradient} overflow-hidden`}>
                                        <div className="absolute w-28 h-28 rounded-full bg-white/20 blur-3xl -top-4 -right-4 group-hover:scale-150 transition-transform duration-700" />
                                        <div className={`relative z-10 ${relMeta.color} group-hover:scale-110 transition-transform duration-500`}>
                                            {rel.icon(52)}
                                        </div>
                                        {rel.tag && (
                                            <span className={`absolute top-2.5 left-2.5 text-[10px] font-semibold px-2 py-0.5 rounded-full ${tagColors[rel.tag]}`}>
                                                {rel.tag}
                                            </span>
                                        )}
                                    </div>

                                    {/* content */}
                                    <div className="p-4 flex flex-col gap-1.5">
                                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{rel.category}</p>
                                        <h3 className="font-bold text-sm leading-snug line-clamp-2 text-gray-800 dark:text-white">{rel.name}</h3>
                                        <p className="text-xs text-gray-400 dark:text-gray-500 line-clamp-1">{rel.tagline}</p>
                                        <div className="mt-2 flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-2.5">
                                            <span className="text-xs font-semibold text-primary group-hover:translate-x-0.5 transition-transform duration-200 inline-flex items-center gap-1">
                                                View Details
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            )}

        </div>
    );
};

export default ProductDetail;
