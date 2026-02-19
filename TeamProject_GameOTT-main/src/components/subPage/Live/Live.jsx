import LiveList from './Livelist';
import './style.css';
import { IoIosArrowForward } from 'react-icons/io';

const Live = () => {
    return (
        <section className="live-section">
            <div className="inner">
                <div className="live-header">
                    <div className="title-area">
                        <h2>
                            LIVE{' '}
                            <a href="">
                                <IoIosArrowForward />
                            </a>
                        </h2>

                        <p>스트리머의 게임 라이브를 만나보세요</p>
                    </div>

                    {/* 알약 모양 토글 버튼 */}
                    <div className="toggle-tab-wrap">
                        <button className="on">라이브</button>
                        <button>클립</button>
                    </div>
                </div>
            </div>
            <div className="live-list-wrap">
                <LiveList />
            </div>
        </section>
    );
};

export default Live;
