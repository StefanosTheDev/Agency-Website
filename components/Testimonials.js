'use client'
import Ticker, { TICKER_DIRECTION_UP } from "@/components/Ticker";
import TestimonialTile from "@/components/TestimonialTile";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const testimonialsData = [
    {
        testimonial: "ClearStackAI's solutions have revolutionized our customer service operations. Response times are faster, and customer satisfaction is higher than ever.",
        name: "Derek Johnson",
        title: "Customer Service Manager",
        avatar: "https://robohash.org/molestiaevoluptatibusea.png?size=50x50&set=set1"
    },
    {
        testimonial: "The automation processes implemented by ClearStackAI have saved us countless hours. Our efficiency has skyrocketed, allowing us to focus on innovation.",
        name: "Jane Smith",
        title: "Operations Manager",
        avatar: "https://robohash.org/eosillumadipisci.png?size=50x50&set=set1"
    },
    {
        testimonial: "ClearStackAI provided us with exceptional AI solutions for our complex problems. Their expertise and support have been invaluable.",
        name: "Michael Brown",
        title: "Chief Technology Officer",
        avatar: "https://robohash.org/quiaquorerum.png?size=50x50&set=set1"
    },
    {
        testimonial: "With ClearStackAI's AI-driven insights, we've been able to make more informed decisions, leading to better outcomes for our projects.",
        name: "Emily Davis",
        title: "Project Manager",
        avatar: "https://robohash.org/similiquefacilisdeleniti.png?size=50x50&set=set1"
    },
    {
        testimonial: "The integration of ClearStackAI's solutions has streamlined our workflows and improved our overall productivity. Highly recommend their services!",
        name: "John Miller",
        title: "Senior Developer",
        avatar: "https://robohash.org/asperioresvelit.png?size=50x50&set=set1"
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
            <div className={"flex w-full items-center justify-center bg-white"}>

                <motion.div
                    id="testimonials"
                    className="flex flex-col mx-auto md:flex-row bg-white py-12 h-[661px] px-6 md:px-16 gap-8 md:gap-16"
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={sectionVariants}
                    transition={{duration: 1.5, delay: 0.2}}
                >
                    <motion.div
                        className="flex flex-col pt-8 md:pt-20 w-full md:w-1/2"
                        initial="hidden"
                        animate={controls}
                        variants={sectionVariants}
                        transition={{duration: 1.5, delay: 0.5}}
                    >
                        <div
                            className="mb-6 relative max-w-max px-4 py-2 font-sans text-xs font-bold text-black uppercase bg-[#DBDCDF] rounded-lg select-none whitespace-nowrap"
                        >
                            <span className="">Testimonials</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-normal mb-6 text-center md:text-left">
                            What Our Customers <span className="gradient-text-2 pr-4 font-medium">Say</span>
                        </h2>
                        <p className="text-base text-gray-600 text-center md:text-left">
                            This advantage emphasizes how chat AI can provide faster and more accurate responses to user
                            inquiries.
                        </p>
                    </motion.div>

                    <motion.div
                        id="testimonial-carousel"
                        className="flex flex-col w-full md:w-1/2 items-center overflow-hidden"
                        initial="hidden"
                        animate={controls}
                        variants={sectionVariants}
                        transition={{duration: 1.5, delay: 0.8}}
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
