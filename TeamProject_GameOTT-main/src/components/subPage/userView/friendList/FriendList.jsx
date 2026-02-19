import { IoIosArrowForward } from 'react-icons/io';
import useUserStore from '../../../../store/sub/userview';
import FriendItem from './FriendItem';
import './style.css';

const FriendList = () => {
    const { friends } = useUserStore();
    return (
        <article className="friend-list-wrap">
            {/* 상단 타이틀 영역 */}
            <header className="friend-list-header">
                <p className="sub-title">파이어코드 (Fire Code)</p>
                <div className="title-group">
                    <h3>친구목록</h3>
                    <a href=""><IoIosArrowForward /></a>
                </div>
            </header>

            {/* 실제 친구들이 나열되는 리스트 영역 */}
            <ul className="friend-list">

                
                {friends.map((item) =>(
                    <FriendItem key={item.id} item={item}/>

                ))}
            </ul>
        </article>
    );
};

export default FriendList;
