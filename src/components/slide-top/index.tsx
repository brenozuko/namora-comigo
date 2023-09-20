"use client";
import Image from "next/image";

// STYLES
import {
  Button,
  Container,
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
        width={1208}
        height={114}
        style={{marginBottom: 20}}
      />

      <Container>
        <SlideImage>
          <Slide style={imageStyle} src={imagePath} />
        </SlideImage>

        <Text>{text}</Text>

        <Button onClick={onClickNext}>NEXT</Button>
      </Container>

      <Image
        src="/two-hearts.png"
        alt="hearts"
        width={1208}
        height={114}
      />
    </Wrapper>
  );
};
