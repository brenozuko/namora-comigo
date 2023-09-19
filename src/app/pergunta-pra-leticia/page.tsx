/* eslint-disable @next/next/no-img-element */

// COMPONENTS
import { SlideSide } from "@/components/slide-side";

// STYLES
import { Container } from "@/styles/pergunta";

export default function Slides() {
  return (
    <Container>
      <SlideSide
        textDirection="left"
        text="VOCÊ CHEGOU DE FORMA SUBITA E ME ACERTOU COMO UM RASENGAN..."
        imagePath="/rasengan.gif"
      />
    </Container>
  );
}
