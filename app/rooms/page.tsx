// app/rooms/page.tsx (Customer Side Room Grid)
"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Image from "next/image";

interface Room {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

export default function RoomsPage() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const q = query(collection(db, "rooms"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const roomsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Room[];

        setRooms(roomsData);
      } catch (error) {
        console.error("Error fetching rooms: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading)
    return <div className="text-center p-10">Loading beautiful rooms...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Luxury Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="border rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <div className="relative h-48 w-full">
              <Image
                src={room.imageUrl}
                alt={room.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{room.title}</h2>
              <p className="text-gray-600 mt-2">Rs. {room.price} / night</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
