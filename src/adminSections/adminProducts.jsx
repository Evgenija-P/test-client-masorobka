import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import AddProductPopup from "../components/popups/AddProductPopup";
import ButtonMain from "../components/UIKit/button";
import productStore from "../store/products";
import AdminProductsSwiper from "../components/adminProductsSwiper";
import Categories from "../components/categories";

const AdminProducts = observer(() => {
  const [addProductPopup, setAddProductPopup] = useState(false);

  useEffect(() => {
    setAddProductPopup(productStore.editProduct ? true : false);
  }, [productStore.editProduct]);

  useEffect(() => {
    // console.log("getting products ..")
    productStore.getProductsAction();
  }, []);

  const closePopup = () => {
    productStore.unsetEditProduct();
    setAddProductPopup(false);
  };

  return (
    <>
      <div className="w-[90vw] bg-bg-black">
        <div className="flex mb-7">
          <div className="mx-auto w-[240px]"></div>
          <h2 className="mt-8 text-3xl text-txt-main-white text-center font-medium">Каталог Товарів</h2>
          <ButtonMain style="redMedium" btnClass={"mt-6 mx-0"} clickFn={() => setAddProductPopup(true)}>
            Додати товар
          </ButtonMain>
        </div>
        <div className="w-[90%] mx-auto relative">
          <Categories products={productStore.products} section={"admin"} />
        </div>
        <div className="w-[75vw] bg-bg-black mx-auto">
          <AdminProductsSwiper />
        </div>
      </div>
      {addProductPopup && <AddProductPopup onClose={closePopup} editProduct={productStore.editProduct} />}
    </>
  );
});

export default AdminProducts;
