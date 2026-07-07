// app/(public)/contact/page.tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <main className="flex-grow max-w-md w-full mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-xs text-center">
          <h1 className="text-3xl font-serif text-stone-900 mb-4">Visit Us</h1>
          <p className="text-stone-600 font-light mb-8">
            Have questions about travel paths up to Palpa or custom
            reservations?
          </p>
          <div className="space-y-4 text-sm font-light">
            <div>
              <h4 className="font-bold uppercase tracking-wider text-xs text-stone-400">
                Location
              </h4>
              <p>Rural Hills, Palpa, Nepal</p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-xs text-stone-400">
                Call Us
              </h4>
              <p>+977-986758242</p>
              <p>+977-9766720804</p>
              <p>+977-9867582432</p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-xs text-stone-400">
                Email
              </h4>
              <p>stay@palpamudresort.com</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
