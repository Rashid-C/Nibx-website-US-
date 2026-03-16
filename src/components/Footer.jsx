import { useState } from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";
import toast from "react-hot-toast";

const Footer = ({ theme }) => {
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

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40"
        >
            {/* footer top */}

            <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: false }}
                    className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
                >
                    <img
                        src={theme === "dark" ? assets.logo_dark : assets.logo}
                        className="w-32 sm:w-44"
                        alt="logo"
                    />
                    <p className="max-w-md">
                        From strategy to execution, we craft digital solutions that move
                        your business forward.
                    </p>
                    <ul className="flex gap-8">
                        <li>
                            <a className="hover:text-primary" href="#hero">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-primary" href="#services">
                                Services
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-primary" href="#our-work">
                                Our Work
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-primary" href="#contact-us">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: false }}
                    className="text-gray-600 dark:text-gray-400"
                >
                    <h3 className="font-semibold">Subscribe to our newsletter</h3>
                    <p className="text-sm mt-2 mb-6">
                        The latest news, articles, and resources, sent to your inbox weekly.
                    </p>

                    <form onSubmit={handleSubscribe} className="flex gap-2 text-sm" noValidate>
                        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                        <input
                            id="newsletter-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
                        />
                        <button type="submit" className="bg-primary text-white rounded px-6 hover:scale-103 transition-all">
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </div>
            <hr className="border-gray-300 dark:border-gray-600 my-6" />

            {/* footer bottom */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false }}
                className="pb-6 text-sm text-gray-500 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 flex-wrap"
            >
                {/* left — copyright + dev credit */}
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center sm:text-left">
                    <p>Copyright 2026 &copy; NIBX. All rights reserved.</p>
                    <span className="hidden sm:inline text-gray-300 dark:text-gray-600">|</span>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                        Designed &amp; Developed by{" "}
                        <a
                            href="https://rashidc.site"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-primary hover:underline underline-offset-2 transition-all"
                        >
                            Rashid C
                        </a>
                        {" "}·{" "}
                        <a
                            href="https://www.linkedin.com/in/rashid-c"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:underline underline-offset-2 transition-all"
                        >
                            LinkedIn
                        </a>
                    </p>
                </div>

                {/* right — socials */}
                <div className="flex items-center gap-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="opacity-70 hover:opacity-100 transition-opacity"><img src={assets.facebook_icon} alt="" aria-hidden="true" /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="opacity-70 hover:opacity-100 transition-opacity"><img src={assets.twitter_icon} alt="" aria-hidden="true" /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-70 hover:opacity-100 transition-opacity"><img src={assets.instagram_icon} alt="" aria-hidden="true" /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="opacity-70 hover:opacity-100 transition-opacity"><img src={assets.linkedin_icon} alt="" aria-hidden="true" /></a>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Footer;
