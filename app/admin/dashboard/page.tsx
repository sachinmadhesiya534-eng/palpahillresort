// app/(public)/restaurant/page.tsx
"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Sample local organic menu items from Palpa
const MENU_ITEMS = [
  {
    name: "Palpali Chukauni",
    description:
      "A traditional, authentic spiced potato and yogurt salad cooked with mustard oil, turmeric, and fenugreek seeds. A local specialty.",
    price: "Rs. 250",
    tag: "Local Specialty",
  },
  {
    name: "Kodo ko Dhido Set",
    description:
      "Hand-milled organic finger millet mash served with local village chicken curry, home-grown greens (saag), ghee, and stone-ground chutney.",
    price: "Rs. 650",
    tag: "Traditional",
  },
  {
    name: "Batuk & Tarul Platter",
    description:
      "Deep-fried black lentil ring patties (Batuk) served alongside boiled local yams (Tarul) and fiery sesame-timur dipping sauce.",
    price: "Rs. 300",
    tag: "Appetizer",
  },
  {
    name: "Organic Herbal Tea",
    description:
      "Freshly brewed tea infused with lemongrass, mint, and ginger harvested straight from our resort's terraced gardens.",
    price: "Rs. 120",
    tag: "Beverage",
  },
];

export default function RestaurantPage() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 text-stone-900">
      {/* Global Navbar */}
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative bg-stone-900 text-stone-100 py-24 px-4 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-transparent to-stone-950" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-2 block">
            Earthy Flavors & Organic Dining
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-stone-50 mb-4">
            The Clay Hearth Kitchen
          </h1>
          <p className="text-stone-200 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
            Experience the authentic taste of Palpa. Our meals are slow-cooked
            over traditional wood-fired clay stoves using 100% organic
            ingredients sourced right from nearby rural mountain farms.
          </p>
        </div>
      </section>

      {/* Main Content Details */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left 2 Columns: The Menu list */}
        <div className="lg:col-span-2 space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <h2 className="text-2xl font-serif text-stone-800">
              Taste of the Hills Menu
            </h2>
            <p className="text-xs text-stone-500 font-light mt-1">
              Available daily for breakfast, lunch, and dinner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MENU_ITEMS.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="font-serif font-medium text-stone-900 text-lg leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-amber-800 font-semibold text-sm whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <span className="inline-block bg-amber-50 text-amber-800 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-sm mb-3">
                    {item.tag}
                  </span>
                  <p className="text-stone-600 text-xs font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Column: Restaurant Experience & Features */}
        <div className="space-y-6">
          <div className="bg-stone-900 text-stone-100 p-6 rounded-2xl border border-stone-800 shadow-sm">
            <h3 className="text-lg font-serif text-amber-400 mb-3">
              Dining Experience
            </h3>
            <p className="text-xs text-stone-300 font-light leading-relaxed mb-4">
              Our dining hall features open-air stone balconies looking over the
              foggy valleys of Palpa, allowing you to dine right alongside the
              rolling hills.
            </p>
            <ul className="text-xs text-stone-400 space-y-2 font-light border-t border-stone-800 pt-4">
              <li>• Breakfast: 7:00 AM - 10:00 AM</li>
              <li>• Lunch: 12:30 PM - 3:00 PM</li>
              <li>• Dinner: 7:00 PM - 9:30 PM</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-center">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">
              Dietary Accommodations
            </h4>
            <p className="text-xs text-stone-600 font-light">
              Most traditional meals are naturally gluten-free and
              vegan-friendly. Let our kitchen staff know if you have specific
              restrictions!
            </p>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
