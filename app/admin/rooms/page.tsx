// app/admin/rooms/page.tsx
export default function AdminRoomsPage() {
  const roomsList = [
    {
      name: "Classic Mud Cottage",
      rate: "Rs. 3,500",
      status: "Occupied",
      code: "RM-101",
    },
    {
      name: "Premium Stone Sanctuary",
      rate: "Rs. 5,000",
      status: "Ready",
      code: "RM-202",
    },
    {
      name: "Family Mud Suite",
      rate: "Rs. 7,000",
      status: "Maintenance Required",
      code: "RM-303",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif text-slate-900 font-semibold">
            Accommodations Inventory
          </h1>
          <p className="text-slate-500 text-xs mt-1">
            Configure pricing scales, descriptors, and current layout
            conditions.
          </p>
        </div>
        <button className="bg-amber-700 text-white text-xs font-semibold tracking-wider uppercase px-4 py-2.5 rounded-lg">
          Add New Cottage Structure
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roomsList.map((r, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                  {r.code}
                </span>
                <span
                  className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-md ${
                    r.status === "Ready"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                      : "bg-orange-50 text-orange-700 border border-orange-100"
                  }`}
                >
                  {r.status}
                </span>
              </div>
              <h3 className="font-serif font-bold text-slate-900 text-base">
                {r.name}
              </h3>
              <p className="text-slate-600 text-xs font-semibold">
                {r.rate}{" "}
                <span className="font-light text-slate-400 text-[10px]">
                  / night base
                </span>
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <button className="text-slate-500 hover:text-slate-900 transition">
                Update Amenities
              </button>
              <button className="text-amber-800 font-semibold hover:underline">
                Modify Rate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
