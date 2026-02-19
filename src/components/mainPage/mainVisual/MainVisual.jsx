import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import './style.css';
import 'swiper/css';
import 'swiper/css/pagination';

const MainVisual = () => {
    return (
        <section id="visual">
            <Swiper
                pagination={true}
                modules={[Pagination, Autoplay]}
                loop
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/image/mainPage/mainVisual01.png" alt="" />
                    <div className="inner">
                        <p>10월 신규출시</p>
                         <img src="/image/mainPage/mainVisual01_Title.png" alt="" className='title title01'/>
                        <a href="" className="Gochip">
                            바로가기
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/image/mainPage/mainVisual02.png" alt="" />
                    <div className="inner">
                        <p>11월 신규출시</p>
                        <img src="/image/mainPage/mainVisual02_Title.png" alt="" className='title title02'/>
                        <a href="" className="Gochip">
                            바로가기
                        </a>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/image/mainPage/mainVisual03.png" alt="" />
                    <div className="inner">
                        <p>11월 신규출시</p>
                        <img src="/image/mainPage/mainVisual03_Title.png" alt="" className='title title03'/>
                        <a href="" className="Gochip">
                            바로가기
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default MainVisual;
