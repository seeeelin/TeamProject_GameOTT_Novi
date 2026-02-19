const BestPostItem = ({ item }) => {
    return (
        <li className="best-post-item">
            {/* 1. 배경 이미지 및 그라데이션 오버레이 */}
            <img src={item.img} alt={item.title} className="bg-img" />
            <div className="gradient-overlay" style={{ background: item.gradient }}></div>

            <div className="post-content">
                {/* 2. 상단 텍스트 영역 */}
                <div className="text-area">
                    <h3>{item.title}</h3>
                    <p className="desc">{item.desc}</p>
                </div>

                {/* 3. 하단 유저 정보 영역 (수정된 부분) */}
                <div className="user-info">
                    <div className="profile">
                        <img src={item.userAvatar} alt="유저 아바타" />
                        
                        {/* 이름과 메타정보를 수직으로 쌓기 위한 래퍼 */}
                        <div className="user-txt">
                            <span className="user-name">{item.userName}</span>
                            <div className="meta">
                                <span className="time">{item.time}</span>
                                <span className="level">
                                    <img src={item.levelicon} alt="level" className="level-icon" /> 
                                    {item.level}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default BestPostItem;