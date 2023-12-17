import React from 'react';
import { PopupOverlay, PopupContent, CloseButton } from './NavbarStyles'

const Popup = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <PopupOverlay onClick={onClose}>
            <PopupContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    &times;
                </CloseButton>
                {children}
            </PopupContent>
        </PopupOverlay>
    );
};

export default Popup;
