import SectionTitle from '../../common/sectionTitle/SectionTitle';
import FanArtList from './FanArtList';
import './style.css';

const FanArt = () => {
    return (
        <section className="fanart-section">
            <div className="inner">
                <div className="fanart-header">
                    {/* 제목과 화살표 일직선 정렬 */}
                    <SectionTitle title="공략 / 팬아트" />
                    <p>나만 볼 수 없는 공략과 팬아트들을 감상해보아요</p>
                </div>

                {/* 리스트 컴포넌트 호출 */}
                <FanArtList />
            </div>
        </section>
    );
};

export default FanArt;
