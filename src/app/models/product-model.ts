export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  stock?: number;
  quantity?: number;
  description?: string;
  category?: string;
}
