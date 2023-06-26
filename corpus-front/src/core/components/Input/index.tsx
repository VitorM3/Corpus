import { InputHTMLAttributes } from "react";
import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isTextArea?: boolean
}

export const Input = ({
    isTextArea,
    ...props
}: InputProps) => {
    return (
        <S.InputWrapper
            {...props}
            as={isTextArea ? "textarea" : "input"}
        />
    )
}