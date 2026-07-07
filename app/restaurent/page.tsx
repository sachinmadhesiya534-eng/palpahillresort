"use client";

import { useState } from "react";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

const RESTAURANT_MENU: MenuItem[] = [
  {
    id: "m1",
    name: "Palpali Chukauni",
    price: 250,
    category: "Veg",
    imageUrl:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "m2",
    name: "Organic Thakali Khana Set",
    price: 550,
    category: "Non-Veg",
    imageUrl:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "m3",
    name: "Local Mint Lemonade",
    price: 150,
    category: "Beverage",
    imageUrl:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "m4",
    name: "Saffron Kheer",
    price: 220,
    category: "Dessert",
    imageUrl:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80",
  },
];

export default function RestaurantPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? RESTAURANT_MENU
      : RESTAURANT_MENU.filter((item) => item.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <section id="restaurant">
        <h1 className="text-4xl font-bold mb-2 text-center text-gray-800">
          Palpa Hill Resort Dining
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Freshly prepared local and international cuisines
        </p>

        <div className="flex justify-center space-x-2 md:space-x-4 mb-8 overflow-x-auto py-2">
          {["All", "Veg", "Non-Veg", "Beverage", "Dessert"].map((cat) => (
            <button
              key={cat}
              type="button"
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
                {/* Fixed Image Box using native img */}
                <div className="h-52 w-full bg-gray-100">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.name}
                    </h3>
                    <span className="inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xl font-bold text-green-700 shrink-0">
                    Rs. {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
