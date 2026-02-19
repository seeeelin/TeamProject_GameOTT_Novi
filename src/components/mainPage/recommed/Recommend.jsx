import SectionTitle from '../../common/sectionTitle/SectionTitle';
import RecommendItem from './RecommendItem';
import './style.css';

const Recommend = () => {
    return (
        <div className='Recommend'>
            <SectionTitle title="추천 게임"/>
            <RecommendItem />
        </div>
    );
};

export default Recommend;
