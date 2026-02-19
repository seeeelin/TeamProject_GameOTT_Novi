import SectionTitle from "../../common/sectionTitle/SectionTitle";
import SaleItem from "./SaleItem";
import './style.css';

const Sale = () => {
    return (
        <div className="Sale">
            <SectionTitle title="할인 중인 게임" />
            <SaleItem />
        </div>
    );
};

export default Sale;
