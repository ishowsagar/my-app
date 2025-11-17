import styled from "styled-components";
import ProgressBar from "./ProgressBar";

// * Custom rendering elements based on style applied o it */
const WeekdayTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  border-right: solid 3px lightgrey;
`;

// ! extended style off instance of styled comp by inherting all props

const WeekendTitle = styled(WeekdayTitle)`
  background: #283048; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #859398,
    #283048
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #859398, #283048);
`;

// ! Seperate container for progres bar to have proportional progress % values
const ProgressBarSection = styled.div`
  width: 250px;
`;

const StyledSection = styled.section`
  background-color: #ffffff;
  border: solid 3px grey;
  margin: 4px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: left;
  font-size: 40px;
  color: #ff6961;
`;

export default function Section({ children, width }) {
  return (
    <StyledSection>
      {children.includes("S") ? (
        <WeekendTitle>{children}</WeekendTitle>
      ) : (
        <WeekdayTitle>{children}</WeekdayTitle>
      )}
      <ProgressBarSection>
        <ProgressBar value="338" width={width} />
      </ProgressBarSection>
    </StyledSection>
  );
}

//TO DO:
// extend the WeekdayTitle component to make a WeekendTitle component
// use the WeekendTitle if the text prop is an 'S'
