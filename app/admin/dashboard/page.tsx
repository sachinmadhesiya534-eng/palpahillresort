"use client";

export default function SummaryDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">System Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">
          Real-time analytical performance values across the resort network.
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
          <h3 className="text-3xl font-black text-blue-950 mt-2">12 Booked</h3>
        </div>
        <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-100 shadow-sm">
          <span className="text-xs text-amber-700 font-bold tracking-wider uppercase">
            Kitchen Orders Today
          </span>
          <h3 className="text-3xl font-black text-amber-950 mt-2">34 Active</h3>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
        <h4 className="font-bold text-slate-800 mb-2">
          Live Stream Active Status
        </h4>
        <p className="text-sm text-slate-500 leading-relaxed">
          Firebase listeners are primed to dynamically append operational
          statistics here.
        </p>
      </div>
    </div>
  );
}
