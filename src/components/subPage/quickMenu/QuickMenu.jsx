import './style.css';

const QuickMenu = () => {
    return (
        <div className="quick-menu-wrap">
            <div className='inner'>
                {/* 섹션 타이틀 */}
                <h3 >커뮤니티</h3>

                <nav className="tab-menu">
                    <ul>
                        {/* 활성화하고 싶은 메뉴에 'on' 클래스를 직접 넣으시면 됩니다 */}
                        <li className="on">
                            <a href="#">장르</a>
                        </li>
                        <li>
                            <a href="#">인기태그</a>
                        </li>
                        <li>
                            <a href="#">업적</a>
                        </li>
                        <li>
                            <a href="#">라이브</a>
                        </li>
                        <li>
                            <a href="#">후기/리뷰</a>
                        </li>
                        <li>
                            <a href="#">인기게시판</a>
                        </li>
                        <li>
                            <a href="#">공략</a>
                        </li>
                        <li>
                            <a href="#">팬아트</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default QuickMenu;
