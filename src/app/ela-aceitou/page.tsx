"use client";
import { ButtonPurple } from "@/styles/buttons";
import { Container, Text } from "@/styles/ela-aceitou";
import Image from "next/image";

export default function Home() {
  const date = new Date();

  const monthDayNow = date.getDate();
  const monthNow = date.getMonth() + 1;

  const onClickBack = () => {
    window.location.href = "/";
  };
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
        {monthDayNow}/0{monthNow}/2023
      </Text>

      <ButtonPurple style={{marginTop: 85}} onClick={onClickBack}>GO BACK</ButtonPurple>

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
