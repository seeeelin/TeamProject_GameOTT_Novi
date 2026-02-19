import SectionTitle from '../../common/sectionTitle/SectionTitle';
import LikeMainGame from './LikeMainGame';
import LikeSmallGame from './LikeSmallGame';

const LikeCollection = () => {
    return (
        <section className="likeGameInner">
            <SectionTitle title="내가 좋아하는 컬렉션" />
            <div className="likeGame">
                <LikeMainGame />
                <LikeSmallGame />
            </div>
        </section>
    );
};

export default LikeCollection;
