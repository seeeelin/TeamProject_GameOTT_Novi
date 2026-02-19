import './style.css'; 

const FanArtItem = ({ item }) => {
    return (
        <li className="fanart-item">
            <img src={item.img} alt={`팬아트 ${item.id}`} />
        </li>
    );
};

export default FanArtItem;