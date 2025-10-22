import { MenuMovil } from "../contendorMenu/MenuMovil";

export const Header = () => {
  return (
    <div className="w-full h-auto md:h-[9vh] flex items-center justify-center">
      <div
        className="w-screen md:w-[88vw] h-[7vh] bg-red-600 flex items-center justify-between md:rounded-b-lg px-2"
      >
        <p className="font-bold text-3xl ">Q'Bendicion</p>
          <div className="md:hidden">
            <MenuMovil />
          </div>
      </div>
    </div>
  );
};
