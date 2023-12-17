import { useState, createContext } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <MenuContext.Provider
            value={{
                isMenuOpen: isOpen,
                toggleMenu: handleOpen,
            }}
        >
            {children}
        </MenuContext.Provider>
    );
};

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenPopup = () => setIsOpen(true);
    const handleClosePopup = () => setIsOpen(false);

    return (<PopupContext.Provider
        value={{
            isPopupOpen: isOpen,
            openPopup: handleOpenPopup,
            closePopup: handleClosePopup,
        }}>
        {children}
    </PopupContext.Provider>
    )
}