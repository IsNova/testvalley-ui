import { getCarousalData } from '@/queries'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

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
                slidesPerView={3}
                spaceBetween={20}
                parallax={true} // Enable parallax effect
                loop={true}
                pagination={{ clickable: true }}

            >
                {bannerData?.map(banner => (
                    <SwiperSlide className="swiper-slide relative">
                        <img src={banner?.pcImageUrl} alt="Slide 1" className="object-cover w-full h-full" />
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default Carousal