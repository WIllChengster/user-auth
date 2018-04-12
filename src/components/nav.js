import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { changeAuth } from '../actions'


class Nav extends Component{
    constructor(props){
        super(props)
    }

    renderButton(){
        if(this.props.auth){
            return(
                <button onClick={()=> this.props.changeAuth(false)} className="btn btn-danger" >Sign out</button>
            )
        }
        return (
            <button onClick={()=> this.props.changeAuth(true)} className="btn btn-outline-light" >Sign in</button>
        )
    }

    render(){
        console.log('Auth: ', this.props)
        return(
            <nav className="navbar navbar-dark bg-dark mb-5" >
                <Link className="nav-item text-white" to="/" >Home</Link>
                <Link className="nav-item text-white" to="/about-us" >about us</Link>
                <Link className="nav-item text-white" to="/secret-docs" >Secret</Link>
                <Link className="nav-item text-white" to="/operatives-list" >Operatives</Link>
                {this.renderButton()}
            </nav>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {changeAuth: changeAuth})(Nav);