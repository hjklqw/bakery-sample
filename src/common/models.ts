import { Routes } from "./routes";

export type LayoutProps = {
  children: React.ReactNode;
};

export interface ApiResponse {
  success: boolean;
  error?: string;
}

export interface HtmlInputValue {
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  description: string;
  price: string;
  ingredients: string;
  allergens?: string;
}

export class ProductCategory {
  readonly name: string;
  readonly slug: string;
  readonly tagline: string;
  readonly description: string[];
  readonly items: Product[];

  readonly imagePosition?: string;
  readonly headerImageSettings?: {
    basePosY?: number;
    filterStyle?: string;
  };

  constructor(settings: {
    name: string;
    slug: string;
    tagline: string;
    description: string[];
    items: Product[];
    imagePosition?: string;
    headerImage?: {
      basePosY?: number;
      filterStyle?: string;
    };
  }) {
    this.name = settings.name;
    this.slug = settings.slug;
    this.tagline = settings.tagline;
    this.description = settings.description;
    this.items = settings.items;
    this.imagePosition = settings.imagePosition;
    this.headerImageSettings = settings.headerImage;
  }

  get route() {
    return `${Routes.PRODUCTS}/${this.slug}`;
  }

  get imageUrl() {
    return `/category-${this.slug}.jpg`;
  }

  get headerImageUrl() {
    return `/category-${this.slug}-header.jpg`;
  }
}
