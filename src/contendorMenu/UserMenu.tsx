import { NavLink } from "react-router";
import logo from "../assets/deisy.png";

export const UserMenu = () => {
  return (
    <div className="bg-[#cccc] w-[10vw] h-full">
      <div className="w-full h-[10rem]  flex justify-center items-center">
        <NavLink to="/admin">
          <img
            src={logo}
            alt=""
            className="w-[6rem] h-[6rem] rounded-full cursor-pointer"
          />
        </NavLink>
      </div>
      <nav className="w-full h-[6rem] flex flex-col items-center gap-1 justify-center">
        <NavLink
          className="font-bold transition duration-500 hover:text-red-600"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="font-bold transition duration-500 hover:text-red-600"
          to="/menuComidas"
        >
          Menu
        </NavLink>
        <NavLink
          className="font-bold transition duration-500 hover:text-red-600"
          to="/ubicacion"
        >
          Ubicacion
        </NavLink>
      </nav>
    </div>
  );
};
