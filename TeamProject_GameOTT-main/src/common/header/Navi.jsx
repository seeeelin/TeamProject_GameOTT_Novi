import { Link } from 'react-router-dom';
const Navi = () => {
    return (
        <nav className="nav">
            <ul className="gnb">
                <li>장르</li>
                <li>라이브</li>
                <li>
                    <Link to="/community">커뮤니티</Link>
                </li>
                <li>스토어</li>
                <li>이벤트</li>
            </ul>
            <div className="util">
                <p className="search">
                    <input type="text" placeholder="검색" />
                    <i className="xi-search"></i>
                </p>
                <p className="bell">
                    <i className="xi-bell-o"></i>
                </p>
                <p className="login">
                    <i className="xi-user-o"></i>
                </p>
            </div>
        </nav>
    );
};

export default Navi;
