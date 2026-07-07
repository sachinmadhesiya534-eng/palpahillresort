"use client"; // Required for client-side queries and dynamic filtering tabs

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Image from "next/image";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

export default function RestaurantPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const q = query(
          collection(db, "restaurant"),
          orderBy("createdAt", "desc"),
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as MenuItem[];

        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching menu items: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  // Filter items dynamically based on the active tab button state
  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  if (loading)
    return (
      <div className="text-center p-10 text-xl text-black">
        Loading Dining Menu...
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-4xl font-bold mb-2 text-center text-gray-800">
        Palpa Hill Resort Dining
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Freshly prepared local and international cuisines
      </p>

      {/* Interactive Category Filtering Tabs */}
      <div className="flex justify-center space-x-2 md:space-x-4 mb-8 overflow-x-auto py-2">
        {["All", "Veg", "Non-Veg", "Beverage", "Dessert"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
              selectedCategory === cat
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Dynamic Grid Layout */}
      {filteredItems.length === 0 ? (
        <p className="text-center text-gray-500 my-10">
          No items available in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="border border-gray-100 rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow"
            >
              {/* Image Box */}
              <div className="relative h-52 w-full bg-gray-100">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
              </div>

              {/* Info Content Box */}
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <span className="inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                    {item.category}
                  </span>
                </div>
                <p className="text-xl font-bold text-green-700">
                  Rs. {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
