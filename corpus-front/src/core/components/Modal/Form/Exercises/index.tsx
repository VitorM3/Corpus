import { FormHTMLAttributes, useEffect, useState } from "react";
import * as S from "./styles";
import { Input } from "../../../Input";
import { Exercise, Room, Option } from "../../../../../types";
import { Footer, StepButton } from "../../styles";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormData } from "../../../../../context/ScheduleFormContext";
import { Select } from "../../../Select";
import api from "../../../../../services/api";

interface ExercisesProps extends FormHTMLAttributes<HTMLFormElement> {
  //   control: any;
  nextFormStep: () => void;
  prevStep: () => void;
  exercises?: Exercise[];
  rooms?: Room[];
}

export const Exercises = ({
  prevStep,
  nextFormStep,
  ...props
}: ExercisesProps) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const { data, setFormValues } = useFormData();

  const formattedExercises = exercises?.map((exercise) => ({
    value: exercise.id,
    label: exercise.name,
  }));
  const formattedRooms = rooms?.map((room) => ({
    value: room.id,
    label: room.name,
  }));

  // let minDate = new Date();
  // minDate.setDate(minDate.getDate() - 1)

  const secondFormSchema = z.object({
    exercise: z.string().nonempty("Campo obrigatório").transform(value => Number(value)),
    room: z.string().nonempty("Campo obrigatório").transform(value => Number(value)),
    date: z.preprocess((arg) => {
      if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
    }, z.date().min(new Date(), "Data inválida")),
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
    const fetchExercises = async () => {
      try {
        const { data } = await api.get("/exercise", {
          params: {
            max: 50,
            page: 1,
          },
        });
        setExercises(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchRooms = async () => {
      try {
        const { data } = await api.get("/room", {
          params: {
            max: 50,
            page: 1,
            occupied: false,
          },
        });
        setRooms(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExercises();
    fetchRooms();
  }, []);

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)} {...props}>
      <S.InputRow>
        <Select
          {...register("exercise", { required: true })}
          defaultValue={data?.exercise || "default"}
          errorMessage={errors.exercise?.message}
          id="exercicio"
          options={[
            {
              value: "default",
              label: "Selecione um exercício",
              isPlaceholder: true,
            },
            ...(formattedExercises as Option[]),
          ]}
          style={{
            width: "212px"
          }}
        />
        <Select
          {...register("room", { required: true })}
          defaultValue={data?.room || "default"}
          errorMessage={errors.room?.message}
          id="sala"
          options={[
            {
              value: "default",
              label: "Selecione uma sala",
              isPlaceholder: true,
            },
            ...(formattedRooms as Option[]),
          ]}
          style={{
            width: "212px"
          }}
        />

        <Input
          {...register("date")}
          defaultValue={String(data?.date)}
          errorMessage={errors.date?.message}
          id="data-agendamento"
          type="datetime-local"
          placeholder="Data"

          style={{
            width: "250px"
          }}
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
