import { useMemo, useState } from "react";
import { Calendar, CheckCircle2, Users } from "lucide-react";

const seedBookings = [
  { id: "B-1021", guest: "Sarah Johnson", room: "Deluxe Sea View", guests: 2, checkIn: "2025-11-21", checkOut: "2025-11-24", status: "Confirmed" },
  { id: "B-1022", guest: "Michael Chen", room: "Standard Room", guests: 1, checkIn: "2025-12-02", checkOut: "2025-12-05", status: "Pending" },
  { id: "B-1023", guest: "Amelia Brown", room: "Family Suite", guests: 4, checkIn: "2026-01-10", checkOut: "2026-01-14", status: "Confirmed" },
];

export default function AdminDashboard() {
  const [query, setQuery] = useState("");
  const [bookings] = useState(seedBookings);

  const stats = useMemo(() => {
    const total = bookings.length;
    const confirmed = bookings.filter((b) => b.status === "Confirmed").length;
    const upcoming = bookings.filter((b) => new Date(b.checkIn) >= new Date()).length;
    return { total, confirmed, upcoming };
  }, [bookings]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return bookings.filter(
      (b) =>
        b.id.toLowerCase().includes(q) ||
        b.guest.toLowerCase().includes(q) ||
        b.room.toLowerCase().includes(q) ||
        b.status.toLowerCase().includes(q)
    );
  }, [bookings, query]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Admin Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-xl border p-4 bg-white flex items-center gap-3">
          <Users className="text-blue-600" />
          <div>
            <p className="text-xs text-gray-500">Total bookings</p>
            <p className="text-xl font-semibold">{stats.total}</p>
          </div>
        </div>
        <div className="rounded-xl border p-4 bg-white flex items-center gap-3">
          <CheckCircle2 className="text-green-600" />
          <div>
            <p className="text-xs text-gray-500">Confirmed</p>
            <p className="text-xl font-semibold">{stats.confirmed}</p>
          </div>
        </div>
        <div className="rounded-xl border p-4 bg-white flex items-center gap-3">
          <Calendar className="text-indigo-600" />
          <div>
            <p className="text-xs text-gray-500">Upcoming</p>
            <p className="text-xl font-semibold">{stats.upcoming}</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-gray-800">Recent bookings</h3>
          <input
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm"
          />
        </div>
        <div className="overflow-x-auto rounded-xl border bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-4 py-2">ID</th>
                <th className="text-left px-4 py-2">Guest</th>
                <th className="text-left px-4 py-2">Room</th>
                <th className="text-left px-4 py-2">Guests</th>
                <th className="text-left px-4 py-2">Check-in</th>
                <th className="text-left px-4 py-2">Check-out</th>
                <th className="text-left px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b) => (
                <tr key={b.id} className="border-t">
                  <td className="px-4 py-2 font-mono">{b.id}</td>
                  <td className="px-4 py-2">{b.guest}</td>
                  <td className="px-4 py-2">{b.room}</td>
                  <td className="px-4 py-2">{b.guests}</td>
                  <td className="px-4 py-2">{b.checkIn}</td>
                  <td className="px-4 py-2">{b.checkOut}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        b.status === "Confirmed"
                          ? "bg-green-50 text-green-700"
                          : "bg-yellow-50 text-yellow-700"
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
