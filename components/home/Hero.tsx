"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        className="absolute inset-0 h-full w-full object-cover"
        alt="Resort"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <p className="mb-5 text-xl uppercase tracking-[8px]">Welcome To</p>

          <h1 className="text-6xl font-bold md:text-8xl">Palpa Hill Resort</h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-200">
            Escape to the peaceful hills of Palpa and enjoy luxury mud houses,
            delicious local cuisine, and breathtaking nature.
          </p>

          <Link
            href="/booking"
            className="mt-10 inline-block rounded-xl bg-[#5B7C45] px-8 py-4 text-lg font-semibold"
          >
            Book Your Stay
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
