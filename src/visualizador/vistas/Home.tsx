// import { ContenedorLeft } from "./ContenedorLeft";
// import { ContenedorRight } from "./ContenedorRight";
import carne from "../../assets/carne.png";

import { Plus, Star } from "lucide-react"

export const Home = () => {
  return (
  // <div>
  //   <div className="w-full h-[91vh] flex flex-col lg:flex-row">
  //     {/* <ContenedorLeft />
  //     <ContenedorRight /> */}

  //   </div>
  // </div>
    <div className="flex flex-col  h-full lg:h-[91vh] p-4">
      <div className="w-full text-center ">
        <p className="text-3xl md:text-4xl lg:text-7xl font-bold">
          ¡Con el bendito sabor{" "}
          <span className="text-red-600 font-black">que te encanta!</span>
        </p>
      </div>

      <div className="flex flex-col-reverse justify-between lg:flex-row w-full h-auto lg:h-full gap-4  lg:gap-4 mt-4 lg:m-0">
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-2 lg:gap-38 items-center lg:text-left">
          <p className="text-base md:text-lg lg:text-2xl px-4 text-center">
            En QueBendición transformamos las carnes, arepas y plátanos en momentos
            irresistibles. Ven y prueba lo que todos llaman una verdadera delicia
            hecha con amor.
          </p>

          <div className="flex flex-row items-center justify-center gap-4 py-4 lg:justify-start mt-4 lg:m-0">
            <button className="w-[12rem] h-[2.5rem] rounded-md bg-red-600 text-[#fff] font-bold cursor-pointer">
              Ver menú
            </button>
            <button className="w-[6rem] h-[2.5rem] rounded-md bg-[#ddd] font-bold cursor-pointer">
              Horarios
            </button>
          </div>

          <div className="flex justify-around items-center gap-4 py-4 lg:justify-start mt-4 lg:m-0">
            <p className="flex flex-col items-center lg:items-start">
              <span className="text-2xl md:text-3xl font-bold text-red-600">
                15min
              </span>
              <span>Entrega promedio</span>
            </p>
            <p className="flex flex-col items-center lg:items-start">
              <span className="flex text-2xl md:text-3xl font-bold text-red-600">
                36 <Plus size={28} className="text-red-600" />
              </span>
              Productos
            </p>
            <p className="flex flex-col items-center lg:items-start">
              <span className="flex text-2xl md:text-3xl font-bold text-red-600">
                4.8 <Star size={28} className="text-red-600" />
              </span>
              Calificaciones
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
          <img
            src={carne}
            alt=""
            className="w-[18rem] sm:w-[25rem] lg:w-[45rem] h-auto rounded-lg box"
          />
          <div>
            <style>{`
              .box {
                box-shadow: 0 0 8px 2px;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  )
}
