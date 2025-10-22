import { useState } from "react";
import { menuData } from "../data/menuData";
import type { MenuCategory } from "../data/menuData";

export const MenuComidas = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <div className="p-3 flex flex-col gap-2">
      {menuData.map((category: MenuCategory) => {
        const isExpanded = expandedCategory === category.category;

        return (
          <div
            key={category.category}
            className="border border-gray-300 rounded-2xl shadow-sm bg-black"
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() =>
                setExpandedCategory(isExpanded ? null : category.category)
              }
            >
              <h2 className="text-lg font-bold text-red-600 text-outline-white">
                {category.category}
              </h2>
              <span className="text-gray-500">{isExpanded ? "▲" : "▼"}</span>
            </div>

            {isExpanded && (
              <div className="p-2 grid grid-cols-2 gap-2 w-full bg-[url(/reEscalada.jpg)] bg-no-repeat bg-center bg-cover">
                {category.menu.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between w-lg bg-[#cd0508] rounded-lg p-2"
                  >
                    <div className="flex gap-2">
                      <div>
                        <img
                          className="size-20 rounded-md"
                          src={item.imgn}
                          alt={item.name}
                        />
                      </div>
                      <p className="font-bold tracking-wider text-2xl text-black flex flex-col">
                        {item.name}
                        {item.ingredients && (
                          <span className="text-sm font-normal text-zinc-200">
                            {item.ingredients.join(", ")}
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="flex flex-col items-center">
                      <p className="text-zinc-200 font-semibold text-2xl">
                        ${item.price.toLocaleString("es-CO")}
                      </p>
                      <button
                        className="relative inline-flex cursor-pointer items-center justify-center p-0.5  overflow-hidden 
                      text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-400 to-blue-800 group-hover:from-cyan-500 group-hover:to-blue-500 
                      hover:text-white dark:text-white focus:outline-none shadow-md shadow-black"
                      >
                        <span
                          className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md 
                        group-hover:bg-transparent group-hover:dark:bg-transparent"
                        >
                          add to car
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
