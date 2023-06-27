import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;

  footer {
    margin-top: auto;
  }
`;

export const InputRow = styled.div`
  display: inline-flex;
  gap: 1.5rem;
  justify-content: stretch;
`;
