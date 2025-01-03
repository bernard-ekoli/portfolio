import React, { useRef, createContext } from 'react';
import NavBar from './headBar';
import './CSS/contact.css';

export const GlobalContext = createContext();

const Parent = () => {
    const parentRef = useRef(null);

    const scrollDown = () => {
        if (parentRef.current) {
            parentRef.current.scrollTo({
                top: 600, // Scroll to 600px from the top
                behavior: 'smooth', // Enable smooth scrolling
            });
        }
    };

    return (
        <GlobalContext.Provider value={{ scrollDown }}>
            <div
                id="parent"
                ref={parentRef}
                style={{
                    height: '100vh',
                    paddingBottom: '20px',
                    overflowY: 'scroll',
                    overflowX: 'hidden',
                }}
            >
                <NavBar />
            </div>
        </GlobalContext.Provider>
    );
};

export default Parent;
