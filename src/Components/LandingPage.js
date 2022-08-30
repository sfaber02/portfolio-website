import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransition, animated, config} from 'react-spring';
import { styleOb, styleObFromLefttoRight } from '../Classes/styleClass.js';

const LandingPage = ({firstLoad, toggleFirstLoad}) => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);
    
    console.log (firstLoad, toggleFirstLoad);
    /** All the transitions for the various elements on the landing page */
    const transition1 = useTransition(visible, firstLoad ? new styleOb() : new styleObFromLefttoRight());
    const transition2 = useTransition(visible, firstLoad ? new styleOb() : new styleObFromLefttoRight());
    const transition3 = useTransition(visible, firstLoad ? new styleOb() : new styleObFromLefttoRight());
    const transition4 = useTransition(visible, firstLoad ? new styleOb() : new styleObFromLefttoRight());
    const transition5 = useTransition(visible, firstLoad ? new styleOb() : new styleObFromLefttoRight());
    const transition6 = useTransition(visible, firstLoad ? new styleOb() : new styleObFromLefttoRight());
    
    
    /** 
     * Navigation Button Event Handler
     * Triggers button leave animation 
    */
    const handleClick = ({ target }) => {
        setVisible(false);
        toggleFirstLoad();
        const start = Date.now();
        let timer = setInterval(() => {
            let elapsed = Date.now() - start;
            if (elapsed > 400) {
                clearInterval(timer);
                navigate(`/${target.id[target.id.length - 1] === 'P' ? target.id.slice(0, target.id.length - 1) : target.id}`);
            }
        }, 20)
    }

    
    return (
        <>
            <div id='landingPage' className='mainPageContainers'>
                <div id='landingButtons'>
                    {transition1((style, item) => {
                        return ( item ?
                            <animated.div style={style} id='landingName' className='item'>

                            </animated.div> : ''
                        )
                    })}                
                    {transition3((style, item) => {
                        return (item ?
                            <animated.div style={style} className='item' id="projects" onClick={handleClick}>
                                <p id="projectsP">Projects</p>
                            </animated.div> : ''
                        )
                    })}
                    {transition4((style, item) => {
                        return (item ?
                            <animated.div style={style} className='item' id="skills" onClick={handleClick}>
                                <p id="skillsP">Skills</p>
                            </animated.div> : ''
                        )
                    })}
                    {transition5((style, item) => {
                        return ( item ?
                            <animated.div style={style} className='item' id="experience"  onClick={handleClick} >
                                <p id="experienceP">Experience</p>
                            </animated.div> : ''
                        )
                    })}
                    {transition6((style, item) => {
                        return (item ?
                            <animated.div style={style} className='item' id="contact" onClick={handleClick}>
                                <p id="contactP">Contact</p>  
                            </animated.div> : ''
                        )
                    })}
                    {transition2((style, item) => {
                        return ( item ?
                            <animated.div style={style} className='item' id='landingTitle'>
                                <p id="landing1P" className="landingP">SHAWN</p>
                                <p id="landing2P" className="landingP">FABER</p>
                            </animated.div> : ''
                        )
                    })}
                </div>
            </div>
        </>
    );
}


export { LandingPage };