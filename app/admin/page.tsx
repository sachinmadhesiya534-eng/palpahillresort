// app/admin/page.tsx
export default function AdminDashboardHome() {
  const stats = [
    {
      label: "Active Bookings Today",
      value: "14 Units",
      color: "border-amber-500 text-amber-600",
    },
    {
      label: "Total Revenue (Month)",
      value: "Rs. 245,000",
      color: "border-emerald-500 text-emerald-600",
    },
    {
      label: "Restaurant Covers",
      value: "32 Orders",
      color: "border-blue-500 text-blue-600",
    },
    {
      label: "Available Rooms",
      value: "4 / 12 Free",
      color: "border-purple-500 text-purple-600",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-serif text-slate-900 font-semibold">
          Overview Metrics Dashboard
        </h1>
        <p className="text-slate-500 text-xs mt-1">
          Real-time status metrics visualization tracker panel.
        </p>
      </div>

      {/* Grid Cards Tracker Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((st, i) => (
          <div
            key={i}
            className={`bg-white border-l-4 ${st.color} p-6 rounded-xl shadow-xs`}
          >
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-1">
              {st.label}
            </span>
            <span className="text-2xl font-bold font-mono block text-slate-900">
              {st.value}
            </span>
          </div>
        ))}
      </div>

      {/* Activity Logs Row Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
          <h3 className="font-serif text-slate-900 font-semibold text-base">
            Recent Audit Ledger Activity
          </h3>
          <div className="space-y-3">
            {[
              "New booking checked in for Classic Mud Cottage #1.",
              "Restaurant billing settlement updated for Room #4.",
              "New imagery element successfully injected into public gallery database container.",
            ].map((log, index) => (
              <div
                key={index}
                className="text-xs p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between text-slate-600"
              >
                <span>{log}</span>
                <span className="text-[10px] text-slate-400 font-mono">
                  Just Now
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <h3 className="font-serif text-slate-900 font-semibold text-base mb-4">
            Quick Housekeeping Note
          </h3>
          <p className="text-xs text-slate-500 font-light leading-relaxed">
            Mud masonry insulation levels on Cottage #3 have been reviewed and
            finalized. Maintenance records are locked.
          </p>
          <div className="bg-amber-50 text-amber-800 text-[11px] p-3 rounded-lg border border-amber-100 mt-4 font-medium">
            ⚠️ 2 Check-outs pending system approval window.
          </div>
        </div>
      </div>
    </div>
  );
}
