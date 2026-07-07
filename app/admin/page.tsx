"use client";

import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

// Import your operational form components cleanly
export default function AdminSinglePageManager() {
  // Authentication Management States
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);

  // Active Navigation Content Control Tab
  const [activeTab, setActiveTab] = useState<string>("dashboard");

  // Keep track of active user session tokens automatically
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Handle Authentication Submission
  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSubmitLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      setActiveTab("dashboard"); // Default viewport on successful verification
    } catch (err) {
      const errorInstance = err as Error;
      console.error("Auth Logic Failure:", errorInstance.message);
      setError("Invalid administrative credentials.");
    } finally {
      setSubmitLoading(false);
    }
  };

  // Process Logout Action
  const handleLogoutAction = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      const errorInstance = err as Error;
      console.error("Sign-out failure:", errorInstance.message);
    }
  };

  // 1. Initial Loading State Screen Buffer
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white font-medium tracking-wide">
        Verifying Security Credentials...
      </div>
    );
  }

  // 2. VIEWPORT A: Not Logged In -> Show ONLY the secure Email/Password Form
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 border border-slate-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Palpa Hill Resort
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Administrative Access Portal
            </p>
          </div>

          {error && (
            <div className="mb-5 bg-red-50 text-red-600 text-sm p-3.5 rounded-xl border border-red-100 text-center font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Admin Email
              </label>
              <input
                type="email"
                placeholder="admin@palpahillresort.com"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-black focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Security Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-black focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
              />
            </div>

            <button
              type="submit"
              disabled={submitLoading}
              className="w-full py-3.5 bg-slate-900 hover:bg-black text-white font-bold rounded-xl transition-all duration-150 disabled:bg-slate-300 shadow-lg"
            >
              {submitLoading ? "Checking Credentials..." : "Access System Core"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 3. VIEWPORT B: Logged In Successfully -> Reveal Professional Workspace Layout Container
  const sidebarButtonClass = (tabName: string): string =>
    `w-full text-left flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
      activeTab === tabName
        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
        : "text-gray-400 hover:bg-gray-800 hover:text-white"
    }`;

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Universal Dashboard Sidebar component */}
      <aside className="w-68 bg-gray-900 text-white p-6 flex flex-col justify-between shadow-2xl shrink-0 border-r border-gray-800">
        <div>
          <div className="mb-10 px-2">
            <h2 className="text-xl font-bold tracking-wider text-yellow-500">
              Palpa Hill Panel
            </h2>
            <p className="text-xs text-gray-500 mt-1">Management Hub</p>
          </div>

          <nav className="space-y-1.5">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={sidebarButtonClass("dashboard")}
            >
              <span>📊</span> <span>Dashboard Stats</span>
            </button>
            <button
              onClick={() => setActiveTab("bookings")}
              className={sidebarButtonClass("bookings")}
            >
              <span>📅</span> <span>Live Bookings</span>
            </button>
            <button
              onClick={() => setActiveTab("rooms")}
              className={sidebarButtonClass("rooms")}
            >
              <span>🛌</span> <span>Manage Rooms</span>
            </button>
            <button
              onClick={() => setActiveTab("restaurant")}
              className={sidebarButtonClass("restaurant")}
            >
              <span>🍳</span> <span>Restaurant Menu</span>
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={sidebarButtonClass("gallery")}
            >
              <span>🖼️</span> <span>Gallery Wall</span>
            </button>
          </nav>
        </div>

        {/* User Account Controls Section */}
        <div className="border-t border-gray-800 pt-5 space-y-4">
          <div className="flex items-center space-x-3 px-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-sm text-white">
              A
            </div>
            <div className="truncate">
              <p className="text-sm font-semibold truncate">Authorized Admin</p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogoutAction}
            className="w-full flex items-center justify-center space-x-2 bg-red-950/40 hover:bg-red-600 border border-red-700/40 hover:border-transparent text-red-200 hover:text-white py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
          >
            <span>🔒</span> <span>Sign Out Session</span>
          </button>
        </div>
      </aside>

      {/* Main Form/Content Rendering Container */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-5xl mx-auto text-black">
          {/* TAB AREA 1: Analytical Revenue Statistics Summary */}
          {activeTab === "dashboard" && (
            <div>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">
                  System Dashboard
                </h1>
                <p className="text-sm text-slate-500 mt-1">
                  Real-time analytical performance values across the resort
                  network.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100 shadow-sm">
                  <span className="text-xs text-emerald-700 font-bold tracking-wider uppercase">
                    Gross Revenue
                  </span>
                  <h3 className="text-3xl font-black text-emerald-950 mt-2">
                    Rs. 1,45,000
                  </h3>
                </div>
                <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-100 shadow-sm">
                  <span className="text-xs text-blue-700 font-bold tracking-wider uppercase">
                    Active Rooms
                  </span>
                  <h3 className="text-3xl font-black text-blue-950 mt-2">
                    12 Booked
                  </h3>
                </div>
                <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-100 shadow-sm">
                  <span className="text-xs text-amber-700 font-bold tracking-wider uppercase">
                    Kitchen Orders Today
                  </span>
                  <h3 className="text-3xl font-black text-amber-950 mt-2">
                    34 Active
                  </h3>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <h4 className="font-bold text-slate-800 mb-2">
                  Live Stream Active Status
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Firebase listeners are primed to dynamically append
                  operational statistics here.
                </p>
              </div>
            </div>
          )}

          {/* TAB AREA 2: Resort Reservations Stream */}
          {activeTab === "bookings" && (
            <div>
              <div className="mb-6 border-b border-slate-100 pb-5">
                <h1 className="text-3xl font-bold text-slate-900">
                  Resort Reservations
                </h1>
                <p className="text-sm text-slate-500 mt-1">
                  Review live check-in lists, pending registration flags, and
                  payment status tracking.
                </p>
              </div>
              <div className="text-center py-12 border border-dashed border-slate-200 rounded-2xl bg-slate-50">
                <p className="text-slate-400 text-sm">
                  No active check-in logs found. Live Firestore records will
                  load here.
                </p>
              </div>
            </div>
          )}

          {/* TAB AREA 3: Accommodations Modifier Form */}
          {activeTab === "rooms" && (
            <div>
              <div className="mb-6 border-b border-slate-100 pb-5">
                <h1 className="text-2xl font-bold text-slate-900">
                  Manage Resort Accommodations
                </h1>
                <p className="text-sm text-slate-500 mt-1">
                  Publish new suites and rooms directly to the live customer
                  view page.
                </p>
              </div>
            </div>
          )}

          {/* TAB AREA 4: Restaurant Menu Form */}
          {activeTab === "restaurant" && (
            <div>
              <div className="mb-6 border-b border-slate-100 pb-5">
                <h1 className="text-2xl font-bold text-slate-900">
                  Manage Dining Menu Selections
                </h1>
                <p className="text-sm text-slate-500 mt-1">
                  Update food items, categorize pricing tiers, and push dishes
                  directly to the live menu.
                </p>
              </div>
            </div>
          )}

          {/* TAB AREA 5: Media Gallery Control Form */}
          {activeTab === "gallery" && (
            <div>
              <div className="mb-6 border-b border-slate-100 pb-5">
                <h1 className="text-2xl font-bold text-slate-900">
                  Manage Resort Visual Media
                </h1>
                <p className="text-sm text-slate-500 mt-1">
                  Upload photography snippets and display descriptions onto the
                  customer gallery wall.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
