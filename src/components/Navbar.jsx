import { Hotel, Home, Bed, Calendar, Shield } from "lucide-react";

function NavItem({ label, icon: Icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        active
          ? "bg-blue-600 text-white"
          : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );
}

export default function Navbar({ current, onNavigate }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Hotel className="text-blue-600" />
          <span className="font-semibold text-gray-900">BlueWave Hotel</span>
        </div>
        <nav className="flex items-center gap-2">
          <NavItem
            label="Home"
            icon={Home}
            active={current === "home"}
            onClick={() => onNavigate("home")}
          />
          <NavItem
            label="Rooms"
            icon={Bed}
            active={current === "rooms"}
            onClick={() => onNavigate("rooms")}
          />
          <NavItem
            label="Book"
            icon={Calendar}
            active={current === "book"}
            onClick={() => onNavigate("book")}
          />
          <NavItem
            label="Admin"
            icon={Shield}
            active={current === "admin"}
            onClick={() => onNavigate("admin")}
          />
        </nav>
      </div>
    </header>
  );
}
