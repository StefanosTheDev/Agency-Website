'use client'
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
            className="relative flex items-center justify-start min-h-screen text-white overflow-hidden"
            style={{ width: '100vw', height: '100vh', minWidth: '100vw', minHeight: '100vh' }}>
            <div className="absolute inset-0">
                <img
                    src="data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%22915%22%20viewBox%3D%220%200%201440%20915%22%20width%3D%221440%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fsvg%22%3E%3Cfilter%20id%3D%22a%22%20color-interpolation-filters%3D%22sRGB%22%20filterUnits%3D%22userSpaceOnUse%22%20height%3D%221407%22%20width%3D%221527.75%22%20x%3D%22-351.75%22%20y%3D%22-714%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20mode%3D%22normal%22%20result%3D%22shape%22%2F%3E%3CfeGaussianBlur%20result%3D%22effect1_foregroundBlur_1_116%22%20stdDeviation%3D%22260.25%22%2F%3E%3C%2Ffilter%3E%3Cfilter%20id%3D%22b%22%20color-interpolation-filters%3D%22sRGB%22%20filterUnits%3D%22userSpaceOnUse%22%20height%3D%221090.5%22%20width%3D%221090.5%22%20x%3D%22952.5%22%20y%3D%22-159%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20mode%3D%22normal%22%20result%3D%22shape%22%2F%3E%3CfeGaussianBlur%20result%3D%22effect1_foregroundBlur_1_116%22%20stdDeviation%3D%22204%22%2F%3E%3C%2Ffilter%3E%3Cfilter%20id%3D%22c%22%20color-interpolation-filters%3D%22sRGB%22%20filterUnits%3D%22userSpaceOnUse%22%20height%3D%221240.5%22%20width%3D%221240.5%22%20x%3D%22-629.25%22%20y%3D%22-369%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20mode%3D%22normal%22%20result%3D%22shape%22%2F%3E%3CfeGaussianBlur%20result%3D%22effect1_foregroundBlur_1_116%22%20stdDeviation%3D%22241.5%22%2F%3E%3C%2Ffilter%3E%3CclipPath%20id%3D%22d%22%3E%3Cpath%20d%3D%22m0-18h1440v933h-1440z%22%2F%3E%3C%2FclipPath%3E%3Cpath%20d%3D%22m0-18h1440v933h-1440z%22%20fill%3D%22%23fff%22%2F%3E%3Cg%20clip-path%3D%22url(%23d)%22%3E%3Cpath%20d%3D%22m0-18h1440v988.5h-1440z%22%20fill%3D%22%2306060c%22%2F%3E%3Cg%20filter%3D%22url(%23a)%22%3E%3Cellipse%20cx%3D%22412.125%22%20cy%3D%22-10.5%22%20fill%3D%22%23000aff%22%20rx%3D%22243.375%22%20ry%3D%22183%22%2F%3E%3C%2Fg%3E%3Cg%20filter%3D%22url(%23b)%22%3E%3Ccircle%20cx%3D%221497.75%22%20cy%3D%22386.25%22%20fill%3D%22%238f00ff%22%20r%3D%22137.25%22%2F%3E%3C%2Fg%3E%3Cg%20filter%3D%22url(%23c)%22%3E%3Ccircle%20cx%3D%22-9%22%20cy%3D%22251.25%22%20fill%3D%22%2300b2ff%22%20r%3D%22137.25%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
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
