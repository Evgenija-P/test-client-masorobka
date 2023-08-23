import UpBtn from "../components/UIKit/buttons/upBtn";
import ContactList from "../components/contactsList";
import Menu from "../components/menu";
import { SocialLinksBlock } from "../components/socBlock";
import tomatoes from "../images/tomatoes.png";
import logo from "../images/logo.png";
import logoKiwiCode from "../images/kiwicode.png";

const Footer = () => {
  return (
    <div className="bg-bg-black min-h-[453px] pt-8 pb-5 text-txt-main-white relative" id="contacts">
      <div className="max-w-[1440px] mx-auto px-[10px] ">
        <img
          src={tomatoes}
          alt="tomatoes"
          className="absolute left-0 top-[-120px] w-[240px] h-[224px] lg:top-[-182px] lg:w-[300px] lg:h-[280px]"
        />
        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-end gap-x-[50px] w-[300px] md:w-[450px] lg:min-w-[600px] mx-auto">
          <Menu section={"footer"} styles={"w-full 2xl:w-[188px] mt-[80px] lg:mt-[143px]"} />
          <div>
            <img src={logo} alt="Logo" className="max-w-[199px] max-h-[199px] mb-4" />
            <div className="w-40 mx-auto mb-4">
              <SocialLinksBlock section={"footer"} />
            </div>
          </div>
          <div className="w-[300px] md:w-[450px] lg:w-[500px] xl:w-[600px]">
            <p className="text-5xl font-bold mb-2 leading-[1.4]">
              М&apos;ясорОбка - це завжди <span className="text-txt-main-yellow">свіже</span> та{" "}
              <span className="text-txt-main-yellow">корисне м&apos;ясо</span>
            </p>
            <ContactList />
          </div>
        </div>
        <div className="flex flex-col gap-y-5 2xl:flex-row justify-end 2xl:gap-y-0 2xl:gap-x-[97px] items-center mt-[98px] mb-[18px]">
          <p className="text-xs leading-[1.5] text-txt-light-grey text-center ">
            Використовуючи цей сайт Ви погоджуєтесь з{" "}
            <a href="#" className="underline ">
              Правилами Користування
            </a>
          </p>
          <div className="flex gap-x-4 flex-col lg:flex-row h-[55px] items-center justify-center">
            <p className="text-base text-txt-main-white opacity-[0.6] text-center">Designed and Development by</p>
            <a href="#">
              <img src={logoKiwiCode} alt="Logo KiwiCode Solution" />
            </a>
          </div>
        </div>

        <UpBtn />
      </div>
    </div>
  );
};
export default Footer;
