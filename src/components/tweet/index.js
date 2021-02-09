import React, { useState } from 'react'
import styled from 'styled-components'
import { uuid } from 'uuidv4'
import LikeButton from '../likeButton'
import 'font-awesome/css/font-awesome.min.css';

const Tweet = () => {
    
    
    const [tweets, setTweets] = useState([])
    const [inputValue, setInputValue] = useState('')
    const submit = (e) =>{
        e.preventDefault()
        const newTweets = {id: uuid(), content: inputValue}
        setTweets([...tweets, newTweets])
        setInputValue('')
    }

    const deleteTodo = id => {
        const newTweets = tweets.filter(tweet => tweet.id !== id)
        setTweets(newTweets)
    }
    const username = localStorage.getItem('username')
    return (
        <div>
            <StyledForm onSubmit={submit}>
                <StyledTextarea placeholder="What's on your mind?" value={inputValue} 
                onChange={(e) => setInputValue(e.target.value) } 
                type="text"></StyledTextarea>
                <SubmitButton>tweet</SubmitButton>
                
            </StyledForm>
            {tweets.map(tweet => 
            <StyledBorder>
            <h4>{username} : </h4>
            <StyledP key={tweet.id}>{tweet.content}</StyledP>
            <StyledAd>
                <StyledSpanTrash className="fa fa-trash" onClick={() => deleteTodo(tweet.id)}></StyledSpanTrash> 
                <LikeButton></LikeButton>
            </StyledAd>
            
            </StyledBorder>
            )}
            
        </div>
    );
};

const StyledBorder = styled.div`
    -webkit-box-shadow: 0px 10px 10px 5px rgba(0,0,0,0.82); 
    
    padding:10px;
    background-color:white;
    margin-top: 30px;
    padding: 1px 10px 0px 10px;
    border-radius: 0px 20px 20px 20px;
`
const StyledSpanTrash = styled.span`
    cursor: pointer;
    user-select: none;
`

const StyledP = styled.p`
    font-size: 14px;
    font-family: arial;
`

const StyledAd = styled.div`
    display: flex ;
    justify-content: space-between;
    margin-bottom: 12px;
    font-size: 15px;
    user-select: none;
    
`

const SubmitButton = styled.button`
transition: 0.3s;
background-color:#50abf1;
border-radius: 5% 50% 50% 5%;
font-size: 16px;
align-self: flex-end;
color:white;
&:hover {
  background: #0890f7;
  box-shadow: inset 0 0 0 36px var(--btn-bg);
  
}
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
 
`

const StyledTextarea = styled.textarea`
float: left;
width: 100%;
min-height: 75px;
border: 1px solid grey;
color: #000000;
`

export default Tweet;