import { motion } from "motion/react";
import Title from "./Title";

const services = [
    {
        num: "01",
        title: "Secure Warehousing",
        description: "50,000 sq ft climate-controlled facility in Miami, FL — 24/7 monitored storage for bulk electronics inventory, palletized or shelved to your spec.",
        color: "from-primary/10 to-violet-500/5",
        accent: "text-primary",
        border: "hover:border-primary/30",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
        ),
    },
    {
        num: "02",
        title: "Bulk Procurement",
        description: "Direct sourcing from OEMs, authorized distributors and enterprise liquidators across North America — new and certified refurbished stock.",
        color: "from-blue-500/10 to-cyan-500/5",
        accent: "text-blue-600 dark:text-blue-400",
        border: "hover:border-blue-400/30",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/>
                <polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/>
                <circle cx="18.5" cy="15.5" r="2.5"/><path d="M20.27 17.27 22 19"/>
            </svg>
        ),
    },
    {
        num: "03",
        title: "Quality Control & Grading",
        description: "Every unit is inspected, powered-on tested and graded A+ / A / B before shipment. Full condition reports and documentation provided.",
        color: "from-emerald-500/10 to-teal-500/5",
        accent: "text-emerald-600 dark:text-emerald-400",
        border: "hover:border-emerald-400/30",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
            </svg>
        ),
    },
    {
        num: "04",
        title: "US-Wide Distribution",
        description: "Freight solutions from single pallets to full truckloads — covering all 50 states with tracked, insured delivery and reliable lead times.",
        color: "from-amber-500/10 to-orange-500/5",
        accent: "text-amber-600 dark:text-amber-400",
        border: "hover:border-amber-400/30",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="1"/>
                <path d="M16 8h4l3 3v5h-7V8z"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
        ),
    },
    {
        num: "05",
        title: "International Export",
        description: "Cross-border logistics to UAE and GCC markets managed through our subsidiary AZC Electronics Trading LLC (azcstore.com / azcstore.info).",
        color: "from-sky-500/10 to-indigo-500/5",
        accent: "text-sky-600 dark:text-sky-400",
        border: "hover:border-sky-400/30",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
        ),
    },
    {
        num: "06",
        title: "Custom Fulfillment",
        description: "White-label kitting, custom packaging, asset-tagging and labeling — tailored fulfillment solutions built around your business requirements.",
        color: "from-rose-500/10 to-pink-500/5",
        accent: "text-rose-600 dark:text-rose-400",
        border: "hover:border-rose-400/30",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
        ),
    },
];

const Services = () => {
    return (
        <section
            id="services"
            className="relative px-4 sm:px-12 lg:px-24 xl:px-40 pt-28 pb-10 text-gray-700 dark:text-white overflow-hidden"
        >
            {/* bg */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-150 h-72 bg-primary/4 dark:bg-primary/6 rounded-full blur-3xl -z-10 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-14"
            >
                <Title
                    title="Our Operations"
                    desc="From sourcing to final-mile delivery — NIBX L.L.C. manages the full electronics supply chain from our Miami warehouse."
                />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: i * 0.07 }}
                        viewport={{ once: true }}
                        className={`group relative rounded-2xl p-6 border border-gray-100 dark:border-gray-800 ${s.border} bg-white dark:bg-gray-900 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gray-200/60 dark:hover:shadow-black/30 transition-all duration-300 overflow-hidden`}
                    >
                        {/* hover gradient */}
                        <div className={`absolute inset-0 bg-linear-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl`} />

                        {/* number */}
                        <span className="absolute top-5 right-5 text-5xl font-black text-gray-100 dark:text-white/5 leading-none select-none">
                            {s.num}
                        </span>

                        {/* icon */}
                        <div className={`relative z-10 w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-5 ${s.accent} group-hover:scale-110 transition-transform duration-300`}>
                            {s.icon}
                        </div>

                        {/* text */}
                        <h3 className="relative z-10 font-bold text-base text-gray-800 dark:text-white mb-2">{s.title}</h3>
                        <p className="relative z-10 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
