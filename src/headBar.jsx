import './CSS/headBar.css'
import Upper from './upperDiv'
import React, { useContext, useRef } from 'react';
import { GlobalContext } from './parent';

const NavBar = () => {
    const { scrollDown } = useContext(GlobalContext);
    const secondNavDiv = useRef(null);
    return (
        <>
            <div id="NavBar">
                <div id="firstNavDiv">
                    <span>Bernard</span>
                </div>
                <div id="secondNavDiv" ref={secondNavDiv} onClick={scrollDown}>
                    <span>Message Me</span>
                </div>
            </div>
            <Upper secondNavDiv={secondNavDiv}/>
        </>
    );
}

export default NavBar;