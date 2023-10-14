import styled from "styled-components";

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
    case "large":
      return "1.8rem";
    case "medium":
      return "1.6rem";
    case "size":
      return "1.4rem";
  }
}

const handleWeightType = (weight: any) => {
    switch (weight) {
        case "normal":
            return 300;
        case "light":
            return 400;
        case "semibold":
            return 600;
        case "bold":
            return 800;
    }
}

export const Text = styled.p`
    font-family: Poiret One;
    color: ${({ color }) => handleColorType(color)};
    text-align: ${({ alignment }) => handleAlignType(alignment)};
    font-size: ${({ size }) => handleSizeType(size)};
    font-weight: ${({ weight }) => handleWeightType(weight)};
`;