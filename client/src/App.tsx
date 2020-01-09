import React from 'react';
import logo from './logo.svg';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ProtectedRoutes from "./routes/protectedRoutes";
import PublicRoutes from "./routes/publicRoutes";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <PublicRoutes />
                <ProtectedRoutes />
            </Router>
        </div>
    );
}

export default App;
