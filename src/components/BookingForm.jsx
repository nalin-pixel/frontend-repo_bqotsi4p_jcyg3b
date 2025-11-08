import { useState } from "react";

const initial = { name: "", email: "", roomType: "Standard Room", checkIn: "", checkOut: "", guests: 1 };

export default function BookingForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      // Placeholder: In a full app, this would POST to backend/PHP API
      await new Promise((r) => setTimeout(r, 800));
      setStatus("Booking request sent! We'll email confirmation shortly.");
      setForm(initial);
    } catch (err) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="book" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
        Book your stay
      </h2>
      <form onSubmit={submit} className="grid md:grid-cols-2 gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="space-y-1">
          <label className="text-sm text-gray-700">Full name</label>
          <input name="name" value={form.name} onChange={onChange} required className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-gray-700">Email</label>
          <input type="email" name="email" value={form.email} onChange={onChange} required className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-gray-700">Room type</label>
          <select name="roomType" value={form.roomType} onChange={onChange} className="w-full border rounded-md px-3 py-2">
            <option>Standard Room</option>
            <option>Deluxe Sea View</option>
            <option>Family Suite</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-sm text-gray-700">Guests</label>
          <input type="number" min="1" max="6" name="guests" value={form.guests} onChange={onChange} className="w-full border rounded-md px-3 py-2" />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-gray-700">Check-in</label>
          <input type="date" name="checkIn" value={form.checkIn} onChange={onChange} required className="w-full border rounded-md px-3 py-2" />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-gray-700">Check-out</label>
          <input type="date" name="checkOut" value={form.checkOut} onChange={onChange} required className="w-full border rounded-md px-3 py-2" />
        </div>
        <div className="md:col-span-2 flex items-center gap-3">
          <button type="submit" className="px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">
            Submit booking
          </button>
          {status && <p className="text-sm text-gray-600">{status}</p>}
        </div>
      </form>
    </section>
  );
}
