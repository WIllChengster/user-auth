import types from './types';
import axios from 'axios';


export function signUp(cred){
    return(dispatch) => {
        axios.post('http://api.reactprototypes.com/signup', cred).then(  res => {
            console.log(res)
            localStorage.setItem('token', res.data.token);
            dispatch({
                type: types.SIGN_UP
            })
        })
    }
}
export function signIn(cred){
    console.log(cred)
    return dispatch => {
        axios.post('http://api.reactprototypes.com/signin', cred ).then(  res => {
            console.log(res)

            localStorage.setItem('token', res.data.token);

            dispatch({
                type: types.SIGN_IN
            })
        })
    }
}
export function signOut(){

    localStorage.removeItem('token')
    return{
        type: types.SIGN_OUT
    }
}

export function handleInputChange(event){
    const { name, value } = event.target
    return{
        type: types.INPUT_CHANGE,
        name,
        value,

    } 
}

export function defineInput(name){
    return{
        type: types.DEFINE_INPUT,
        name
    }
}

export function formError(error){
    return{
        type: types.FORM_ERROR,
        error
    }
}

export function getQuote(){
    return async (dispatch) => {

        const axiosConfig={
            headers:{
                authorization: localStorage.getItem('token')
            }
        }

        const response = await axios.get('http://api.reactprototypes.com', axiosConfig);

        console.log('Quote Response: ', response)

        dispatch({
            type: types.GET_QUOTE,
            payload: response.data.message
        })
    }
}