import "./style.css";
import React from 'react';
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
    return (
        <div id="App">
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/projectsTest' element={<projectsTest />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/experience' element={<Experience />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    );
}

export { App };