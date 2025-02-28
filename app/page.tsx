'use client';

import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
// import Model from "@/components/Model";
import Navbar from "@/components/Navbar";
import Image from "next/image";

import dynamic from 'next/dynamic';
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWork";
import Footer from "@/components/Footer";

const Model = dynamic(() => import('../components/Model'), {
  ssr: false, // Disable SSR
  loading: () => <div>Loading...</div>, // Fallback while loading
});

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
