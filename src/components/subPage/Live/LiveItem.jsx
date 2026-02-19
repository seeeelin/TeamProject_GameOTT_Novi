import './style.css';
import { CiUser } from "react-icons/ci";

const LiveItem = ({ item }) => {
    const { thumbnail, viewerCount, avatar, userName, title, tags } = item;

    return (
        <div className="live-card" style={{ backgroundImage: `url(${thumbnail})` }}>
            {/* 배경 그라데이션 및 콘텐츠 래퍼 */}
            <div className="overlay-content">
                {/* 우측 상단 시청자 수 */}
                <div className="top-info">
                    <span className="viewer-count">
                        <CiUser />   {viewerCount}
                    </span>
                </div>

                {/* 하단 정보 (프로필, 제목, 태그) */}
                <div className="bottom-info">
                    <div className="user-info">
                        <div className="avatar-box">
                            <img src={avatar} alt={userName} />
                        </div>
                        <p className="user-name">{userName}</p>
                    </div>
                    <p className="video-title">{title}</p>
                    <div className="tag-group">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveItem;