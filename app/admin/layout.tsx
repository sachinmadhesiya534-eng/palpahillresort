// app/admin/layout.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Don't show the sidebar on the login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const menuItems = [
    { name: "Dashboard", href: "/admin" },
    { name: "Bookings", href: "/admin/bookings" },
    { name: "Rooms Management", href: "/admin/rooms" },
    { name: "Restaurant Orders", href: "/admin/restaurent" },
    { name: "Gallery Manager", href: "/admin/gallary" },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-800 antialiased font-sans">
      {/* Sidebar Panel */}
      <aside className="w-64 bg-slate-900 text-slate-200 flex flex-col fixed h-full z-20 shadow-xl">
        <div className="h-20 flex items-center px-6 border-b border-slate-800 bg-slate-950">
          <div>
            <h1 className="text-md font-serif font-bold tracking-wider text-amber-400">
              HAVEN RESORT
            </h1>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 block font-semibold">
              Control Center
            </span>
          </div>
        </div>

        <nav className="flex-grow p-4 space-y-1.5 mt-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-lg text-xs uppercase tracking-wider font-medium transition-all ${
                  isActive
                    ? "bg-amber-600 text-white shadow-md font-semibold"
                    : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800 bg-slate-950">
          <Link
            href="/admin/login"
            className="block text-center text-xs text-rose-400 hover:text-rose-300 py-2 font-medium"
          >
            Sign Out System ➔
          </Link>
        </div>
      </aside>

      {/* Main View Area Wrapper */}
      <div className="flex-grow pl-64 min-h-screen flex flex-col">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-xs sticky top-0 z-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Welcome back, System Operator
          </h2>
          <div className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold text-xs">
            A
          </div>
        </header>

        <main className="p-8 flex-grow">{children}</main>
      </div>
    </div>
  );
}
