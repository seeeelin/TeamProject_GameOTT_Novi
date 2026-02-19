import './style.css';

const LikeMainGame = () => {
    return (
        <div className="LikeMAinGame">
            <div className="content-box">
                <img src="/image/mainPage/likeCollection/likeCollection_main01.png" alt="" />
                <div className="content">
                    <div className="text-group">
                        <strong className="title">블레이즈라인</strong>
                        <p className="desc">빠른 전략과 화려한 스킬, 끝없는 액션의 전장</p>
                    </div>
                    <a href="#" className="btn-game">
                        게임하기
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LikeMainGame;
