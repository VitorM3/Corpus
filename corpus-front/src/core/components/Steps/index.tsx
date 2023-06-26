import { ItemProps } from '../Modal';
import * as S from './styles';


interface StepProps {
    current: number;
    items: ItemProps[];
}

export const Steps = ({
    current,
    items
}: StepProps) => {
    return (
        <S.Steps>
            {
                items.map((item, index) => {
                    return (
                        <S.Item
                            key={index}
                            active={item.step === current}
                        >
                            {item.step}
                        </S.Item>
                    )
                })
            }
        </S.Steps>
    )
}

