"use client";
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
} from "./slide-top-styled";

interface SlideTopProps {
  text: string;
  imagePath: string;
  imageStyle?: any;
  onClickNext: () => void;
}
export const SlideTop = ({
  text,
  imagePath,
  imageStyle,
  onClickNext,
}: SlideTopProps) => {
  return (
    <Wrapper>
      <Image
        src="/two-hearts.png"
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
        src="/two-hearts.png"
        alt="hearts"
        width={1280}
        height={171}
        style={{ marginTop: 100 }}
      />
    </Wrapper>
  );
};
