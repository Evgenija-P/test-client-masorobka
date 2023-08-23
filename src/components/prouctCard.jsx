/* eslint-disable react/prop-types */
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

import BlankImg from "../images/BlankPic.jpg";
import { Line, FavouriteIcon, Trash } from "../icons/iconComponent";
import RoundNumbers from "./roundNumbers";
import ButtonMain from "./UIKit/button";
import ConfirmPopup from "./UIKit/ConfirmPopup";
import ProductDetailInfoCard from "./ProductDetailInfoCard";
import ordersStore from "../store/orders";
import productStore from "../store/products";

const ProductCard = observer(({ product }) => {
  const [isProductDetailInfoCardShown, setIsProductDetailInfoCardShown] = useState(false);
  const [qttyBtn, setQttyBtn] = useState(1);
  const [popUpIsOpened, setPopUpIsOpened] = useState(false);
  const { pathname } = useLocation();
  const admin = pathname.endsWith("admin/authorized/products");

  const addToCart = () => {
    ordersStore.addToCart(product, qttyBtn);
  };
  const editProduct = () => {
    // console.log("edit product");
    productStore.setEditProduct(product);
  };
  const deleteProduct = async () => {
    productStore.deleteProductAction(product);
    setPopUpIsOpened(false);
  };
  const toggleFavourite = () => {
    const newProduct = toJS(product);
    // newProduct.favourite = !newProduct.favourite;
    // const formData = new FormData;
    // formData.append("product", JSON.stringify(newProduct));
    // productStore.updateProductAction({
    //   id: newProduct._id,
    //   formData
    // })
    productStore.updateProductAction(newProduct._id, {
      ...newProduct,
      favourite: !newProduct.favourite,
    });
  };

  const onProductCardClick = ({ target }) => {
    if (target.nodeName === "BUTTON" || admin) {
      return;
    }
    toggleProductDetailInfoCard();
  };

  const toggleProductDetailInfoCard = () => {
    setIsProductDetailInfoCardShown((prevState) => !prevState);
  };

  return (
    <div
      onClick={onProductCardClick}
      className={`${
        admin ? "h-[316px]" : "h-[356px]"
      } w-[216px] rounded-3xl bg-bg-white mx-auto cursor-pointer relative`}
    >
      <img
        src={product.img || BlankImg}
        alt={"product image"}
        className={"h-[168px] w-full object-cover rounded-t-3xl"}
      />
      <p className="px-2 py-1 text-center font-bold">{product.name}</p>
      <Line active />
      <p className="px-2 py-1 text-center font-basic">
        {product.price} грн / {product.unit}
      </p>

      <p className="px-2 py-1 text-center text-txt-grey font-basic">
        {product.discount_price ? product.discount_price : "_____________"}
      </p>

      {admin ? (
        <>
          <div className="flex justify-center">
            <ButtonMain style={"whiteSmall"} clickFn={editProduct}>
              Редагувати
            </ButtonMain>
          </div>
          <button
            className="absolute top-[132px] right-6 w-6 h-6 bg-bg-black rounded"
            onClick={() => toggleFavourite()}
          >
            <FavouriteIcon filled={product.favourite} />
          </button>
          <button className="absolute top-3 right-6 w-6 h-6 bg-bg-black rounded" onClick={() => setPopUpIsOpened(true)}>
            <Trash />
          </button>
        </>
      ) : (
        <>
          <RoundNumbers activeBtn={qttyBtn} setQtty={setQttyBtn} />
          <div className="flex justify-center">
            <ButtonMain style={"addToCart"} clickFn={addToCart}>
              Додати у кошик
            </ButtonMain>
          </div>
        </>
      )}

      {popUpIsOpened && (
        <ConfirmPopup
          primaryBtnText={"Видалити"}
          secondaryBtnText={"Закрити"}
          onPrimaryBtnClick={deleteProduct}
          onSecondaryBtnClick={() => setPopUpIsOpened(false)}
        >
          <div className="mt-[78px] text-txt-main-white mb-[52px]">
            <p className="text-[32px] mb-4">Ви впевнені що хочете видалити?</p>
            <p className="text-sm text-white">
              * Видалення картки з товаром видалить всі додані зображення та інформацію без можливості поверння.
            </p>
          </div>
        </ConfirmPopup>
      )}
      {isProductDetailInfoCardShown && (
        <ProductDetailInfoCard
          product={toJS(product)}
          productQuantity={qttyBtn}
          onClose={toggleProductDetailInfoCard}
          onPrev={toggleProductDetailInfoCard}
        />
      )}
    </div>
  );
});

export default ProductCard;
