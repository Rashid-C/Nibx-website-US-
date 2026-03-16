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
            title: "Mobile app marketing",
            description: "We turn bold ideas into powerful digital solutions that connect, engage...",
            image: assets.work_mobile_app,
        },
        {
            title: "Dashboard management",
            description: "We help you execute your plan and deliver results.",
            image: assets.work_dashboard_management,
        },
        {
            title: "Fitness app promotion",
            description: "We help you create a marketing strategy that drives results.",
            image: assets.work_fitness_app,
        },
        {
            title: "Brand identity design",
            description: "We craft compelling brand identities that leave a lasting impression.",
            image: assets.work_mobile_app,
        },
        {
            title: "Social media campaigns",
            description: "Data-driven campaigns that grow your audience and boost engagement.",
            image: assets.work_fitness_app,
        },
        {
            title: "Analytics & reporting",
            description: "Clear insights and dashboards that help you make smarter decisions.",
            image: assets.work_dashboard_management,
        },
    ];

    const totalPages = Math.ceil(workData.length / ITEMS_PER_PAGE);
    const currentItems = workData.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

    const goTo = (index) => {
        setDirection(index > page ? 1 : -1);
        setPage(index);
    };

    const variants = {
        enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
        center: { opacity: 1, x: 0 },
        exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
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
                title="Our latest work"
                desc="From strategy to execution, we craft digital solutions that move your business forward."
            />

            {/* grid with page transition */}
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
                                className="hover:scale-102 duration-500 transition-all cursor-pointer"
                            >
                                <img
                                    src={work.image}
                                    className="w-full rounded-xl"
                                    alt={work.title}
                                    loading="lazy"
                                />
                                <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
                                <p className="text-sm opacity-60 w-5/6">{work.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* pagination controls */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: false }}
                className="flex items-center gap-2 mt-2"
            >
                {/* prev */}
                <button
                    onClick={() => goTo(page - 1)}
                    disabled={page === 0}
                    aria-label="Previous page"
                    className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-105"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>

                {/* page numbers */}
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

                {/* next */}
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
