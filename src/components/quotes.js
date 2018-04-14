import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getQuote} from '../actions'
class Quotes extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getQuote();
    }
    render(){
        return(
            <div>
                <h1 className="display-4 text-center">Movie Quote</h1>
                <blockquote className="blockquote text-center mt-5">
                    <p>{this.props.quote}</p>
                    <footer className="blockquote-footer">Some fucking guy from <cite className="Source Title" > Learning-Fuze </cite> </footer>
                </blockquote>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        quote: state.user.quote
    }
}

export default connect(mapStateToProps, {getQuote})(Quotes)