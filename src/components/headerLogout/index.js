import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const HeaderLogout = () => {
  const history = useHistory()
  const isToken = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push('/')
    window.location.reload(); 
  }

  return (
    <Container>
      <StyledSpan>TWITTER</StyledSpan>
      {isToken ? (
        <LogoutButton onClick={handleLogout}>LOGOUT</LogoutButton>
      ) : (
        null
      )}
      
    </Container>
  )
}

const StyledSpan = styled.span`
letter-spacing: .2rem;
font-weight: bold;
color: white;
display: inline-flex;
align-items: center;
margin-left:10px;

`
const LogoutButton = styled.p`
  padding: 12px;
  background-color: Transparent;
  color:white;
  cursor: pointer;
  font-weight: bold;
`

const Container = styled.div`
  background-color: #1998e3;
  display: flex;
  justify-content: space-between;
  height: 70px;
`

export default HeaderLogout