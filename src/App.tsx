import {ContenedorMenu} from "./contendorMenu/ContenedorMenu.tsx"
import {Visualizador} from "./visualizador/Visualizador.tsx"

export const App = () => {


  return (
    <div className="bg-white w-screen h-screen flex">
      <ContenedorMenu />
      <Visualizador />
    </div>
  )
}
