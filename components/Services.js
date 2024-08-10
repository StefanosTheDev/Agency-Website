'use client'
import Image from 'next/image';
import ClientButton from "@/components/Button";
import { useEffect, useState } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const serviceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

export default function Services() {
    // const [navbarHeight, setNavbarHeight] = useState(0);
    //
    // useEffect(() => {
    //     const height = document.getElementById('nav-bar').offsetHeight;
    //     setNavbarHeight(height);
    // }, []);

    const services = [
        {
            title: 'AI Assistants',
            description: 'Revolutionize your business with AI Assistants providing 24/7 Customer Support and more.',
            imgSrc: '/assistants.svg',
        },
        {
            title: 'Automated Process Optimization',
            description: 'Enhance efficiency with automated processes tailored to your business needs.',
            imgSrc: '/automation.svg',
        },
        {
            title: 'Enterprise Consulting',
            description: 'Get expert advice and strategies to elevate your business operations.',
            imgSrc: '/enterprise.svg',
        },
        {
            title: 'AI Driven Software Development',
            description: 'Leverage AI for innovative and effective software solutions.',
            imgSrc: '/software.svg',
        },
    ];

    // Create arrays of hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const controlsArray = services.map(() => useAnimation());
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inViewRefsArray = services.map(() => useInView({ triggerOnce: true, threshold: 0.1 }));

    useEffect(() => {
        controlsArray.forEach((controls, index) => {
            if (inViewRefsArray[index][1]) {
                controls.start('visible');
            }
        });
    }, [controlsArray, inViewRefsArray]);

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
                                transition={{duration: 1.5, delay: index * 0.3}}
                            >
                                <div className="w-full h-48 sm:h-64 lg:h-80 relative">
                                    <Image
                                        src={service.imgSrc}
                                        alt={service.title}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-t-lg"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6">{service.description}</p>
                                    <div className="mt-auto">
                                        <ClientButton variant="filled" onClick={() => {
                                        }}>Get Started</ClientButton>
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
