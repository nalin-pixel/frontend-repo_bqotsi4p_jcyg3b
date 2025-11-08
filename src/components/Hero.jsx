export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center relative">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Experience comfort by the coast
          </h1>
          <p className="mt-4 text-gray-600">
            Book beautifully designed rooms with ocean views, flexible rates,
            and instant confirmation. Your seaside escape awaits.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#book"
              className="px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Book a room
            </a>
            <a
              href="#rooms"
              className="px-5 py-3 rounded-md border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 transition"
            >
              Explore rooms
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl border border-blue-100">
            <img
              src="https://images.unsplash.com/photo-1501117716987-c8e182eb97a0?q=80&w=1600&auto=format&fit=crop"
              alt="Hotel room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
