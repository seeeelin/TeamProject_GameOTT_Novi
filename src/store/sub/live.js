import { create } from 'zustand';

const useLiveStore = create((set) => ({

    liveData: [
        {
            id: 1,
            thumbnail: '/image/subPage/live/live_img1.jpg',
            viewerCount: '18.5K',
            avatar: '/image/subPage/live/live_profile_01.jpg',
            userName: '지구하마',
            title: '[겜방] 오늘은 게임하고 이따가 저챗갑니다',
            tags: ['#프레스슈터', '#FPS', '#저챗']
        },
        {
            id: 2,
            thumbnail: '/image/subPage/live/live_img2.jpg',
            viewerCount: '11.3K',
            avatar: '/image/subPage/live/live_profile_02.jpg',
            userName: '샴스님',
            title: '오늘 같이 농장하실분~!!',
            tags: ['#행오버빌리지', '#수다게임']
        },
        {
            id: 3,
            thumbnail: '/image/subPage/live/live_img3.jpg',
            viewerCount: '21.8K',
            avatar: '/image/subPage/live/live_profile_03.jpg',
            userName: '혜안가',
            title: '리그 보면서 같이 게임해요',
            tags: ['#LCK', '#게임리뷰', '#저챗']
        },
        {
            id: 4,
            thumbnail: '/image/subPage/live/live_img4.jpg',
            viewerCount: '2.1K',
            avatar: '/image/subPage/live/live_profile_04.jpg',
            userName: '고계림',
            title: '[공포] 절대 소리 안 지릅니다.',
            tags: ['#공포게임', '#백룸디엔드룸', '#탈출']
        }
    ]
}));

export default useLiveStore;