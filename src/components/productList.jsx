import { observer } from "mobx-react-lite";
import Proptypes from "prop-types";

import AllProductSwiper from "./allProductSwiper";
import FavouriteProductSwiper from "./favouriteProductSwiper";

const ProductList = observer(({ favourite }) => {
  return favourite ? <FavouriteProductSwiper /> : <AllProductSwiper />;
});
ProductList.propTypes = {
  favourite: Proptypes.bool,
};

export default ProductList;
