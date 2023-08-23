import * as Yup from "yup";
import constants from "../../helpers/constants";

const IS_REQUIRED = "Обов'язкове поле!";

const orderShema = Yup.object({
  customer_name: Yup.string()
    .required(IS_REQUIRED)
    .min(3, "Довжина поля має бути не менше 3 символів.")
    .max(30, "Довжина поля має бути не більше 30 символів."),
  phone_number: Yup.string()
    .required(IS_REQUIRED)
    .matches(
      constants.PHONE_REGEX,
      "Поле має бути наступного формату +38 (0XX) XX-XXX-XX."
    ),
  delivery_address: Yup.string()
    .required(IS_REQUIRED)
    .min(20, "Довжина поля має бути не менше 20 символів.")
    .max(100, "Довжина поля має бути не більше 100 символів."),
});

export default orderShema;
