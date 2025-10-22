import { Star, Plus } from "lucide-react";

export const ContenedorLeft = () => {
  return (
    <div className="w-full lg:w-1/2 h-full flex flex-col justify-between text-center p-4">
      <p className="text-3xl md:text-4xl lg:text-7xl font-bold">
        ¡Con el bendito sabor{" "}
        <span className="text-red-600 font-black">que te encanta!</span>
      </p>

      <p className="text-base md:text-lg lg:text-2xl pt-2">
        En QueBendición transformamos las carnes, arepas y plátanos en momentos
        irresistibles. Ven y prueba lo que todos llaman una verdadera delicia
        hecha con amor.
      </p>

      {/* botones */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
        <button className="w-[12rem] h-[2.5rem] rounded-md bg-red-600 text-[#fff] font-bold cursor-pointer">
          Ver menú
        </button>
        <button className="w-[6rem] h-[2.5rem] rounded-md bg-[#868686] font-bold cursor-pointer">
          Horarios
        </button>
      </div>

      {/* calificaciones */}
      <div className="flex flex-col sm:flex-row justify-around items-center gap-4 py-4">
        <p className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-bold text-red-600">
            15min
          </span>
          <span>Entrega promedio</span>
        </p>
        <p className="flex flex-col items-center">
          <span className="flex text-2xl md:text-3xl font-bold text-red-600">
            36 <Plus size={28} className="text-red-600" />
          </span>
          Productos
        </p>
        <p className="flex flex-col items-center">
          <span className="flex text-2xl md:text-3xl font-bold text-red-600">
            4.8 <Star size={28} className="text-red-600" />
          </span>
          Calificaciones
        </p>
      </div>

      <style>{`.pp{padding: 1rem} .pt{padding: 1rem} .bt{padding: 1rem}`}</style>
    </div>
  );
};
