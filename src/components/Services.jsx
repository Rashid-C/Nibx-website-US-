import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

/* ── operation icons ──────────────────────────────────── */
const warehouseIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
        <line x1="3" y1="14" x2="7" y2="14"/>
        <line x1="17" y1="14" x2="21" y2="14"/>
    </svg>
);

const procurementIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/>
        <path d="M16.5 9.4 7.55 4.24"/>
        <polyline points="3.29 7 12 12 20.71 7"/>
        <line x1="12" y1="22" x2="12" y2="12"/>
        <circle cx="18.5" cy="15.5" r="2.5"/>
        <path d="M20.27 17.27 22 19"/>
    </svg>
);

const qualityIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
    </svg>
);

const distributionIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
);

const exportIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
);

const fulfillmentIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
);

const Services = () => {
    const servicesData = [
        {
            title: "Secure Warehousing",
            description: "50,000 sq ft climate-controlled facility in Miami, FL — 24/7 monitored storage for bulk electronics inventory, palletized or shelved to your spec.",
            icon: warehouseIcon,
        },
        {
            title: "Bulk Procurement",
            description: "Direct sourcing from OEMs, authorized distributors and enterprise liquidators across North America — new and certified refurbished stock.",
            icon: procurementIcon,
        },
        {
            title: "Quality Control & Grading",
            description: "Every unit is inspected, powered-on tested and graded A+ / A / B before shipment. Full condition reports and documentation provided.",
            icon: qualityIcon,
        },
        {
            title: "US-Wide Distribution",
            description: "Freight solutions from single pallets to full truckloads — covering all 50 states with tracked, insured delivery and reliable lead times.",
            icon: distributionIcon,
        },
        {
            title: "International Export",
            description: "Cross-border logistics to UAE and GCC markets managed through our subsidiary AZC Electronics Trading LLC (azcstore.com / azcstore.info).",
            icon: exportIcon,
        },
        {
            title: "Custom Fulfillment",
            description: "White-label kitting, custom packaging, asset-tagging and labeling — tailored fulfillment solutions built around your business requirements.",
            icon: fulfillmentIcon,
        },
    ];

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ staggerChildren: 0.2 }}
            id="services"
            className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
        >
            <img src={assets.bgImage2} alt="" aria-hidden="true" className="absolute -top-110 -left-70 -z-1 dark:hidden" />

            <Title
                title="Our Operations"
                desc="From sourcing to final-mile delivery — NIBX L.L.C. manages the full electronics supply chain from our Miami warehouse."
            />

            <div className="flex flex-col md:grid grid-cols-2">
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
        </motion.div>
    );
};

export default Services;
