"use client";

export default function BookingsManagementPage() {
  return (
    <div>
      <div className="mb-6 border-b border-slate-100 pb-5">
        <h1 className="text-3xl font-bold text-slate-900">
          Resort Reservations
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Review live check-in lists, pending registration flags, and payment
          status tracking.
        </p>
      </div>

      <div className="text-center py-12 border border-dashed border-slate-200 rounded-2xl bg-slate-50">
        <p className="text-slate-400 text-sm">
          No active check-in logs found. Live Firestore records will load here.
        </p>
      </div>
    </div>
  );
}
