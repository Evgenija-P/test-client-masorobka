import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid, Pagination } from "swiper/modules";
import { observer } from "mobx-react-lite";
import "swiper/css";
import "swiper/css/grid";
import "./productSwiper.css";

import * as icons from "../icons/iconComponent";
import ProductCard from "./prouctCard";
import productStore from "../store/products";
import filterStore from "../store/filter";

const AllProductSwiper = observer(() => {
  const filteredProducts =
    filterStore.categoryClient === "Всі продукти" || ""
      ? productStore.products
      : productStore.products.filter((product) => product.category === filterStore.categoryClient);

  return (
    <div className="h-[780px] w-full py-4 relative product mx-auto">
      <>
        <Swiper
          modules={[Navigation, Grid, Pagination]}
          rewind={true}
          grid={{
            rows: 2,
            fill: "row",
          }}
          pagination={{
            clickable: true,
            el: ".pagination",
          }}
          navigation={{
            nextEl: ".prod-button-next",
            prevEl: ".prod-button-prev",
          }}
          breakpoints={{
            1200: {
              slidesPerView: 4,
              spaceBetween: 10,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            760: {
              slidesPerView: 4,
              spaceBetween: 10,
              grid: {
                rows: 2,
                fill: "row",
              },
            },

            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
          }}
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.name}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>

      <div className="w-full mt-8 relative mx-auto flex justify-center items-center">
        <button className="prod-button-prev hover:shadow-swiper focus:shadow-swiper">
          <icons.Left />
        </button>
        <div className="pagination flex justify-center gap-x-4 w-[200px] h-full "></div>
        <button className="prod-button-next hover:shadow-swiper focus:shadow-swiper">
          <icons.Right />
        </button>
      </div>
    </div>
  );
});

export default AllProductSwiper;
