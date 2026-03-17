import { motion } from "motion/react";

const WHATSAPP_NUMBER = "17867840023";
const WHATSAPP_URL    = `https://wa.me/${WHATSAPP_NUMBER}`;

const WhatsAppButton = () => {
    return (
        <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl bg-[#25D366] shadow-xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 hover:bg-[#20c45e] transition-colors duration-200"
        >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-2xl bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

            {/* WhatsApp SVG */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-7 h-7 sm:w-8 sm:h-8 fill-white relative z-10"
            >
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.664 4.824 1.822 6.836L2 30l7.378-1.794A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 0 1-5.9-1.612l-.422-.252-4.376 1.064 1.094-4.258-.276-.438A11.56 11.56 0 0 1 4.4 16C4.4 9.592 9.592 4.4 16 4.4S27.6 9.592 27.6 16 22.408 27.6 16 27.6zm6.35-8.67c-.348-.174-2.06-1.016-2.38-1.132-.318-.116-.55-.174-.78.174-.232.348-.896 1.132-1.1 1.364-.202.232-.404.26-.752.086-.348-.174-1.468-.54-2.796-1.724-1.032-.92-1.728-2.056-1.932-2.404-.202-.348-.022-.536.152-.71.156-.154.348-.404.522-.606.174-.202.232-.348.348-.58.116-.232.058-.434-.028-.608-.088-.174-.78-1.882-1.07-2.578-.28-.676-.567-.584-.78-.594l-.664-.012c-.232 0-.608.086-.926.434-.318.348-1.214 1.186-1.214 2.892s1.242 3.354 1.414 3.586c.174.232 2.446 3.732 5.924 5.234.828.358 1.474.572 1.978.732.832.264 1.588.226 2.186.138.668-.1 2.06-.842 2.35-1.656.29-.814.29-1.512.202-1.656-.086-.144-.318-.23-.666-.404z"/>
            </svg>
        </motion.a>
    );
};

export default WhatsAppButton;
