import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransition, animated, config} from 'react-spring';


const LandingPage = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);


    /**Variations of transitions for different elements */
    const transition = useTransition(visible, {
        from: {x: -100, y: 800, opacity: 0, config: config.molasses},
        enter: {x: 0, y: 0, opacity: 1, config: config.molasses},
        leave: {x: 100, y: -800, opacity: 0, config: config.molasses },
    });
    const transition2 = useTransition(visible, {
        from: {x: 100, y: -800, opacity: 0, config: config.molasses},
        enter: {x: 0, y: 0, opacity: 1, config: config.molasses},
        leave: {x: 100, y: -800, opacity: 0, config: config.molasses },
    });
    const transition3 = useTransition(visible, {
        from: {x: -60, y: -800, opacity: 0, config: config.molasses},
        enter: {x: 0, y: 0, opacity: 1, config: config.molasses},
        leave: {x: 100, y: -800, opacity: 0, config: config.molasses },
    });
    const transition4 = useTransition(visible, {
        from: {x: -400, y: 50, opacity: 0, config: config.molasses},
        enter: {x: 0, y: 0, opacity: 1, config: config.molasses},
        leave: {x: 100, y: -800, opacity: 0, config: config.molasses },
    });

    /** 
     * Navigation Button Event Handler
     * Triggers button leave animation 
    */
    const handleClick = ({ target }) => {
        console.log (target.id);
        setVisible(false);
        let start = Date.now();
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
                {transition((style, item) => {
                    return ( item ?
                        <animated.div style={style} className='item'>
                            <h1>Shawn Faber</h1>
                        </animated.div> : ''
                    )
                })}
                {transition2((style, item) => {
                    return ( item ?
                        <animated.div style={style} className='item'>
                            <h1>Digital Resume</h1>
                        </animated.div> : ''
                    )
                })}
                {transition3((style, item) => {
                    return (item ?
                        <animated.div style={style} className='item'>
                            <button id="projects" onClick={handleClick}>Projects</button>
                        </animated.div> : ''
                    )
                })}
                {transition4((style, item) => {
                    return (item ?
                        <animated.div style={style} className='item'>
                            <button id='skills' onClick={handleClick}>Skills</button>
                        </animated.div> : ''
                    )
                })}
                {transition((style, item) => {
                    return ( item ?
                        <animated.div style={style} className='item'>
                            <button id='experience' onClick={handleClick}>Experience</button>
                        </animated.div> : ''
                    )
                })}
                {transition3((style, item) => {
                    return (item ?
                        <animated.div style={style} className='item'>
                            <button id='contact' onClick={handleClick}>Contact</button>
                        </animated.div> : ''
                    )
                })}
            </div>
        </>
    );
}


export { LandingPage };