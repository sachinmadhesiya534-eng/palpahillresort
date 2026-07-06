// app/(public)/rooms/page.tsx
"use client";

import Link from "next/link";

interface Room {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  amenities: string[];
}

// Beautiful static list of your resort rooms
const RESORT_ROOMS: Room[] = [
  {
    id: "classic-mud-cottage",
    name: "Classic Mud Cottage",
    description:
      "Experience organic eco-living in our authentic handcrafted clay cottage. Built with traditional masonry to provide natural climate insulation, keeping you cool in summer and warm in winter.",
    price: "Rs. 3,500",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800",
    amenities: [
      "King Bed",
      "Attached Clay Bathroom",
      "Mountain View",
      "Organic Tea Station",
    ],
  },
  {
    id: "premium-stone-villa",
    name: "Premium Stone Sanctuary",
    description:
      "A gorgeous luxury villa combining sustainable stone construction with modern interior comforts. Features panoramic windows showcasing spectacular sunrise views over the hills.",
    price: "Rs. 5,000",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
    amenities: [
      "Queen Bed",
      "Private Veranda",
      "Hot Shower",
      "Complimentary Breakfast",
    ],
  },
  {
    id: "family-mud-suite",
    name: "Family Mud Suite",
    description:
      "Spacious multi-room mud cottage architecture designed for families. Combines rustic rural heritage aesthetics with ample space to relax and reconnect with nature.",
    price: "Rs. 7,000",
    image:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800",
    amenities: [
      "2 Double Beds",
      "Spacious Lounge",
      "Garden Access",
      "Traditional Fireplace",
    ],
  },
];

export default function RoomsPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased">
      {/* Temporary Minimalist Header */}
      <div className="bg-white border-b border-stone-200 py-6 text-center">
        <h2 className="text-xl font-serif font-bold tracking-widest text-amber-900">
          HAVEN RESORT
        </h2>
        <p className="text-stone-500 text-xs mt-1">
          Pure Static Accommodations Preview
        </p>
      </div>

      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-amber-800 text-xs font-semibold tracking-widest uppercase block mb-2">
            Our Sanctuaries
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-stone-900 font-medium">
            Traditional Handcrafted Cottages
          </h1>
          <div className="w-16 h-0.5 bg-amber-700 mx-auto mt-4"></div>
        </div>

        {/* Rooms Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {RESORT_ROOMS.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Card Image Display */}
              <div className="h-64 bg-stone-100 overflow-hidden relative">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-md tracking-wider">
                  {room.price}{" "}
                  <span className="text-[10px] font-light text-stone-300">
                    / night
                  </span>
                </div>
              </div>

              {/* Card Text Details */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h2 className="text-xl font-serif font-semibold text-stone-900 tracking-wide">
                    {room.name}
                  </h2>
                  <p className="text-stone-600 text-xs leading-relaxed font-light">
                    {room.description}
                  </p>
                </div>

                {/* Specific Amenities List Tags */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {room.amenities.map((amenity, idx) => (
                      <span
                        key={idx}
                        className="bg-stone-100 text-stone-600 text-[10px] px-2 py-1 rounded-sm border border-stone-200/60 font-medium"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-stone-100">
                    <Link
                      href={`/booking?roomId=${room.id}`}
                      className="block text-center w-full bg-amber-800 hover:bg-amber-900 text-white font-medium text-xs tracking-wider uppercase py-3 rounded-lg shadow-xs transition"
                    >
                      Book This Cottage
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
