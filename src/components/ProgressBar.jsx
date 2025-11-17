import styled from "styled-components";

const ProgressBarEl = styled.div`
  width: ${({ Barwidth }) => Barwidth || "0%"};
  height: 100%;
  background-color: ${({ value }) =>
    value ? `hsl(${value},81%,58%)` : "lightgrey"};
`;
export default function ProgressBar({ ...rest }) {
  return <ProgressBarEl {...rest}></ProgressBarEl>;
}
