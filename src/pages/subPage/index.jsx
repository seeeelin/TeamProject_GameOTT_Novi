import Footer from '../../common/footer/footer';
import Header from '../../common/header/header';
import BestPost from '../../components/subPage/bestPost/BestPost';
import FanArt from '../../components/subPage/fanArt/FanArt';
import Live from '../../components/subPage/Live/Live';
import QuickMenu from '../../components/subPage/quickMenu/QuickMenu';
import Review from '../../components/subPage/review/Review';
import User from '../../components/subPage/userView/user';
import './style.css';

const SubPage = () => {
    return (
        <div className="SubPagewrap">
            <Header />
            <User />
            <div className="SubPageInner">
                <QuickMenu />
                <Live />
                <Review />
                <BestPost />
                <FanArt />
                <Footer />
            </div>
        </div>
    );
};

export default SubPage;
