import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";

interface NavbarProps {
    theme: string;
    setTheme: (theme: string) => void;
}

const Navbar = ({ theme, setTheme }: NavbarProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeNav, setActiveNav] = useState("home");
    const location = useLocation();
    const navigate = useNavigate();
    const navLinkBase =
        "relative rounded-full px-4 py-2 text-left transition-all duration-300 sm:hover:bg-white/70 sm:hover:text-gray-900 sm:dark:hover:bg-white/10 sm:dark:hover:text-white";
    const navLinkActive = "bg-primary text-white shadow-[0_10px_25px_rgba(80,68,229,0.35)] sm:hover:bg-primary";
    const homeSections = [
        { id: "hero", key: "home" },
        { id: "about", key: "about" },
        { id: "services", key: "services" },
        { id: "our-work", key: "our-work" },
        { id: "contact-us", key: "contact-us" },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("mobile-menu-open", sidebarOpen);
        return () => document.body.classList.remove("mobile-menu-open");
    }, [sidebarOpen]);

    useEffect(() => {
        if (location.pathname === "/products" || location.pathname.startsWith("/products/")) {
            setActiveNav("products");
            return;
        }

        if (location.pathname !== "/") return;

        const getActiveSection = () => {
            const checkpoint = window.innerHeight * 0.32;
            let current = "home";

            for (const section of homeSections) {
                const element = document.getElementById(section.id);
                if (!element) continue;

                const rect = element.getBoundingClientRect();
                if (rect.top <= checkpoint) {
                    current = section.key;
                }
            }

            return current;
        };

        const handleSectionScroll = () => setActiveNav(getActiveSection());

        handleSectionScroll();
        window.addEventListener("scroll", handleSectionScroll, { passive: true });
        window.addEventListener("resize", handleSectionScroll);

        return () => {
            window.removeEventListener("scroll", handleSectionScroll);
            window.removeEventListener("resize", handleSectionScroll);
        };
    }, [location.pathname]);

    const handleAnchor = (hash: string, navKey: string) => {
        setSidebarOpen(false);
        setActiveNav(navKey);
        if (window.location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`sticky top-0 z-30 mx-2 mt-2 sm:mx-4 sm:mt-4 rounded-[1.75rem] font-medium transition-all duration-500 ${
                isScrolled
                    ? "border border-white/35 bg-white/60 shadow-[0_18px_50px_rgba(15,23,42,0.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-gray-900/55 dark:shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
                    : "border border-white/25 bg-white/10 shadow-[0_10px_30px_rgba(80,68,229,0.08)] backdrop-blur-xl dark:border-white/8 dark:bg-gray-950/10"
            }`}
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-10 top-0 h-20 w-28 rounded-full bg-primary/15 blur-2xl dark:bg-primary/20" />
                <div className="absolute right-0 top-0 h-16 w-24 rounded-full bg-sky-400/15 blur-2xl dark:bg-sky-300/10" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/20" />
            </div>
            <div
                className={`flex items-center justify-between px-4 sm:px-8 lg:px-12 xl:px-16 transition-all duration-500 ${
                    isScrolled ? "py-3" : "py-4"
                }`}
            >
                <Link to="/" aria-label="NIBX Home" className="relative z-10">
                    <motion.div
                        animate={{ scale: isScrolled ? 0.97 : 1, y: isScrolled ? -1 : 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="rounded-2xl px-2 py-1 sm:px-3"
                    >
                        <img
                            src={theme === "dark" ? assets.logo_dark : assets.logo}
                            className="w-36 sm:w-44"
                            alt="NIBX L.L.C. logo"
                        />
                    </motion.div>
                </Link>

                {/* nav links */}
                <div
                    className={`relative z-10 text-gray-700 dark:text-white sm:text-sm flex gap-2 sm:gap-1 transition-all duration-500 sm:items-center sm:rounded-full sm:border sm:border-white/80 sm:bg-white/72 sm:px-2 sm:py-2 sm:shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_16px_34px_rgba(15,23,42,0.12)] sm:backdrop-blur-2xl sm:dark:border-white/10 sm:dark:bg-white/5 max-sm:fixed max-sm:top-3 max-sm:bottom-3 max-sm:right-3 max-sm:z-40 max-sm:w-72 max-sm:min-h-[calc(100vh-1.5rem)] max-sm:flex-col max-sm:rounded-[2rem] max-sm:border max-sm:border-white/20 max-sm:bg-primary/95 max-sm:px-8 max-sm:pt-20 max-sm:text-white max-sm:backdrop-blur-2xl ${
                        sidebarOpen
                            ? "max-sm:translate-x-0 max-sm:opacity-100"
                            : "max-sm:pointer-events-none max-sm:translate-x-[120%] max-sm:opacity-0"
                    }`}
                >
                    <button
                        aria-label="Close menu"
                        onClick={() => setSidebarOpen(false)}
                        className="absolute right-4 top-4 sm:hidden"
                    >
                        <img src={assets.close_icon} alt="" aria-hidden="true" className="w-5" />
                    </button>

                    <button
                        onClick={() => handleAnchor("#hero", "home")}
                        className={`${navLinkBase} ${activeNav === "home" ? navLinkActive : ""}`}
                        data-mobile-menu-item="true"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => {
                            setSidebarOpen(false);
                            setActiveNav("products");
                            navigate("/products");
                        }}
                        data-mobile-menu-item="true"
                        className={`${navLinkBase} ${activeNav === "products" ? navLinkActive : ""}`}
                    >
                        Products
                    </button>
                    <button
                        onClick={() => handleAnchor("#about", "about")}
                        className={`${navLinkBase} ${activeNav === "about" ? navLinkActive : ""}`}
                        data-mobile-menu-item="true"
                    >
                        About
                    </button>
                    <button
                        onClick={() => handleAnchor("#services", "services")}
                        className={`${navLinkBase} ${activeNav === "services" ? navLinkActive : ""}`}
                        data-mobile-menu-item="true"
                    >
                        Categories
                    </button>
                    <button
                        onClick={() => handleAnchor("#our-work", "our-work")}
                        className={`${navLinkBase} ${activeNav === "our-work" ? navLinkActive : ""}`}
                        data-mobile-menu-item="true"
                    >
                        Featured
                    </button>
                    <button
                        onClick={() => handleAnchor("#contact-us", "contact-us")}
                        className={`${navLinkBase} ${activeNav === "contact-us" ? navLinkActive : ""}`}
                        data-mobile-menu-item="true"
                    >
                        Contact
                    </button>
                </div>

                <button
                    aria-label="Close menu overlay"
                    onClick={() => setSidebarOpen(false)}
                    className={`fixed inset-0 z-30 bg-slate-950/35 backdrop-blur-sm transition-all duration-300 sm:hidden ${
                        sidebarOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                    }`}
                />

                <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                    <div className="rounded-full border border-white/60 bg-white/55 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
                    </div>

                    <button
                        aria-label="Open menu"
                        onClick={() => setSidebarOpen(true)}
                        className="sm:hidden"
                    >
                        <img src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon} alt="" aria-hidden="true" className="w-8" />
                    </button>

                    <button
                        onClick={() => handleAnchor("#contact-us", "contact-us")}
                        className="btn-primary text-sm max-sm:hidden"
                    >
                        Get a Quote{" "}
                        <img src={assets.arrow_icon} width={14} alt="" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Navbar;
