import Image from "next/image";

// STYLES
import {
  Button,
  Container,
  Content,
  Slide,
  SlideImage,
  Text,
} from "./slide-side-styled";

interface SlideSideProps {
  textDirection: "left" | "right";
  text: string;
  imagePath: string;
}
export const SlideSide = ({
  textDirection,
  text,
  imagePath,
}: SlideSideProps) => {
  return (
    <div>
      <Image
        src="/hearts-desk-top.png"
        alt="hearts"
        width={1366}
        height={171}
        style={{ marginBottom: 100 }}
      />

      <Container>
        <Content>
          <Text>{text}</Text>

          <Button>NEXT</Button>
        </Content>

        <SlideImage>
          <Slide src={imagePath} />
        </SlideImage>
      </Container>

      <Image
        src="/hearts-desk-bottom.png"
        alt="hearts"
        width={1366}
        height={171}
        style={{ marginTop: 100 }}
      />
    </div>
  );
};
