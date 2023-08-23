import * as Yup from "yup";

const FILE_MAX_SIZE = 8388608;
const ACCEPTABLE_MIMETYPES = ["image/jpg", "image/jpeg", "image/png"];

const addProductSchema = Yup.object({
  img: Yup.mixed()
    .test(
      "MIME_TYPE",
      "Файл повинен бутиы наступного формату: jpeg/jpg/png. ",
      (value) => {
        if (typeof value === "string") {
          return true;
        }
        return value ? ACCEPTABLE_MIMETYPES.includes(value.type) : true;
      }
    )
    .test("FILE_SIZE", "Файл перевищує допустимий розмір 8mb.", (value) => {
      if (typeof value === "string") {
        return true;
      }
      return value ? value.size < FILE_MAX_SIZE : true;
    }),
});

export default addProductSchema;
