import { FormHTMLAttributes, useEffect, useState } from "react";

import * as S from "./styles";
import { Select } from "../../../Select";
import { Input } from "../../../Input";
import { Doctor, Patient, Option } from "../../../../../types";
import { FirstStepAttendance } from "../..";
import api from "../../../../../services/api";
import { Footer, StepButton } from "../../styles";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormData } from "../../../../../context/ScheduleFormContext";

interface BasicInfoProps extends FormHTMLAttributes<HTMLFormElement> {
  //   control: any;
  nextFormStep: () => void;
  patients?: Patient[];
  doctors?: Doctor[];
}

export const BasicInfo = ({ nextFormStep, ...props }: BasicInfoProps) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const { data, setFormValues } = useFormData();

  const formattedPatients = patients?.map((patient) => ({
    value: patient.id,
    label: patient.name,
  }));
  const formattedDoctors = doctors?.map((doctor) => ({
    value: doctor.id,
    label: doctor.name,
  }));

  const firstFormSchema = z.object({
    patientId: z
      .string()
      .nonempty("Campo obrigatório")
      .refine((value) => value !== "default", "Campo obrigatório"	)
      .transform((value) => Number(value)),
    doctorId: z
      .string()
      .nonempty("Campo obrigatório")
      .refine((value) => value !== "default", "Campo obrigatório"	)
      .transform((value) => Number(value)),
    description: z.string().nonempty("Campo obrigatório"),
    qtdMeetings: z
      .string()
      .nonempty("Campo obrigatório")
      .transform((value) => Number(value)),
  });

  type FirstFormType = z.infer<typeof firstFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FirstFormType>({
    resolver: zodResolver(firstFormSchema),
    mode: "all",
  });

  const onSubmit = (values: FirstStepAttendance) => {
    setFormValues(values);
    nextFormStep();
  };

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const { data } = await api.get("/pacient", {
          params: {
            max: 50,
            page: 1,
          },
        });
        setPatients(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchDoctors = async () => {
      try {
        const { data } = await api.get("/employee/doctor", {
          params: {
            max: 50,
            page: 1,
          },
        });
        setDoctors(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPatients();
    fetchDoctors();
  }, []);

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)} {...props}>
      <div>
        <Select
          defaultValue={data?.patientId || "default"}
          errorMessage={errors.patientId?.message}
          id="paciente"
          {...register("patientId", { required: true })}
          options={[
            {
              value: "default",
              label: "Selecione um paciente",
              isPlaceholder: true,
            },
            ...(formattedPatients as Option[]),
          ]}
          style={{
            width: "275px",
          }}
        />
        <Select
          defaultValue={data?.doctorId || "default"}
          errorMessage={errors.doctorId?.message}
          id="doutor"
          {...register("doctorId")}
          options={[
            {
              value: "default",
              label: "Selecione um doutor",
              isPlaceholder: true,
            }, {
              value: 1,
              label: "Nenhum",
            },
            ...(formattedDoctors as Option[]),
          ]}
          style={{
            width: "275px",
          }}
        />
        <Input
          errorMessage={errors.qtdMeetings?.message}
          {...register("qtdMeetings")}
          id="qtdEncontros"
          type="number"
          defaultValue={data?.qtdMeetings}
          placeholder="Qtd. de Encontros"
          min={1}
        />
      </div>
      <Input
        {...register("description")}
        defaultValue={data?.description}
        errorMessage={errors.description?.message}
        isTextArea={true}
        placeholder="Descrição..."
        maxLength={255}
        style={{
          height: "124px",
          width: "100%",
        }}
      />
      <Footer>
        <StepButton disabled={isValid ? false : true} type="submit">
          Próximo Passo
        </StepButton>
      </Footer>
    </S.Container>
  );
};
