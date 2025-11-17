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
      <Section color={"10"} width="100%">
        M
      </Section>
      <Section color={"9"} width="80%">
        T
      </Section>
      <Section color={"8"} width="70%">
        W
      </Section>
      <Section color={"7"} width="60%">
        T
      </Section>
      <Section color={"6"} width="40%">
        F
      </Section>
      <Section color={"5"} width="25%">
        S
      </Section>
      <Section color={"4"} width="10%">
        S
      </Section>
    </>
  );
}

// TO DO:
// make a ProgressBar component
// pass through a progress value
// make width dependant on progress value
// make color dependant on progress value
