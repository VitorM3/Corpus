import styled from 'styled-components'

const PrimaryButton = styled.button`
  background: #FE6A0F;
  border-radius: 8px;
  width:  ${(prop) => prop.elementWidth};
  height: ${(prop) => prop.elementheight};
  margin: ${(prop) => prop.elementMargin};
  gap: 8px; 
  padding:14px, 24px, 14px, 24px;
  color: #EBF5EE;
  border: none;

  &:hover{
    background: #af4a0a;
    cursor: pointer;
  }
`

export default PrimaryButton;