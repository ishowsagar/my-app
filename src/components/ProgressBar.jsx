import styled from "styled-components";

const ProgressBarEl = styled.div`
  width: ${({ width }) => width || "0%"};
  height: 100%;
  background-color: ${({ color }) => {
    switch (color) {
      case "10":
        return "#FF6B6B";
      case "9":
        return "#FFDFBA";
      case "8":
        return "#FF6B9D";
      case "7":
        return "#C9A0DC";
      case "6":
        return "#B5DEFF";
      case "5":
        return "#FF9CEE";
      case "4":
        return "#79A8FF";
      default:
        return "#FFB3BA";
    }
  }};
`;
export default function ProgressBar({ ...rest }) {
  return <ProgressBarEl {...rest}></ProgressBarEl>;
}
