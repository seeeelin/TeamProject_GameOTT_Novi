import GenreTab from "../../common/genreTab/GenreTab";
import SectionTitle from "../../common/sectionTitle/SectionTitle";
import ScoreGenre from "./scoreGenre";
import './style.css';

const Score = () => {
    return (
        <div className="Score">
            <SectionTitle title="스토어 게임 순위" />
            <ScoreGenre />

        </div>
    );
};

export default Score;