'use client'
import Image from 'next/image';
import ClientButton from "@/components/Button";
import { motion } from 'framer-motion';

export default function Hero() {
    const handleScrollServices = () => {
        document.getElementById('next-section').scrollIntoView({ behavior: 'smooth' });
    };
    const handleScrollConsultation = () => {
        document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero-section"
                 className="relative flex items-center justify-start min-h-screen bg-gradient-to-r from-blue-800 to-purple-800 text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/header-dark-04.svg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt="Background"
                    className="parallax"
                />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto text-left flex flex-col md:gap-8 px-4">
                <motion.h2
                    className="font-bold text-2xl sm:text-4xl md:text-5xl leading-tight mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Welcome To ClearStackAI
                </motion.h2>
                <motion.h2
                    className="font-bold gradient-text-1 text-4xl sm:text-6xl md:text-7xl leading-tight"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    We Build Next Generation B2B AI Solutions
                </motion.h2>
                <motion.p
                    className="mt-8 text-md sm:text-xl md:text-2xl text-muted leading-relaxed"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    Revolutionizing B2B engagement with innovative<br className="hidden md:inline" /> solutions for
                    tomorrow's business challenges.
                </motion.p>
                <motion.div
                    className="mt-8 flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <ClientButton variant="filled" onClick={handleScrollConsultation}>BOOK INTRO CALL</ClientButton>
                    <ClientButton variant="outlined" onClick={handleScrollServices}>VIEW SERVICES</ClientButton>
                </motion.div>
            </div>
            <div className="absolute bottom-8 w-full flex justify-center">
                <motion.div
                    className="animate-bounce cursor-pointer"
                    onClick={handleScrollServices}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M19 9l-7 7-7-7"></path>
                    </svg>
                </motion.div>
            </div>
        </section>
    );
}
