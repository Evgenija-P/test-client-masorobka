import PropTypes from "prop-types";

import AlertPopup from "../UIKit/AlertPopup";

const CompleteOrderPopup = ({ orderNumber, onComplete }) => {
  return (
    <AlertPopup onOk={onComplete}>
      <div className="w-full h-full flex flex-col items-center justify-end">
        <p className="text-3xl font-medium">Дякуемо!</p>
        <p className="mt-4 text-2xl font-medium">{`Ваше замовлення №${orderNumber} прийнято!`}</p>
        <p className="text-2xl font-medium">
          Очiкуйте дзвiнок вiд нашого менеджера.
        </p>
      </div>
    </AlertPopup>
  );
};

CompleteOrderPopup.propTypes = {
  orderNumber: PropTypes.number.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default CompleteOrderPopup;
