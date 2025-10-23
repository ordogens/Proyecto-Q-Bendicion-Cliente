import { Outlet } from "react-router"
import { ContenedorMenu } from "../contendorMenu/ContenedorMenu"

export const UserLayout = () => {
  return (
    <div>
      <ContenedorMenu />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

