"use client";

import styled from "styled-components";

export const PressStart = styled.h1`
  color: #fff;
  text-align: center;
  font-family: Press Start 2P;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px; /* 150% */
  cursor: pointer;

  animation: blink 1s linear infinite;
  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;


export const SaidYesContainer = styled.div`
  margin-bottom: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;

`


export const TextSaidYes = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 46px;
  font-style: normal;
  font-weight: 400;
  line-height: 65px;
  margin: 0;
`;
