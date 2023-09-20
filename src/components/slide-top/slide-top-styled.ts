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
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 600px;
`;

export const SlideImage = styled.div`
  max-width: 623px;
`;

export const Slide = styled.img`
  border-radius: 25px;
  border: 2px solid #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Text = styled.h2`
  color: #fff;
  font-size: 32px;
  font-weight: 400;
  line-height: 48px; /* 150% */
  max-width: 505px;
  text-align: center;
`;

export const Button = styled.div`
  width: 244px;
  height: 73px;
  border-radius: 30px;
  color: #fff;
  background-color: #5d48df;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  cursor: pointer;

  &:hover {
    background-color: #4c3dd9;
  }
`;
