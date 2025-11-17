// import Section from "./components/Section";
import styled from "styled-components";

// creating a specific style, that will be applied to every h1 that will be replaced by var Title
// !IMPORTANT - write css normally without following jsx rules
const Title = styled.h1`
  color: black;
  font-weight: bold;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: skyblue;
  border-radius: 15px;
`;

const CenterDiv = styled.div`
  max-width: 470px;
  margin: 50px auto;
`;

const Button = styled.button`
  background-color: white;
  padding: 4px;
  border-radius: 4px;
  margin-block-start : 25px;
`;

function App() {
  return (
    <>
    <CenterDiv>
      
      <Section>
        {/* we are sayig here --> im using Title as var storing styling for h1 */}
        <Title>Hello World</Title>
      </Section>
      <Button>CLick me</Button>
      <Button>CLick me</Button>
    </CenterDiv>
    </>
  );
}

export default App;

//Mini Challenge
// In this mini challenge I would like you to help me out for the next section by
// adding two plain white buttons with the words 'Click me' in each below the word
// Section. Please use the approach we have learnt today.
// We will need this for the next scrim.
