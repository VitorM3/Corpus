import styled from "styled-components";

export const SelectWrapper = styled.select`
  background-color: ${({ theme }) => theme.colors.gray[80]};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  border-right: 0.5rem solid transparent;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
