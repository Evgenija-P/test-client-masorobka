/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useController } from "react-hook-form";
import { useDropzone } from "react-dropzone";

import { PlusInCircle, DnD } from "../../icons/iconComponent";

const FileInput = ({ name, control, onInputChange }) => {
  const {
    field: { value, ...field },
    fieldState,
  } = useController({ name, control });

  // DROP ZONE
  const { getInputProps, getRootProps, isDragActive } = useDropzone({
    onDropAccepted: (values) => onInputChange(values[0]),
    onFileDialogCancel: () => onInputChange(""),
    multiple: false,
  });

  // console.log("img error: ", fieldState.error);

  return (
    <>
      <div className="relative w-full flex justify-center">
        <div
          {...getRootProps()}
          className="group flex justify-center items-center w-[162px] h-[192px] rounded-3xl cursor-pointer 
          text-txt-main-black font-bold bg-bg-white outline-none "
        >
          {isDragActive ? (
            <DnD className="w-2/3 h-2/3 text-bg-orange border-[3px]border-bg-orange" />
          ) : (
            <div
              className="flex flex-col gap-4 items-center group-hover:text-bg-orange
            group-focus:text-bg-orange transition-all duration-250"
            >
              <PlusInCircle className="fill-[tomato]" />
              <p className="text-xl text-center">Додати зображення</p>
            </div>
          )}
        </div>
        <input
          type="file"
          value={""}
          {...field}
          {...getInputProps()}
          className="sr-only"
        />
        {fieldState.error ? (
          <p className="absolute bottom-0 translate-y-full text-sm font-bold text-[red]">
            {fieldState.error.message}
          </p>
        ) : (
          <p className="absolute bottom-0 translate-y-full text-sm text-txt-main-white ">
            клацніть по кнопці або перетягніть файл
          </p>
        )}
      </div>
    </>
  );
};

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default FileInput;
