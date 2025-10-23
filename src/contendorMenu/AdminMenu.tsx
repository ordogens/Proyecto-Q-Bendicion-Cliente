import { NavLink } from "react-router";

export const AdminMenu = () => {
  return (
    <div className="bg-blue-900 text-zinc-200 w-[10vw] h-full">

      <nav className="w-full h-[6rem] flex flex-col items-center gap-1 justify-center">
        <NavLink
          className="font-bold transition duration-500 hover:text-cyan-300"
          to="/admin/ventas"
        >
          Ventas
        </NavLink>
        <NavLink
          className="font-bold transition duration-500 hover:text-cyan-300"
          to="/admin/mesas"
        >
          Mesas
        </NavLink>
        <NavLink
          className="font-bold transition duration-500 hover:text-cyan-300"
          to="/admin/invetario"
        >
          Inventario
        </NavLink>
      </nav>
    </div>
  );
};
