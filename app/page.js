// pages/index.js or pages/page.js
import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/*<Header />*/}
            <main className="flex-grow">
                <Hero />
                <Services />
                <Testimonials />
                <Consultation />
            </main>
            <Footer />
        </div>
    );
}
