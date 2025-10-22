import { Header } from "../header/Header";
import { Routes, Route } from "react-router";
import { Ubicacion } from "../ubicacion/Ubicacion";
import { MenuComidas } from "../menuComidas/MenuComidas";
import { Home } from "./vistas/Home";

export const Visualizador = () => {
  return (
    <div className="w-[90vw] h-full bg-[#ccc] flex flex-col max-h-screen overflow-y-auto ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/menuComidas" element={<MenuComidas />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
