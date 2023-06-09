import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;

  div {
    display: flex;
    row-gap: 0.6rem;
    column-gap: 1.5rem;
  }

  footer {
    margin-top: auto;
  }
`;
