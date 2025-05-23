import { supabase } from "../../supabase";

type Type = {
  from: number;
  to: number;
  priceFrom: number;
  priceTo: number;
  color: string;
  size: string;
};

export async function getProducts({
  from,
  to,
  priceFrom,
  priceTo,
  color,
  size,
}: Type) {
  console.log(priceFrom, priceTo);

  let query = supabase.from("products").select("*", { count: "exact" });
  if (color) query = query.textSearch("color", color);
  if (size) query = query.textSearch("size", size);
  if (priceFrom) query = query.gt("price", priceFrom);
  if (priceTo) query = query.lt("price", priceTo);

  query = query.range(from, to);

  const { data: products, error, count } = await query;

  if (error) throw new Error("could not fetch products");

  return { products, count };
}
