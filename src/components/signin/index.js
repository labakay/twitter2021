import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


const Signin = ({submit}) => {
    const [formState, setFormState] = useState({username: '', password: ''})
    const [errorMessage, setErrorMessage] = useState('')
    const history = useHistory()
    console.log('history', history)
    

    return (
        <StyledWrapper>
            <StyledP>TWITTER AFRICA</StyledP>
        
        <StyledForm onSubmit={(e) => submit(e, formState, setErrorMessage, history)}>
            
            <SigninInput onChange={e => setFormState({...formState, username: e.target.value})} placeholder='username' type='text'></SigninInput>
            <SigninInput onChange={e => setFormState({...formState, password: e.target.value})} placeholder='password'type='password'></SigninInput>
            <StyledSpanError>{errorMessage}</StyledSpanError>
            <SigninInput type='submit' value="submit"></SigninInput>
        </StyledForm>
        </StyledWrapper>
    );
};


const StyledWrapper = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
`

const StyledSpanError = styled.span`
font-weight: bold;
color: red;
`

const StyledP = styled.p`
letter-spacing: .2rem;
font-weight: bold;
color: #50abf1;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

const SigninInput = styled.input`
    margin: 6px 0px;
    border-radius: 12px;
    border: none;
    height: 30px;
    padding: 0px 6px;
    color: white;
    background-color: black;
`

export default Signin;