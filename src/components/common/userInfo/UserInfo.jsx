import { userInfo } from '../../../store/modual/userInfo';
import './style.css';


const UserInfo = ({ user }) => {
    if (user) {
        return (
            <div className="UserInfo">
                <div className="userProfile">
                    <img src={user.userProfile} alt={user.name} />
                </div>
                <div className="userInfoText">
                    <p className="userName">{user.name}</p>
                    <div className="userDetails">
                        <span className="userTime">
                            <i className="xi-time-o"></i> {user.time}
                        </span>
                        <span className="userLevel">
                            <img src={user.levelicon} alt="level" /> {user.level}
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {userInfo.map((user) => (
                <div className="UserInfo" key={user.id}>
                    <div className="userProfile">
                        <img src={user.userProfile} alt={user.name} />
                    </div>
                    <div className="userInfoText">
                        <p className="userName">{user.name}</p>
                        <div className="userDetails">
                            <span className="userTime">
                                <i className="xi-time-o"></i> {user.time}
                            </span>
                            <span className="userLevel">
                                <img src={user.levelicon} alt="level" /> {user.level}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default UserInfo;
