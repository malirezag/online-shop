import { TbTrash } from "react-icons/tb";
import useGetProducts from "../products/useGetProducts";
import { FiEdit } from "react-icons/fi";
import Modal from "../../ui/Modal";
import { useDeleteProduct } from "./useDeleteProduct";
import EditForm from "../../ui/EditForm";
import { useSearchParams } from "react-router-dom";

export default function UpdateProducts() {
  const { products } = useGetProducts();
  const { deleteProduct } = useDeleteProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleEdit = (id: string) => {
    searchParams.set("id", id);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex flex-row flex-wrap gap-5 items-center justify-center p-5 h-fit">
      {products?.products.map((product) => (
        <div className="flex bg-gray-100 shadow-lg rounded-2xl pl-3 pr-5 py-5 gap-5 w-60">
          <img
            src={product.image.split("*")?.[0]}
            className="size-20 rounded-xl"
          />

          <div className="flex flex-col justify-around">
            <div className="flex flex-row gap-17 ">
              <Modal>
                <Modal.Open open="edit">
                  <button>
                    <FiEdit onClick={() => handleEdit(product.id.toString())} />
                  </button>
                </Modal.Open>

                <Modal.Window name="edit">
                  <EditForm />
                </Modal.Window>

                <Modal.Open open="confirm">
                  <button className="text-red-500">
                    {" "}
                    <TbTrash />
                  </button>
                </Modal.Open>

                <Modal.Window
                  name="confirm"
                  type="confirm"
                  onconfirm={() => deleteProduct(product.id)}
                >
                  <p className="text-gray-800">
                    Are you sure you want delete this item? if you delete, you
                    can not restore it!
                  </p>
                </Modal.Window>
              </Modal>
            </div>
            <div>
              <p className="truncate w-30">{product.name}</p>
              <p>id: {product.id}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
