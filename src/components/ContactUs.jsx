import React, { useState } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const ContactUs = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = (formData) => {
        const errs = {};
        const name = formData.get("name")?.trim();
        const email = formData.get("email")?.trim();
        const message = formData.get("message")?.trim();

        if (!name || name.length < 2) errs.name = "Name must be at least 2 characters.";
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email address.";
        if (!message || message.length < 10) errs.message = "Message must be at least 10 characters.";
        return errs;
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const errs = validate(formData);
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        setErrors({});
        setLoading(true);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
        try {
            const response = await fetch(import.meta.env.VITE_WEB3FORM_API, {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Thank you for your submission!");
                event.target.reset();
            } else {
                toast.error(data.message || "Submission failed. Please try again.");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ staggerChildren: 0.2 }}
            id="contact-us"
            className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
        >
            <Title
                title="Get in touch"
                desc="Looking to source bulk electronics, request a warehouse quote, or discuss a distribution partnership? Our Miami team is ready."
            />
            <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false }}
                onSubmit={onSubmit}
                className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
                noValidate
            >
                <div>
                    <label htmlFor="contact-name" className="mb-2 text-sm font-medium block">Your name</label>
                    <div className={`flex pl-3 rounded-lg border ${errors.name ? "border-red-400" : "border-gray-300 dark:border-gray-600"}`}>
                        <img src={assets.person_icon} alt="" aria-hidden="true" />
                        <input
                            id="contact-name"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full p-3 text-sm outline-none bg-transparent"
                            aria-describedby={errors.name ? "name-error" : undefined}
                        />
                    </div>
                    {errors.name && <p id="name-error" className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="contact-email" className="mb-2 text-sm font-medium block">Email id</label>
                    <div className={`flex pl-3 rounded-lg border ${errors.email ? "border-red-400" : "border-gray-300 dark:border-gray-600"}`}>
                        <img src={assets.email_icon} alt="" aria-hidden="true" />
                        <input
                            id="contact-email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full p-3 text-sm outline-none bg-transparent"
                            aria-describedby={errors.email ? "email-error" : undefined}
                        />
                    </div>
                    {errors.email && <p id="email-error" className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="contact-message" className="mb-2 text-sm font-medium block">Message</label>
                    <textarea
                        id="contact-message"
                        rows={8}
                        name="message"
                        placeholder="Enter your message"
                        className={`w-full p-3 text-sm outline-none rounded-lg border bg-transparent ${errors.message ? "border-red-400" : "border-gray-300 dark:border-gray-600"}`}
                        aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && <p id="message-error" className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                >
                    {loading ? "Sending…" : "Submit"}{" "}
                    {!loading && <img src={assets.arrow_icon} alt="" aria-hidden="true" className="w-4" />}
                </button>
            </motion.form>
        </motion.div>
    );
};

export default ContactUs;
