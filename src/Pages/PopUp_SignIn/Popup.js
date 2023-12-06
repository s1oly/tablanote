import React, { useState } from 'react';
import './Popup.css';

const Popup = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={`Popup ${isOpen ? '' : 'closed'}`}>
            {isOpen && (
                <div>
                    <div>
                        <b>Welcome to TablaNote, a digital composition storage for the Tabla!</b>
                    </div>
                    <button onClick={() => setIsOpen(false)}>
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};

export default Popup;
