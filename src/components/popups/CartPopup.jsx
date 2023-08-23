import PropTypes from "prop-types";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

import BasePopup from "../UIKit/BasePopup";
import ButtonMain from "../UIKit/button";
import CartProductList from "../CartProductList";
import ordersStore from "../../store/orders";

const CartPopup = observer(({ onClose, onGoToTheOrder }) => {
  const isCartEmpty = ordersStore.products.length === 0;
  const isOrderExist = ordersStore.totalQuantity !== 0;
  return (
    <BasePopup
      title="Кошик"
      closeByPressEsc
      closeByClickOnOverlay
      onClose={onClose}
    >
      <div className="h-[468px]">
        {isCartEmpty ? (
          <div className="w-full h-full flex justify-center items-center">
            <span className="text-3xl text-txt-main-white">
              Кошик порожнiй!
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center text-txt-main-white">
            <div className="w-full px-4 flex flex-col text-2xl font-medium">
              <span>{`У кошику: ${ordersStore.totalQuantity} одиниць товару`}</span>
              <span>{`На суму: ${ordersStore.totalPrice} грн`}</span>
            </div>
            <div className="w-full mt-5">
              <CartProductList products={toJS(ordersStore.products)} />
            </div>
            <div className="mt-8">
              <ButtonMain
                style="redLarge"
                clickFn={onGoToTheOrder}
                disabled={!isOrderExist}
              >
                Перейти до замовлення
              </ButtonMain>
            </div>
            <p className="mt-4 text-white text-sm">
              * Товар ваговий. Вказано середню вагу упаковки продукту. Можливе
              відхилення у більшу чи меншу сторону. Про точну суму та вагу ми
              повідомимо вам напередодні доставки після збирання продукції на
              нашому складі.
            </p>
          </div>
        )}
      </div>
    </BasePopup>
  );
});

CartPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onGoToTheOrder: PropTypes.func.isRequired,
};

export default CartPopup;
