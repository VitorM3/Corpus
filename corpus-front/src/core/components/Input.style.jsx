import styled from "styled-components";

export const InputStyled = styled.input`
  width: 25vw;
  height: 48px;
  margin-bottom: 3vh;
  left: calc(50% - 336px / 2);
  top: 23px;
  padding: 5px;
  color: #a9b3ac;
  border: none;
  background: #2a2b2a;
  border-radius: 8px;
  &:focus {
    background-size: 100% 2px, 100% 1px;
    outline: 0 none;
    transition-duration: 0.3s;
    color: #ebf5ee;
  }
`;

const LabelStyled = styled.label`
  color: #ebf5ee;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
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
