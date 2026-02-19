import { create } from 'zustand';

const useBestPostStore = create((set) => ({
    bestPosts: [
        {
            id: 1,
            img: '/image/subPage/bestPost/bestpost_img01.jpg',
            title: '그래서 스토리 어떻게 되는거임?',
            desc: '여주랑 남주 어떻게 됨? 썸으로 끝나는 것도 아니고 ',
            userAvatar: '/image/common/userInfo/userProfile_01.png',
            userName: '현실은백만년솔로',
            time: '3시간 19분',
            level: 5,
            levelicon: '/image/common/userInfo/level_05.png',
            gradient:
                'linear-gradient(180deg, rgba(119, 164, 197, 0.58) 0.13%, rgba(183, 126, 136, 0.76) 63.91%, rgba(132, 79, 95, 0.96) 100%)',
        },
        {
            id: 2,
            img: '/image/subPage/bestPost/bestpost_img02.jpg',
            title: '길드원 구해ㅇㅇㅇㅇㅇㅇㅇㅇ',
            desc: '주간 길턴 참여하고 매너유저면 가능',
            userAvatar: '/image/common/userInfo/userProfile_02.png',
            userName: '드래프트날림',
            time: '154시간 27분',
            level: 98,
            levelicon: '/image/common/userInfo/level_01.png',
            gradient:
                'linear-gradient(180deg, rgba(217, 141, 141, 0.48) 0.13%, rgba(169, 74, 77, 0.63) 63.91%, rgba(110, 29, 30, 0.80) 100%)',
        },
        {
            id: 3,
            img: '/image/subPage/bestPost/bestpost_img03.jpg',
            title: '초보인데 아무것도 모르겠어요',
            desc: '진짜 모르겠어서 마을만 돌아다니고 있는데 도와주실분',
            userAvatar: '/image/common/userInfo/userProfile_03.png',
            userName: '길거리용기사',
            time: '7시간 06분',
            level: 9,
            levelicon: '/image/common/userInfo/level_05.png',
            gradient:
                'linear-gradient(180deg, rgba(141, 185, 217, 0.48) -2.83%, rgba(56, 104, 138, 0.56) 54.75%, rgba(29, 75, 110, 0.80) 100%)',
        },
        {
            id: 4,
            img: '/image/subPage/bestPost/bestpost_img04.jpg',
            title: '같이 할사람~ 나 개잘함ㄷㄷ',
            desc: '진짜 아무나 들어오셈 내가 캐리해드림',
            userAvatar: '/image/common/userInfo/userProfile_04.png',
            userName: '할래말래하면해',
            time: '136시간 39분',
            level: 118,
            levelicon: '/image/common/userInfo/level_03.png',
            gradient:
                'linear-gradient(180deg, rgba(115, 130, 206, 0.10) 0.13%, rgba(61, 29, 125, 0.38) 60.92%, rgba(9, 36, 103, 0.96) 100%)',
        },
        {
            id: 5,
            img: '/image/subPage/bestPost/bestpost_img05.jpg',
            title: '[아시아] Lv.34/홀리나이트',
            desc: '기사단에 오신 걸 환영합니다~',
            userAvatar: '/image/common/userInfo/userProfile_08.png',
            userName: '서울대전대구부산찍고',
            time: '11시간 23분',
            level: 51,
            levelicon: '/image/common/userInfo/level_01.png',
            gradient:
                'linear-gradient(180deg, rgba(103, 106, 158, 0.40) 0.13%, rgba(226, 119, 149, 0.56) 60.92%, rgba(115, 37, 96, 0.80) 100%)',
        },
        {
            id: 6,
            img: '/image/subPage/bestPost/bestpost_img06.jpg',
            title: '노곤노곤 게임즐기기',
            desc: '이제 겨울인데 옆구리에 귤 한박스 껴놓고 게임만 할때임 모두 동굴로 들어가셈',
            userAvatar: '/image/common/userInfo/userProfile_09.png',
            userName: '집구석왕밤빵',
            time: '49시간 56분',
            level: 72,
            levelicon: '/image/common/userInfo/level_01.png',
            gradient:
                'linear-gradient(180deg, rgba(119, 164, 197, 0.58) 0.13%, rgba(183, 126, 136, 0.76) 63.91%, rgba(132, 79, 95, 0.96) 100%)',
        },
    ],
}));

export default useBestPostStore;
