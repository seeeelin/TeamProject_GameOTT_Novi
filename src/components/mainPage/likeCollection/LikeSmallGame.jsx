import { useLikeSmallGameStore } from '../../../store/modual/game';

const LikeSmallGame = () => {
    const smallGames = useLikeSmallGameStore((state) => state.smallGames);

    return (
        <div className="LikeSmallGame">
            {smallGames.map((gameList) => (
                <div className="content-box con1" key={gameList.id}>
                    <a href="#">
                        <img src={gameList.img} alt="" />
                        <div className="content" style={{ background: gameList.background }}>
                            <p className="title">{gameList.title}</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default LikeSmallGame;
