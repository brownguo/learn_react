import React, {Component} from 'react';
// 引入Swiper组件
import { Swiper, SwiperSlide } from 'swiper/react';

// 引入Swiper样式
import 'swiper/css';
class TSwiper extends Component {
    render() {
        return (
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        );
    }
}

export default TSwiper;