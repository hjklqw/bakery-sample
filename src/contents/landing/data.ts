export const categories: {
  name: string;
  route: string;
  imageUrl: string;
  imagePosition?: string;
}[] = [
  {
    name: "Breads",
    route: "/products/breads",
    imageUrl: "/category-bread.jpg",
  },
  {
    name: "Pastries",
    route: "/products/pastries",
    imageUrl: "/category-pastries.jpg",
    imagePosition: "50% 50%",
  },
  {
    name: "Cakes",
    route: "/products/cakes",
    imageUrl: "/category-cakes.jpg",
    imagePosition: "50% 60%;",
  },
];
