"use client";
import { useRef, useState } from "react";

// STYLES
import { Container } from "@/styles/containers";
import {
  ButtonNo,
  ButtonYes,
  ButtonsContainer,
  Text,
  Wrapper,
} from "@/styles/namora-comigo";
import Image from "next/image";

// SERVICES
import addData from "@/firebase/firestore/add-data";
import getData from "@/firebase/firestore/get-data";

export default function NamoraComigo() {
  const [hover, setHover] = useState(false);

  const buttonNo = useRef<HTMLDivElement>(null);

  const mouseEnterNo = () => {
    setHover(true);

    if (buttonNo.current) {
      buttonNo.current.style.top = `${Math.random() * 100}%`;
      buttonNo.current.style.left = `${Math.random() * 100}%`;
      buttonNo.current.style.position = "absolute";
    }
  };

  const checkIfAccepted = async () => {
    const { result, error } = await getData("she", "said-yes");

    if (error) {
      return console.log(error);
    }

    return result?.data()?.accept;
  };

  const onClickYes = async () => {
    const data = {
      accept: true,
      date: new Date(),
    };

    if (await checkIfAccepted()) {
      return (window.location.href = "/ela-aceitou");
    }

    const { error } = await addData("she", "said-yes", data);

    if (error) {
      return console.log(error);
    }

    window.location.href = "/ela-aceitou";
  };
  return (
    <Wrapper>
      <Container>
        <Image
          src="/two-hearts.png"
          alt="hearts"
          width={1208}
          height={114}
          style={{ marginBottom: 200 }}
        />

        <Text>LETICIA, NAMORA COMIGO?</Text>

        <ButtonsContainer
          style={{ justifyContent: hover ? "center" : "space-between" }}
        >
          <ButtonYes onClick={onClickYes}>SIM</ButtonYes>
          <ButtonNo onMouseEnter={mouseEnterNo} ref={buttonNo}>
            NÃO
          </ButtonNo>
        </ButtonsContainer>

        <Image
          src="/two-hearts.png"
          alt="hearts"
          width={1208}
          height={114}
          style={{ marginTop: 200 }}
        />

        <audio src="/prank.mp3" autoPlay={true} loop={true} />
      </Container>
    </Wrapper>
  );
}
