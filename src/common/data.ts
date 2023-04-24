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
        description:
          "A decadent, rich and creamy cheesecake, topped with mixed berry jam and a delicious sweet glaze. Curabitur at volutpat turpis, sit amet fringilla turpis.",
        ingredients:
          "Cream cheese, milk, gelatine, 100% organic flour, raspberries, blueberries, cane sugar, lemon juice, crushed graham cookies (butter, flour, brown sugar)",
        allergens: "Contains dairy.",
      },
      {
        name: "Coffee Cake",
        slug: "coffee",
        price: "$7.50 / piece . $35 / whole",
        description: "",
        ingredients: "",
      },
      {
        name: "Chocolate Cake",
        slug: "chocolate",
        price: "$6.50 / piece . $30 / whole",
        description: "",
        ingredients: "",
      },
      {
        name: "Vanilla Cake",
        slug: "vanilla",
        price: "$5.50 / piece . $28 / whole",
        description: "",
        ingredients: "",
      },
      {
        name: "Carrot Cake",
        slug: "carrot",
        price: "$7.50 / piece . $35 / whole",
        description: "",
        ingredients: "",
      },
      {
        name: "Banana Cake",
        slug: "banana",
        price: "$7 / piece . $32 / whole",
        description: "",
        ingredients: "",
      },
      {
        name: "Cake pops",
        slug: "pops",
        price: "$3.50 / each",
        description: "",
        ingredients: "",
      },
      {
        name: "Tiramisu",
        slug: "tiramisu",
        price: "$7.50 / piece . $35 / whole",
        description: "",
        ingredients: "",
      },
    ],
    imagePosition: "50% 60%",
    headerImage: {
      basePosY: 92,
      filterStyle: "brightness(80%) contrast(65%)",
    },
  }),
];
