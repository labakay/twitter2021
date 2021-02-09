import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import styled from 'styled-components'

const LikeButton = () => {
    
    const [toggle, setToggle] = useState(false)

    const toggler = () => {
        toggle ? setToggle(false): setToggle(true);
    }

    return (
        <div>
            {toggle? <StyledSpanRed onClick={toggler} className="fa fa-heart">1 like</StyledSpanRed> 
            : <StyledSpanBlack onClick={toggler} className="fa fa-heart"></StyledSpanBlack>}
           
        </div>
    );
};

const StyledSpanRed = styled.span`
    color: red;
    margin-bottom: 12px;
    font-size: 15px;
    cursor: pointer;
    user-select: none;
`
const StyledSpanBlack = styled.span`
    color: black;
    margin-bottom: 12px;
    font-size: 15px;
    cursor: pointer;
    user-select: none;
`

export default LikeButton;