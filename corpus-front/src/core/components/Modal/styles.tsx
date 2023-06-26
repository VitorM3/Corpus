import styled from "styled-components";

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  buttonType?: "back" | "next";
  disabled?: boolean;
};

export const Overlay = styled.div<{
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;
export const Container = styled.div`
  min-width: 830px;
  height: 480px;
  background-color: ${({ theme }) => theme.colors.gray[90]};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 16px;
  grid-template-areas:
    "header"
    "content"
    "footer";
  padding: 2rem;
  border-radius: 1rem;
`;

export const Content = styled.main`
  grid-area: content;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;

  grid-area: header;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.75rem;
  font-weight: 500;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  grid-area: footer;
`;

export const StepButton = styled.button<ButtonProps>`
  background-color: ${({ buttonType, disabled, theme }) =>
    disabled
      ? theme.colors.gray[80]
      : buttonType === "back"
      ? theme.colors.gray[80]
      : theme.colors.orange};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray[60] : theme.colors.white};
  font-weight: 600;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
