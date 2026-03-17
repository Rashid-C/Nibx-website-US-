import { useState } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion, AnimatePresence } from "motion/react";

const tagColors = {
    "Fulfillment":        "bg-primary text-white",
    "Distribution":       "bg-blue-600 text-white",
    "Warehousing":        "bg-indigo-600 text-white",
    "Procurement":        "bg-amber-500 text-white",
    "Export":             "bg-emerald-600 text-white",
    "Custom Fulfillment": "bg-rose-500 text-white",
};

const workData = [
    {
        title: "Enterprise Laptop Deployment",
        description: "Procured, graded and delivered 500+ refurbished Dell Latitude units to a Florida logistics firm — fully tested and shipped within 5 business days.",
        image: assets.work_mobile_app,
        tag: "Fulfillment",
        metric: "500+ units",
    },
    {
        title: "Office Technology Refresh",
        description: "Supplied monitors, desktops and printers for a 200-seat call centre upgrade across two US states — single point-of-contact, on-time delivery.",
        image: assets.work_dashboard_management,
        tag: "Distribution",
        metric: "2 states",
    },
    {
        title: "School District IT Rollout",
        description: "Delivered 300 All-in-One PCs, accessories and storage drives for a Miami-Dade school district deployment managed end-to-end from our warehouse.",
        image: assets.work_fitness_app,
        tag: "Warehousing",
        metric: "300 AIO PCs",
    },
    {
        title: "GPU & Component Batch",
        description: "High-volume GPU and SSD fulfilment for a US-based PC builder network — bulk sourced, quality-checked and shipped in consolidated freight loads.",
        image: assets.work_mobile_app,
        tag: "Procurement",
        metric: "High volume",
    },
    {
        title: "UAE Cross-Border Shipment",
        description: "Coordinated a 2,000-unit electronics export to AZC Electronics Trading LLC for GCC enterprise distribution — customs-cleared and door-delivered.",
        image: assets.work_dashboard_management,
        tag: "Export",
        metric: "2,000 units",
    },
    {
        title: "White-Label Kitting Programme",
        description: "Custom-branded bundles of keyboards, mice and headsets for a remote-work rollout across 14 corporate offices — packaged and labelled per client spec.",
        image: assets.work_fitness_app,
        tag: "Custom Fulfillment",
        metric: "14 offices",
    },
];

const ITEMS_PER_PAGE = 3;

const OurWork = () => {
    const [page, setPage]           = useState(0);
    const [direction, setDirection] = useState(1);

    const totalPages   = Math.ceil(workData.length / ITEMS_PER_PAGE);
    const currentItems = workData.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

    const goTo = (i) => { setDirection(i > page ? 1 : -1); setPage(i); };

    const variants = {
        enter:  (dir) => ({ opacity: 0, x: dir > 0 ? 48 : -48 }),
        center: { opacity: 1, x: 0 },
        exit:   (dir) => ({ opacity: 0, x: dir > 0 ? -48 : 48 }),
    };

    return (
        <section
            id="our-work"
            className="relative px-4 sm:px-12 lg:px-24 xl:px-40 pt-28 pb-10 text-gray-700 dark:text-white overflow-hidden"
        >
            {/* bg blob */}
            <div className="absolute top-0 right-0 w-100 h-100 bg-sky-400/4 dark:bg-sky-400/6 rounded-full blur-3xl -z-10 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-14"
            >
                <Title
                    title="Operations in the field"
                    desc="Real bulk orders fulfilled — enterprise deployments, warehoused stock, cross-border exports and custom fulfilment programmes."
                />
            </motion.div>

            <div className="overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {currentItems.map((work, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="group cursor-default bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gray-200/60 dark:hover:shadow-black/30 transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden h-48 bg-gray-100 dark:bg-gray-800">
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

                                    {/* Tag */}
                                    <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${tagColors[work.tag] || "bg-gray-700 text-white"}`}>
                                        {work.tag}
                                    </span>

                                    {/* Metric */}
                                    <span className="absolute bottom-3 right-3 text-xs font-bold text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                                        {work.metric}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="font-bold text-sm text-gray-800 dark:text-white mb-2 leading-snug">{work.title}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{work.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-10">
                <button
                    onClick={() => goTo(page - 1)}
                    disabled={page === 0}
                    className="h-9 w-9 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 text-gray-500 hover:border-primary/40 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`h-9 w-9 rounded-xl text-sm font-bold transition-all duration-200 ${
                            page === i
                                ? "bg-primary text-white shadow-md shadow-primary/25"
                                : "border border-gray-200 dark:border-gray-700 text-gray-500 hover:border-primary/40 hover:text-primary"
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    onClick={() => goTo(page + 1)}
                    disabled={page === totalPages - 1}
                    className="h-9 w-9 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 text-gray-500 hover:border-primary/40 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
            </div>
        </section>
    );
};

export default OurWork;
