import { SelectHTMLAttributes } from "react";
import * as S from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: {
        value: string | number;
        label: string;
        isPlaceholder?: boolean
    }[]
}

export const Select = ({
    options,
    ...props
}: SelectProps) => {
    return (
        <S.SelectWrapper {...props} defaultValue="default">
            {
                options.map(({
                    isPlaceholder,
                    value,
                    label
                }) => (
                    <option 
                        disabled={isPlaceholder} 
                        hidden={isPlaceholder}
                        value={value}
                    >
                        {label}
                    </option>
                ))
            }
        </S.SelectWrapper>
    )
}