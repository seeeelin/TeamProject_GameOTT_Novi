import CommunityUserItem from './CommunityUserItem';
import { userInfo } from '../../../store/modual/userInfo';
import './style.css';


const CommunityUserReview = () => {
    const reviews = [
        {
            user: userInfo.find(u => u.name === "요로로로마이밥") || userInfo[5],
            content: "게임 재밌게 했습니다. 무기 계속 바뀌는 것도 좋고 분위기도 좋아요. 기승전결 스토리와 연출, 브금, 그래픽, 친숙한 배경 디테일 너무 좋았어요 강추!"
        },
        {
            user: userInfo.find(u => u.name === "파란불빛") || userInfo[6],
            content: "퀄리티 너무 좋네요 캐릭터의 미세한 움직임때문에 생동감이 느껴져서 좋았습니다. 상상이상으로 정말 재밌습니다 모처럼 다시 플레이해봤는데"
        },
        {
            user: userInfo.find(u => u.name === "크런치맛있다") || userInfo[7],
            content: "튜토리얼이 자세해졌고, 캐릭터들 한테도 대사가 생겨서 더 재밌어졌네요"
        },
        {
            user: userInfo.find(u => u.name === "끄아아아아아") || userInfo[8],
            content: "모처럼 다시 플레이 해봤는데 피드백을 많이 반영하신 게 눈에 보여요"
        }
    ];

    return (
        <div className="CommunityUserReview">
            {reviews.map((review, index) => (
                <CommunityUserItem className="reviewItem"
                    key={index}
                    user={review.user}
                    content={review.content}
                />
            ))}
        </div>
    );
};

export default CommunityUserReview;