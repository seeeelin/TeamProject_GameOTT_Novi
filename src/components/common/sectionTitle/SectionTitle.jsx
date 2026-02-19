import { IoIosArrowForward } from 'react-icons/io';
import './style.css';

const SectionTitle = ({title}) => {
    return (
        <div className="sectionTitle">
            <h2>{title}</h2>
            <a href="#">
                <IoIosArrowForward />
            </a>
        </div>
    );
};

export default SectionTitle;
