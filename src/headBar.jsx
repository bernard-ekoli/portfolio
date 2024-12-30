import './CSS/headBar.css'
import { useRef } from 'react';
import Upper from './upperDiv'
const NavBar = ({ scrollDown }) => {
    let secondNavDiv = useRef(null)
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
            <Upper scrollDown={scrollDown} secondNavDiv = {secondNavDiv} />
        </>
    );
}

export default NavBar;