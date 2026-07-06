// app/(public)/about/page.tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <Navbar />
      <main className="flex-grow max-w-3xl w-full mx-auto px-4 py-12 text-stone-800">
        <h1 className="text-4xl font-serif text-stone-900 mb-6 text-center">
          Our Story
        </h1>
        <div className="prose prose-stone font-light space-y-4 leading-relaxed">
          <p>
            Rooted deep in the rich heritage of Palpa, our resort reimagines
            traditional rural architecture. Our handcrafted mud houses showcase
            ancient clay construction methods designed to remain warm during
            chilly mountain winters and perfectly cool throughout sunny days.
          </p>
          <p>
            We invite you to experience real Nepalese hospitality, look out over
            pristine terraced landscape farms, and rest above the clouds.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
