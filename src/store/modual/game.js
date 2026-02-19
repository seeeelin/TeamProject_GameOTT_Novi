import { create } from 'zustand';

export const useLikeSmallGameStore = create((set) => ({
    smallGames: [
        {
            id: 1,
            title: '시티빌더',
            img: '/image/mainPage/likeCollection/likeCollection_small01.png',
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
                   linear-gradient(180deg, rgba(0, 0, 0, 0) 75.31%, #342a28 103.46%)`,
        },
        {
            id: 2,
            title: '섀도우본 IV',
            img: '/image/mainPage/likeCollection/likeCollection_small02.png',
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 75.31%, #342a28 103.46%)`,
        },
        {
            id: 3,
            title: '나이트 에볼루션',
            img: '/image/mainPage/likeCollection/likeCollection_small03.png',
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 75.31%, #342a28 103.46%)`,
        },
        {
            id: 4,
            title: '윈도우 홀',
            img: '/image/mainPage/likeCollection/likeCollection_small04.png',
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 75.31%, #342a28 103.46%)`,
        },
    ],
}));

export const useRecommendStore = create((set) => ({
    recommendGames: [
        {
            id: 1,
            title: 'SHADOWBORNE IV',
            desc: '빛은 사라지고, 오직 그림자만이 살아남은 전쟁의 땅',
            img: '/image/mainPage/recommend/recommendGame01.png',
            rate: 4.5,
            tag1: '액션',
            tag2: '다크판타지',
            background: `linear-gradient(180deg, rgba(217, 188, 121, 0.00) 72.72%, rgba(139, 134, 115, 0.46) 100%)`,
        },
        {
            id: 2,
            title: '루엔 아카데미아',
            desc: '마법 같은 첫사랑이 시작되는 특별한 학교',
            img: '/image/mainPage/recommend/recommendGame02.png',
            rate: 3.8,
            tag1: '판타지',
            tag2: '액션',
            background: `linear-gradient(180deg, rgba(217, 121, 154, 0.00) 72.72%, rgba(217, 121, 154, 0.46) 100%)`,
        },
        {
            id: 3,
            title: '미스틱 제로: 코드 8',
            desc: '코드 8 속 전장의 영웅을 육성하라',
            img: '/image/mainPage/recommend/recommendGame03.png',
            rate: 4.2,
            tag1: '슈팅',
            tag2: '전략',
            background: `linear-gradient(180deg, rgba(146, 114, 196, 0.00) 72.72%, rgba(146, 114, 196, 0.46) 100%)`,
        },
        {
            id: 4,
            title: 'ETHERMAGE SAGA',
            desc: '마법과 검이 공존하는 세계, 에테르 마법사의 전설이 시작된다',
            img: '/image/mainPage/recommend/recommendGame04.png',
            rate: 4.2,
            tag1: '판타지',
            tag2: '액션',
            background: `linear-gradient(180deg, rgba(24, 27, 29, 0.00) 72.72%, #181B1D 75.45%, #336578 100%)`,
        },
        {
            id: 5,
            title: '가디언즈 리버',
            desc: '질서의 원소를 화살 끝에 담아 적의 약점을 꿰뚫다',
            img: '/image/mainPage/recommend/recommendGame05.png',
            rate: 4.2,
            tag1: '슈팅',
            tag2: '판타지',
            background: `linear-gradient(180deg, rgba(24, 27, 29, 0.00) 72.72%, #181B1D 75.45%, #333A78 100%)`,
        },
    ],
}));

export const useSaleGameStore = create((set) => ({
    saleGames: [
        {
            id: 1,
            title: 'ETERNAL RELIC : 빛의 파편',
            salechip1: '-15%',
            salechip2: '~12/31',
            desc: '빛의 파편으로 왕국을 지켜라',
            img: '/image/mainPage/sale/saleGame01.png',
            rate: 4.1,
            tag1: '롤플레잉',
            tag2: '판타지',
            background: `linear-gradient(180deg, rgba(74, 85, 104, 0.00) 72.72%, rgba(74, 85, 104, 0.46) 100%)`,
            color: ' #7583AB',
        },
        {
            id: 2,
            title: '더 라스트 와이어',
            salechip1: '-26%',
            salechip2: '~11/28',
            desc: '망가진 작은 기계의 끝없이 이어지는 여정',
            img: '/image/mainPage/sale/saleGame02.png',
            rate: 4.4,
            tag1: '어드벤처',
            tag2: '스토리',
            background: `linear-gradient(180deg, rgba(121, 217, 211, 0.00) 72.72%, rgba(4, 112, 122, 0.46) 100%)`,
            color: ' #126E80',
        },
        {
            id: 3,
            title: 'RHYTHM EDGE 3',
            salechip1: '-30%',
            salechip2: '~12/12',
            desc: '신나는 비트 위에서 손끝으로 즐기는 리듬 모험',
            img: '/image/mainPage/sale/saleGame03.png',
            rate: 4.1,
            tag1: '비트액션',
            tag2: '리듬게임',
            background: `linear-gradient(180deg, rgba(239, 152, 233, 0.00) 72.72%, rgba(199, 80, 191, 0.46) 100%)`,
            color: '#16287A ',
        },
        {
            id: 4,
            title: 'IRONBLOOD CHRONICLES',
            salechip1: '-30%',
            salechip2: '~12/31',
            desc: '철혈의 연대기, 전설이 되어라',
            img: '/image/mainPage/sale/saleGame04.png',
            rate: 4.1,
            tag1: '전략',
            tag2: 'RPG',
            background: `linear-gradient(180deg, rgba(24, 27, 29, 0.00) 72.72%, #1D1A18 75.45%, #5F4E3E 100%)`,
            color: '#84a32f ',
        },
        {
            id: 5,
            title: 'IRONBLOOD CHRONICLES',
            salechip1: '-30%',
            salechip2: '~12/31',
            desc: '무너진 왕국을 딛고 일어난 용사들이 펼치는 웅장한 전투',
            img: '/image/mainPage/sale/saleGame05.png',
            rate: 4.2,
            tag1: '전략',
            tag2: 'RPG',
            background: `linear-gradient(180deg, rgba(24, 27, 29, 0.00) 72.72%, #1D1818 75.45%, #5C1C1C 100%)`,
            color: '#641e1eff ',
        },
        {
            id: 6,
            title: '패치워크 매도우즈',
            salechip1: '-30%',
            salechip2: '~12/31',
            desc: '아기자기한 동물들과 함께 농장을 키워보아요',
            img: '/image/mainPage/sale/saleGame06.png',
            rate: 4.7,
            tag1: '힐링',
            tag2: '육성',
            background: `linear-gradient(180deg, rgba(24, 27, 29, 0.00) 72.72%, #1D1B18 75.45%, #6B5536 100%)`,
            color: 'rgb(143, 135, 19) ',
        },
    ],
}));

export const useCategoryDataStore = create((set) => ({
    categoryGames: [
        {
            id: 1,
            title: '네오 프로토콜',
            genre: 'FPS',
            img: '/image/mainPage/category/category01.png',
        },
        {
            id: 2,
            title: '라스트 배틀필드',
            genre: 'RPG',
            img: '/image/mainPage/category/category02.png',
        },
        {
            id: 3,
            title: '얼티밋 킥오프',
            genre: '아케이드',
            img: '/image/mainPage/category/category03.png',
        },
        {
            id: 4,
            title: '미스틱 제로',
            genre: '어드벤쳐',
            img: '/image/mainPage/category/category04.png',
        },
        // 오른쪽 라인 (ID 5~8)
        {
            id: 5,
            title: '블레이즈 라인',
            genre: '액션',
            img: '/image/mainPage/category/category05.png',
        },
        {
            id: 6,
            title: '포레스트 블룸',
            genre: '아케이드',
            img: '/image/mainPage/category/category06.png',
        },
        {
            id: 7,
            title: '아이언 블러드',
            genre: '어드벤쳐',
            img: '/image/mainPage/category/category07.png',
        },
        {
            id: 8,
            title: '루엔 아카데미아',
            genre: 'RPG',
            img: '/image/mainPage/category/category08.png',
        },
    ],
}));

export const useScoreDataStore = create((set) => ({
    scoreGames: [
        {
            id: 1,
            title: '파이어코드 (Fire Code)',
            desc: '인간의 유전자에 각인된\n‘불의 코드’를 각성시키는 실험체들의 전쟁',
            img: '/image/mainPage/score/score01.png',
        },
        {
            id: 2,
            title: '아이언 레코닝 (Iron Reckoning)',
            desc: '부활한 마왕의 군단에 맞서\n철혈의 갑옷을 입고 전장을 누비는 기사의 연대기',
            img: '/image/mainPage/score/score02.png',
        },
        {
            id: 3,
            title: '나이트폴 프로토콜 (Nightfall Protocol)',
            desc: '무너진 미래 도시의 밤,\n시스템의 통제를 거부하고 어둠 속에서 진실을 쏘는 요원들',
            img: '/image/mainPage/score/score03.png',
        },
        {
            id: 4,
            title: '스피드 리볼트 (Speed Revolt)',
            desc: '질주의 밤을 달려라,\n도시의 지배자가 되어라!',
            img: '/image/mainPage/score/score04.png',
        },
        {
            id: 5,
            title: '루엔 아카데미아 (Luen Academia)',
            desc: '마법과 학문이 공존하는 신비로운 아카데미,\n숨겨진 비밀을 파헤쳐라!',
            img: '/image/mainPage/score/score05.png',
        },
    ],
}));

// 장르 탭 선택 상태 관리
export const useGenreTabStore = create((set) => ({
    selectedGenre: 'All',
    setSelectedGenre: (genre) => set({ selectedGenre: genre }),
}));
