import { Star, Plus} from 'lucide-react';

export const ContenedorLeft = () => {
  return (
    <div className=" w-1/2 h-full flex flex-col justify-between">
      <p className="text-5xl font-bold text-center">
        ¡Con el bendito sabor{" "}
        <span className="text-5xl font-black text-red-600">
          que te encanta!
        </span>
      </p>
      <p className="w-[full] text-2xl text-center  pt">
        En QueBendición transformamos las carnes, arepas y plátanos en momentos
        irresistibles. Ven y prueba lo que todos llaman una verdadera delicia
        hecha con amor.
      </p>
      {/* botones */}
      <div className="h-[4rem]  flex items-center gap-4 bt">
        <button className="w-[12rem] h-[2.5rem] rounded-md bg-red-600 text-[#fff] font-bold">
          Ver menu
        </button>
        <button className="w-[6rem] h-[2.5rem] rounded-md bg-[#868686] font-bold">
          Horarios
        </button>
      </div>

      {/* calificaciones */}
      <div className="h-[10rem]  flex justify-between items-center pp">
        <p className="flex flex-col items-center">
          <span className='text-3xl font-bold text-red-600'>15min</span>
          <span className=''>Entrega promedio</span>
        </p>
        <p className="flex flex-col items-center">
          <span className='flex text-3xl font-bold text-red-600'>36 <Plus size={35} className='text-red-600'/></span>
          Productos
        </p>
        <p className="flex flex-col items-center">
          <span className='flex text-3xl font-bold text-red-600'>4.8 <Star size={35} className='text-red-600'/></span>
          Calificaciones
        </p>
      </div>
      <style>{`.pp{padding: 1rem} .pt{padding: 1rem} .bt{padding: 1rem}`}</style>
    </div>
  );
};
