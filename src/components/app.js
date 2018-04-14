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
import Register from './register';
import SignIn from './sign_in';
import Quotes from './quotes';
const App = () => (
    <div>
        <Nav/>
        <div className="container">

        <Route exact path="/" component={Home}/>
        <Route path="/about-us" component={AboutUs}/>
        <Route path="/secret-docs" component={auth(SecretDocs)}/>
        <Route path="/operatives-list" component={OperativesList}/>
        <Route path="/register" component={Register}/>
        <Route path="/signIn" component={SignIn} />
        <Route path="/movie-quote" component={auth(Quotes)}/>
        </div>
    </div>
);

export default App;
