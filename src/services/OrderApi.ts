import { supabase } from "../../supabase";

export async function getOrders() {
  const { data: cart, error } = await supabase
    .from("cart")
    .select("*,order(*)");

  if (error) throw new Error("could not fetch orders");

  return cart;
}
