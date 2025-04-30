import { supabase } from "../../supabase";

export async function getProducts() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) throw new Error("could not fetch products");

  return products;
}
