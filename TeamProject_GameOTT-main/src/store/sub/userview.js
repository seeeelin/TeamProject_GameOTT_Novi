import { create } from 'zustand';

const useUserStore = create((set) => ({
    // 1. 초기 상태 데이터 (State)
    friends: [
        {
            id: 1,
            name: 'ㅂ_ㅂ',
            nickname: '울프파이어',
            imgurl: '/image/subPage/userView/friend_img1.jpg',
            isClass: true,
        },
        {
            id: 2,
            name: 'selin2_0',
            nickname: '도봉구 불주먹',
            imgurl: '/image/subPage/userView/friend_img2.jpg',
            isClass: true,
        },
        {
            id: 3,
            name: 'min_ji',
            nickname: '레벨업마스터',
            imgurl: '/image/subPage/userView/friend_img3.jpg',
            isClass: true,
        },
        {
            id: 4,
            name: 'hoohoohoo_',
            nickname: '까오야 밥 먹자',
            imgurl: '/image/subPage/userView/friend_img4.jpg',
            isClass: true,
        },
    ],

    // 2. 데이터를 변경하는 함수 (Action) - 나중에 친구 삭제나 추가 시 사용
    removeFriend: (id) =>
        set((state) => ({
            friends: state.friends.filter((f) => f.id !== id),
        })),
}));

export default useUserStore;
