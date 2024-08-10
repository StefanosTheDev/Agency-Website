'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ClientButton from "@/components/Button";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.getElementById('hero-section').offsetHeight;
            setIsScrolled(window.scrollY >= (heroHeight - 2));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id={"nav-bar"} className={`p-4 fixed w-full z-20 top-0 backdrop-blur-sm transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-medium">ClearStackAI</h1>
                    {/*<Link className="text-xl" href="/">Home</Link>*/}
                    {/*<Link className="text-xl" href="#how-it-works">How It Works</Link>*/}
                    {/*<Link className="text-xl" href="#services">Our Services</Link>*/}
                    {/*<ClientButton variant="filled" onClick={() => {}}>BOOK INTRO CALL</ClientButton>*/}
            </div>
        </header>
    );
}
