import { FormHTMLAttributes, useEffect, useState } from "react";

import * as S from "./styles";
import { Input } from "../../../Input";
import { Doctor, Option, Patient, Tool } from "../../../../../types";
import { Footer, StepButton } from "../../styles";
import { z } from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormData } from "../../../../../context/ScheduleFormContext";
import { ErrorText } from "../../../Input/styles";
import api from "../../../../../services/api";
import { Select } from "../../../Select";

interface EquipmentProps extends FormHTMLAttributes<HTMLFormElement> {
  prevStep: () => void;
  closeModal: () => void;
  patients?: Patient[];
  doctors?: Doctor[];
}

export const Equipment = ({ prevStep, closeModal, ...props }: EquipmentProps) => {
  const { data } = useFormData();
  const [toolId, setToolId] = useState<number>(0);
  const [equipmentCount, setEquipmentCount] = useState(0);
  const [tools, setTools] = useState<Tool[]>([]);

  const thirdFormSchema = z.object({
    tools: z
      .array(
        z.object({
          toolId: z.number().min(1, "A quantidade deve ser maior que 0"),
          qtd: z.number().min(1, "A quantidade deve ser maior que 0"),
        })
      )
      .nonempty("Deve haver ao menos um equipamento a ser utilizado"),
  });

  type ThirdFormType = z.infer<typeof thirdFormSchema>;

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<ThirdFormType>({
    resolver: zodResolver(thirdFormSchema),
    mode: "all",
  });

  const { append, fields, remove } = useFieldArray({
    name: "tools",
    control,
  });

  useEffect(() => {
    const getInventory = async () => {
      try {
        const { data } = await api.get("/inventory", {
          params: {
            max: 50,
            page: 1,
          },
        });

        setTools(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getInventory();
  }, []);

  const formattedTools = tools?.map((tool) => ({
    value: tool.id,
    label: tool.name,
  }));

  const onSubmit = async (values: ThirdFormType) => {
    const completlyScheduleForm = {
      ...data,
      ...values,
    };
    console.log(
      "🚀 ~ file: index.tsx:53 ~ onSubmit ~ completlyScheduleForm:",
      completlyScheduleForm
    );

    try {
      const response = await api.post(
        "/attendance",
        completlyScheduleForm
      );

      closeModal()

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const incrementEquipmentQuantity = () => {
    setEquipmentCount((prevCount) => {
      const newCount = prevCount + 1;
      return newCount;
    });
  };

  const decrementEquipmentQuantity = () => {
    if (equipmentCount === 0) {
      return;
    } else {
      setEquipmentCount((prevCount) => {
        const newCount = prevCount - 1;
        return newCount;
      });
    }
  };

  const addEquipment = () => {
    append({ toolId: toolId, qtd: equipmentCount });
  };

  const findToolById = (id: number): string | undefined => {
    const tool = tools.find((tool) => tool.id === id);

    return tool?.name;
  };

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)} {...props}>
      <S.Row>
        <div>
          <Select
            options={[
              {
                value: "default",
                label: "Selecione um equipamento",
                isPlaceholder: true,
              },
              ...(formattedTools as Option[]),
            ]}
            placeholder="Pesquisar equipamento"
            defaultValue={data?.equipment}
            onChange={(e) => setToolId(Number(e.target.value))}
            style={{
              width: "275px",
            }}
          />
          <S.EquipmentRowCount>
            <S.IconButton type="button" onClick={decrementEquipmentQuantity}>
              -
            </S.IconButton>
            {equipmentCount}
            <S.IconButton type="button" onClick={incrementEquipmentQuantity}>
              +
            </S.IconButton>
          </S.EquipmentRowCount>
        </div>
        <StepButton type="button" onClick={addEquipment}>
          Adicionar
        </StepButton>
      </S.Row>
      <div>
        <S.EquipmentsList>
          {fields.map(({ toolId, qtd, id }, index) => (
            <S.Row key={id}>
              <div>
                <S.EquipmentName>
                  {findToolById(Number(toolId))}
                </S.EquipmentName>
                <S.EquipmentQuantity>
                  {qtd} {qtd === 1 ? "unidade" : "unidades"}
                </S.EquipmentQuantity>
              </div>
              <S.RemoveButton onClick={() => remove(index)} type="button">
                Remover
              </S.RemoveButton>
            </S.Row>
          ))}
          {errors.tools && <ErrorText>{errors.tools?.message}</ErrorText>}
        </S.EquipmentsList>
      </div>
      <Footer>
        <StepButton buttonType="back" onClick={prevStep}>
          Passo Anterior
        </StepButton>
        <StepButton disabled={isValid ? false : true} type="submit">
          Cadastrar consulta
        </StepButton>
      </Footer>
    </S.Container>
  );
};
