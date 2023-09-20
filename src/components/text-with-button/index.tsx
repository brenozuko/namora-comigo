"use client";
import Image from "next/image";

// STYLES
import { Button, Container, Text, Wrapper } from "./slide-top-styled";

interface TextWithButtonProps {
  text: string;
  onClickNext: () => void;
}
export const TextWithButton = ({
  text,
  onClickNext,
}: TextWithButtonProps) => {
  return (
    <Wrapper>
      <Image
        src="/two-hearts.png"
        alt="hearts"
        width={1208}
        height={114}
        style={{ marginBottom: 20 }}
      />

      <Container>
        <Text>{text}</Text>

        <Button onClick={onClickNext}>NEXT</Button>
      </Container>

      <Image src="/two-hearts.png" alt="hearts" width={1208} height={114} />
    </Wrapper>
  );
};
