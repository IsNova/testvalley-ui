import { getCarousalData } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "swiper/css/navigation";
import { useSwiper } from "swiper/react";

import { Pagination, Parallax, Navigation, Autoplay } from "swiper/modules";

import "swiper/swiper-bundle.css";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

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
                    modules={[Autoplay, Pagination, Parallax, Navigation]}
                    slidesPerView={1.6}
                    spaceBetween={30}
                    parallax={true}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    pagination={{ clickable: true }}
                    onActiveIndexChange={(swiperCore) => {
                        setSwiperIndex(swiperCore.realIndex);
                    }}
                // navigation
                >
                    {bannerData?.map((banner: any, index: number) => {
                        return (
                            <SwiperSlide key={index} className="h-full">
                                <div className="parallax-bg relative w-full flex-1 items-center ">
                                    <Image
                                        src={banner?.pcImageUrl}
                                        alt={`Slide ${index}`}
                                        className="object-cover w-full h-full bg-blend-darken"
                                        width={400}
                                        height={120}
                                    />
                                    {
                                        index === swiperIndex && (
                                            <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-between w-full px-3">
                                                <button
                                                    type="button"
                                                    onClick={() => swiper.slidePrev()}
                                                    className="w-11 h-11 rounded-full bg-gray-700 opacity-50 p-2 text-white shadow-sm"
                                                >
                                                    <ChevronLeftIcon className="h-7 w-7 text-white font-semibold" aria-hidden="true" />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => swiper.slideNext()}
                                                    className="w-11 h-11 rounded-full bg-gray-700 opacity-50 p-2 text-white shadow-sm"
                                                >
                                                    <ChevronRightIcon className="h-7 w-7 text-white font-semibold" aria-hidden="true" />
                                                </button>
                                            </div>
                                        )
                                    }
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <div className="lg:hidden">
                <Swiper
                    className="swiper-container"
                    modules={[Pagination, Navigation, Autoplay]}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                >
                    {bannerData?.map((banner: any, index: number) => (
                        <SwiperSlide key={index} className="h-full">
                            <div className="parallax-bg">
                                <Image
                                    src={banner?.mobileImageUrl}
                                    alt={`Slide ${index}`}
                                    className="object-cover w-full h-full"
                                    height={80}
                                    width={800}
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
