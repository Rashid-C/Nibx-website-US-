import { useState } from "react";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const ContactUs = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors]   = useState({});

    const validate = (formData) => {
        const errs    = {};
        const name    = formData.get("name")?.trim();
        const email   = formData.get("email")?.trim();
        const message = formData.get("message")?.trim();
        if (!name || name.length < 2)    errs.name    = "Name must be at least 2 characters.";
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email address.";
        if (!message || message.length < 10) errs.message = "Message must be at least 10 characters.";
        return errs;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const errs = validate(formData);
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setErrors({});
        setLoading(true);
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
        try {
            const res  = await fetch(import.meta.env.VITE_WEB3FORM_API, { method: "POST", body: formData });
            const data = await res.json();
            if (data.success) { toast.success("Thank you for your submission!"); e.target.reset(); }
            else toast.error(data.message || "Submission failed. Please try again.");
        } catch { toast.error("Something went wrong. Please try again."); }
        finally  { setLoading(false); }
    };

    const inputCls = (err) =>
        `w-full px-4 py-3 text-sm rounded-xl border ${err ? "border-red-400 dark:border-red-500" : "border-gray-200 dark:border-gray-700"} bg-gray-50 dark:bg-gray-800/60 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-primary dark:focus:border-primary transition-colors duration-200`;

    return (
        <section
            id="contact-us"
            className="relative px-4 sm:px-12 lg:px-24 xl:px-40 pt-28 pb-10 text-gray-700 dark:text-white overflow-hidden"
        >
            {/* bg blob */}
            <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-150 h-72 bg-primary/5 dark:bg-primary/8 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                {/* ── LEFT — info ── */}
                <motion.div
                    initial={{ opacity: 0, x: -28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-8"
                >
                    {/* label */}
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/8 dark:bg-primary/15 border border-primary/20 px-4 py-2 rounded-full self-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Get in Touch
                    </div>

                    <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4">
                            Let's talk{" "}
                            <span className="bg-linear-to-r from-primary to-sky-400 bg-clip-text text-transparent">bulk.</span>
                        </h2>
                        <p className="text-base text-gray-500 dark:text-white/55 leading-relaxed max-w-md">
                            Looking to source bulk electronics, request a warehouse quote, or discuss a distribution partnership? Our Miami team is ready.
                        </p>
                    </div>

                    {/* Info cards */}
                    <div className="flex flex-col gap-3">
                        {[
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                ),
                                label: "US Headquarters",
                                value: "7931 NW 68th St, Miami, Florida 33166",
                            },
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                                ),
                                label: "Distribution",
                                value: "Nationwide freight — all 50 US states, tracked & insured",
                            },
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                                ),
                                label: "Warehouse",
                                value: "50,000 sq ft — Climate controlled, 24/7 monitored",
                            },
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                ),
                                label: "Email",
                                value: "info@thenibx.com",
                                href: "mailto:info@thenibx.com",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-0.5">{item.label}</p>
                                    {item.href ? (
                                        <a href={item.href} className="text-sm font-medium text-primary hover:underline underline-offset-2">{item.value}</a>
                                    ) : (
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{item.value}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap gap-2">
                        {["📦 Bulk Orders", "✅ Quality Checked", "🇺🇸 US-Based", "🚚 Nationwide Shipping"].map((t) => (
                            <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                                {t}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* ── RIGHT — form ── */}
                <motion.form
                    initial={{ opacity: 0, x: 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    onSubmit={onSubmit}
                    noValidate
                    className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-7 sm:p-8 flex flex-col gap-5 shadow-xl shadow-gray-100/60 dark:shadow-black/30"
                >
                    <div>
                        <p className="font-bold text-lg text-gray-800 dark:text-white mb-1">Send us a message</p>
                        <p className="text-sm text-gray-400 dark:text-gray-500">We respond within 24 hours.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="contact-name" className="text-xs font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">Your name</label>
                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                placeholder="John Smith"
                                className={inputCls(errors.name)}
                            />
                            {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="contact-email" className="text-xs font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">Email address</label>
                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                placeholder="john@company.com"
                                className={inputCls(errors.email)}
                            />
                            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="contact-message" className="text-xs font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">Message</label>
                        <textarea
                            id="contact-message"
                            rows={6}
                            name="message"
                            placeholder="Tell us about your requirements — product type, quantity, timeline..."
                            className={inputCls(errors.message)}
                        />
                        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                    </div>

                    <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
                        {loading ? (
                            <>
                                <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                                Sending…
                            </>
                        ) : (
                            <>
                                Send Message
                                <img src={assets.arrow_icon} alt="" aria-hidden="true" className="w-4" />
                            </>
                        )}
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default ContactUs;
