declare module "product";

export type Product = {
  id: string;
  imageUrl: string;
  price: number;
  title: string;
  description?: string;
  createdAt?: number;
};

export type Products = {
  data: Product[];
};





