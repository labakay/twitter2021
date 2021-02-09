import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header'
import Signin from '../components/signin'
import axios from 'axios'


const submit = (e, formState, setErrorMessage, history) => {
    e.preventDefault()
    if(!formState.username || !formState.password){
        setErrorMessage('Fields must not be empty')
        return
    }
    axios({
        method:'POST',
        url:'https://easy-login-api.herokuapp.com/users/login',
        data: {
            username: formState.username,
            password: formState.password
        }
    }).then(res => {
        localStorage.setItem('username', formState.username)
        localStorage.setItem('token', res.headers['x-access-token'])
        history.push('/home')
        window.location.reload(); 

    }).catch(err => {
        setErrorMessage('An error has occurred')
        console.log(err)
    })
}

const Login = ({history}) => {
    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log('Login -> token', token)
        if(token){
            history.push('/home')
        }
    }, [])
    return (
        <div>
            <Signin submit={submit}></Signin>
        </div>
    );
};

export default Login;