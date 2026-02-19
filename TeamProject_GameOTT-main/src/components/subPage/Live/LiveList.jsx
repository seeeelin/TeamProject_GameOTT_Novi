import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useLiveStore from "../../../store/sub/live";
import LiveItem from "./LiveItem";
import './style.css';

const LiveList = () => {
    const { liveData } = useLiveStore();
    return (
        <Swiper
            spaceBetween={32}
            slidesPerView={'auto'}
            className="live-list"
            grabCursor={true}
        >
            {liveData.map(item => (
                <SwiperSlide key={item.id} style={{ width: 'auto' }}>
                    <LiveItem item={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default LiveList;
