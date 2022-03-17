import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransition, animated, config} from 'react-spring';


const LandingPage = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);

    /** Class to generate random style objects for animations */
    class styleOb {
        constructor() {
            this.from = {
                transform: 'rotate(0.5turn)', 
                x: Math.floor(Math.random() * 1600) - 800,
                y: Math.floor(Math.random() * 1600) - 800,
                opacity: 0, config: config.molasses
            };
            this.enter = {
                transform: 'rotate(0turn)',
                x: 0,
                y: 0,
                opacity: 1,
                config: config.molasses
            };
            this.leave = {
                transform: 'rotate(0.5turn)',
                x: Math.floor(Math.random() * 1600) - 800,
                y: Math.floor(Math.random() * 1600) - 800,
                opacity: 0,
                config: config.molasses 
            };
        }
    }
    /** All the transitions for the various elements on the landing page */
    const transition1 = useTransition(visible, new styleOb());
    const transition2 = useTransition(visible, new styleOb());
    const transition3 = useTransition(visible, new styleOb());
    const transition4 = useTransition(visible, new styleOb());
    const transition5 = useTransition(visible, new styleOb());
    const transition6 = useTransition(visible, new styleOb());
    
    
    /** 
     * Navigation Button Event Handler
     * Triggers button leave animation 
    */
    const handleClick = ({ target }) => {
        setVisible(false);
        const start = Date.now();
        let timer = setInterval(() => {
            let elapsed = Date.now() - start;
            if (elapsed > 2000) {
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