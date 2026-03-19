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
        { label: "Home",       href: "/",            isLink: true },
        { label: "Products",   href: "/products",    isLink: true },
        { label: "About",      href: "/#about",      isLink: false },
        { label: "Categories", href: "/#services",   isLink: false },
        { label: "Contact",    href: "/#contact-us", isLink: false },
    ];

    return (
        <footer className="relative bg-linear-to-br from-[#0f0c29] via-[#1a1550] to-[#0f0c29] text-white mt-20 overflow-hidden">
            {/* subtle top border glow */}
            <div className="h-px bg-linear-to-r from-transparent via-primary/60 to-transparent" />
            {/* bg orbs */}
            <div className="absolute -top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-violet-500/8 rounded-full blur-3xl pointer-events-none" />

            <div className="relative px-4 sm:px-12 lg:px-24 xl:px-40 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-white/10"
                >
                    {/* Brand */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <Link to="/">
                            <img src={assets.logo_dark} className="w-32 sm:w-40" alt="NIBX L.L.C. logo" />
                        </Link>
                        <p className="text-xs text-white/45 leading-relaxed max-w-xs">
                            US-based certified refurbished electronics supplier — warehousing, procurement, quality grading and distribution from Miami, Florida.
                        </p>
                        <div className="text-xs text-white/35 space-y-0.5">
                            <p className="font-semibold text-white/50 uppercase tracking-wider text-[10px]">NIBX L.L.C. — US HQ</p>
                            <p>7931 NW 68th St, Miami, Florida 33166</p>
                            {/* <p className="pt-1 font-semibold text-white/50 uppercase tracking-wider text-[10px]">AZC Electronics Trading LLC</p> */}
                            {/* <p>UAE ·{" "}
                                <a href="https://www.azcstore.com/" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-primary transition-colors">
                                    azcstore.com
                                </a>
                            </p> */}
                        </div>
                        <div className="flex items-center gap-2.5">
                            {[
                                { icon: assets.facebook_icon,  label: "Facebook" },
                                { icon: assets.twitter_icon,   label: "Twitter" },
                                { icon: assets.instagram_icon, label: "Instagram" },
                                { icon: assets.linkedin_icon,  label: "LinkedIn" },
                            ].map((s) => (
                                <div key={s.label} aria-label={s.label}
                                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/6 border border-white/10">
                                    <img src={s.icon} alt="" aria-hidden="true" className="w-3.5 h-3.5 invert opacity-60" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Nav */}
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-4">Quick Links</p>
                        <ul className="flex flex-col gap-2.5">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    {link.isLink ? (
                                        <Link to={link.href} className="text-xs text-white/50 hover:text-white transition-colors duration-200">
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <a href={link.href} className="text-xs text-white/50 hover:text-white transition-colors duration-200">
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                            <li>
                                {/* <a href="https://www.azcstore.com/" target="_blank" rel="noopener noreferrer"
                                    className="text-xs text-primary/60 hover:text-primary transition-colors duration-200">
                                    AZC UAE ↗
                                </a> */}
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-4">Newsletter</p>
                        <p className="text-xs text-white/45 leading-relaxed mb-4">Stock updates and bulk deals — weekly.</p>
                        <form onSubmit={handleSubscribe} className="flex flex-col gap-2" noValidate>
                            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                            <input
                                id="newsletter-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="w-full px-3 py-2 text-xs rounded-lg bg-white/6 border border-white/10 text-white placeholder-white/25 outline-none focus:border-primary/50 transition-colors"
                            />
                            <button type="submit" className="btn-primary text-xs py-2! min-h-0! justify-center">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Bottom bar */}
                <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/25">
                    <p className="text-xs">© 2026 NIBX L.L.C. All rights reserved.</p>
                    {/* <p>
                        Designed &amp; Developed by{" "}
                        <a href="https://rashidc.site" target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-primary transition-colors">
                            Rashid C
                        </a>
                        {" "}·{" "}
                        <a href="https://www.linkedin.com/in/rashid-c" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">
                            LinkedIn
                        </a>
                    </p> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
