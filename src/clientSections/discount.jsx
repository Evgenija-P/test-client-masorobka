import ButtonMain from "../components/UIKit/button";
import { scrollToTProducts } from "../helpers/scrollFunctions";

const Discount = () => {
  return (
    <div className="bg-bg-white min-h-[458px] pt-[68px] pb-[120px] lg:pb-[100px] relative">
      <div className="max-w-[1440px] mx-auto px-[10px]">
        <div className="w-[300px] md:w-[470px] lg:w-[669px] mx-auto text-center text-txt-main-black font-medium">
          <h3 className="text-5xl mb-4">
            Отримай знижку <span className="text-txt-marine">5% </span>на третє замовлення
          </h3>
          <p className="text-xl mb-10 lg:mb-16">
            Наш консультант підкаже яке м&apos;ясо підійде вам як найкраще. <br />
            Не зволікай - заявку залишай!
          </p>
          <ButtonMain style="redLarge" clickFn={scrollToTProducts}>
            Замовити смаколики
          </ButtonMain>
        </div>
      </div>
    </div>
  );
};
export default Discount;
