// app/admin/gallary/page.tsx
export default function AdminGalleryPage() {
  const images = [
    {
      title: "Resort Aerial Overview",
      tag: "Landscape",
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=400",
    },
    {
      title: "Clay Oven Dining Preparation",
      tag: "Restaurant",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400",
    },
    {
      title: "Mud Cottage Bed Chamber Layout",
      tag: "Interior",
      url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=400",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif text-slate-900 font-semibold">
            Media Asset Management
          </h1>
          <p className="text-slate-500 text-xs mt-1">
            Upload and manage images displayed on your public website gallery
            page.
          </p>
        </div>
        <button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold tracking-wider uppercase px-4 py-2.5 rounded-lg transition">
          Upload New Image File
        </button>
      </div>

      {/* Grid Grid Visual Element Portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs group"
          >
            <div className="h-44 bg-slate-100 relative">
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-sm">
                {img.tag}
              </span>
            </div>
            <div className="p-4 flex items-center justify-between">
              <p className="text-xs font-medium text-slate-800 truncate pr-2">
                {img.title}
              </p>
              <button className="text-[11px] text-rose-600 font-bold hover:underline shrink-0">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
