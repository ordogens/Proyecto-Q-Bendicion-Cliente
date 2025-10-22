import { useState } from "react";
import { NavLink } from "react-router";
import { Menu } from "lucide-react";

export const MenuMovil = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition-all duration-300"
      >
        <Menu size={28} />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-lg p-3 flex flex-col gap-2 animate-[fadeInDown_0.3s_ease-in-out] z-50">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="font-semibold hover:text-red-600 transition-colors duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/menuComidas"
            onClick={() => setOpen(false)}
            className="font-semibold hover:text-red-600 transition-colors duration-300"
          >
            Menu
          </NavLink>
          <NavLink
            to="/ubicacion"
            onClick={() => setOpen(false)}
            className="font-semibold hover:text-red-600 transition-colors duration-300"
          >
            Ubicacion
          </NavLink>
        </div>
      )}
    </div>
  );
};
