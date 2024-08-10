// components/Footer.js
'use client'
import Image from 'next/image';
import Button from "@/components/Button";
import { useEffect, useState } from 'react';

export default function Footer() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Check on mount
        window.addEventListener('resize', handleResize); // Check on resize

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <footer className="relative w-full flex flex-col items-center justify-between text-center bg-gradient-to-r from-blue-800 to-purple-800 text-white overflow-hidden min-h-[100px] md:min-h-[200px]">
            <div className="absolute inset-0">
                <Image
                    src="/footer.svg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt="Background"
                    className="parallax"
                />
            </div>
            <div className="flex flex-col h-full justify-between relative z-10 mx-auto px-8 py-4 md:py-8 w-full max-w-7xl">
                {!isMobile && (
                    <div>
                        <p className="text-3xl">ClearStackAI</p>
                        <p className="text-lg text-muted">ClearStackAI, AN AI AUTOMATION COMPANY</p>
                    </div>
                )}
                <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-2 md:space-y-0 md:space-x-4">
                    <a href="www.google.com" className="hover:underline text-sm md:text-xl">Terms of Service</a>
                    <a href="#" className="hover:underline text-sm md:text-xl md:ml-4">Privacy Policy</a>
                    {!isMobile && (
                        <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} variant={'outlined'}>Back To Top</Button>
                    )}
                </div>
            </div>
        </footer>
    );
}
