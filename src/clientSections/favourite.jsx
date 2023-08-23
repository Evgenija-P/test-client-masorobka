import ProductList from "../components/productList";
import hotPepper from "../images/hot-pepper.png";
import rosemary from "../images/rosemary.png";

const Favourite = () => {
  return (
    <div className="bg-bg-black relative pb-[58px] min-h-[600px]">
      <img src={hotPepper} alt="hot pepper" className="absolute top-[-64px]" />
      <img src={rosemary} alt="rosemary" className="absolute right-4 bottom-0" />
      <div className="max-w-[1440px] mx-auto max-px-[120px]">
        <h2 className="text-4xl font-bold text-txt-main-white pt-12 pb-4 z-10 relative">
          Найулюбленіші смаколики покупців
        </h2>
        <ProductList favourite />
      </div>
    </div>
  );
};
export default Favourite;
