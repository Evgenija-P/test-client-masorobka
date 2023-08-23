import { observer } from "mobx-react-lite";
import productStore from "../store/products";
// import { useState } from "react";

const PreviewImgField = observer(() => {
  // const [preview, setPreview] = useState("");

  const image = productStore.uploadedImages?.image; 

  const url = image ? URL.createObjectURL(image) : "";
  
  // const reader = new FileReader();
  // reader.readAsDataURL(image);
  // reader.onload = () => setPreview(reader.result);

  return image &&
  // return preview &&
    <img
      // src={preview}
      src={url}
      alt="preview image"
      className={"border border-txt-main-white text-txt-main-white text-center w-[162px] h-[192px] object-contain rounded-3xl"} />
})

export default PreviewImgField;
