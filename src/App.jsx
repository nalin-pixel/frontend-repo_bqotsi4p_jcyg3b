import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import BookingForm from "./components/BookingForm";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar current={page} onNavigate={setPage} />

      {page === "home" && (
        <>
          <Hero />
          <Rooms />
          <BookingForm />
        </>
      )}

      {page === "rooms" && (
        <>
          <Rooms />
          <BookingForm />
        </>
      )}

      {page === "book" && <BookingForm />}

      {page === "admin" && <AdminDashboard />}

      <footer className="border-t mt-10">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} BlueWave Hotel. All rights reserved.</p>
          <p>
            Designed for demo purposes. For production, connect this UI to your
            PHP backend for real bookings and admin auth.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
