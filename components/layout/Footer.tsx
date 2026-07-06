// components/layout/Footer.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 pt-16 pb-8 font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-stone-800">
          {/* Column 1: Brand & About Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="text-xl font-serif font-bold tracking-widest text-stone-100 block"
            >
              PALPA MUD RESORT
            </Link>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              An authentic eco-sanctuary nestled in the rural hill stations of
              Palpa, Nepal. Experience traditional mud-brick architecture,
              organic farm-to-table dining, and peaceful mountain escapism above
              the clouds.
            </p>
            {/* Social Media Links */}
            <div className="pt-2 flex space-x-4 text-stone-400">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500 transition text-xs font-medium"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500 transition text-xs font-medium"
              >
                Instagram
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500 transition text-xs font-medium"
              >
                TripAdvisor
              </a>
            </div>
          </div>

          {/* Column 2: Quick Explore Sitemap */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-normal">
              <li>
                <Link href="/" className="hover:text-amber-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-amber-400 transition">
                  Mud Cottages
                </Link>
              </li>
              <li>
                <Link
                  href="/restaurant"
                  className="hover:text-amber-400 transition"
                >
                  The Clay Kitchen
                </Link>
              </li>
              <li>
                <Link
                  href="/gallary"
                  className="hover:text-amber-400 transition"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="hover:text-amber-400 transition"
                >
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location Specifics */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Contact Us
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li className="leading-relaxed">
                <span className="block font-medium text-stone-300">
                  Location:
                </span>
                Rural Hills, Tansen-Hwy Area,
                <br />
                Palpa, Nepal
              </li>
              <li>
                <span className="block font-medium text-stone-300">
                  Front Desk:
                </span>
                +977-98XXXXXXXX
              </li>
              <li>
                <span className="block font-medium text-stone-300">Email:</span>
                stay@palpamudresort.com
              </li>
            </ul>
          </div>

          {/* Column 4: Professional Newsletter Subscription */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Newsletter
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Subscribe to receive seasonal deals, travel paths update, and
              stories from the hills.
            </p>

            {subscribed ? (
              <p className="text-xs text-amber-400 font-medium pt-1">
                ✓ Thank you for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-md p-2 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-600 transition"
                />
                <button
                  type="submit"
                  className="w-full bg-amber-800 hover:bg-amber-700 text-stone-100 py-2 rounded-md text-xs font-medium tracking-wide transition shadow-xs"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Legals, Admin Quick-link, and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-stone-500 font-normal">
          <div>
            <p>
              &copy; {new Date().getFullYear()} Palpa Mud House Resort. All
              rights reserved.
            </p>
          </div>

          {/* Functional Professional Legal Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <Link
              href="/privacy-policy"
              className="hover:text-stone-300 transition"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-stone-300 transition">
              Terms & Conditions
            </Link>
            <Link
              href="/cancellation"
              className="hover:text-stone-300 transition"
            >
              Cancellation Policy
            </Link>
            <span className="text-stone-700">|</span>
            {/* Hidden entry point for resort administration */}
            <Link
              href="/admin/login"
              className="hover:text-amber-500 transition text-stone-400 font-medium"
            >
              Staff Login ➔
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
