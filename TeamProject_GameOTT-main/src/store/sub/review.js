import { create } from 'zustand';

const reviewListStore = create((set) => ({
    reviewList: [
        {
            id: 1,
            img: '/image/subPage/review/review_img01.jpg',
            tag1: 'NEO CLASSIS PROTOCOL', // 상단 카테고리 뱃지
            title: '타격감 미친 fps',
            rate: 4.5,
            desc: '1인칭 플레이가 제일 재밌는 느낌이고 그래픽도 맛집인 것 같아서 추천',
            background:
                'linear-gradient(180deg, rgba(23, 44, 61, 0.8) 0%, rgba(13, 23, 31, 1) 100%)', // 푸른색 테마
            userAvatar: '/image/common/userInfo/userProfile_06.png',
            userName: '타격감 미친 fps',
            time: '113시간 20분',
            level: 202,
            levelicon: '/image/common/userInfo/level_02.png',
        },
        {
            id: 2,
            img: '/image/subPage/review/review_img02.jpg',

            tag1: '포레스트워커',
            title: '완전 힐링물임',
            rate: 4.7,
            desc: '캐릭터가 귀여워서 시작했는데 생각보다 알차고 퀘스트도 재미있었음',
            background:
                'linear-gradient(180deg, rgba(46, 59, 39, 0.8) 0%, rgba(26, 33, 22, 1) 100%)', // 초록색 테마
            userAvatar: '/image/common/userInfo/userProfile_05.png',
            userName: '공케이',
            time: '12시간 19분',
            level: 88,
            levelicon: '/image/common/userInfo/level_01.png',
        },
        {
            id: 3,
            img: '/image/subPage/review/review_img03.jpg', // 성/기사 이미지
            tag1: 'TOMORROW KNIGHTS',
            title: '그래픽 브금 맛집',
            rate: 4.7,
            desc: '1인칭 플레이가 제일 재밌는 느낌이고 그래픽도 맛집인 것 같아서 추천',
            background:
                'linear-gradient(180deg, rgba(61, 31, 31, 0.8) 0%, rgba(33, 17, 17, 1) 100%)', // 붉은색 테마
            userAvatar: '/image/common/userInfo/userProfile_02.png',
            userName: '강남역9번출구',
            time: '218시간 27분',
            level: 120,
            levelicon: '/image/common/userInfo/level_03.png',
        },
    ],
}));

export default reviewListStore;
