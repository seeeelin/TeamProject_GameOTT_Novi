import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { useScoreDataStore } from '../../../store/modual/game';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './style.css';

const ScoreGenre = () => {
  const { scoreGames } = useScoreDataStore();

  return (
    <div className="score-genre-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="scoreSwiper"
      >
        {scoreGames.map((game) => (
          <SwiperSlide key={game.id}>
            <div className="game-card">
              <img src={game.img} alt={game.title} />
              <div className="game-info">
                <strong>{game.id}</strong>
                <div className="text">
                  <h3>{game.title}</h3>
                  <p>{game.desc}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ScoreGenre;