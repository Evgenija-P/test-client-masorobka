/* eslint-disable react/prop-types */
import Proptypes from "prop-types";
import { observer } from "mobx-react-lite";

import orderStore from "../store//orders";
import Counter from "./UIKit/Counter";
import DeleteBtn from "./UIKit/buttons/DeleteBtn";

const CartProductItem = observer(({ name, quantity, price }) => {
  // console.log("quantity: ", quantity);

  return (
    <div className="w-full h-12 grid grid-cols-productItem items-center  ">
      <span>{name}</span>
      <Counter
        initialValue={quantity}
        onChange={(value) => orderStore.changeProductQuantity(name, value)}
        size="s"
      />
      <span className=" text-center">{quantity * price}</span>
      <div>
        <DeleteBtn onClick={() => orderStore.deleteProduct(name)} />
      </div>
    </div>
  );
});

CartProductItem.propTypes = {
  name: Proptypes.string.isRequired,
  quantity: Proptypes.number.isRequired,
};

export default CartProductItem;
