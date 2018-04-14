import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions'

class Nav extends Component{
    constructor(props){
        super(props)
    }

    renderLinks(){
        if(this.props.auth){
            return [
                <Link key="0" className="nav-item text-white" to="/secret-docs" >Secret</Link>,
                <Link key="1" className="nav-item text-white" to="/operatives-list" >Operatives</Link>,
                <Link key="2" className="nav-item text-white" to="/movie-quote">Movie Quote</Link>,
                <button onClick={this.props.signOut}  key="3" className="btn btn-danger">Sign Out</button>
            ];
        }
        return [
            <Link key="0" className="nav-item text-white" to="/register">Register</Link>,
            <Link key="1" className="nav-item text-white" to="/signIn">Sign In</Link>
        ]
    }

    render(){
        console.log('Auth: ', this.props)
        return(
            <nav className="navbar navbar-dark bg-dark mb-5" >
                <Link className="nav-item text-white" to="/" >Home</Link>
                <Link className="nav-item text-white" to="/about-us" >about us</Link>
                {this.renderLinks()}
                {/* {this.renderButton()} */}

            </nav>

        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {signOut} )(Nav);