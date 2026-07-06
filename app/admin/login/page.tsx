// app/admin/login/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const handleFakeLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/admin"); // Redirects directly straight into dashboard preview
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 font-sans">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl space-y-6">
        <div className="text-center">
          <span className="text-amber-500 text-[10px] font-bold uppercase tracking-widest block mb-1">
            Secure Gateway
          </span>
          <h1 className="text-2xl font-serif text-slate-100 font-bold tracking-wide">
            Haven Resort Admin
          </h1>
          <p className="text-slate-500 text-xs mt-2 font-light">
            Input placeholder credentials to bypass security block
          </p>
        </div>

        <form onSubmit={handleFakeLogin} className="space-y-4">
          <div>
            <label className="block text-slate-400 text-xs font-semibold mb-1.5">
              Operator ID
            </label>
            <input
              type="text"
              defaultValue="admin@havenresort.com"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 focus:outline-hidden focus:border-amber-600 transition"
            />
          </div>
          <div>
            <label className="block text-slate-400 text-xs font-semibold mb-1.5">
              Security Keycode
            </label>
            <input
              type="password"
              defaultValue="••••••••"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 focus:outline-hidden focus:border-amber-600 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs tracking-widest uppercase p-3.5 rounded-xl shadow-md transition duration-200 mt-2"
          >
            Access Console Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
