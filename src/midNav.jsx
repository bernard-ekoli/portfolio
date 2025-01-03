import './CSS/midNav.css';
import { projects } from './projects';
import { useState, useEffect } from 'react';
import like from './assets/icons/thumbsUp.svg';
import comment from './assets/icons/comment.png';
import whatsapp from './assets/icons/whatsapp.png';
import benImg from './assets/images/benlogo.png'
import Contact from './contact';
import alert from './assets/icons/alert.svg'
import globe from './assets/icons/globe.svg'
import star from './assets/icons/star.svg'

const MidNav = ({ elementRef, secondNavDiv }) => {
    const info = [
        {
            texts: `<strong>Page</strong> . Interest`,
            img: alert
        },
        {
            texts: `<a href="https://www.bernardekoli.xyz" target="_blank" rel="noopener noreferrer">bernardekoli.xyz</a>`,
            img: globe
        },
        {
            texts: `100% recommended (277 Reviews) <div><img src=${alert} alt="star" /></div>`,
            img: star
        }
    ]
    let [visible, setVisible] = useState(true);
    let [aboutVis, setAboutVIs] = useState(false)
    let [contacVs, setContactVis] = useState(false)

    const toggleVisibility = () => {
        let ele = document.getElementById('mnBGC');
        let eleStyle = window.getComputedStyle(ele)
        if (eleStyle.display === 'none') {
            setVisible(true);
            setAboutVIs(false)
            setContactVis(false)
        }
    };
    const toggleAbout = () => {
        let ele = document.getElementById('aboutDetails')
        let eleStyle = window.getComputedStyle(ele)
        if (eleStyle.display === 'none') {
            setVisible(false)
            setContactVis(false)
            setAboutVIs(true)
        }
    }
    const toggleContact = () => {
        let thirdMN = document.getElementById('contactMe');
        let tMnEle = window.getComputedStyle(thirdMN)
        if (tMnEle.display === 'none') {
            setContactVis(true)
            setVisible(false)
            setAboutVIs(false)
        }

    }
    useEffect(() => {
        let newEle = elementRef.current;
        newEle.addEventListener('click', () => {
            toggleContact()
        })
        let secNewEle = secondNavDiv.current;
        secNewEle.addEventListener('click', () => {
            toggleContact()
        })
    }, [])
    return (
        <div id='mnDiv'>
            <div id="supDiv">
                <div id="line">

                    <div id="parentMN">
                        <div id="firstMN" onClick={toggleVisibility} className={visible ? 'border' : ''}>Projects</div>
                        <div id="secondMN" onClick={toggleAbout} className={aboutVis ? 'border' : ''}>About</div>
                        <div id="thirdMN" onClick={toggleContact} className={contacVs ? 'border' : ''}>Contact</div>
                    </div>
                </div>
                <div id="mnBGC" className={visible ? 'show' : ''}>
                    <div id="pRmndetails">
                        <div id="fPrMNdetails">
                            <strong><h2>Info</h2></strong>
                            <span>I'm a self-taught frontend developer passionate about creating responsive and interactive web applications.</span>
                            <hr />
                            <div id='infoDiv'>
                                {info.map((inf, index) => {
                                    return (
                                        <div key={index}>
                                            <div id="imgDiv">
                                                <img src={inf.img} alt="Alert" />
                                            </div>
                                            <div id="textsDiv" dangerouslySetInnerHTML={{ __html: inf.texts }}></div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div id="mnDetails">
                            {projects.map((project, index) => {
                                return (
                                    <div id="projects" key={index}>
                                        <div id="projectOne">
                                            <div id="upperProjectOne">
                                                <div id="leftUpo">
                                                    <div id="leftCUpo">
                                                        <div id="imCu">
                                                            <img src={benImg} alt="Ben Profile" />
                                                        </div>
                                                        <div id="nmCu">
                                                            <div id="postName">{project.Name}</div>
                                                            <div id="postFollow">Follow<sub>1d</sub></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="otherUpo">. . .</div>
                                            </div>
                                            <div id="commentProject">
                                                <span dangerouslySetInnerHTML={{ __html: project.Description }}></span>
                                                <br />
                                                <br />
                                                <a href={project.Download} target="_blank" rel="noopener noreferrer">Download Code</a>
                                                <br />
                                                <br />
                                                <a href={project.Link} target="_blank" rel="noopener noreferrer">View Live</a>
                                            </div>
                                            <div id="projectImage">
                                                <img src={project.Image} alt="Project One Image" />
                                            </div>
                                            <div id="projectReactionsButton">
                                                <div id="like">
                                                    <img src={like} alt="" />
                                                </div>
                                                <div id="comment">
                                                    <img src={comment} alt="" />
                                                </div>
                                                <div id="wChatMe">
                                                    <img src={whatsapp} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div id="aboutDetails" className={aboutVis ? 'aboutTog' : ''}>
                    <section
                        id="aboutMe"
                        style={{
                            fontFamily: 'Arial, sans-serif',
                            margin: '20px',
                            padding: '20px',
                            backgroundColor: '#f9f9f9',
                            borderRadius: '10px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <h2 style={{ textAlign: 'center', color: '#3b5998' }}>About Me</h2>
                        <p>
                            Hello! I'm <strong>Bernard</strong>, a self-taught frontend developer passionate about creating responsive and interactive web applications. I’ve dedicated myself to learning modern web development tools and building projects that showcase my skills.
                        </p>

                        <h3 style={{ color: '#3b5998' }}>Learning Journey</h3>
                        <p>
                            I started my coding journey by working on small projects and gradually challenging myself with full-scale applications like:
                        </p>
                        <ul>
                            <li><strong>Netflix Clone:</strong> A dynamic, React-based web application.</li>
                            <li><strong>Tesla Clone:</strong> A responsive website showcasing Tesla’s design and features.</li>
                            <li><strong>LootChase:</strong> An in-game item selling app targeting FPS gamers.(In development)</li>
                            <li><strong>MHF(Monalisa's Home of Fashion):</strong> A female website only for selling female attires.(In development)</li>
                        </ul>
                        <p>
                            These projects have helped me learn technologies like React.js, JavaScript, and CSS while also teaching me problem-solving and debugging skills.
                        </p>

                        <h3 style={{ color: '#3b5998' }}>Skills</h3>
                        <ul>
                            <li><strong>Languages:</strong> HTML, CSS, JavaScript</li>
                            <li><strong>Frameworks:</strong> React.js</li>
                            <li><strong>Tools:</strong> Git, Webpack, Vite</li>
                            <li><strong>Others:</strong> Responsive Design, REST APIs</li>
                        </ul>

                        <h3 style={{ color: '#3b5998' }}>Future Goals</h3>
                        <p>
                            I am currently learning Node.js to build full-stack applications and plan to explore MongoDB and SQL for database management. My ultimate goal is to join a professional tech team, contribute to impactful projects, and continue growing as a developer.
                        </p>

                        <h3 style={{ color: '#3b5998' }}>Open to Opportunities</h3>
                        <p>
                            I am excited to begin my career as a frontend developer. I am looking forward to working with a team where I can contribute, learn, and grow while delivering quality projects.
                        </p>

                        <p style={{ textAlign: 'center', marginTop: '20px' }}>
                            <strong>Thank you for visiting my portfolio!</strong>
                        </p>
                    </section>
                </div>

            </div>
            <Contact contacVs={contacVs} />
        </div>
    );
};
export default MidNav;