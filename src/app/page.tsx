"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// STYLES
import { Container } from "@/styles/containers";
import { PressStart, SaidYesContainer, TextSaidYes } from "@/styles/home";

// SERVICES
import getData from "@/firebase/firestore/get-data";

export default function Home() {
  const [monthDay, setMonthDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [saidYes, setSaidYes] = useState<boolean>(false);

  const onPageLoad = async () => {
    const { result, error } = await getData("she", "said-yes");

    if (error) {
      return console.log(error);
    }

    const date = new Date(result?.data()?.date.seconds * 1000);

    setMonthDay(date.getDate());
    setMonth(date.getMonth() + 1);
    setYear(date.getFullYear());
    setSaidYes(result?.data()?.accept);
  };

  useEffect(() => {
    onPageLoad();
  }, []);

  return (
    <Container>
      {saidYes && (
        <SaidYesContainer>
          <Image
            style={{ marginBottom: 20 }}
            src="/hp8bits.png"
            width={234}
            height={249}
            alt="HP8bits"
          />

          <TextSaidYes>ELA ACEITOU EM: </TextSaidYes>
          <TextSaidYes>
            {monthDay}/0{month}/{year}
          </TextSaidYes>
        </SaidYesContainer>
      )}

      <a style={{ textDecoration: "none" }} href="/pergunta-pra-leticia">
        <PressStart>APERTE START</PressStart>
      </a>

      {saidYes && <audio src="/hp.mp3" autoPlay={true} loop={true} />}
    </Container>
  );
}
