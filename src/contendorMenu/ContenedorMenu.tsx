import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { UserMenu } from "./UserMenu";
import { AdminMenu } from "./AdminMenu";

export const ContenedorMenu = () => {
  const location = useLocation(); // 👈 Detecta los cambios de ruta
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname; // 👈 Lee la ruta actual
    console.log("Ruta actual:", currentPath);

    // 👇 Puedes ajustar para detectar cualquier subruta admin (ej: /admin/ventas)
    if (currentPath.startsWith("/admin")) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [location]);

  return <div className="h-full ">{isAdmin ? <AdminMenu /> : <UserMenu />}</div>;
};
