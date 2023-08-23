/* eslint-disable react/prop-types */
// import Proptypes from "prop-types";

import CartProductItem from "./CartProductItem";

const CartProductList = ({ products }) => {
  return (
    <>
      <div className="w-full px-4 grid grid-cols-productItem">
        <span>Найменування</span>
        <span className="text-center">Кiлькiсть</span>
        <span className="text-center">Сума</span>
      </div>
      <ul className="w-full h-40 mt-2 flex flex-col gap-y-2 overflow-auto">
        {products.map(({ product, quantity }, idx) => {
          return (
            <li
              key={product.name}
              className="px-4 flex items-center gap-x-2 bg-bg-main"
            >
              {`${idx + 1})`}
              <CartProductItem
                name={product.name}
                quantity={quantity}
                price={product.price}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

// CartProductList.propTypes = {
//   products: Proptypes.arrayOf(
//     Proptypes.shape({
//       product: Proptypes.object.isRequired,
//       quantity: Proptypes.number.isRequired,
//     })
//   ),
// };

export default CartProductList;
