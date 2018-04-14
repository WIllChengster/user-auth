import React, {Component} from 'react';
import { connect } from 'react-redux';
import {handleInputChange} from '../actions'

class Field extends Component{
   
     render(){

        const {placeholder, type,  handleInputChange, name, value, label} = this.props

        return(
            <div className="input-group input-group-md my-3">
                <div className="input-prepend" >
                    <span className="input-group-text">{label}</span>
                </div>
                <input value={value} onChange={handleInputChange} name={name} type={type} className="form-control" placeholder={placeholder}/>
                {/* <input value={values[name]} onChange={handleInputChange} name={name} type={type} className="form-control" placeholder={placeholder}/> */}
            </div>
        )
         
    }
}


export default connect(null, {handleInputChange})(Field)