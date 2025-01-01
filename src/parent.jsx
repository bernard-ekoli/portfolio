import NavBar from "./headBar";
import React, { useEffect } from 'react';
import './CSS/contact.css';

const Parent = () => {
    useEffect(() => {
    }, []);
    let scrollDown = () => {
        let parent = document.getElementById('parent');
        parent.scrollTo({
            top: 600, // Scroll to 600px from the top
            behavior: 'smooth', // Enable smooth scrolling
        });
    };
    return (
        <div
            id="parent"
            style={{
                height: '100vh',
                paddingBottom: '20px',
                overflowY: 'scroll',
                overflowX: 'hidden',
            }}
        >
            <NavBar scrollDown={scrollDown} />
        </div>
    );
};

export default Parent;
