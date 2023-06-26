import { InputHTMLAttributes, forwardRef } from "react";
import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isTextArea?: boolean;
  errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isTextArea, errorMessage, ...props }, ref) => {
    return (
      <S.Container>
        <S.InputWrapper
          {...props}
          as={isTextArea ? "textarea" : "input"}
          ref={ref}
        />
        {errorMessage && <S.ErrorText>{errorMessage}</S.ErrorText>}
      </S.Container>
    );
  }
);
