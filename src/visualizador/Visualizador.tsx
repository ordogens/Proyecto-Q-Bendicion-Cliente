import { Header } from "../header/Header";
import { Routes, Route } from "react-router";
import { Ubicacion } from "../ubicacion/Ubicacion";
import { MenuComidas } from "../menuComidas/MenuComidas";
import { ContenedorLeft } from "./vistas/contenedorLeft";
import { ContenedorRight } from "./vistas/ContenedorRight";

export const Home = () => (
  <div>
    <div className="w-full h-[91vh] flex">
      <ContenedorLeft />
      <ContenedorRight />
      </div>
  </div>
);

export const Visualizador = () => {
  return (
    <div className="w-[90vw] h-full bg-[#ccc] flex flex-col">
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
