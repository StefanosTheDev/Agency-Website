'use client'
import Image from 'next/image';
import ClientButton from "@/components/Button";
import { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const serviceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

export default function Services() {

    const services = [
        {
            title: 'AI Chatbots',
            description: 'Our AI agents are highly customizable and can integrate seamlessly with any platform that has a connection gateway. With extremely fast turnaround times. Our agents can be built with OpenAI, Claude, Gemini, and more!',
            imgSrc: '/NewPhoto1.png',
        },
        {
            title: 'Custom Workflow Automations',
            description: 'Have a custom CRM or static processes slowing you down? Our experts will analyze your workflow and implement custom software solutions infused with automation to eliminate bottlenecks and boost efficiency.',
            imgSrc: '/auto.png',
        },
    ];

    // Create arrays of hooks
    const controlsArray = services.map(() => useAnimation());
    const inViewRefsArray = services.map(() => useInView({ triggerOnce: true, threshold: 0.1 }));

    useEffect(() => {
        controlsArray.forEach((controls, index) => {
            if (inViewRefsArray[index][1]) {
                controls.start('visible');
            }
        });
    }, [controlsArray, inViewRefsArray]);

    // Scroll handlers
    const handleScrollConsultation = () => {
        document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' });
    };

    const handleScrollContactUs = () => {
        document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="next-section" className="py-20 bg-background relative flex flex-col items-center justify-center">
            <div
                className="relative grid items-center px-4 py-2 font-sans text-xs font-bold text-black uppercase bg-[#DBDCDF] rounded-lg select-none whitespace-nowrap">
                <span className="">What We Offer</span>
            </div>
            <div className={`container h-full mx-auto px-4`}>

                <h2 className="text-3xl md:text-4xl font-normal mb-10 text-center md:text-left">
                    Revolutionize Your <span className="gradient-text-2 italic pr-4">WorkFlow</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {services.map((service, index) => {
                        const [ref] = inViewRefsArray[index];
                        return (
                            <motion.div
                                key={index}
                                className="rounded-lg bg-white shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 ease-in-out"
                                ref={ref}
                                initial="hidden"
                                animate={controlsArray[index]}
                                variants={serviceVariants}
                                transition={{ duration: 1.5, delay: index * 0.3 }}
                            >
                                <div className="w-full h-48 sm:h-64 lg:h-80 relative">
                                    <Image
                                        src={service.imgSrc}
                                        alt={service.title}
                                        layout="fill"
                                        objectFit="contain"
                                        className={`rounded-t-lg ${service.title === 'AI Chatbots' ? 'mobile-zoom' : ''}`}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6">{service.description}</p>
                                    <div className="mt-auto">
                                        <ClientButton variant="filled" onClick={handleScrollConsultation}>Get Started</ClientButton>
                                        {/* Example of adding a second button */}
                                        {/* <ClientButton variant="outlined" onClick={handleScrollContactUs}>Learn More</ClientButton> */}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
