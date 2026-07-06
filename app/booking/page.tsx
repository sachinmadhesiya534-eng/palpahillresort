// app/(public)/booking/page.tsx
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const MOCK_ROOMS_LIST = [
  { id: "mud-cottage-1", name: "Classic Mud Cottage" },
  { id: "luxury-villa-2", name: "Premium Stone Sanctuary" },
];

function BookingFormInner({ explicitRoomId }: { explicitRoomId: string }) {
  const [rooms, setRooms] = useState<{ id: string; name: string }[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomId: explicitRoomId,
  });

  const [status, setStatus] = useState({ success: false, loading: false });

  useEffect(() => {
    async function getRooms() {
      try {
        if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
          setRooms(MOCK_ROOMS_LIST);
          return;
        }
        const snap = await getDocs(collection(db, "rooms"));
        setRooms(
          snap.docs.map((doc) => ({ id: doc.id, name: doc.data().name })),
        );
      } catch (err) {
        console.warn("Using fallback local list options:", err);
        setRooms(MOCK_ROOMS_LIST);
      }
    }
    getRooms();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ success: false, loading: true });

    if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
      // Fake a loading response time delay for design testing
      setTimeout(() => {
        setStatus({ success: true, loading: false });
        setFormData({
          name: "",
          email: "",
          phone: "",
          checkIn: "",
          checkOut: "",
          roomId: "",
        });
      }, 1000);
      return;
    }

    try {
      await addDoc(collection(db, "bookings"), {
        ...formData,
        status: "pending",
        createdAt: new Date().toISOString(),
      });
      setStatus({ success: true, loading: false });
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        roomId: "",
      });
    } catch (err) {
      console.error(err);
      setStatus({ success: false, loading: false });
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
      <h1 className="text-2xl font-serif text-stone-900 mb-6 text-center">
        Reserve Your Mountain Getaway
      </h1>

      {status.success && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded-lg text-center">
          [Mock] Reservation request sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold mb-1 text-stone-600">
            Full Name
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-stone-200 rounded-lg p-2.5 text-sm bg-stone-50/50"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold mb-1 text-stone-600">
              Email Address
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border border-stone-200 rounded-lg p-2.5 text-sm bg-stone-50/50"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1 text-stone-600">
              Phone Number
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full border border-stone-200 rounded-lg p-2.5 text-sm bg-stone-50/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold mb-1 text-stone-600">
              Check-In
            </label>
            <input
              type="date"
              required
              value={formData.checkIn}
              onChange={(e) =>
                setFormData({ ...formData, checkIn: e.target.value })
              }
              className="w-full border border-stone-200 rounded-lg p-2.5 text-sm bg-stone-50/50"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1 text-stone-600">
              Check-Out
            </label>
            <input
              type="date"
              required
              value={formData.checkOut}
              onChange={(e) =>
                setFormData({ ...formData, checkOut: e.target.value })
              }
              className="w-full border border-stone-200 rounded-lg p-2.5 text-sm bg-stone-50/50"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1 text-stone-600">
            Select Mud Cottage
          </label>
          <select
            required
            value={formData.roomId}
            onChange={(e) =>
              setFormData({ ...formData, roomId: e.target.value })
            }
            className="w-full border border-stone-200 rounded-lg p-2.5 text-sm bg-stone-50/50"
          >
            <option value="">-- Choose an Option --</option>
            {rooms.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={status.loading}
          className="w-full mt-2 bg-amber-800 hover:bg-amber-900 text-white p-3 rounded-lg font-medium text-sm transition"
        >
          {status.loading ? "Processing..." : "Confirm Request"}
        </button>
      </form>
    </div>
  );
}

function SearchParamContainer() {
  const searchParams = useSearchParams();
  const explicitRoomId = searchParams.get("roomId") || "";
  return (
    <BookingFormInner key={explicitRoomId} explicitRoomId={explicitRoomId} />
  );
}

export default function BookingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <Navbar />
      <main className="flex-grow max-w-lg w-full mx-auto px-4 py-12">
        <Suspense
          fallback={
            <div className="text-center py-12 text-stone-500 text-sm">
              Loading registration data...
            </div>
          }
        >
          <SearchParamContainer />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
