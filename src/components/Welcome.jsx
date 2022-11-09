import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

export default function Welcome({ currentUser }) {
  return (
    <Container>
      <img src={Robot} alt="Robot" className="responsive"/>
      <h1 style={{fontSize:"2vw"}}>
        Welcome, <span>{currentUser.username}!</span>
      </h1>
      <h3 style={{fontSize:"2vw"}}>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .responsive {
    height: 10rem;
  }
  span {
    color: #4e0eff;
  }
  h1{
    margin-top:20px;
  }
`;
