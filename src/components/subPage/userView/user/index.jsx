import FriendList from "../friendList/FriendList";
import GameView from "../gameView";
// import { IoIosArrowForward } from 'react-icons/io';
import './style.css';


const User = () => {
    return (
   <section id='community' className='userView'>
    <div className='inner'>
    <h2>친구와 함께하기</h2>
     {/* <a href="#">
                <IoIosArrowForward />
            </a> */}
    <div className="view-content">
    <GameView />
    <FriendList />

    </div>
    
    
    </div>
    
    </section>
    );
};

export default User;
