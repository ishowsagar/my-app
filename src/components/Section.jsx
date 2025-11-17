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

const CurrentDayProgressBar = styled(ProgressBar)`
  background-color: #1b4332;
  box-shadow: 0px 0px 20px #1b4332, 0 0 20px #1b4332, 0 1px 10px #1b4332, 0 0 40px #1b4332;
`;

// fetching current live-date  and displaying it live-on-the page site of our React app
const date = new Date().toLocaleDateString("en-us", { weekday: "long" });
// * slicing it to match children for condtional rendering
const day = date.slice(0, 1);
// console.log(day);

export default function Section({ children, width, ...rest }) {
  return (
    <StyledSection>
      {children.includes("S") ? (
        <WeekendTitle>{children}</WeekendTitle>
      ) : (
        <WeekdayTitle>{children}</WeekdayTitle>
      )}
      <ProgressBarSection>
        {day === children ? (
          <CurrentDayProgressBar {...rest} value="338" width={width} />
        ) : (
          <ProgressBar {...rest} value="338" width={width} />
        )}
      </ProgressBarSection>
    </StyledSection>
  );
}

//TO DO:
// extend the WeekdayTitle component to make a WeekendTitle component
// use the WeekendTitle if the text prop is an 'S'
