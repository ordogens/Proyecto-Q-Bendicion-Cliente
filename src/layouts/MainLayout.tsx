import { Header } from "../header/Header";
import type { ReactNode } from "react";
import { ContenedorMenu } from "../contendorMenu/ContenedorMenu";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-[#f5f5f5]">
      <aside className="hidden md:block w-fit">
        <ContenedorMenu />
      </aside>

      <div className="flex-1 flex flex-col relative">
        <header className="relative z-20 w-full flex items-center justify-between">
          <Header />
        </header>

        <main className="flex-1 overflow-y-auto z-10">{children}</main>
      </div>
    </div>
  );
};
