import { supabase } from "../../supabase";

export async function getProducts(from: number, to: number) {
  const {
    data: products,
    error,
    count,
  } = await supabase
    .from("products")
    .select("*", { count: "exact" })
    .range(from, to);

  if (error) throw new Error("could not fetch products");

  return { products, count };
}
