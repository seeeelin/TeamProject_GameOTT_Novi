const FriendItem = ({item}) => {
    const{id, name, nickname, imgurl,isClass } = item
    return (
        <li className="friend-item">
            {/* 프로필 이미지 & 상태 점 */}
            <div className="profile-box">
                <img src={imgurl} alt={name}/>
                {isClass && <span className="status-dot"></span>}
            </div>

            {/* 텍스트 정보 영역 */}
            <div className="info-box">
                <p className="user-name">{name}</p>
                <p className="user-nickname">{nickname}</p>
            </div>
        </li>
    );
};

export default FriendItem;