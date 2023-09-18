import { Container, PressStart } from "@/styles/home";

export default function Home() {
  return (
    <Container>
      <a style={{ textDecoration: "none" }} href="/slides">
        <PressStart>APERTE START</PressStart>
      </a>
    </Container>
  );
}
