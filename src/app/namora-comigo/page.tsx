import { Container } from "@/styles/containers";
import { PressStart } from "@/styles/home";

export default function NamoraComigo() {
  return (
    <Container>
      <a style={{ textDecoration: "none" }} href="/pergunta-pra-leticia">
        <PressStart>APERTE START</PressStart>
      </a>

      <audio src="/hp.mp3" autoPlay={true} loop={true} />
    </Container>
  );
}
