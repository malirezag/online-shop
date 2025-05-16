import { supabase } from "../../supabase";

type Type = {
  color: string;
  size: string;
  count: number;
};

export async function getOrders() {
  const { data: cart, error } = await supabase
    .from("cart")
    .select("*,orderId(*)")
    .order("id");

  if (error) throw new Error("could not fetch orders");

  return cart;
}

export async function setOrder({
  order,
  orderId,
}: {
  order: Type;
  orderId: number;
}) {
  const { data, error } = await supabase
    .from("cart")
    .insert([{ ...order, orderId }])
    .select();
  if (error) throw new Error("could not fetch orders");

  return data;
}

export default async function updateCountApi({
  count,
  id,
}: {
  count: number;
  id: number;
}) {
  const { data, error } = await supabase
    .from("cart")
    .update({ count })
    .eq("id", id)
    .select();

  if (error) {
    console.log(error.message);
    throw new Error("an error occured");
  }

  return data;
}

export async function deleteOrderApi(id: number) {
  const { error } = await supabase.from("cart").delete().eq("id", id);

  if (error) throw new Error(error.message);
}
