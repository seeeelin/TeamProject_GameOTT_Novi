import { useSaleGameStore } from '../../../store/modual/game';
import './style.css';
import { FaStar } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';


const SaleItem = () => {
    const saleGame = useSaleGameStore((state) => state.saleGames);

    return (
        <div className="saleItemWrapper">
            <Swiper
                slidesPerView={2} // 한 번에 보여줄 슬라이드 개수
                spaceBetween={20} // 슬라이드 사이 간격
                freeMode={true} // 자유 스크롤 모드
                slidesOffsetBefore={0}
                modules={[FreeMode]} // 사용할 모듈 등록
                className="mySwiper"
            >
                {saleGame.map((gameList) => (
                    <SwiperSlide key={gameList.id}>
                        <a href="#">
                            <div className="saleItem" style={{ background: gameList.background }}>
                                <div className="saleItemUp">
                                    <img src={gameList.img} alt="" />
                                    <div className="saleItemVisualInfo">
                                        <div
                                            className="salechipWrapper"
                                            style={{ color: gameList.color }}
                                        >
                                            <p className="salechip chip1">{gameList.salechip1}</p>
                                            <p className="salechip chip2">{gameList.salechip2}</p>
                                        </div>
                                        <p className="saleRate">
                                            {gameList.rate}
                                            <span>
                                                <FaStar />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="saleItemInfo">
                                    <h2 className="gameTitle">
                                        {gameList.title}
                                        <p className="gameDesc">{gameList.desc}</p>
                                    </h2>
                                    <div className="genreChip">
                                        <p className="chip chip1">{gameList.tag1}</p>
                                        <p className="chip chip2">{gameList.tag2}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SaleItem;
