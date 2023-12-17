import { Link } from "react-router-dom";
import {
    CategoryCard,
    CardContainer
} from "./CategoriesStyles"

const CardCategory = ({ id, img, title }) => {

    const categoryUrl = `/categories/${title}`;

    return (
        <CardContainer>
            <Link to={categoryUrl}>
                <CategoryCard>
                    <h3>{title}</h3>
                    <img src={img} alt={title} />
                </CategoryCard>
            </Link>
        </CardContainer>
    );
};

export default CardCategory;