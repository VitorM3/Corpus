import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const StyledInput = styled.input`
  width: 25vw;
  height: 48px;
  margin-bottom: 3vh;
  padding: 5px;
  color: #a9b3ac;
  border: none;
  background: #2a2b2a;
  border-radius: 8px;
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-90%);
`;

const EyeIcon = styled(FaEye)`
  color: #5E6661;
  font-size: 20px;
`;

const EyeSlashIcon = styled(FaEyeSlash)`
  color: #5E6661;
  font-size: 20px;
`;

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PasswordInputWrapper>
      <StyledInput
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
      />
      <ToggleButton type="button" onClick={togglePasswordVisibility}>
        {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
      </ToggleButton>
    </PasswordInputWrapper>
  );
};

export default PasswordInput;
