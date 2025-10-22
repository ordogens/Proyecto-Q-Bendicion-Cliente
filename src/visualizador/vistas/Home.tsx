import { ContenedorLeft } from "./ContenedorLeft";
import { ContenedorRight } from "./ContenedorRight";

export const Home = () => (
  <div>
    <div className="w-full h-[91vh] flex">
      <ContenedorLeft />
      <ContenedorRight />
    </div>
  </div>
);
