import ButtonMain from "../components/UIKit/button";
import Header from "../components/header";
import { SocialLinksBlock } from "../components/socBlock";
import { scrollToTProducts } from "../helpers/scrollFunctions";

const HeaderHero = () => {

  return (
    <div className="bg-hero bg-no-repeat bg-cover min-h-[764px] text-txt-main-white relative">
      <div className="max-w-[1440px] mx-auto px-[10px]">
        <Header />
        <p className="mt-[122px] ml-0 lg:ml-[192px] max-w-[822px] text-[46px] lg:text-[56px] font-bold leading-tight ">
          М&apos;ясорОбка - це завжди{" "}
          <span className="text-txt-main-yellow">
            свіже <span className="text-txt-main-white">та</span> корисне м&apos;ясо
          </span>
        </p>
        <p className="mt-[32px] ml-0 lg:ml-[258px] max-w-[640px] text-[32px] font-bold leading-snug">
          Доставка по місту Запоріжжя бескоштовна при замовленні від 3000грн
        </p>
        <ButtonMain
          style="redLarge"
          btnClass="ml-[10px] mt-[32px] mb-[82px] lg:ml-[424px] lg:mt-[72px] lg:mb-0"
          clickFn={scrollToTProducts}
        >
          Замовити смаколики
        </ButtonMain>
      </div>
      <SocialLinksBlock section={"header"} />
    </div>
  );
};
export default HeaderHero;
