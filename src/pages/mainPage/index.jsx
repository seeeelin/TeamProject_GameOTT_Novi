import Footer from '../../common/footer/footer';
import Header from '../../common/header/header';
import Category from '../../components/mainPage/category/Category';
import Community from '../../components/mainPage/community/Community';
import LikeCollection from '../../components/mainPage/likeCollection/LikeCollection';
import MainVisual from '../../components/mainPage/mainVisual/MainVisual';
import Recommend from '../../components/mainPage/recommed/Recommend';
import Sale from '../../components/mainPage/sale/Sale';
import Score from '../../components/mainPage/score/Score';
import './style.css';

const index = () => {
    return (
        <div className="MainPagewrap">
            <Header />
            <MainVisual />
            <div className="inner">
                <LikeCollection />
                <Recommend />
                <Sale />
                <Score />
            </div>
            <Community />
            <div className="inner">
                <Category />
                <Footer />
            </div>
        </div>
    );
};

export default index;
