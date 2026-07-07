// components/layout/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Centralized navigation paths mapped explicitly to your actual folder names
  const navLinks = [
    { name: "Rooms", href: "/rooms" },
    { name: "Gallery", href: "/gallary" }, // Matches your 'gallary' folder name
    { name: "Restaurant", href: "/restaurent" }, // Matches your 'restaurent' folder name
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo Identity */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-serif font-bold tracking-widest text-amber-950 transition hover:opacity-90"
        >
          PALPA HILL RESORT
        </Link>

        {/* Desktop Navigation Links (Hidden on Mobile) */}
        <nav className="hidden md:flex space-x-8 text-xs uppercase tracking-wider font-medium">
          {navLinks.map((link) => {
            // Checks if current path exactly matches or starts with the link route
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 pb-1 ${
                  isActive
                    ? "text-amber-800 font-semibold border-b-2 border-amber-800"
                    : "text-stone-600 hover:text-amber-700"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button Segment (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/booking"
            className={`px-6 py-2.5 rounded-md text-xs uppercase tracking-widest font-semibold shadow-xs transition duration-300 transform hover:-translate-y-0.5 inline-block ${
              pathname === "/booking"
                ? "bg-amber-950 text-white"
                : "bg-amber-800 hover:bg-amber-900 text-stone-50"
            }`}
          >
            ENQUIRY FOR RESERVATION
          </Link>
        </div>

        {/* Mobile Hamburger Button Menu Trigger */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-stone-700 hover:text-amber-800 p-2 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              // Close icon layout SVG
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Menu icon layout SVG
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-100 transition-all duration-200">
          <div className="px-4 pt-2 pb-6 space-y-3 shadow-inner">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Auto close menu drawer on click
                  className={`block py-2 text-sm font-medium tracking-wide transition-all ${
                    isActive
                      ? "text-amber-800 font-semibold pl-2 border-l-2 border-amber-800 bg-stone-50/50"
                      : "text-stone-600 hover:text-amber-700 hover:pl-1"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4">
              <Link
                href="/booking"
                onClick={() => setIsOpen(false)}
                className={`block text-center py-3 rounded-md text-sm font-semibold tracking-wide shadow-sm transition ${
                  pathname === "/booking"
                    ? "bg-amber-950 text-white"
                    : "bg-amber-800 hover:bg-amber-900 text-stone-50"
                }`}
              >
                ENQUIRY
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
