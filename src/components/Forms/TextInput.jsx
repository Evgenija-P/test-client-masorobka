import PropTypes from "prop-types";
import { useController } from "react-hook-form";
import MaskedInput from "react-text-mask";

import metaStore from "../../store/meta";

const TextInput = ({ name, label, placeholder, control, mask = false }) => {
  const {
    // eslint-disable-next-line no-unused-vars
    field: { ref, ...field },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const onChange = (e) => {
    field.onChange(e);
    metaStore.setOrderFormField(name, e.currentTarget.value);
  };

  return (
    <div>
      <label className="flex flex-col">
        <span className="text-base font-medium text-txt-main-white">
          {label}
        </span>
        <div className="relative">
          <MaskedInput
            mask={mask}
            showMask
            {...field}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete="off"
            className="w-full h-8 px-4 text-base font-normal bg-bg-main outline-none
             border border-transparent focus:border-b-txt-main-yellow transition-all duration-250 placeholder:text-bg-grey"
          />
          {error && (
            <p className="absolute text-xs font-bold text-[red]">
              {error.message}
            </p>
          )}
        </div>
      </label>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  control: PropTypes.object.isRequired,
  mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.bool]),
};

export default TextInput;
