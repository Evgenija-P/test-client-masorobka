import { useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { yupResolver } from "@hookform/resolvers/yup";

import CompleteOrderPopup from "../popups/CompleteOrderPopup";
import AlertPopup from "../UIKit/AlertPopup";
import ButtonMain from "../UIKit/button";
import TextInput from "./TextInput";
import metaStore from "../../store/meta";
import orderStore from "../../store/orders";
import constants from "../../helpers/constants";
import orderShema from "../../store/validationSchemas/orderShema";

const formFields = [
  {
    name: "customer_name",
    label: "Прiзвище та Iм'я",
    placeholder: "приклад: Гайденко Тарас Бульбович",
    mask: false,
  },
  {
    name: "phone_number",
    label: "Номер телефону одержувача",
    placeholder: "приклад: +38066-135-12-24",
    mask: constants.PHONE_MASK,
  },
  {
    name: "delivery_address",
    label: "Адреса доставки вiддiлення Нової Пошти",
    placeholder:
      "приклад: м. Харків вул.Пушкінська 79б відділення нової почти №135",
    mask: false,
  },
];

const OrderForm = observer(() => {
  const { handleSubmit, control } = useForm({
    defaultValues: metaStore._orderFormFieldValues,
    resolver: yupResolver(orderShema),
  });

  const onFormSubmit = async (fieldValues) => {
    await orderStore.placeOrderAction(fieldValues);
  };

  const onOrderComplete = () => {
    orderStore.setOrderNumber(null);
    metaStore.toggleOrderPopup();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="w-full flex flex-col gap-y-8"
      >
        <ul className="flex flex-col gap-y-4 text-txt-main-white">
          {formFields.map((field) => (
            <li key={field.name} className="">
              <TextInput
                name={field.name}
                label={field.label}
                placeholder={field.placeholder}
                mask={field.mask}
                control={control}
              />
            </li>
          ))}
        </ul>
        <ButtonMain style="redLarge" btnType="submit">
          {orderStore.isOrderProcessing ? "В обробцi..." : "Замовити"}
        </ButtonMain>
      </form>
      {orderStore.order_number && (
        <CompleteOrderPopup
          orderNumber={orderStore.order_number}
          onComplete={onOrderComplete}
        />
      )}
      {orderStore.error && (
        <AlertPopup onOk={() => orderStore.setError(null)}>
          <h1 className="text-2xl">{orderStore.error}</h1>
        </AlertPopup>
      )}
    </>
  );
});

export default OrderForm;
