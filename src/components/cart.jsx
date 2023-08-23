import Proptypes from "prop-types";

import * as icons from "../icons/iconComponent";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import ordersStore from "../store/orders";

const Cart = observer(({ onClick }) => {
  // console.log("Orders store:", toJS(ordersStore.order));
  const cartProductsNum = ordersStore.order.products.length;
  const isCartEmpty = cartProductsNum === 0;

  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-[60px] left-[86vw] z-50"
    >
      <icons.Cart />
      {!isCartEmpty && (
        <p
          className="absolute bottom-4 right-4 bg-bg-red w-8 h-8 py-[2px] 
      rounded-full text-xl text-center text-txt-main-white"
        >
          {cartProductsNum}
        </p>
      )}
    </button>
  );
});

Cart.propTypes = {
  onClick: Proptypes.func.isRequired,
};

export default Cart;
