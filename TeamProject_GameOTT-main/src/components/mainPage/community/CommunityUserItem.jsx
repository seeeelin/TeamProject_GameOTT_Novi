import UserInfo from '../../common/userInfo/UserInfo';
import './style.css';

const CommunityUserItem = ({ user, content, className }) => {
    return (
        <div className={`CommunityUserItem ${className}`}>
            <p className="reviewText">
                {content}
            </p>
            <UserInfo user={user} />
        </div>
    );
};

export default CommunityUserItem;