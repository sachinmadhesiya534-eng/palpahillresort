// app/rooms/[id]/page.tsx
"use client";

import { useState, useEffect, use } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

interface RoomData {
  name: string;
  description: string;
  price: string;
  amenities?: string;
  image?: string;
}

export default function RoomDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Safe unwrapping mechanism for dynamic parameters matching standard Next.js compilation rules
  const resolvedParams = use(params);
  const roomId = resolvedParams.id;

  const [room, setRoom] = useState<RoomData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSingleRoom() {
      try {
        const docRef = doc(db, "rooms", roomId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setRoom(docSnap.data() as RoomData);
        } else {
          console.error(
            "No cottage with that ID located inside Firestore collection!",
          );
        }
      } catch (err) {
        console.error(
          "Error reading entry parameters from Firestore database:",
          err,
        );
      } finally {
        setLoading(false);
      }
    }
    fetchSingleRoom();
  }, [roomId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center text-stone-500 text-sm font-light">
        Retrieving Cottage Overview Layout...
      </div>
    );
  }

  if (!room) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center gap-4 text-center px-4">
        <p className="text-stone-600 font-serif text-lg">
          Cottage identifier path record missing.
        </p>
        <Link
          href="/rooms"
          className="text-xs font-semibold text-amber-800 underline"
        >
          ➔ Return to Accommodations
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-stone-50 text-stone-900">
      <Navbar />

      <main className="flex-grow max-w-4xl w-full mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
          {/* Main Visual Header Banner */}
          <div className="h-64 sm:h-96 w-full bg-stone-200 relative">
            <img
              src={
                room.image ||
                "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200"
              }
              alt={room.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Core Descriptive Text Details */}
          <div className="p-6 sm:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 border-b border-stone-100 pb-4">
              <h1 className="text-3xl font-serif text-stone-900">
                {room.name}
              </h1>
              <span className="text-xl font-bold text-amber-800 whitespace-nowrap">
                {room.price}{" "}
                <span className="text-xs text-stone-400 font-light">
                  / night
                </span>
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                About the space
              </h3>
              <p className="text-stone-600 text-sm font-light leading-relaxed">
                {room.description}
              </p>
            </div>

            {room.amenities && (
              <div className="space-y-2 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  Amenities Provided
                </h3>
                <p className="text-stone-600 text-xs font-light leading-relaxed">
                  {room.amenities}
                </p>
              </div>
            )}

            <div className="pt-6 border-t border-stone-100">
              {/* ✅ REDIRECT CONTEXT: Passes the active cottage id string down cleanly to populate the booking selection automatically */}
              <Link
                href={`/booking?roomId=${roomId}`}
                className="inline-block text-center bg-amber-800 hover:bg-amber-900 text-white font-medium text-xs tracking-wider uppercase px-8 py-3.5 rounded-lg shadow-sm transition-colors duration-200"
              >
                Secure Booking for This Unit
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
