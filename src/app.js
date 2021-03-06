import "./style.css";
import React, { useState} from 'react';
import { Route, Routes, Link } from 'react-router-dom';


/**
 * The various pages of my resume
 */
import { LandingPage } from "./landingPage";
import { Contact } from './contact.js';
import { Experience } from "./experience.js";
import { Projects } from "./projects.js";
import { Skills } from "./skills.js"; 


const App = () => {
    const [firstLoad, setFirstLoad] = useState(true);

    const toggleFirstLoad = () => setFirstLoad(false);

    return (
        <div id="App">
            <Routes>
                <Route path='/' element={<LandingPage firstLoad={firstLoad} toggleFirstLoad={toggleFirstLoad} />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/experience' element={<Experience />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    );
}

export { App };
