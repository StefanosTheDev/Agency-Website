// pages/consultation.js
'use client'
import CalendlyIntegration from "@/components/CalendlyIntegration";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

export default function Consultation() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <div className="flex w-full items-center justify-center bg-background">
            <motion.div
                id="consultation"
                className="flex bg-background flex-col mx-auto py-12 px-6 md:px-16 gap-8 md:gap-16"
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={sectionVariants}
                transition={{duration: 1.5, delay: 0.2}}
            >
                <div
                    className="self-center relative max-w-max px-4 py-2 font-sans text-xs font-bold text-black uppercase bg-[#DBDCDF] rounded-lg select-none whitespace-nowrap"
                >
                    <span className="">Lets Connect</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-normal mb-4 text-center">
                    Book A Free Consultation <span className="gradient-text-2 pr-4 font-bold italic">Today</span>
                </h2>
                <CalendlyIntegration/>
            </motion.div>
        </div>
    );
}
