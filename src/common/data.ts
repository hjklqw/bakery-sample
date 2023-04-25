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
          "A decadent, rich and creamy cheesecake, topped with mixed berry jam and a delicious sweet glaze.",
        ingredients:
          "Cream cheese, milk, gelatine, 100% organic flour, raspberries, blueberries, cane sugar, lemon juice, crushed graham cookies (butter, flour, brown sugar)",
        allergens: "Contains dairy.",
      },
      {
        name: "Coffee Cake",
        slug: "coffee",
        price: "$7.50 / piece . $35 / whole",
        description:
          "A cinnamon-infused cake topped with crunchy streusel that goes great with coffee.",
        ingredients:
          "Flour, sugar, butter, sour cream, milk, eggs, vanilla extract, cinnamon, streusel topping (brown sugar, flour, butter, cinnamon, salt)",
        allergens: "Contains dairy and eggs.",
      },
      {
        name: "Chocolate Cake",
        slug: "chocolate",
        price: "$6.50 / piece . $30 / whole",
        description:
          "Phasellus dapibus neque massa, nec dignissim nulla consequat vel. Curabitur at volutpat turpis, sit amet fringilla turpis.",
        ingredients:
          "Flour, cocoa powder, chocolate chunks, sugar, cream, milk, eggs, espresso powder",
        allergens: "Contains dairy and eggs.",
      },
      {
        name: "Vanilla Cake",
        slug: "vanilla",
        price: "$5.50 / piece . $28 / whole",
        description:
          "Nullam faucibus, turpis ac lobortis sodales, mi purus ullamcorper sapien, quis fermentum mi tellus sit amet purus.",
        ingredients: "Sponge cake, vanilla cream and icing",
      },
      {
        name: "Carrot Cake",
        slug: "carrot",
        price: "$7.50 / piece . $35 / whole",
        description: "Moist, delicious, and good for you! (Or so you hope)",
        ingredients:
          "Flour, shredded carrots, brown sguar, cinnamon, nutmeg, pecans, salt, cream cheese, heavy cream, icing sugar",
        allergens: "Contains dairy, eggs, and nuts.",
      },
      {
        name: "Banana Cake",
        slug: "banana",
        price: "$7 / piece . $32 / whole",
        description:
          "Suspendisse tempus eleifend tempor. Maecenas fermentum augue purus, in euismod turpis interdum vitae.",
        ingredients: "",
      },
      {
        name: "Cake pops",
        slug: "pops",
        price: "$3.50 / each",
        description:
          "Curabitur at volutpat turpis, sit amet fringilla turpis. Come in to see our daily varieties!",
        ingredients: "",
      },
      {
        name: "Tiramisu",
        slug: "tiramisu",
        price: "$7.50 / piece . $35 / whole",
        description:
          "In euismod justo sit amet tempor interdum. Ut id metus eu augue tristique ornare vel a erat. Nulla facilisi.",
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
