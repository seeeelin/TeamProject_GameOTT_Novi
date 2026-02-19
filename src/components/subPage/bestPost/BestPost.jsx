import SectionTitle from '../../common/sectionTitle/SectionTitle';
import BestPostList from './BestPostList';
import './style.css';

const BestPost = () => {
    return (
        <section className="best-post-section">
            <div className="inner">
                <div className="section-header">
                    <SectionTitle title="인기 커뮤니티 글" />
                    <p>함께 즐거운 이야기를 나눠보아요</p>
                </div>
                <BestPostList />
            </div>
        </section>
    );
};

export default BestPost;