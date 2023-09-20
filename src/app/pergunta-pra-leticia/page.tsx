"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

// COMPONENTS
import { SlideSide } from "@/components/slide-side";

// STYLES
import { SlideTop } from "@/components/slide-top";
import { Container } from "@/styles/pergunta";

export default function Slides() {
  const [index, setIndex] = useState(0);

  const largestIndex = 4;

  const onClickNext = () => {
    if (index === largestIndex) {
      return;
    }
    setIndex(index + 1);
  };

  return (
    <Container>
      {index === 0 && (
        <SlideSide
          text="VOCÊ CHEGOU DE FORMA SUBITA E ME ACERTOU COMO UM RASENGAN..."
          imagePath="/rasengan.gif"
          imageStyle={{ width: 618, height: 319 }}
          onClickNext={onClickNext}
        />
      )}

      {index === 1 && (
        <SlideSide
          text="ME ENCANTEI PELO SEU JEITINHO CORVINO DE VER O MUNDO"
          imagePath="/ravenclaw.png"
          imageStyle={{ border: "none" }}
          onClickNext={onClickNext}
        />
      )}

      {index === 2 && (
        <SlideTop
          text="COM A SUA NERDICE QUE PARECE UM POUCO COM A MINHA"
          imagePath="/pam-jim.png"
          imageStyle={{ width: 618, height: 319 }}
          onClickNext={onClickNext}
        />
      )}

      {index === 3 && (
        <SlideTop
          text="CERTAMENTE JÁ SOMOS MAIS QUE AMIGOS"
          imagePath="/friends.png"
          onClickNext={onClickNext}
        />
      )}

      {index === 4 && (
        <SlideTop
          text="VOCê É A MELHOR COMPANHIA PARA TODAS AS HORAS"
          imagePath="/us.png"
          onClickNext={onClickNext}
        />
      )}

      <audio src="/fireflies.mp3" autoPlay={true} loop={true} />
    </Container>
  );
}
