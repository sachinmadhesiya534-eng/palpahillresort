// app/admin/restaurent/page.tsx
export default function AdminRestaurantPage() {
  const orders = [
    {
      table: "Cottage #1 Room Service",
      items: "Local Organic Thali x2, Mint Lemonade",
      total: "Rs. 1,450",
      time: "12 mins ago",
      status: "In Kitchen",
    },
    {
      table: "Table #4 Deck",
      items: "Traditional Clay Oven Chicken, Masala Tea",
      total: "Rs. 950",
      time: "Ready",
      status: "Served",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-serif text-slate-900 font-semibold">
          Kitchen & Room Service Billings
        </h1>
        <p className="text-slate-500 text-xs mt-1">
          Track active dining tickets and auto-post them directly onto the final
          guest room invoices.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-xs divide-y divide-slate-100">
        {orders.map((o, idx) => (
          <div
            key={idx}
            className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-slate-50/50 transition"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <h3 className="font-serif font-bold text-slate-900 text-sm">
                  {o.table}
                </h3>
                <span className="text-[10px] text-slate-400 font-mono">
                  {o.time}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-light">{o.items}</p>
            </div>

            <div className="flex items-center gap-6 justify-between sm:justify-end">
              <span className="font-mono text-xs font-bold text-slate-900">
                {o.total}
              </span>
              <span
                className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-md ${
                  o.status === "Served"
                    ? "bg-slate-100 text-slate-700"
                    : "bg-amber-100 text-amber-800 animate-pulse"
                }`}
              >
                {o.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
