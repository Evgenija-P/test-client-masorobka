/* eslint-disable react/prop-types */
import { useState } from "react";

import { Cross } from "../icons/iconComponent";

const PreviewImage = ({ image, onDelete }) => {
  const [preview, setPreview] = useState("");
  const [isDelBtnShown, setIsDelBtnShown] = useState(false);
  const isBlob = typeof image === "object";
  if (isBlob) {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => setPreview(reader.result);
  }

  return image ? (
    <div
      onMouseOver={() => setIsDelBtnShown(true)}
      onMouseLeave={() => setIsDelBtnShown(false)}
      className="relative"
    >
      {isDelBtnShown && (
        <button
          type="button"
          onClick={onDelete}
          className="group absolute top-2 right-2 w-7 h-7 flex justify-center items-center rounded-[8px] rounded-tr-[12px] bg-[#00000077]"
        >
          <Cross className="fill-[#ffffffaa] group-hover:fill-[#ffffff]" />
        </button>
      )}
      <img
        src={isBlob ? preview : image}
        alt="preview image"
        className={
          "border border-txt-main-white text-txt-main-white text-center w-[162px] h-[192px] object-cover rounded-3xl"
        }
      />
    </div>
  ) : null;
};

export default PreviewImage;
