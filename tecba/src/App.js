import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import Inicio from './components/pages/Inicio';


const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/">Inicio</Link>
               
            </nav>
            <Routes>
            <Route path="/" element={<Inicio />} />
            </Routes>
        </Router>
    );
};

export default App;
