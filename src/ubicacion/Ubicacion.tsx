import { MapPinned, Phone, Clock } from "lucide-react";

export const Ubicacion = () => {
  return (
    <div className="h-full flex flex-col md:flex-row">
      {/* Formulario */}
      <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
        <div className="w-full max-w-[35rem] min-h-fit lg:min-h-[35rem] bg-white rounded-2xl flex flex-col justify-between gap-4 pd">
          <p className="text-2xl md:text-3xl font-bold">Información de Contacto</p>

          <div className="flex items-center gap-4">
            <MapPinned
              size={40}
              className="text-red-600 bg-red-100 rounded-lg"
              style={{ padding: "7px", strokeWidth: "1.5px" }}
            />
            <p className="flex flex-col text-sm md:text-base">
              <strong>Dirección</strong>
              <span>Av. Principal 123, Centro</span>
              <span>Ciudad, Estado 12345</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Phone
              size={40}
              className="text-red-600 bg-red-100 rounded-lg"
              style={{ padding: "7px", strokeWidth: "1.5px" }}
            />
            <p className="flex flex-col text-sm md:text-base">
              <strong>Teléfono</strong>
              <span>+1 (555) 123-4567</span>
              <span>+1 (555) 987-6543</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Clock
              size={40}
              className="text-red-600 bg-red-100 rounded-lg"
              style={{ padding: "7px", strokeWidth: "1.5px" }}
            />
            <p className="flex flex-col text-sm md:text-base">
              <strong>Horario</strong>
              <span>Lunes - Viernes: 10:00 AM - 11:00 PM</span>
              <span>Sábado - Domingo: 9:00 AM - 12:00 AM</span>
            </p>
          </div>

          <div className="flex justify-center">
            <button className="w-full md:w-[35rem] h-[2.5rem] rounded-md bg-red-600 text-white">
              Como llegar
            </button>
          </div>
        </div>
      </div>

      {/* contenedor del mapa */}
      <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
        <div className="w-full max-w-[35rem] min-h-[27rem] lg:min-h-[35rem] bg-white rounded-2xl map">
          <iframe
            className="rounded-2xl w-full min-h-[27rem] lg:h-[35rem]"
            // width="100%"
            // height="560"
            title="Mapa OpenStreetMap"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-75.676683%2C4.540875%2C-75.670683%2C4.544875&layer=mapnik&marker=4.542875%2C-75.673683"
          ></iframe>
        </div>
      </div>
      <style>{` .pd{padding: 2rem; box-shadow: 0 0 12px 1px }.map{box-shadow: 0 0 12px 1px}`}</style>
    </div>
  );
};
