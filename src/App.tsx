import { Routes, Route } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./visualizador/vistas/Home";
import { MenuComidas } from "./menuComidas/MenuComidas";
import { Ubicacion } from "./ubicacion/Ubicacion";
import { AdminView } from "./VistaAdmin/AdminView.tsx";
// admin
import { Ventas } from "./VistaAdmin/Ventas";
import { Mesas } from "./VistaAdmin/Mesas";
import { Invetario } from "./VistaAdmin/Invetario";

export const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menuComidas" element={<MenuComidas />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="*" element={<Home />} />
        {/* vistas de admin */}
        <Route path="/admin" element={<AdminView />} />
        <Route path="/admin/ventas" element={<Ventas />} />
        <Route path="/admin/mesas" element={<Mesas />} />
        <Route path="/admin/invetario" element={<Invetario />} />
      </Routes>
    </MainLayout>
  );
};
