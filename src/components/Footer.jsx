import { useState } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import { motion } from "motion/react";
import toast from "react-hot-toast";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
        toast.success("You're subscribed! Welcome aboard.");
        setEmail("");
    };

    const navLinks = [
        { label: "Home",       href: "/",           isLink: true },
        { label: "Products",   href: "/products",   isLink: true },
        { label: "About",      href: "/#about",     isLink: false },
        { label: "Categories", href: "/#services",  isLink: false },
        { label: "Our Work",   href: "/#our-work",  isLink: false },
        { label: "Contact",    href: "/#contact-us",isLink: false },
    ];

    return (
        <footer className="bg-gray-950 text-white mt-28">
            {/* top gradient line */}
            <div className="h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

            <div className="px-4 sm:px-12 lg:px-24 xl:px-40 pt-14 pb-8">

                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/8"
                >
                    {/* Brand */}
                    <div className="lg:col-span-2 flex flex-col gap-5">
                        <Link to="/">
                            <img
                                src={assets.logo_dark}
                                className="w-36 sm:w-44"
                                alt="NIBX L.L.C. logo"
                            />
                        </Link>
                        <p className="text-sm text-white/50 leading-relaxed max-w-xs">
                            US-based bulk electronics supplier — warehousing, procurement, quality grading and distribution from our Miami, Florida facility.
                        </p>

                        {/* address */}
                        <div className="text-xs text-white/35 space-y-0.5">
                            <p className="font-bold text-white/50 uppercase tracking-wider mb-2">NIBX L.L.C. — US HQ</p>
                            <p>7931 NW 68th St, Miami, Florida 33166</p>
                            <p className="mt-2 font-bold text-white/50 uppercase tracking-wider">AZC Electronics Trading LLC</p>
                            <p>UAE ·{" "}
                                <a href="https://www.azcstore.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                                    azcstore.com
                                </a>
                            </p>
                        </div>

                        {/* Social */}
                        <div className="flex items-center gap-3">
                            {[
                                { href: "https://facebook.com",  icon: assets.facebook_icon,  label: "Facebook" },
                                { href: "https://twitter.com",   icon: assets.twitter_icon,   label: "Twitter" },
                                { href: "https://instagram.com", icon: assets.instagram_icon, label: "Instagram" },
                                { href: "https://linkedin.com",  icon: assets.linkedin_icon,  label: "LinkedIn" },
                            ].map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/6 border border-white/10 hover:bg-primary/20 hover:border-primary/40 transition-all duration-200"
                                >
                                    <img src={s.icon} alt="" aria-hidden="true" className="w-4 h-4 invert opacity-60" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav */}
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-5">Navigation</p>
                        <ul className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    {link.isLink ? (
                                        <Link
                                            to={link.href}
                                            className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                                        >
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                            <li>
                                <a
                                    href="https://www.azcstore.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-primary/70 hover:text-primary transition-colors duration-200"
                                >
                                    AZC UAE ↗
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-5">Newsletter</p>
                        <p className="text-sm text-white/50 leading-relaxed mb-5">
                            Stock updates, bulk deals and new arrivals — weekly.
                        </p>
                        <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5" noValidate>
                            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                            <input
                                id="newsletter-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="w-full px-4 py-2.5 text-sm rounded-xl bg-white/6 border border-white/10 text-white placeholder-white/25 outline-none focus:border-primary/50 transition-colors duration-200"
                            />
                            <button type="submit" className="btn-primary text-sm justify-center">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Bottom bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30"
                >
                    <p>Copyright 2026 © NIBX L.L.C. All rights reserved.</p>
                    <p>
                        Designed &amp; Developed by{" "}
                        <a href="https://rashidc.site" target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary transition-colors">
                            Rashid C
                        </a>
                        {" "}·{" "}
                        <a href="https://www.linkedin.com/in/rashid-c" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
                            LinkedIn
                        </a>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
