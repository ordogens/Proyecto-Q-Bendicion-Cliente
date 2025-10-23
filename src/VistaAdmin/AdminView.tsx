type Ingredientes = {
  carne: number;
  queso: number;
  lechuga: number;
  tomate: number;
};

type Item = {
  id: number;
  ventas: string;
  ingredientes: Ingredientes;
  valor: number;
  mesa: string;
};

// ✅ Stock inicial simulado
interface Stock {
  carne: number;
  queso: number;
  lechuga: number;
  tomate: number;
}

const stockInicial: Stock = {
  carne: 100,
  queso: 120,
  lechuga: 80,
  tomate: 90,
};

const items: Item[] = [
  { id: 1, ventas: "chunchulla", ingredientes: { carne: 2, queso: 3, lechuga: 1, tomate: 1 }, valor: 350000, mesa: "4" },
  { id: 2, ventas: "papas", ingredientes: { carne: 1, queso: 4, lechuga: 1, tomate: 1 }, valor: 20000, mesa: "3" },
  { id: 3, ventas: "hamburguesas", ingredientes: { carne: 1, queso: 8, lechuga: 4, tomate: 1 }, valor: 20000, mesa: "4" },
  { id: 4, ventas: "perros", ingredientes: { carne: 3, queso: 1, lechuga: 2, tomate: 1 }, valor: 30000, mesa: "5" },
  { id: 5, ventas: "arepas", ingredientes: { carne: 5, queso: 3, lechuga: 2, tomate: 1 }, valor: 300000, mesa: "4" },
  { id: 6, ventas: "empanadas", ingredientes: { carne: 1, queso: 9, lechuga: 1, tomate: 1 }, valor: 33300, mesa: "3" },
];

const categorias = [
  { id: 1, name: "Ventas" },
  { id: 2, name: "Pedidos" },
  { id: 3, name: "Mesas" },
  { id: 4, name: "Inventario" },
];

export const AdminView = () => {
  const sumTotal = items.reduce((acc, item) => acc + item.valor, 0);

  // 💰 Ventas agrupadas por mesa
  const ventasPorMesa: Record<string, number> = {};
  items.forEach((item) => {
    ventasPorMesa[item.mesa] = (ventasPorMesa[item.mesa] || 0) + item.valor;
  });

  const mesas = Object.entries(ventasPorMesa);
  const mesaMayor = mesas.reduce((max, m) => (m[1] > max[1] ? m : max))[0];
  const mesaMenor = mesas.reduce((min, m) => (m[1] < min[1] ? m : min))[0];

  // 🧂 Gasto de ingredientes
  const gastoIngredientes: Record<string, number> = {};
  items.forEach((item) => {
    for (const ing in item.ingredientes) {
      gastoIngredientes[ing] =
        (gastoIngredientes[ing] || 0) + item.ingredientes[ing as keyof Ingredientes];
    }
  });

  const ingredientesArr = Object.entries(gastoIngredientes);
  const ingredienteMasUsado = ingredientesArr.reduce((max, i) => (i[1] > max[1] ? i : max));
  const ingredienteMenosUsado = ingredientesArr.reduce((min, i) => (i[1] < min[1] ? i : min));

  // 📦 Calcular stock restante
  const stockRestante: Record<string, number> = {};
  for (const ing in stockInicial) {
    stockRestante[ing] =
      stockInicial[ing as keyof Stock] - (gastoIngredientes[ing] || 0);
  }

  const stockArr = Object.entries(stockRestante);
  const ingredienteMenorStock = stockArr.reduce((min, i) => (i[1] < min[1] ? i : min));

  return (
    <div className="w-full h-[91vh] flex flex-col items-center">
      <strong className="text-4xl pb-16">Panel de administrador</strong>

      <div className="UL w-[50%] h-[50%]">
        {categorias.map((i) => (
          <li
            key={i.id}
            className="flex flex-col border-1 rounded-sm text-2xl font-bold p-4 bg-amber-400 cursor-pointer"
          >
            <strong>{i.name}</strong>

            {i.name === "Ventas" ? (
              <div className="pl-4 text-lg font-normal">
                <p>Total vendido: ${sumTotal}</p>
                <p>Promedio de ventas: ${Math.round(sumTotal / items.length)}</p>
              </div>
            ) : i.name === "Pedidos" ? (
              <div className="pl-4 text-lg font-normal">
                <p>Total de pedidos: {items.length}</p>
                <p>Pedido mayor: ${Math.max(...items.map((i) => i.valor))}</p>
                <p>Pedido menor: ${Math.min(...items.map((i) => i.valor))}</p>
              </div>
            ) : i.name === "Mesas" ? (
              <div className="pl-4 text-lg font-normal">
                <p>Mesa que más pidió: Mesa {mesaMayor}</p>
                <p>Mesa que menos pidió: Mesa {mesaMenor}</p>
              </div>
            ) : i.name === "Inventario" ? (
              <div className="pl-4 text-sm font-normal">
                <p>Ingrediente más usado: {ingredienteMasUsado[0]} ({ingredienteMasUsado[1]})</p>
                <p>Ingrediente menos usado: {ingredienteMenosUsado[0]} ({ingredienteMenosUsado[1]})</p>
                <p>Ingrediente con menos stock: {ingredienteMenorStock[0]} ({ingredienteMenorStock[1]} unidades restantes)</p>
              </div>
            ) : null}
          </li>
        ))}
      </div>

      <style>
        {`
        .UL {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 7fr);
          gap: 20px;
          
          }
         .UL > li{
          box-shadow: 0 0 8px 1px;
          transition: all 0.6s ease-in-out;
          }

          .UL > li:hover{
            transform: scale(1.1);
          }
      `}
      </style>
    </div>
  );
};
