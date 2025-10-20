import { MapPinned, Phone, Clock } from "lucide-react";

export const Ubicacion = () => {
  return (
    <div className="h-full flex">
      {/* Formulario */}
      <div className="w-1/2  flex items-center justify-center ">
        <div className="w-[35rem] h-[35rem] bg-white rounded-2xl flex flex-col justify-between pd">
          <p className="text-3xl font-bold">Información de Contacto</p>

          <div className="flex items-center gap-4">
            <MapPinned
              size={40}
              className="text-red-600 bg-red-100 rounded-lg"
              style={{ padding: "7px", strokeWidth: "1.5px" }}
            />
            <p className="flex flex-col">
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
            <p className="flex flex-col ">
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
            <p className="flex flex-col">
              <strong>Horario</strong>
              <span>Lunes - Viernes: 10:00 AM - 11:00 PM</span>
              <span>Sábado - Domingo: 9:00 AM - 12:00 AM</span>
            </p>
          </div>

          <div className="flex justify-center ">
            <button className="w-[35rem] h-[2.5rem] rounded-md bg-red-600">
              Como llegar
            </button>
          </div>
        </div>
      </div>

      {/* contenedor del mapa */}
      <div className="w-1/2 flex items-center justify-center ">
        <div className="w-[35rem] h-[35rem] bg-white rounded-2xl map">
          <iframe
            className="rounded-2xl"
            title="Mapa OpenStreetMap"
            width="100%"
            height="560"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-75.676683%2C4.540875%2C-75.670683%2C4.544875&layer=mapnik&marker=4.542875%2C-75.673683"
          ></iframe>
        </div>
      </div>
      <style>{` .pd{padding: 2rem; box-shadow: 0 0 12px 1px }.map{box-shadow: 0 0 12px 1px}`}</style>
    </div>
  );
};
