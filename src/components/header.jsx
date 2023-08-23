import ButtonMain from "./UIKit/button";
import logo from "../images/logo.png";
import Menu from "./menu";
import { scrollToTProducts } from "../helpers/scrollFunctions";

const Header = () => {
  return (
    <div className="h-20 mx-auto flex justify-between gap-x-3 text-txt-main-white pt-2">
      <img src={logo} alt="Logo" className="w-[76px] h-[76px] lg:ml-[70px]" />
      <div className="flex flex-col lg:flex-row py-5 items-center lg:mr-[122px]">
        <nav className="mr-3 lg:mr-11">
          <Menu section={"header"} />
        </nav>
        <ButtonMain style="redCustom" clickFn={scrollToTProducts}>
          Замовити смаколики
        </ButtonMain>
      </div>
    </div>
  );
};

export default Header;
