import { SelectHTMLAttributes, forwardRef } from "react";
import * as S from "./styles";
import { ErrorText } from "../Input/styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: {
    value: string | number;
    label: string;
    isPlaceholder?: boolean;
  }[];
  errorMessage?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, errorMessage, ...props }, ref) => {
    return (
      <S.Container>
        <S.SelectWrapper {...props} defaultValue="default" ref={ref}>
          {options.map(({ isPlaceholder, value, label }) => (
            <option
              disabled={isPlaceholder}
              hidden={isPlaceholder}
              value={value}
              key={value}
            >
              {label}
            </option>
          ))}
        </S.SelectWrapper>
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </S.Container>
    );
  }
);
