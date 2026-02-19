import SectionTitle from '../../common/sectionTitle/SectionTitle';
import ReviewItem from './ReviewItem';
import './style.css';

const Review = () => {
    return (
        <section className="Review">
            {/* 전체 콘텐츠를 중앙으로 모아주는 이너 박스 추가 */}
            <div className="inner">
                <SectionTitle title="후기/리뷰" />
                <ReviewItem />
            </div>
        </section>
    );
};

export default Review;
