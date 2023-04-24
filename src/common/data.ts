import { ProductCategory } from "./models";

export const categories: ProductCategory[] = [
  new ProductCategory({
    name: "Breads",
    slug: "breads",
    tagline: "",
    description: [""],
    items: [],
    headerImage: {
      basePosY: 75,
    },
  }),
  new ProductCategory({
    name: "Pastries",
    slug: "pastries",
    tagline: "",
    description: [""],
    items: [],
    imagePosition: "50% 50%",
    headerImage: {
      basePosY: 47,
      filterStyle: "brightness(90%) contrast(68%)",
    },
  }),
  new ProductCategory({
    name: "Cakes",
    slug: "cakes",
    tagline: "Made with love",
    description: [
      "All our cakes are handmade, creamy yet light, and irresistably delicious.",
      "Click on a cake to learn more about its ingredients and potential allergens.",
    ],
    items: [
      {
        name: "Cheesecake",
        slug: "cheesecake",
        price: "$7 / piece . $32 / whole",
      },
      {
        name: "Coffee Cake",
        slug: "coffee",
        price: "$7.50 / piece . $35 / whole",
      },
      {
        name: "Chocolate Cake",
        slug: "chocolate",
        price: "$6.50 / piece . $30 / whole",
      },
      {
        name: "Vanilla Cake",
        slug: "vanilla",
        price: "$5.50 / piece . $28 / whole",
      },
      {
        name: "Carrot Cake",
        slug: "carrot",
        price: "$7.50 / piece . $35 / whole",
      },
      {
        name: "Banana Cake",
        slug: "banana",
        price: "$7 / piece . $32 / whole",
      },
      { name: "Cake pops", slug: "pops", price: "$3.50 / each" },
      {
        name: "Tiramisu",
        slug: "tiramisu",
        price: "$7.50 / piece . $35 / whole",
      },
    ],
    imagePosition: "50% 60%",
    headerImage: {
      basePosY: 92,
      filterStyle: "brightness(80%) contrast(65%)",
    },
  }),
];
