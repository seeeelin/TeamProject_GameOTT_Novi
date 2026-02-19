import GenreTab from "../../common/genreTab/GenreTab";
import SectionTitle from "../../common/sectionTitle/SectionTitle";
import CategoryItem from "./CategoryItem";
import './style.css';

const Category = () => {
    return (
        <div className="categoryWrap">
            <SectionTitle title="카테고리" />
            <GenreTab className="categoryTab" />
            <CategoryItem />
        </div>
    );
};

export default Category;