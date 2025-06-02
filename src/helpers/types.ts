export type ProductType = {
  id: number;
  created_at: string;
  category: "casual" | "formal" | "gym" | "party";
  color: string;
  size: string;
  name: string;
  price: number;
  off: number;
  exp: string;
  image: string;
};
