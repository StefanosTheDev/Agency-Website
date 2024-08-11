'use client'
import Ticker, { TICKER_DIRECTION_UP } from "@/components/Ticker";
import TestimonialTile from "@/components/TestimonialTile";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const testimonialsData = [
    {
        testimonial: "ClearStackAI has been a game-changer for our business. Their expertise in NLU and dedication to understanding our business allows us to feel confident in our technology partner moving forward.",
        name: "Romeo Piro",
        title: "Co-Founder",
        avatar: "https://robohash.org/asperioresvelit.png?size=50x50&set=set1"
    },
    {
        testimonial: "Stefanos' creative analysis and workflow optimization saved our Behavioral Health Company over 17 hours a week for our administrative staff. His consulting work was a game-changer, and we truly valued his expertise and dedication.",
        name: "Vartan Hekimian",
        title: "CEO",
        avatar: "https://robohash.org/quiaquorerum.png?size=50x50&set=set1"
    }
];

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

export default function Testimonials() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <div className="flex w-full items-center justify-center bg-white">
            <motion.div
                id="testimonials"
                className="flex flex-col mx-auto md:flex-row bg-white py-12 h-[661px] px-6 md:px-16 gap-8 md:gap-16"
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={sectionVariants}
                transition={{ duration: 1.5, delay: 0.2 }}
            >
                <motion.div
                    className="flex flex-col pt-8 md:pt-20 w-full md:w-1/2"
                    initial="hidden"
                    animate={controls}
                    variants={sectionVariants}
                    transition={{ duration: 1.5, delay: 0.5 }}
                >
                    {/* Adjusting the Testimonials Heading */}
                    <div className="testimonial-heading">
                     <span>Testimonials</span>
                    </div>


                    <h2 className="text-2xl md:text-3xl font-normal mb-6 text-center md:text-left">
                        What Our Customers <span className="gradient-text-2 pr-4 font-medium">Say</span>
                    </h2>
                    <p className="text-base text-gray-600 text-center md:text-left">
                        Discover how other businesses are transforming with ClearStackAI
                    </p>
                </motion.div>

                <motion.div
                    id="testimonial-carousel"
                    className="flex flex-col w-full md:w-1/2 items-center overflow-hidden"
                    initial="hidden"
                    animate={controls}
                    variants={sectionVariants}
                    transition={{ duration: 1.5, delay: 0.8 }}
                >
                    <Ticker duration={20} direction={TICKER_DIRECTION_UP}>
                        {testimonialsData.map((testimonial, index) => (
                            <div key={index} className="py-4">
                                <TestimonialTile
                                    testimonial={testimonial.testimonial}
                                    name={testimonial.name}
                                    title={testimonial.title}
                                    avatar={testimonial.avatar}
                                />
                            </div>
                        ))}
                    </Ticker>
                </motion.div>
            </motion.div>
        </div>
    );
}
