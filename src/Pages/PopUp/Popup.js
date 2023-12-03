import React, {useState} from 'react';

const Popup = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
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
        </>
    );
}

export default Popup;
