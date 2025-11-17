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
      <Section colorBar={'10'} width="100%">M</Section>
      <Section colorBar={'9'} width="80%">T</Section>
      <Section colorBar={'8'} width="70%">W</Section>
      <Section colorBar={'7'} width="60%">T</Section>
      <Section colorBar={'6'} width="40%">F</Section>
      <Section colorBar={'5'} width="25%">S</Section>
      <Section colorBar={'4'} width="10%">S</Section>
    </>
  );
}

// TO DO:
// make a ProgressBar component
// pass through a progress value
// make width dependant on progress value
// make color dependant on progress value