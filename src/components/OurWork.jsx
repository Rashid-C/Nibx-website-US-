import { useState } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion, AnimatePresence } from "motion/react";

const ITEMS_PER_PAGE = 3;

const OurWork = () => {
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(1);

    const workData = [
        {
            title: "Enterprise Laptop Deployment",
            description: "Procured, graded and delivered 500+ refurbished Dell Latitude units to a Florida logistics firm — fully tested and shipped within 5 business days.",
            image: assets.work_mobile_app,
            tag: "Fulfillment",
        },
        {
            title: "Office Technology Refresh",
            description: "Supplied monitors, desktops and printers for a 200-seat call centre upgrade across two US states — single point-of-contact, on-time delivery.",
            image: assets.work_dashboard_management,
            tag: "Distribution",
        },
        {
            title: "School District IT Rollout",
            description: "Delivered 300 All-in-One PCs, accessories and storage drives for a Miami-Dade school district deployment managed end-to-end from our warehouse.",
            image: assets.work_fitness_app,
            tag: "Warehousing",
        },
        {
            title: "GPU & Component Batch",
            description: "High-volume GPU and SSD fulfilment for a US-based PC builder network — bulk sourced, quality-checked and shipped in consolidated freight loads.",
            image: assets.work_mobile_app,
            tag: "Procurement",
        },
        {
            title: "UAE Cross-Border Shipment",
            description: "Coordinated a 2,000-unit electronics export to AZC Electronics Trading LLC for GCC enterprise distribution — customs-cleared and door-delivered.",
            image: assets.work_dashboard_management,
            tag: "Export",
        },
        {
            title: "White-Label Kitting Programme",
            description: "Custom-branded bundles of keyboards, mice and headsets for a remote-work rollout across 14 corporate offices — packaged and labelled per client spec.",
            image: assets.work_fitness_app,
            tag: "Custom Fulfillment",
        },
    ];

    const totalPages = Math.ceil(workData.length / ITEMS_PER_PAGE);
    const currentItems = workData.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

    const goTo = (index) => {
        setDirection(index > page ? 1 : -1);
        setPage(index);
    };

    const variants = {
        enter:  (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
        center: { opacity: 1, x: 0 },
        exit:   (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ staggerChildren: 0.2 }}
            id="our-work"
            className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
        >
            <Title
                title="Operations in the field"
                desc="Real bulk orders fulfilled — enterprise deployments, warehoused stock, cross-border exports and custom fulfilment programmes."
            />

            <div className="w-full max-w-5xl overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
                    >
                        {currentItems.map((work, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                key={index}
                                className="group hover:scale-102 duration-500 transition-all cursor-default"
                            >
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={work.image}
                                        className="w-full group-hover:scale-105 transition-transform duration-500"
                                        alt={work.title}
                                        loading="lazy"
                                    />
                                    {/* tag overlay */}
                                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary/90 text-white backdrop-blur-sm">
                                        {work.tag}
                                    </span>
                                </div>
                                <h3 className="mt-3 mb-1.5 text-base font-semibold">{work.title}</h3>
                                <p className="text-sm opacity-60 leading-relaxed">{work.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* pagination */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: false }}
                className="flex items-center gap-2 mt-2"
            >
                <button
                    onClick={() => goTo(page - 1)}
                    disabled={page === 0}
                    aria-label="Previous page"
                    className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-105"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>

                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Page ${i + 1}`}
                        aria-current={page === i ? "page" : undefined}
                        className={`h-9 w-9 rounded-full text-sm font-semibold transition-all hover:scale-105 ${
                            page === i
                                ? "bg-primary text-white shadow-md shadow-primary/30"
                                : "border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-primary hover:text-primary"
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    onClick={() => goTo(page + 1)}
                    disabled={page === totalPages - 1}
                    aria-label="Next page"
                    className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-105"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
            </motion.div>
        </motion.div>
    );
};

export default OurWork;
