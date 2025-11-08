const ROOMS = [
  {
    id: 1,
    name: "Standard Room",
    price: 89,
    beds: "1 Queen Bed",
    size: "22 m²",
    image:
      "https://images.unsplash.com/photo-1560448075-bb4caa6c0f11?q=80&w=1600&auto=format&fit=crop",
    perks: ["Free Wi‑Fi", "Air conditioning", "Smart TV"],
  },
  {
    id: 2,
    name: "Deluxe Sea View",
    price: 149,
    beds: "1 King Bed",
    size: "30 m²",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?q=80&w=1600&auto=format&fit=crop",
    perks: ["Sea view", "Balcony", "Nespresso"],
  },
  {
    id: 3,
    name: "Family Suite",
    price: 199,
    beds: "2 Queen Beds",
    size: "45 m²",
    image:
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1600&auto=format&fit=crop",
    perks: ["Kitchenette", "Sofa bed", "Bathtub"],
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
        Rooms & Rates
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ROOMS.map((room) => (
          <article
            key={room.id}
            className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition"
          >
            <img
              src={room.image}
              alt={room.name}
              className="h-44 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {room.name}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                {room.beds} • {room.size}
              </p>
              <ul className="flex flex-wrap gap-2 mt-3">
                {room.perks.map((p) => (
                  <li
                    key={p}
                    className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-blue-700 font-semibold">${room.price}/night</span>
                <a
                  href="#book"
                  className="px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Book
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
