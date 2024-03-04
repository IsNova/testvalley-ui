import { getCarousalData } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "swiper/css/navigation";
import { useSwiper } from "swiper/react";

import { Pagination, Parallax, Navigation } from "swiper/modules";

import "swiper/swiper-bundle.css";

function Carousal() {
    const {
        data: bannerData,
        isLoading,
        isError,
    } = useQuery({
        queryFn: async () =>
            await getCarousalData("https://api.testvalley.kr/main-banner/all"),
        queryKey: ["carousal"], //Array according to Documentation
    });

    const [swiperIndex, setSwiperIndex] = useState(0);

    const swiper = useSwiper();

    return (
        <div className="">
            <div className="hidden lg:block">
                <Swiper
                    className="swiper-container relative"
                    modules={[Pagination, Parallax, Navigation]}
                    slidesPerView={1.6}
                    spaceBetween={30}
                    parallax={true}
                    centeredSlides={true}
                    loop={true}
                    pagination={{ clickable: true }}
                    onActiveIndexChange={(swiperCore) => {
                        setSwiperIndex(swiperCore.activeIndex);
                    }}
                    navigation
                >
                    {bannerData?.map((banner: any, index: number) => {
                        console.log("🚀 ~ {bannerData?.map ~ index:", index, swiperIndex);
                        return (
                            <SwiperSlide key={index} className="h-full">
                                <div className="parallax-bg relative flex justify-between bg-pink-300 w-full flex-1 items-center">
                                    <img
                                        src={banner?.pcImageUrl}
                                        alt={`Slide ${index}`}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <div className="lg:hidden">
                <Swiper
                    className="swiper-container"
                    modules={[Pagination, Navigation]}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    pagination={{ clickable: true }}
                >
                    {bannerData?.map((banner: any, index: number) => (
                        <SwiperSlide key={index} className="h-full">
                            <div className="parallax-bg">
                                <img
                                    src={banner?.mobileImageUrl}
                                    alt={`Slide ${index}`}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Carousal;
