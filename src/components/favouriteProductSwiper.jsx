import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { observer } from "mobx-react-lite";
import "swiper/css";
import "./productSwiper.css";

import * as icons from "../icons/iconComponent";
import ProductCard from "./prouctCard";
import productStore from "../store/products";

const FavouriteProductSwiper = observer(() => {
  const favouriteProducts = productStore.products.filter((product) => product.favourite === true);

  return (
    <div className="w-full py-4 relative mx-auto favourite">
      <>
        <Swiper
          modules={[Navigation, Pagination]}
          rewind={true}
          pagination={{
            clickable: true,
            el: ".fav-pagination",
          }}
          navigation={{
            nextEl: ".fav-button-next",
            prevEl: ".fav-button-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            760: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 4,
            },
          }}
        >
          {favouriteProducts.map((product) => (
            <SwiperSlide key={product.name}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
      <div className="w-full mt-8 relative mx-auto flex justify-center items-center">
        <button className="fav-button-prev hover:shadow-swiper focus:shadow-swiper">
          <icons.Left />
        </button>
        <div className="fav-pagination flex justify-center gap-x-4 w-[200px] h-full "></div>
        <button className="fav-button-next hover:shadow-swiper focus:shadow-swiper">
          <icons.Right />
        </button>
      </div>
    </div>
  );
});

export default FavouriteProductSwiper;
