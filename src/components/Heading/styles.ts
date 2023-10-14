import styled from "styled-components";
import mediaQueries from "../../styles/mediaQueries";

const handleColorType = (color: any) => {
  switch (color) {
    case "primary":
      return "black";
    case "secondary":
      return "#582C83";
    case "white":
      return "white";
  }
};

const handleAlignType = (align: any) => {
  switch (align) {
    case "left":
      return "left";
    case "center":
      return "center";
    case "right":
      return "right";
  }
}

const handleSizeType = (size: any) => {
  switch (size) {
    case "h1":
      return "5rem";
    case "h2":
      return "4.8rem";
    case "h3":
      return "3.2rem";
    case "h4":
      return "1.8rem";
    case "h5":
      return "1.6rem";
    case "h6":
      return "1.4rem";
  }
}

export const Text = styled.div`
    font-family: Tilt Neon;
    color: ${({ color }) => handleColorType(color)};
    text-align: ${({ alignment }) => handleAlignType(alignment)};
    font-size: ${({ size }) => handleSizeType(size)};
`;