import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const InputWrapper = styled.input`
  background-color: ${({ theme }) => theme.colors.gray[80]};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  border-right: 0.5rem solid transparent;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[60]};
    font-weight: 600;
  }
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-weight: 500;
  font-size: small;
`;
