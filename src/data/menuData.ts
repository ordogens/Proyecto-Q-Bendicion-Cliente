export interface MenuItem {
  id: number
  name: string
  ingredients?: string[]
  price: number
  imgn?: string
}

export interface MenuCategory {
  category: string
  menu: MenuItem[]
}

export const menuData: MenuCategory[] = [
  {
    category: "Parrilla",
    menu: [
      {
        id: 1,
        name: "Churrasco 250gr",
        ingredients: ["Arepa", "papa salada", "tomate"],
        price: 27000,
        imgn: "./carne.png",
      },
      {
        id: 2,
        name: "Carne de Res 250gr",
        ingredients: ["Arepa", "papa salada", "tomate"],
        price: 22000,
        imgn: "./carne.png",
      },
      {
        id: 3,
        name: "Bondiola 250gr",
        ingredients: ["Arepa", "papa salada", "tomate"],
        price: 17500,
        imgn: "./carne.png",
      },
      {
        id: 4,
        name: "Filete de pollo 250gr",
        ingredients: ["Arepa", "papa salada", "tomate"],
        price: 17000,
        imgn: "./carne.png",
      },
      {
        id: 5,
        name: "Pernil 250gr",
        ingredients: ["Arepa", "papa salada", "tomate"],
        price: 18500,
        imgn: "./carne.png",
      },
      {
        id: 6,
        name: "Chuzo de Cerdo",
        ingredients: ["Arepa con queso", "papa salada"],
        price: 13000,
        imgn: "./carne.png",
      },
      {
        id: 7,
        name: "Chuzo de pollo",
        ingredients: ["Arepa con queso", "papa salada"],
        price: 13000,
        imgn: "./carne.png",
      },
      {
        id: 8,
        name: "Chuzo a la BBQ",
        ingredients: ["Arepa con queso", "papa salada"],
        price: 13500,
        imgn: "./carne.png",
      },
      {
        id: 9,
        name: "Chorizo",
        ingredients: ["Arepa", "tomate", "papa salada", "limón"],
        price: 12000,
        imgn: "./carne.png",
      },
    ],
  },
  {
    category: "Arepas rellenas",
    menu: [
      {
        id: 1,
        name: "Qué Bendición",
        ingredients: ["Res", "tocineta", "maduro", "salchicha", "queso"],
        price: 14000,
      },
      {
        id: 2,
        name: "Con Todo",
        ingredients: ["Res", "cerdo", "pollo", "chicharrón", "chorizo", "queso", "maduro"],
        price: 13000,
      },
      {
        id: 3,
        name: "Campesina",
        ingredients: ["Pollo", "Chorizo", "Chicharrón", "queso", "maduro"],
        price: 12000,
      },
      {
        id: 4,
        name: "Rica Arepa",
        ingredients: ["Cerdo", "Chorizo", "Chicharrón", "maduro", "queso", "BBQ"],
        price: 14000,
      },
      {
        id: 5,
        name: "Con Champiñones",
        ingredients: ["Champiñón", "Pollo", "queso"],
        price: 14000,
      },
      {
        id: 6,
        name: "Ranchera",
        ingredients: ["Res", "salchicha", "tocineta", "maicitos", "queso"],
        price: 13000,
      },
      {
        id: 7,
        name: "Chicharrón queso",
        price: 11500,
      },
      {
        id: 8,
        name: "Pollo queso",
        price: 12500,
      },
      {
        id: 9,
        name: "Carne queso",
        price: 14000,
      },
      {
        id: 10,
        name: "Solo queso",
        price: 9000,
      },
    ],
  },
  {
    category: "Maduros",
    menu: [
      {
        id: 1,
        name: "Campesino",
        ingredients: ["Res", "chicharrón", "queso"],
        price: 14000,
      },
      {
        id: 2,
        name: "Ranchero",
        ingredients: ["Tocineta", "salchicha", "maicitos", "queso"],
        price: 13500,
      },
      {
        id: 3,
        name: "Con Todo",
        ingredients: ["Res", "pollo", "cerdo", "chicharrón", "queso"],
        price: 13500,
      },
      {
        id: 4,
        name: "Solo Queso",
        price: 9000,
      },
    ],
  },
  {
    category: "Bebidas Frías",
    menu: [
      {
        id: 1,
        name: "Gaseosa 1.5L Coca Cola",
        price: 7000,
        imgn:"../../public/jugos/coca.jpg"
      },
      {
        id: 2,
        name: "Botella de Agua",
        price: 3000,
        imgn:"../../public/jugos/agua.png"
      },
      {
        id: 3,
        name: "Gaseosa 350mL",
        price: 3500,
        imgn:"../../public/jugos/gaseosa.jpg"
      },
      {
        id: 4,
        name: "Jugo Natural en Agua",
        price: 6000,
        imgn:"../../public/jugos/jugo-de-frutas.jpg"
      },
      {
        id: 5,
        name: "Jugo Natural en Leche",
        price: 8000,
        imgn:"../../public/jugos/jugos-leche.jpg"
      },
      {
        id: 6,
        name: "Limonada Natural",
        price: 5000,
        imgn:"../../public/jugos/limonadaL.webp"
      },
      {
        id: 7,
        name: "Limonada Mango Biche",
        price: 7500,
        imgn:"../../public/jugos/limonada.webp"
      },
      {
        id: 8,
        name: "Jugo Hit 1L",
        price: 7500,
        imgn:"../../public/jugos/Hugos-Hit.png"
      },
    ],
  },
  {
    category: "Bebidas Calientes",
    menu: [
      {
        id: 1,
        name: "Tinto",
        price: 3000,
        imgn: "../../public/bebidasCafe/cafe.webp",
      },
      {
        id: 2,
        name: "Café con Leche",
        price: 4000,
         imgn: "../../public/bebidasCafe/cafeYleche.jpg",
      },
    ],
  },
  {
    category: "Otros",
    menu: [
      {
        id: 1,
        name: "Porción papa francesa",
        price: 8000,
        imgn: "../../public/otros/francesa.jpg",
      },
      {
        id: 2,
        name: "Empanadas de pollo",
        price: 2500,
        imgn: "../../public/otros/empanadas.jpg",
      },
      {
        id: 3,
        name: "Chunchulla 200gr",
        ingredients: ["Arepa", "papa salada", "tomate", "limón", "trozos de maduro"],
        price: 16000,
        imgn: "../../public/otros/chunchulla.webp",
      },
    ],
  },
]