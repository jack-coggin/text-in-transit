import styled from "styled-components";
import { keyframes } from "styled-components";

const scrollAnimation = keyframes`
    -500% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-200%);
    }
`;

const StyledScrollerContainer = styled.div`
  margin: 0 auto;
  text-align: end;
  width: ${(props) => props.width}ch;
  max-width: ${(props) => props.width}ch;
  white-space: nowrap;
  min-height: 200px;

  overflow: hidden;
  border: 1px solid black;
  font-size: 50px;
`;

const StyledScrollerText = styled.p`
  font-size: 50px;
  transform: translateX(100%);

  animation: ${scrollAnimation} ${(props) => props.time}s linear infinite;
  font-family: monospace;
  text-transform: full-width;

  color: #00ff00;
`;

const ScrollerDisplay = (props) => {
  return (
    <>
      <StyledScrollerContainer width={props.width}>
        <StyledScrollerText
          time={props.time}
          width={props.width}
          text={props.text}
        >
          {props.text}
        </StyledScrollerText>
      </StyledScrollerContainer>
    </>
  );
};

export default ScrollerDisplay;
