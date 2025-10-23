import { Outlet, NavLink } from "react-router";
export const AdminLayaout = () => {
  return (
    <div>
      <div className="flex min-h-screen">
        {/* Sidebar de administrador */}
        <aside className="w-48 bg-blue-900 text-white flex flex-col p-4 gap-4">
          <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
          <NavLink to="/admin" className="hover:opacity-80">
            Ventas
          </NavLink>
          <NavLink to="/mesas" className="hover:opacity-80">
            Mesas
          </NavLink>
          <NavLink to="/invetario" className="hover:opacity-80">
            Inventario
          </NavLink>
        </aside>

        {/* Contenido principal */}
        <main className="flex-1 bg-gray-100 p-6">
          <Outlet /> {/* Aquí se muestran las páginas internas */}
        </main>
      </div>
    </div>
  );
};
