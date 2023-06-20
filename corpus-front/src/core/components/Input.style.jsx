import React, { useState } from 'react';
import styled from "styled-components";
import { FaUser, FaEyeSlash } from "react-icons/fa";


export const InputStyled = styled.input`
  width: 25vw;
  height: 48px;
  margin-bottom: 3vh;
  padding: 5px;
  color: #a9b3ac;
  border: none;
  background: #2a2b2a;
  border-radius: 8px;
  position: relative; /* Adicionando position: relative */
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
  align-items: flex-start; /* Alinhar os elementos à esquerda */
`;

const InputContainer = styled.div`
  position: relative;
`;

const IconContainer = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-90%);
`;




const InputComponent = ({ labelText, type, icon: Icon }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    +setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <InputContainer>
      <InputStyled type={type} />
      <IconContainer>{Icon && <Icon size={20} />}</IconContainer>
    </InputContainer>
  );
};

export default InputComponent;
