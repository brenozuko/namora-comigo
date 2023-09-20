import { Container } from "@/styles/containers";
import { PressStart } from "@/styles/home";

export default function Home() {
  return (
    <Container>
      <a style={{ textDecoration: "none" }} href="/pergunta-pra-leticia">
        <PressStart>APERTE START</PressStart>
      </a>

      <audio src="/hptheme.mp3" autoPlay={true} loop={true} />
    </Container>
  );
}
