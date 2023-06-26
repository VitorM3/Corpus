import { FormHTMLAttributes, useEffect, useState } from "react";

import * as S from "./styles";
import { Input } from "../../../Input";
import { Doctor, Patient } from "../../../../../types";
import { Footer, StepButton } from "../../styles";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormData } from "../../../../../context/ScheduleFormContext";
import { ErrorText } from "../../../Input/styles";

interface EquipmentProps extends FormHTMLAttributes<HTMLFormElement> {
  prevStep: () => void;
  patients?: Patient[];
  doctors?: Doctor[];
}

type Equipments = {
  equipment: string;
  quantity: number;
};

export const Equipment = ({ prevStep, ...props }: EquipmentProps) => {
  const { data } = useFormData();
  const [equipmentCount, setEquipmentCount] = useState(0);
  const [equipments, setEquipments] = useState<Equipments[]>([]);
  console.log("🚀 ~ file: index.tsx:23 ~ Equipment ~ equipments:", equipments);

  const thirdFormSchema = z.object({
    equipment: z.string().nonempty("Campo obrigatório"),
    equipmentCount: z.number().min(1, "A quantidade deve ser maior que 0"),
  });

  type ThirdFormType = z.infer<typeof thirdFormSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useForm<ThirdFormType>({
    resolver: zodResolver(thirdFormSchema),
    mode: "all",
  });

  const handleCounterSubmit = (count: number) => {
    setValue("equipmentCount", count);
  };

  const onSubmit = (values: ThirdFormType) => {
    const completlyScheduleForm = {
      ...data,
      ...values,
    };
    alert(JSON.stringify(completlyScheduleForm));
  };

  useEffect(() => {
    // get equipamentos
  }, []);

  const incrementEquipmentQuantity = () => {
    setEquipmentCount((prevCount) => {
      const newCount = prevCount + 1;
      handleCounterSubmit(newCount);
      return newCount;
    });
  };

  const decrementEquipmentQuantity = () => {
    if (equipmentCount === 0) {
      return;
    } else {
      setEquipmentCount((prevCount) => {
        const newCount = prevCount - 1;
        handleCounterSubmit(newCount);
        return newCount;
      });
    }
  };

  const addEquipment = () => {
    setEquipments((prevstate) => [
      ...prevstate,
      { equipment: getValues("equipment"), quantity: equipmentCount },
    ]);
  };

  const removeEquipment = (index: number) => {
    setEquipments((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(index, 1);
      return newItems;
    });
  };

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)} {...props}>
      <S.Row>
        <div>
          <Input
            placeholder="Pesquisar equipamento"
            defaultValue={data?.equipment}
            errorMessage={errors.equipment?.message}
            {...register("equipment")}
            style={{
              width: "275px",
            }}
          />
          <S.EquipmentRowCount>
            <S.IconButton type="button" onClick={incrementEquipmentQuantity}>
              +
            </S.IconButton>
            {equipmentCount}
            <S.IconButton type="button" onClick={decrementEquipmentQuantity}>
              -
            </S.IconButton>
            {errors.equipmentCount && (
              <ErrorText>{errors.equipmentCount.message}</ErrorText>
            )}
          </S.EquipmentRowCount>
        </div>
        <StepButton type="button" onClick={addEquipment}>
          Adicionar
        </StepButton>
      </S.Row>
      <div>
        <S.EquipmentsList>
          {equipments.map((equip, index) => (
            <S.Row key={index}>
              <div>
                <S.EquipmentName>{equip.equipment}</S.EquipmentName>
                <S.EquipmentQuantity>
                  {equip.quantity} unidades
                </S.EquipmentQuantity>
              </div>
              <S.RemoveButton
                onClick={() => removeEquipment(index)}
                type="button"
              >
                Remover
              </S.RemoveButton>
            </S.Row>
          ))}
        </S.EquipmentsList>
      </div>
      <Footer>
        <StepButton buttonType="back" onClick={prevStep}>
          Passo Anterior
        </StepButton>
        <StepButton
          disabled={isValid ? false : true && !equipmentCount}
          type="submit"
        >
          Cadastrar consulta
        </StepButton>
      </Footer>
    </S.Container>
  );
};
