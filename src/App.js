import styled from "styled-components";
import Section from "./components/Section";

const Title = styled.h1`
  text-align: center;
  font-family: sans-serif;
  color: #b19cd9;
`;

export default function App() {
  return (
    <>
      <Title>Progress Tracker</Title>
      <Section Barwidth="100%">M</Section>
      <Section Barwidth="80%">T</Section>
      <Section Barwidth="70%">W</Section>
      <Section Barwidth="60%">T</Section>
      <Section Barwidth="40%">F</Section>
      <Section Barwidth="25%">S</Section>
      <Section Barwidth="10%">S</Section>
    </>
  );
}

// TO DO:
// make a ProgressBar component
// pass through a progress value
// make width dependant on progress value
// make color dependant on progress value
