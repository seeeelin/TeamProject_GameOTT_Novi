import { create } from 'zustand';

const useFanArtStore = create((set) => ({
    // 상단 메인 공략 데이터
    featuredGuide: {
        id: 1,
        mainImg: '/image/subPage/fanArt/fanArt_img_main.jpg',
        label: '플레이즈라인',
        title: '[공략] 이번 이벤트 최신 공략',
        desc: '이번 주부터 시작된 이벤트 관련해서 최신 공략 올립니다. \n\n직업 : 무과금 러너와 성능캐 제라먼육, 딜러 서폿도 필요하긴 한데 만능이 제일 중요함. 나비사와 스토리 좋아하는 사람도 즐기는 편이...',
        userAvatar: '/image/common/userInfo/userProfile_07.png',
        userName: '물병자리',
        userLevel: 5,
        levelIcon: '/image/common/userInfo/level_05.png',
        time: '3시간 19분',
    },
    // 하단 팬아트 리스트 (4개)
    fanArts: [
        { id: 1, img: '/image/subPage/fanArt/sub_fan01.jpg' },
        { id: 2, img: '/image/subPage/fanArt/sub_fan02.jpg' },
        { id: 3, img: '/image/subPage/fanArt/sub_fan03.jpg' },
        { id: 4, img: '/image/subPage/fanArt/sub_fan04.jpg' },
    ],
}));

export default useFanArtStore;
