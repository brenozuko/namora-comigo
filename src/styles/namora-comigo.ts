"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const Container = styled.div`
  min-height: 600px;
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h2`
  color: #fff;
  font-size: 32px;
  font-weight: 400;
  line-height: 48px; /* 150% */
  max-width: 900px;
  text-align: center;
  display: block;
`;

export const ButtonYes = styled.div`
  width: 244px;
  height: 73px;
  border-radius: 30px;
  color: #fff;
  background-color: #139054;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  cursor: pointer;
`;

export const ButtonNo = styled.div`
  width: 244px;
  height: 73px;
  border-radius: 30px;
  color: #fff;
  background-color: #E32121;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 736px;
`;