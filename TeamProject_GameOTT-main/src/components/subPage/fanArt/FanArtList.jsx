import { FaRegClock } from 'react-icons/fa'; // 시간 아이콘 추가
import useFanArtStore from '../../../store/sub/fanart';
import FanArtItem from './FanArtItem';
import './style.css';

const FanArtList = () => {
    const { featuredGuide, fanArts } = useFanArtStore();

    return (
        <div className="fanart-content">
            {/* 1. 상단 대표 공략 영역 (규격: 390px x 401px) */}
            <div className="featured-guide-box">
                <div className="guide-img">
                    <img src={featuredGuide.mainImg} alt="메인공략" />
                    <span className="img-label">{featuredGuide.label}</span>
                </div>

                <div className="guide-content">
                    <div className="text-area">
                        <h3>{featuredGuide.title}</h3>
                        <p className="desc">{featuredGuide.desc}</p>
                    </div>

                    {/* 수정된 유저 정보 영역: 이름 아래에 시간과 레벨이 위치 */}
                    <div className="user-info-row">
                        <div className="user">
                            <img src={featuredGuide.userAvatar} alt="프로필" className="avatar" />
                            <div className="user-txt">
                                <span className="user-name">{featuredGuide.userName}</span>
                                <div className="user-meta">
                                    {/* 시간과 레벨이 위아래로 배치됨 */}
                                    <span className="time">
                                        <FaRegClock /> {featuredGuide.time}
                                    </span>
                                    <span className="level">
                                        <img
                                            src={featuredGuide.levelIcon}
                                            alt="level"
                                            className="level-icon"
                                        />
                                        {featuredGuide.userLevel}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. 하단 팬아트 그리드 영역 */}
            <ul className="fanart-grid">
                {fanArts.map((art) => (
                    <FanArtItem key={art.id} item={art} />
                ))}
            </ul>
        </div>
    );
};

export default FanArtList;
