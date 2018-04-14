import React, {Component} from 'react';
import Field from './field';
import {connect} from 'react-redux';
import { formError, signIn } from '../actions';

class SignIn extends Component{
    constructor(props){
        super(props)
    }

    handleSignIn(event){
        event.preventDefault()
        const {email,password} = this.props.values
        const errors=[];

        if(!email){
            errors.push('please enter an email');
        }
        if (!password){
            errors.push('please enter a password')
        }

        this.props.formError(errors);

        if(errors.length === 0){
            this.props.signIn({email,password})
        }
        
    }

    render(){
        const inputs = [
            {
                name: 'email',
                label: 'Email address',
                type: 'text',
                placeholder: 'Enter your Email'
            },
            {
                name:'password',
                label:"password",
                type: "password",
                placeholder: 'enter your password'
            }
        ]

        const {values, errors} = this.props;
        const fields = inputs.map((field,index)=>{
            return <Field key={index} {...field} value={values[field.name] || ''} />
        })

        return(
            <div className='card bg-light' >
                <h1 className="text-center display-1 mb-3">Sign in</h1>
                <form onSubmit={this.handleSignIn.bind(this)} className="form-group card-body mb-5">
                    {fields}
                    <button className="btn btn-info float-right">Sign in</button>
                </form>
            </div>
        )
    }

}

function mapStateToProps(state){
    return {
        values: state.form.values,
        errors: state.form.errors
    }
}


export default connect(mapStateToProps, {formError, signIn} )(SignIn)