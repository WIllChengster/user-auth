import React from 'react';
import {Route} from 'react-router-dom'
import '../assets/css/app.css';
import Nav from './nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './home';
import AboutUs from './about_us';
import SecretDocs from './secret_docs';
import OperativesList from './operatives_list'
import auth from '../hoc/auth';
const App = () => (
    <div>
        <Nav/>
        <div className="container">

        <Route exact path="/" component={Home}/>
        <Route exact path="/about-us" component={AboutUs}/>
        <Route exact path="/secret-docs" component={auth(SecretDocs)}/>
        <Route exact path="/operatives-list" component={OperativesList}/>

        </div>
    </div>
);

export default App;
