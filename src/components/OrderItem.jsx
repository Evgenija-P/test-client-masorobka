/* eslint-disable react/prop-types */
import { useState } from "react";
import { format } from "date-fns";
import { ArrowDown, Archive, Active, Trash } from "../icons/iconComponent";
import OrderItemProductList from "./OrderItemProductList";
import ButtonMain from "./UIKit/button";
import adminOrders from "../store/adminOrders";
import { toJS } from "mobx";
import ConfirmPopup from "./UIKit/ConfirmPopup";

const OrderItem = ({ order }) => {
  const { order_number, order_date, customer_name, phone_number, total_amount, delivery_address, products, archived } =
    order;
  const [orderIsOpened, setOrderIsOpened] = useState(false);
  const [popUpIsOpened, setPopUpIsOpened] = useState(false);

  const toArchive = () => {
    const newOrder = toJS(order);
    newOrder.archived = !archived;
    adminOrders.updateAdminOrderAction(newOrder);
  };

  const toRemove = () => {
    const newOrder = toJS(order);
    adminOrders.deleteAdminOrderAction(newOrder);
  };

  return (
    <>
      <div className="flex flex-row">
        <p className="w-[7.4vw] text-center p-2">{order_number}</p>
        <p className="w-[16.2vw] text-right p-2">{format(new Date(order_date), "dd-MM-yyyy HH-mm")}</p>
        <p className="w-[15.5vw] text-center p-2">{customer_name}</p>
        <p className="w-[16.6vw] text-right p-2">{phone_number}</p>
        <p className="w-[11.1vw] text-right p-2">{total_amount}</p>
        <p className="w-[29.5vw] text-center p-2">{delivery_address}</p>
        <p className="w-[3.7vw] flex justify-center items-center mr-6">
          <button
            className={`w-8 h-8 rounded-full bg-bg-white flex justify-center items-center ${
              orderIsOpened && "animate-rotate"
            }`}
            onClick={() => setOrderIsOpened(!orderIsOpened)}
          >
            <ArrowDown />
          </button>
        </p>
      </div>

      {orderIsOpened && (
        <div className="py-4 relative w-[840px]">
          <div className="flex pl-4">
            {" "}
            {/*producl list header*/}
            <p className="w-[300px] text-left">Наіменування</p>
            <p className="w-[120px] text-center">Кількість</p>
            <p className="w-[120px] text-right">Сума</p>
          </div>
          <OrderItemProductList products={products} />
          <div className="min-w-[300px] flex justify-center items-center gap-x-4 absolute right-[-125px] bottom-4">
            {archived && (
              <ButtonMain style="redSmall" clickFn={() => setPopUpIsOpened(!popUpIsOpened)}>
                <span className="flex justify-center gap-x-2 px-4">
                  <Trash />
                  Видалити
                </span>
              </ButtonMain>
            )}

            <ButtonMain style="transparent" clickFn={toArchive}>
              {archived ? (
                <span className="flex justify-center gap-x-2 px-4">
                  <Active />
                  Повернути з архіву
                </span>
              ) : (
                <span className="flex justify-center gap-x-2 pr-6">
                  <Archive />
                  Архів
                </span>
              )}
            </ButtonMain>
          </div>
        </div>
      )}

      {popUpIsOpened && (
        <ConfirmPopup
          primaryBtnText={"Видалити"}
          secondaryBtnText={"Закрити"}
          onPrimaryBtnClick={toRemove}
          onSecondaryBtnClick={() => setPopUpIsOpened(false)}
        >
          <div className="mt-[78px] text-txt-main-white mb-[52px]">
            <p className="text-[32px] mb-4">Ви впевнені що хочете видалити?</p>
            <p className="text-sm text-white">* Видалення замовлення без можливості поверння !</p>
          </div>
        </ConfirmPopup>
      )}
    </>
  );
};

export default OrderItem;
