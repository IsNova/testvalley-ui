import { getCarousalData } from '@/queries'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Parallax, Navigation } from 'swiper/modules';


import 'swiper/swiper-bundle.css';

function Carousal() {
    const {
        data: bannerData,
        isLoading,
        isError
    } = useQuery({
        queryFn: async () => await getCarousalData("https://api.testvalley.kr/main-banner/all"),
        queryKey: ['carousal'] //Array according to Documentation
    })
    return (
        <div>
            <Swiper
                className="swiper-container"
                modules={[Pagination, Parallax, Navigation]}
                slidesPerView={1}
                spaceBetween={20}
                parallax={true} // Enable parallax effect
                loop={true}
                pagination={{ clickable: true }}
                navigation
            >
                {bannerData?.map((banner, index) => (
                    <SwiperSlide key={index} className="">
                        <div className="parallax-bg" data-swiper-parallax="-23%">
                            <img src={banner?.pcImageUrl} alt={`Slide ${index}`} className="object-cover w-full h-full" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousal