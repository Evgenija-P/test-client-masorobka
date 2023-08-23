import Proptypes from "prop-types";
import { observer } from "mobx-react-lite";

import BasePopup from "../UIKit/BasePopup";
import OrderForm from "../Forms/OrderForm";

const OrderPopup = observer(({ onClose, onBackToTheCart }) => {
  return (
    <BasePopup onClose={onClose} onPrevBtnClick={onBackToTheCart}>
      <div className="flex flex-col items-center">
        <OrderForm />
      </div>
    </BasePopup>
  );
});

OrderPopup.propTypes = {
  onClose: Proptypes.func.isRequired,
  onBackToTheCart: Proptypes.func.isRequired,
};

export default OrderPopup;
