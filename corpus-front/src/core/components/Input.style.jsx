import styled from "styled-components";

export const InputStyled = styled.input`
  width:25vw;
  height: 48px;
  margin-bottom: 3vh;
  left: calc(50% - 336px/2);
  top: 23px;
  padding: 5px;
  color:#a9b3ac; 
  border: none;
  background: #2A2B2A;
  border-radius: 8px;
  &:focus {
    background-size: 100% 2px, 100% 1px;
    outline: 0 none;
    transition-duration: 0.3s;
    color: #EBF5EE;
  }
`;

const LabelStyled = styled.label`
  color: #EBF5EE;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputComponent = ({ labelText }) => {
  return (
    <Container>
      <LabelStyled>{labelText}</LabelStyled>
      <InputStyled />
    </Container>
  );
};

export default InputComponent;
