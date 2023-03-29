import "./team.css"
import { storyblokEditable } from "@storyblok/react";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Team(props: any) {
    console.log(props)
    return (
        <div className={"team h2" + (props.blok.arrow ? " team__arrow" : "")} {...storyblokEditable(props.blok)}>
            <h2 className="team__title">{props.blok.title}</h2>
            <p className="team__description text">{props.blok.description}</p>
            <div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}