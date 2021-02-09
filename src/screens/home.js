import React from 'react';
import { Link } from 'react-router-dom'
import Tweet from '../components/tweet'
import styled from 'styled-components'
import myImage from '../assets/images/user.png'


const Home = props => {
    console.log('Home => props', props)
    const username = localStorage.getItem('username')
    return (
        <Wrapper>
        <UserImage/>
        <StyledContainer>
            <h2>bienvenue  {username} ! sur TWITTER </h2>
            <Tweet></Tweet>
        </StyledContainer>
        </Wrapper>
        
    );
};

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const UserImage = styled.div`
  background-image: url(${myImage});
  width:85px;
  height:85px;
  max-width:100%;
  max-height:100%;
align-items: center;
margin-top:50px;
border-radius: 50%;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default Home;