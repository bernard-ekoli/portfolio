import './CSS/upperDiv.css'
import ben from './assets/images/benlogo.png'
import verified from './assets/icons/verified.png'
import MidNav from './midNav'
import { useRef, useContext } from 'react'
import { GlobalContext } from './parent'
const Upper = ({ secondNavDiv }) => {
    const { scrollDown } = useContext(GlobalContext);
    let elementRef = useRef(null)
    return (
        <div id='upperDivBoss'>
            <div id="upperDiv">
                <div id="uD1">
                </div>
                <div id="uD2">
                    <img src={ben} alt="" />
                </div>
                <div id="uds">
                    <div id="uD3">
                        <div>
                            <span>Bernard</span>
                            <div><img src={verified} alt="" /></div>
                        </div>
                        <span id='followers'><span>1M</span> <span>followers</span> &bull; <span>12</span> <span>following</span></span>
                    </div>
                    <div id="uD4">
                        <span>
                            I’m a passionate frontend developer with over 3 years of
                            experience in HTML, CSS, JavaScript, and React.
                        </span>
                    </div>
                    <div id="uD5">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 50 50"
                                fill="none"
                            >
                                <rect x="5" y="5" width="40" height="40" rx="10" fill="black" />

                                <path d="M25 15 v20 M15 25 h20" stroke="white" stroke-width="4" stroke-linecap="round" />
                            </svg>
                            Follow
                        </div>
                        <div ref={elementRef} onClick={scrollDown}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 48 48"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M24 4C13.059 4 4 12.254 4 22.555c0 5.787 2.915 10.923 7.493 14.112V44l6.884-3.791c1.723.471 3.548.731 5.523.731 10.941 0 20-8.254 20-18.555C44 12.254 34.941 4 24 4zm.225 23.42l-4.37-4.74-8.44 4.74 8.646-9.676 4.292 4.71 8.39-4.71-8.518 9.676z"
                                    fill="#FFFFFF"
                                />
                            </svg>
                            Message
                        </div>
                        <div>...</div>
                    </div>
                </div>
            </div>
            <MidNav elementRef={elementRef} secondNavDiv={secondNavDiv} />
        </div>
    );
}

export default Upper;