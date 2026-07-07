"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Image from "next/image";

interface GalleryItem {
  id: string;
  description: string;
  imageUrl: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const q = query(
          collection(db, "gallery"),
          orderBy("createdAt", "desc"),
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as GalleryItem[];

        setImages(data);
      } catch (error) {
        console.error("Error fetching gallery items: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading)
    return (
      <div className="text-center p-10 text-xl text-black">
        Loading Resort Gallery...
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-4xl font-bold mb-2 text-center text-gray-800">
        Palpa Hill Resort Gallery
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Glimpses of luxury, nature, and comfort
      </p>

      {images.length === 0 ? (
        <p className="text-center text-gray-500 my-10">
          No resort images published yet.
        </p>
      ) : (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img) => (
            <div
              key={img.id}
              className="break-inside-avoid rounded-xl overflow-hidden shadow-md bg-white border border-gray-100 group"
            >
              <div className="relative w-full h-auto min-h-[250px] bg-gray-50">
                <img
                  src={img.imageUrl}
                  alt={img.description}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-gray-700 text-sm font-medium leading-relaxed">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
