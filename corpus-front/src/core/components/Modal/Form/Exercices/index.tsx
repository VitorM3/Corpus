import { FormHTMLAttributes, useEffect } from "react";
import * as S from "./styles";
import { Input } from "../../../Input";
import { Doctor, Patient } from "../../../../../types";
import { Footer, StepButton } from "../../styles";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormData } from "../../../../../context/ScheduleFormContext";

interface ExercicesProps extends FormHTMLAttributes<HTMLFormElement> {
  //   control: any;
  nextFormStep: () => void;
  prevStep: () => void;
  patients?: Patient[];
  doctors?: Doctor[];
}

export const Exercices = ({
  prevStep,
  nextFormStep,
  ...props
}: ExercicesProps) => {
  const { data, setFormValues } = useFormData();

  const secondFormSchema = z.object({
    exercice: z.string().nonempty("Campo obrigatório"),
    room: z.string().nonempty("Campo obrigatório"),
    date: z.string().nonempty("Campo obrigatório"),
    hour: z.string().nonempty("Campo obrigatório"),
  });

  type SecondFormType = z.infer<typeof secondFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SecondFormType>({
    resolver: zodResolver(secondFormSchema),
    mode: "all",
  });

  const onSubmit = (values: SecondFormType) => {
    setFormValues(values);
    nextFormStep();
  };

  useEffect(() => {
    // pegar exercicios e salas
  }, []);

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)} {...props}>
      <S.InputRow>
        <Input
          placeholder="Pesquisar Exercício"
          defaultValue={data?.exercice}
          errorMessage={errors.exercice?.message}
          id="paciente"
          type="text"
          {...register("exercice")}
        />
        <Input
          placeholder="Pesquisar Sala"
          defaultValue={data?.room}
          errorMessage={errors.room?.message}
          id="Doutor"
          type="text"
          {...register("room")}
        />

        <Input
          errorMessage={errors.date?.message}
          {...register("date")}
          id="qtdEncontros"
          type="date"
          defaultValue={data?.date}
          placeholder="Data"
        />
        <Input
          {...register("hour")}
          defaultValue={data?.hour}
          type="time"
          errorMessage={errors.hour?.message}
          placeholder="Hora"
          maxLength={255}
        />
      </S.InputRow>

      <Footer>
        <StepButton buttonType="back" onClick={prevStep}>
          Passo Anterior
        </StepButton>
        <StepButton disabled={isValid ? false : true} type="submit">
          Próximo Passo
        </StepButton>
      </Footer>
    </S.Container>
  );
};
