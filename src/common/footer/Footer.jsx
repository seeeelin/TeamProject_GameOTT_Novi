import './style.css';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="inner">
                <div className="top">
                    <div className="left">
                        <h2>
                            <a href="#">
                                <img src="/image/logo.png" alt="NOVi" />
                            </a>
                        </h2>
                    </div>

                    <div className="center">
                        <h3>
                            Connecting every gamer, every story, and every play.
                            <br />
                            Experience the total game universe with NOVi.
                        </h3>
                        <div className="info">
                            <p>주소 : 서울특별시 서초대로77길 41 대동2빌딩 9층, NOVi</p>
                            <p>대표전화 : 1234-1234</p>

                            <p>이메일 : host@novi.com</p>
                            <p>호스팅 서비스 제공 : NOVi Cloud</p>
                        </div>
                    </div>

                    <div className="right">
                        <p>
                            <a href="#">기업소개</a>
                        </p>
                        <p>
                            <a href="#">브랜드스토리</a>
                        </p>
                        <p>
                            <a href="#">고객센터</a>
                        </p>
                    </div>
                </div>

                <div className="bottom">
                    <div className="left">
                        <p>© 2025 NOVi Inc. All rights reserved.</p>
                    </div>
                    <div className="right">
                        <p>
                            <a href="#">Design</a>
                        </p>
                        <p>
                            <a href="#">Development</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
