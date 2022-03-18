import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransition, animated, config} from 'react-spring';
import { styleOb, styleObFromLefttoRight } from './styleClass.js';

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
            if (elapsed > 500) {
                clearInterval(timer);
                navigate(`/${target.id}`);
            }
        }, 20)
    }

    
    return (
        <>
            <div id='landingPage' className='mainPageContainers'>
                <div id='landingName'>
                    {transition1((style, item) => {
                        return ( item ?
                            <animated.div style={style} className='item'>
                                <h1>Shawn Faber</h1>
                            </animated.div> : ''
                        )
                    })}
                </div>                
                <div id='landingButtons'>
                    {transition3((style, item) => {
                        return (item ?
                            <animated.div style={style} className='item'>
                                <button id="projects" className='buttons' onClick={handleClick}>Projects</button>
                            </animated.div> : ''
                        )
                    })}
                    {transition4((style, item) => {
                        return (item ?
                            <animated.div style={style} className='item'>
                                <button id='skills' className='buttons' onClick={handleClick}>Skills</button>
                            </animated.div> : ''
                        )
                    })}
                    {transition5((style, item) => {
                        return ( item ?
                            <animated.div style={style} className='item'>
                                <button id='experience' className='buttons' onClick={handleClick}>Experience</button>
                            </animated.div> : ''
                        )
                    })}
                    {transition6((style, item) => {
                        return (item ?
                            <animated.div style={style} className='item'>
                                <button id='contact' className='buttons' onClick={handleClick}>Contact</button>
                            </animated.div> : ''
                        )
                    })}
                </div>
                <div id='landingTitle'>
                    {transition2((style, item) => {
                        return ( item ?
                            <animated.div style={style} className='item'>
                                <h1>Digital Resume</h1>
                            </animated.div> : ''
                        )
                    })}
                </div>
            </div>
        </>
    );
}


export { LandingPage };