import { Product } from "@/common/models";

export const specialCategorySlug = "special";

export const newItems: Product[] = [
  {
    name: "Heart-shaped cake",
    slug: "heart-cake",
    price: "$12.50 / whole",
    description:
      "Curabitur diam leo, placerat nec odio in, volutpat egestas mauris. Pellentesque varius ipsum nec sapien ultrices, lacinia tincidunt velit varius.",
    ingredients:
      "In hac habitasse platea dictumst. Quisque sit amet auctor dolor, sed convallis ante.",
  },
  {
    name: "Strawberry cake",
    slug: "strawberry-cake",
    price: "$8.50 / piece . $30 / whole",
    description:
      "Vivamus pharetra tortor vel lectus elementum pretium. Praesent quis diam erat.",
    ingredients: "Proin egestas rutrum tellus, a sagittis justo mattis nec.",
    allergens: "Contains dairy.",
  },
  {
    name: "Floral macaroons",
    slug: "floral-macaroons",
    price: "$3 / each . $15 assorted 6-pack",
    description:
      "Phasellus in quam faucibus tellus iaculis rhoncus. Nam non metus id massa malesuada fermentum.",
    ingredients: "Fusce ex justo, gravida quis fermentum a, sodales id tellus.",
    allergens: "Contains dairy.",
  },
];
