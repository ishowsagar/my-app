import styled from "styled-components";
import Section from "./components/Section";

const Title = styled.h1`
  text-align: center;
  font-family: sans-serif;
  color: #2c3e50;
  border-bottom: 2px solid #2c3e50;
`;

export default function App() {
  return (
    <>
      <Title>Progress Tracker🎯</Title>
      <Section width="100%">M</Section>
      <Section width="80%">T</Section>
      <Section width="70%">W</Section>
      <Section width="60%">T</Section>
      <Section width="40%">F</Section>
      <Section width="25%">S</Section>
      <Section width="10%">S</Section>
    </>
  );
}

// TO DO:
// make a ProgressBar component
// pass through a progress value
// make width dependant on progress value
// make color dependant on progress value
