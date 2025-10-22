import { Routes, Route } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./visualizador/vistas/Home";
import { MenuComidas } from "./menuComidas/MenuComidas";
import { Ubicacion } from "./ubicacion/Ubicacion";

export const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menuComidas" element={<MenuComidas />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </MainLayout>
  );
}
