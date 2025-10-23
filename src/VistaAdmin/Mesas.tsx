import {Utensils} from "lucide-react"


export const Mesas = () => {
  return (
    <div className="w-full h-[91vh] flex flex-col items-center">
      <strong className="text-4xl">Pedidos en mesas</strong>
      <ul className="grid grid-cols-3 gap-4 GR h-[82vh] w-full p-10">
        <li className="border-1 bg-amber-400 rounded-md flex justify-center items-center flex-col-reverse text-2xl font-bold"><Utensils size={50}/>Mesa 1</li>
        <li className="border-1 bg-amber-400 rounded-md flex justify-center items-center flex-col-reverse text-2xl font-bold"><Utensils size={50}/>Mesa 2</li>
        <li className="border-1 bg-amber-400 rounded-md flex justify-center items-center flex-col-reverse text-2xl font-bold"><Utensils size={50}/>Mesa 3</li>
        <li className="border-1 bg-amber-400 rounded-md flex justify-center items-center flex-col-reverse text-2xl font-bold"><Utensils size={50}/>Mesa 4</li>
        <li className="border-1 bg-amber-400 rounded-md flex justify-center items-center flex-col-reverse text-2xl font-bold"><Utensils size={50}/>Mesa 5</li>
        <li className="border-1 bg-amber-400 rounded-md flex justify-center items-center flex-col-reverse text-2xl font-bold"><Utensils size={50}/>Mesa 6</li>
        <li className="border-1 bg-amber-400 rounded-md flex justify-center items-center flex-col-reverse text-2xl font-bold"><Utensils size={50}/>Mesa 7</li>
        <li className="border-1 bg-amber-400 rounded-md flex justify-center items-center flex-col-reverse text-2xl font-bold"><Utensils size={50}/>Mesa 8</li>
        <li className="border-1 bg-amber-400 rounded-md flex justify-center items-center flex-col-reverse text-2xl font-bold"><Utensils size={50}/>Mesa 9</li>
        <li className="border-1 bg-amber-400 rounded-md flex justify-center items-center flex-col-reverse text-2xl font-bold"><Utensils size={50}/>Mesa 10</li>
        <li className="border-1 bg-amber-400 rounded-md flex justify-center items-center flex-col-reverse text-2xl font-bold"><Utensils size={50}/>Mesa 11</li>
        <li className="border-1 bg-amber-400 rounded-md flex justify-center items-center flex-col-reverse text-2xl font-bold"><Utensils size={50}/>Mesa 12</li>
      </ul>
      <style>{`
      
      .GR > li{
      box-shadow: 0 0 6px 1px;
      transition: all 0.4s ease-in-out;
      cursor: pointer;
      }

      .GR > li:hover{
        transform: scale(1.05);
        box-shadow: 0 0 10px 2px  var(--color-amber-400);
        border: 1px solid var(--color-amber-400);
      }
      
      `}</style>
    </div>
  )
}

