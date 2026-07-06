// app/admin/bookings/page.tsx
export default function AdminBookingsPage() {
  const mockBookings = [
    {
      id: "B-9831",
      customer: "Anil Thapa",
      room: "Classic Mud Cottage",
      dates: "July 08 - July 10",
      status: "Confirmed",
      badge: "bg-emerald-50 border-emerald-200 text-emerald-800",
    },
    {
      id: "B-9832",
      customer: "Sophia Shrestha",
      room: "Premium Stone Sanctuary",
      dates: "July 11 - July 15",
      status: "Pending Approval",
      badge: "bg-amber-50 border-amber-200 text-amber-800",
    },
    {
      id: "B-9833",
      customer: "Ram Gurung",
      room: "Family Mud Suite",
      dates: "July 14 - July 16",
      status: "Checked Out",
      badge: "bg-slate-100 border-slate-200 text-slate-700",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif text-slate-900 font-semibold">
            Guest Reservation Logs
          </h1>
          <p className="text-slate-500 text-xs mt-1">
            Review, authorize, or cancel active check-in allocations.
          </p>
        </div>
        <button className="bg-slate-900 text-white text-xs font-semibold tracking-wider uppercase px-4 py-2.5 rounded-lg">
          Add Manual Intake Room Booking
        </button>
      </div>

      {/* Bookings Ledger Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-[10px] uppercase tracking-wider text-slate-400 font-bold">
              <th className="p-4">Reference</th>
              <th className="p-4">Guest Name</th>
              <th className="p-4">Assigned Unit</th>
              <th className="p-4">Timeline Span</th>
              <th className="p-4">Authorization</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
            {mockBookings.map((b) => (
              <tr key={b.id} className="hover:bg-slate-50/50">
                <td className="p-4 font-mono font-bold text-slate-900">
                  {b.id}
                </td>
                <td className="p-4 font-medium">{b.customer}</td>
                <td className="p-4 text-slate-600">{b.room}</td>
                <td className="p-4 text-slate-500 font-light">{b.dates}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-0.5 border rounded-md text-[10px] font-semibold tracking-wide ${b.badge}`}
                  >
                    {b.status}
                  </span>
                </td>
                <td className="p-4 text-right space-x-2">
                  <button className="text-[11px] text-amber-800 font-semibold hover:underline">
                    Edit
                  </button>
                  <button className="text-[11px] text-rose-600 font-semibold hover:underline">
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
