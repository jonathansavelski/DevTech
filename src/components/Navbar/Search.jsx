import { AiOutlineSearch } from 'react-icons/ai';
import { SearchFormStyled, SearchBarStyled, IconWrapperStyled } from './NavbarStyles';
import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PopupContext } from "../../context/Context";

const Search = () => {
    const [value, setValue] = useState('');
    const listOfCourses = useSelector(state => state.products.products);
    const [searchResults, setSearchResults] = useState(null);
    const navigate = useNavigate();
    const popupCtx = useContext(PopupContext);

    const handlerSubmit = (e, value) => {
        e.preventDefault();

        //Cierra el popup luego de la busqueda
        popupCtx.closePopup();

        const newCourse = value.trim().toLowerCase().split(' ').join('');

        const results = Object.values(listOfCourses).flatMap((categoryCourses) =>
            categoryCourses.filter((product) =>
                product.title.trim().toLowerCase().split(' ').join('').includes(newCourse)
            )
        );

        console.log('searchResults:', results);

        if (results.length > 0) {
            setSearchResults(results);
            navigate(`/results`, { state: { searchQuery: value, results } });
        } else {
            // Navega a la página de resultados
            navigate(`/results`, { state: { searchQuery: value } });
        }

        setValue('');
    };

    return (
        <SearchFormStyled>
            <SearchBarStyled
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Search your course"
            />
            <IconWrapperStyled>
                <button
                    onClick={(e) => handlerSubmit(e, value)}
                    radius="10"
                    disabled={!value}
                >
                    <AiOutlineSearch />
                </button>
            </IconWrapperStyled>
        </SearchFormStyled>
    );
};

export default Search;

