import SectionTitle from '../../common/sectionTitle/SectionTitle';
import CommunityUserReview from './CommunityUserReview';
import './style.css'; import { FaPlay } from "react-icons/fa";


const Community = () => {
    return (
        <div className='communityWrapper'>
            <div className="inner">
                <SectionTitle title="커뮤니티" />
            </div>
            <div className="Community">
                <img src="/image/mainPage/community/communityMainVisual.png" alt="" />
                <div className="communityContent">
                    <div className="contentinner">
                        <div className="visualInfo">
                            <h3>
                                NIEON <br />
                                SHADOWS
                            </h3>
                            <div className="buttonGroup">
                                <a href="#" className='button more'>자세히보기</a>
                                <a href="#" className='button review'>리뷰</a>
                                <a href="#" className='button play'><FaPlay /></a>
                            </div>
                        </div>
                        <div className="reviewBox">
                            <CommunityUserReview />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Community;
