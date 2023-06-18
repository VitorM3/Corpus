import styled from "styled-components";

const PrimaryButton = styled.button`
  background: #fe6a0f;
  border-radius: 8px;
  width: ${(prop) => prop.elementWidth ?? "100%"};
  height: ${(prop) => prop.elementheight ?? ""};
  margin: ${(prop) => prop.elementMargin ?? ""};
  gap: 8px;
  padding: 0px, 16px, 0px, 16px;
  color: #ebf5ee;
  border: none;

  &:hover {
    background: #af4a0a;
    cursor: pointer;
  }
`;

export default PrimaryButton;
