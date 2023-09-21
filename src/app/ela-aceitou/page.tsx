"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// SERVICES
import getData from "@/firebase/firestore/get-data";

// STYLES
import { ButtonPurple } from "@/styles/buttons";
import { Container, Text } from "@/styles/ela-aceitou";

export default function Home() {
  const [monthDay, setMonthDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);

  const onClickBack = () => {
    window.location.href = "/";
  };

  const onPageLoad = async () => {
    const { result, error } = await getData("she", "said-yes");

    if (error) {
      return console.log(error);
    }

    const date = new Date(result?.data()?.date.seconds * 1000);

    setMonthDay(date.getDate());
    setMonth(date.getMonth() + 1);
    setYear(date.getFullYear());
  };

  useEffect(() => {
    onPageLoad();
  }, []);

  return (
    <Container>
      <Image
        src="/two-hearts.png"
        alt="hearts"
        width={1208}
        height={114}
        style={{ marginBottom: 200 }}
      />

      <Text> O JOGO COMEÇOU EM: </Text>
      <Text>
        {monthDay}/0{month}/{year}
      </Text>

      <ButtonPurple style={{ marginTop: 85 }} onClick={onClickBack}>
        GO BACK
      </ButtonPurple>

      <Image
        src="/two-hearts.png"
        alt="hearts"
        width={1208}
        height={114}
        style={{ marginTop: 200 - 85 }}
      />

      <audio src="/yay.mp3" autoPlay={true} loop={true} />
    </Container>
  );
}
