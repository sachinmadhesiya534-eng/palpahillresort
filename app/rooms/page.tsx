"use client";

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

export default function RoomsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <section id="rooms">
        <h1 className="text-4xl font-bold mb-2 text-center text-gray-800">
          Our Cottages & Stay
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Eco-friendly clay structures fused with traditional architectural
          aesthetics and luxury comforts
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {ROOMS_DATA.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Fixed Image Box using native img */}
              <div className="h-64 w-full bg-gray-100">
                <img
                  src={room.imageUrl}
                  alt={room.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {room.name}
                  </h3>
                  <span className="text-green-700 font-bold text-lg shrink-0">
                    Rs. {room.price.toLocaleString()}
                    <span className="text-xs text-gray-500 font-normal">
                      /night
                    </span>
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {room.description}
                </p>

                <div className="bg-gray-50 p-3 rounded-lg text-xs flex flex-col gap-1">
                  <span className="font-bold text-gray-400 uppercase tracking-wider">
                    Room View Scenery
                  </span>
                  <span className="text-gray-700 text-sm font-medium">
                    🌄 {room.view}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
