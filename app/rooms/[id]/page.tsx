"use client";

import React, { use } from "react";
import Link from "next/link";

// =========================================================
// 1. EMBEDDED STATIC DATA (Matches your rooms grid page)
// =========================================================
interface RoomItem {
  id: string;
  name: string;
  price: number;
  view: string;
  description: string;
  imageUrl: string;
}

const ROOMS_DATA: RoomItem[] = [
  {
    id: "r1",
    name: "Standard Mud Cottage",
    price: 4500,
    view: "Terraced Garden & Local Village View",
    description:
      "Handcrafted clay walls keeping you naturally cool, featuring locally woven textiles and rustic furniture.",
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "r2",
    name: "Hills-Facing Deluxe Suite",
    price: 7000,
    view: "Panoramic Palpa Valley & Sunrise Hills",
    description:
      "Spacious layout with massive viewing windows overlooking the iconic misty morning ridges of Palpa.",
    imageUrl:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
  },
];

// =========================================================
// 2. MAIN DYNAMIC PAGE COMPONENT
// =========================================================
interface PageProps {
  params: Promise<{ id: string }>;
}

export default function RoomDetailPage({ params }: PageProps) {
  // Unwrap the params promise using React.use() as required by modern Next.js
  const unwrappedParams = use(params);
  const roomId = unwrappedParams.id;

  // Find the matching room locally
  const room = ROOMS_DATA.find((r) => r.id === roomId);

  // Fallback state if the user types an ID that doesn't exist
  if (!room) {
    return (
      <div className="container mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Room variant not found
        </h1>
        <p className="text-gray-600">
          The accommodation you are looking for does not exist.
        </p>
        <Link
          href="/rooms"
          className="inline-block text-green-700 hover:underline font-medium"
        >
          ← Back to all rooms
        </Link>
      </div>
    );
  }

  // Pre-filled template message for seamless booking integration
  const messageTemplate = encodeURIComponent(
    `Namaste Palpa Hill Resort! I am interested in booking the "${room.name}" (Rs. ${room.price}/night). Please let me know its availability.`,
  );
  const whatsappUrl = `https://wa.me/9779800000000?text=${messageTemplate}`;

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="space-y-6">
        {/* Back navigation */}
        <Link
          href="/rooms"
          className="text-sm font-medium text-gray-500 hover:text-gray-800 transition flex items-center gap-1"
        >
          ← All Accommodations
        </Link>

        {/* Big Layout Banner */}
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg bg-gray-100">
          <img
            src={room.imageUrl}
            alt={room.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Detail Breakdown Grid */}
        <div className="grid md:grid-cols-3 gap-8 pt-4">
          {/* Main Info Column */}
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {room.name}
            </h1>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {room.description}
            </p>

            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 space-y-2">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Highlight View
              </h3>
              <p className="text-gray-800 font-medium text-sm flex items-center gap-2">
                🌄 {room.view}
              </p>
            </div>
          </div>

          {/* Pricing Box Sticky Widget */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 h-fit space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                Rate
              </span>
              <div className="text-3xl font-bold text-green-700">
                Rs. {room.price.toLocaleString()}
                <span className="text-sm font-normal text-gray-500">
                  {" "}
                  / night
                </span>
              </div>
            </div>

            <hr className="border-gray-100" />

            <div className="text-xs text-gray-500 space-y-2">
              <div className="flex justify-between">
                <span>Check-in:</span>{" "}
                <strong className="text-gray-700">12:00 PM</strong>
              </div>
              <div className="flex justify-between">
                <span>Check-out:</span>{" "}
                <strong className="text-gray-700">10:00 AM</strong>
              </div>
              <div className="flex justify-between">
                <span>Includes:</span>{" "}
                <strong className="text-gray-700">Welcome Drinks</strong>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-xl shadow transition text-center text-sm"
            >
              Reserve via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
