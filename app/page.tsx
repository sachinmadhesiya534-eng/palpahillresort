// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Moving Pictures Slider Data
const HERO_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1546548970-71785318a17b?q=80&w=1200",
    title: "Earthy Comfort Above The Clouds",
    subtitle: "Welcome to Palpa Mud House Resort",
  },
  {
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200",
    title: "Authentic Wood-Fired Dining",
    subtitle: "The Clay Hearth Organic Kitchen",
  },
  {
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
    title: "Serene Mountain Escapism",
    subtitle: "Traditional Architecture Meets Luxury",
  },
];

// Specialty Zones Data
const SPECIALTIES = [
  {
    name: "Luxury Mud Cottages",
    desc: "Hand-sculpted organic walls built with local clay, keeping rooms warm in winter and breezy fresh during mountain summers.",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600",
    link: "/rooms",
  },
  {
    name: "The Clay Kitchen & Restaurant",
    desc: "Savor local Palpali Chukauni and organic Batuk platters prepared over traditional firewood stoves.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600",
    link: "/restaurant",
  },
  {
    name: "Panoramic Sitting Area",
    desc: "An open-air stone terrace looking directly over the rolling valleys and morning fog banks of Palpa.",
    img: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=600",
    link: "/gallery",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Moving picture carousel auto-play effect loop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Transitions to a new picture every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-stone-50 text-stone-900 overflow-x-hidden">
      {/* 1. Moving Pictures Hero Carousel Slider Section */}
      <section className="relative h-[85vh] w-full bg-stone-950 overflow-hidden">
        {HERO_IMAGES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Visual moving image element */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-105 animate-pulse-slow transition-transform duration-[5000ms]"
              style={{
                backgroundImage: `url('${slide.url}')`,
                transform:
                  index === currentSlide ? "scale(100%)" : "scale(105%)",
              }}
            />
            {/* Dark gradient shadow overlay for luxury styling contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-stone-950/30" />

            {/* Slide Floating Text Box Details with basic animations */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
              <span className="text-amber-400 font-semibold tracking-widest text-xs uppercase mb-3 transform translate-y-4 transition-all duration-700">
                {slide.subtitle}
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif text-stone-100 max-w-3xl leading-tight mb-6">
                {slide.title}
              </h1>
              <Link
                href="/booking"
                className="bg-amber-800 hover:bg-amber-700 text-white font-medium text-xs tracking-wider uppercase px-6 py-3 rounded-md shadow-lg transition-transform duration-300 hover:scale-105"
              >
                Reserve Your Stay
              </Link>
            </div>
          </div>
        ))}

        {/* Carousel Slider Dot Nav indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-30">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? "w-6 bg-amber-400"
                  : "w-1.5 bg-stone-400/60"
              }`}
            />
          ))}
        </div>
      </section>

      {/* 2. Welcome Hook Intro */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-stone-400">
          Where Nature Meets Tradition
        </h2>
        <p className="text-xl sm:text-2xl font-serif text-stone-800 leading-relaxed">
          Built entirely from raw timber, local stone, and red mud clay, our
          structures breathe naturally to provide an authentic, peaceful
          sanctuary away from urban noise.
        </p>
        <div className="w-12 h-0.5 bg-amber-700 mx-auto mt-4" />
      </section>

      {/* 3. Resort Specialties Grid Section with smooth layout cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-serif text-stone-900">
            Explore Our Special Features
          </h3>
          <p className="text-stone-500 text-xs font-light mt-1">
            Every corner curated for a memorable mountain getaway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPECIALTIES.map((spec, i) => (
            <div
              key={i}
              className="group bg-white border border-stone-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Card Image Wrapper with interactive zoom hover animation */}
              <div className="h-56 w-full overflow-hidden relative">
                <img
                  src={spec.img}
                  alt={spec.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-stone-950/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Card Text Content Details */}
              <div className="p-6 space-y-3">
                <h4 className="text-lg font-serif font-medium text-stone-900 group-hover:text-amber-800 transition-colors">
                  {spec.name}
                </h4>
                <p className="text-stone-600 text-xs font-light leading-relaxed">
                  {spec.desc}
                </p>
                <div className="pt-2">
                  <Link
                    href={spec.link}
                    className="text-xs font-semibold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1 group-hover:underline"
                  >
                    Discover Details ➔
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Mini Visual Showcase Context */}
      <section className="py-12 bg-stone-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block">
              The Hillside Atmosphere
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif">
              Handcrafted Sanctuary
            </h3>
            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-md">
              From our wide clay dining areas to cozy bedroom fire hearths, the
              resort integrates seamlessly with the Palpali countryside
              landscape. Wake up to natural lighting and views of the mist
              rising off the valley floor.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400"
              alt="Resort details"
              className="rounded-xl object-cover h-40 w-full shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=400"
              alt="Relaxing chairs"
              className="rounded-xl object-cover h-40 w-full shadow-md mt-4"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
