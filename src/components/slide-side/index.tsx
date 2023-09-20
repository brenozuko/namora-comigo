"use client"
import Image from "next/image";

// STYLES
import {
  Button,
  Container,
  Content,
  Slide,
  SlideImage,
  Text,
  Wrapper,
} from "./slide-side-styled";

interface SlideSideProps {
  text: string;
  imagePath: string;
  imageStyle?: any;
  onClickNext: () => void;
}
export const SlideSide = ({
  text,
  imagePath,
  imageStyle,
  onClickNext,
}: SlideSideProps) => {
  return (
    <Wrapper>
      <Image
        src="/hearts-desk-top.png"
        alt="hearts"
        width={1280}
        height={171}
        style={{ marginBottom: 100 }}
      />

      <Container>
        <Content>
          <Text>{text}</Text>

          <Button onClick={onClickNext}>NEXT</Button>
        </Content>

        <SlideImage>
          <Slide style={imageStyle} src={imagePath} />
        </SlideImage>
      </Container>

      <Image
        src="/hearts-desk-bottom.png"
        alt="hearts"
        width={1280}
        height={171}
        style={{ marginTop: 100 }}
      />
    </Wrapper>
  );
};
