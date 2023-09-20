"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

// COMPONENTS
import { SlideSide } from "@/components/slide-side";

// STYLES
import { Container } from "@/styles/pergunta";

export default function Slides() {
  const [index, setIndex] = useState(0);

  const onClickNext = () => {
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
    </Container>
  );
}
