// app/(public)/gallery/page.tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PALPA_IMAGES = [
  "https://images.unsplash.com/photo-1546548970-71785318a17b?q=80&w=600",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600",
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <Navbar />
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif text-stone-900 mb-8 text-center">
          Glimpses of Palpa
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {PALPA_IMAGES.map((src, i) => (
            <div
              key={i}
              className="h-64 rounded-xl overflow-hidden border border-stone-200 shadow-xs"
            >
              <img
                src={src}
                alt="Resort layout"
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
