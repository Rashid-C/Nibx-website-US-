import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";

interface NavbarProps {
    theme: string;
    setTheme: (theme: string) => void;
}

const Navbar = ({ theme, setTheme }: NavbarProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const handleAnchor = (hash: string) => {
        setSidebarOpen(false);
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
            className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70"
        >
            <Link to="/" aria-label="NIBX Home">
                <img
                    src={theme === "dark" ? assets.logo_dark : assets.logo}
                    className="w-36 sm:w-44"
                    alt="NIBX L.L.C. logo"
                />
            </Link>

            {/* nav links */}
            <div
                className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? "max-sm:w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-10"} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
            >
                <button
                    aria-label="Close menu"
                    onClick={() => setSidebarOpen(false)}
                    className="absolute right-4 top-4 sm:hidden"
                >
                    <img src={assets.close_icon} alt="" aria-hidden="true" className="w-5" />
                </button>

                <button onClick={() => handleAnchor("#hero")} className="sm:hover:border-b text-left">
                    Home
                </button>
                <NavLink
                    to="/products"
                    onClick={() => setSidebarOpen(false)}
                    className={({ isActive }) =>
                        `sm:hover:border-b ${isActive ? "text-primary border-b border-primary" : ""}`
                    }
                >
                    Products
                </NavLink>
                <button onClick={() => handleAnchor("#about")} className="sm:hover:border-b text-left">
                    About
                </button>
                <button onClick={() => handleAnchor("#services")} className="sm:hover:border-b text-left">
                    Categories
                </button>
                <button onClick={() => handleAnchor("#our-work")} className="sm:hover:border-b text-left">
                    Featured
                </button>
                <button onClick={() => handleAnchor("#contact-us")} className="sm:hover:border-b text-left">
                    Contact
                </button>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
                <ThemeToggleBtn theme={theme} setTheme={setTheme} />

                <button
                    aria-label="Open menu"
                    onClick={() => setSidebarOpen(true)}
                    className="sm:hidden"
                >
                    <img src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon} alt="" aria-hidden="true" className="w-8" />
                </button>

                <button
                    onClick={() => handleAnchor("#contact-us")}
                    className="text-sm max-sm:hidden inline-flex h-11 items-center gap-2 rounded-full bg-primary px-7 text-white cursor-pointer transition-all hover:scale-103"
                >
                    Get a Quote{" "}
                    <img src={assets.arrow_icon} width={14} alt="" aria-hidden="true" />
                </button>
            </div>
        </motion.div>
    );
};

export default Navbar;
