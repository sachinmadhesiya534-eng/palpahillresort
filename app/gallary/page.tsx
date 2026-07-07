"use client";

interface GalleryItem {
  id: string;
  category: string;
  imageUrl: string;
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    category: "Surrounding Hills",
    imageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "g2",
    category: "Resort Dining",
    imageUrl:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "g3",
    category: "Mud Cottages",
    imageUrl:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "g4",
    category: "Organic Pathways",
    imageUrl:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
  },
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <section id="gallery">
        <h1 className="text-4xl font-bold mb-2 text-center text-gray-800">
          Resort Landscapes & Environment
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Glimpses of our surrounding hills, dining setup, and organic
          infrastructure
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_DATA.map((img) => (
            <div
              key={img.id}
              className="group relative overflow-hidden rounded-xl h-64 bg-gray-100 border border-gray-200 shadow-md"
            >
              {/* Fixed Image Box using native img */}
              <img
                src={img.imageUrl}
                alt={img.category}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
