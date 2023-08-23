import { useDropzone } from "react-dropzone";
import { PlusInCircle } from "../icons/iconComponent";
import ProductStore from "../store/products";
import { observer } from "mobx-react-lite";

const Dropzone = observer(() => {
  const { setUploadedImages } = ProductStore;

  const handleDrop = async (acceptedFiles) => {
    setUploadedImages({ image: acceptedFiles.at(-1) });
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });
  
  return (
    <div
      {...getRootProps()}
      className="bg-bg-white w-[162px] h-[192px] rounded-3xl py-4"
    >
      <input {...getInputProps()} />
      <div className="py-4 flex justify-center">
        <PlusInCircle />
      </div>
      <p className="text-center text-xl">Додати зображення</p>
    </div>
  );
});

export default Dropzone;
