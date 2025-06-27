import toast from "react-hot-toast";
import { supabase } from "../../supabase";
import { ProductType } from "../helpers/types";

type getProductType = {
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
}: getProductType) {
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

type AddType = {
  size: string;
  color: string;
  name: string;
  exp: string;
  category: string;
  price: number;
  off: number;
  file?: FileList;
};

export async function AddProductApi(product: AddType) {
  if (!product.file || product.file.length === 0) {
    toast.error("Please select a file.");
    return null;
  }

  const uploadedImages: string[] = [];

  for (let i = 0; i < product.file.length; i++) {
    const file = product.file[i];
    const fileName = `${Date.now()}-${file.name}`;
    const image = `https://czkpmqquhaeubnpblmyh.supabase.co/storage/v1/object/public/products/${fileName}`;

    const { error } = await supabase.storage
      .from("products")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.log(error.message);
      toast.error("Couldn't upload file.");

      return null;
    }

    uploadedImages.push(image);
  }

  const productToInsert = {
    ...product,
    color: product.color,
    size: product.size,
    off: product.off ? product.off : 0,
    image: uploadedImages.join("*"),
  };
  delete productToInsert.file;

  const { data, error: error2 } = await supabase
    .from("products")
    .insert([productToInsert])
    .select();

  if (error2) {
    toast.error(error2.message);
    return null;
  }

  return data;
}
type ProductOrderItem = {
  id: number;
  color: string;
  count: number;
  size: string;
  created_at: string;
  userId: string | null;
  orderId: {
    id: number;
    category: string;
    color: string;
    created_at: string;
    exp: string;
    image: string;
    name: string;
    off: number;
    price: number;
    size: string;
  };
};

export async function deleteApi(
  id: number,
  orders?: ProductOrderItem[] | undefined
) {
  const filteredOrder = orders?.filter((item) => item.orderId.id === id) ?? [];
  console.log(filteredOrder.length);

  if (filteredOrder?.length > 0) {
    for (let i = 0; i < filteredOrder.length; i++) {
      const order = filteredOrder[i];

      const { error: error1 } = await supabase
        .from("cart")
        .delete()
        .eq("id", order.id);

      if (error1) console.log(error1.message);
    }
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) {
      throw new Error(error.message);
    }
  } else {
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) {
      throw new Error(error.message);
    }
  }
}

export async function updateProductApi(product: ProductType) {
  const { data, error } = await supabase
    .from("products")
    .update(product)
    .eq("id", product.id)
    .select();

  if (error) throw new Error("couldnt update");
  return data;
}

export async function searchProducts(searchedWord: string) {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .ilike("name", `%${searchedWord}%`);
  if (error) throw new Error(error.message);
  console.log(products);

  return products;
}
