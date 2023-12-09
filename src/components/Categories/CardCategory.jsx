import { Link } from "react-router-dom";
import {
    CategoriesCardContainer,
    CategoryCard,
    CardContainer
} from "./CategoriesStyles"

const CardCategory = ({ id, img, title }) => {

    return (
        <CardContainer>
            <Link to={title}>
                <CategoryCard>
                    <h3>{title}</h3>
                    <img src={img} alt={title} />
                </CategoryCard>
            </Link>
        </CardContainer>
    );
};

export default CardCategory;