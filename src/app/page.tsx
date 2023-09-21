"use client";
import Image from "next/image";
import { useState } from "react";

// STYLES
import { Container } from "@/styles/containers";
import { PressStart, SaidYesContainer, TextSaidYes } from "@/styles/home";

export default function Home() {
  const [saidYes, setSaidYes] = useState(true);

  const date = new Date();

  const monthDayNow = date.getDate();
  const monthNow = date.getMonth() + 1;

  

  return (
    <Container>
      {saidYes && (
        <SaidYesContainer>
          <Image style={{marginBottom: 20}} src="/hp8bits.png" width={234} height={249} alt="HP8bits" />

          <TextSaidYes>ELA ACEITOU EM: </TextSaidYes>
          <TextSaidYes>
            {monthDayNow}/0{monthNow}/2023
          </TextSaidYes>
        </SaidYesContainer>
      )}

      <a style={{ textDecoration: "none" }} href="/pergunta-pra-leticia">
        <PressStart>APERTE START</PressStart>
      </a>

      <audio src="/hp.mp3" autoPlay={true} loop={true} />
    </Container>
  );
}
