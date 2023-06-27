import { useEffect, useState } from "react";

import * as S from "./styles";

import { Steps } from "../Steps";
import { BasicInfo } from "./Form/BasicInfo";
import { Exercises } from "./Form/Exercises";
import { FormProvider } from "../../../context/ScheduleFormContext";
import { Equipment } from "./Form/Equipment";

export interface ItemProps {
  step: number;
  active: boolean;
}

export interface Attendance extends FirstStepAttendance {
  meetings: SecondStepAttendance[];
  tools: ThirdStepAttendance[];
}

export interface FirstStepAttendance {
  patientId: number;
  doctorId: number;
  description: string;
  qtdMeetings: number;
}

export interface SecondStepAttendance {
  exercise_id: number;
  room_id: number;
  date: Date;
}

export interface ThirdStepAttendance {
  toolId: number;
  qtd: number;
}

interface ModalProps {
  closeModal: () => void;
}

const Modal = ({ closeModal }: ModalProps) => {
  const [steps, setSteps] = useState<ItemProps[]>([
    {
      step: 1,
      active: true,
    },
    {
      step: 2,
      active: false,
    },
    {
      step: 3,
      active: false,
    },
  ]);
  const [step, setStep] = useState(1);
  // const [isNextStepDisabled, setNextStepDisabled] = useState(true);

  // const [attendance, setAttendance] = useState<Attendance>({} as Attendance);
  // useEffect(() => {
  //   console.log("DATA ->", attendance);
  // }, [attendance]);

  // const handleAddStepInfo = (
  //   data: FirstStepAttendance | SecondStepAttendance | ThirdStepAttendance
  // ) => {
  //   setAttendance((prevState) => ({
  //     ...prevState,
  //     ...data,
  //   }));
  // };

  useEffect(() => {
    setSteps((prevState) =>
      prevState.map((item) => {
        if (item.step === step) {
          return {
            ...item,
            active: true,
          };
        }
        return {
          ...item,
          active: false,
        };
      })
    );
  }, [step]);

  // const isValid = <T extends object>(fields: T) => {
  //   return Object.values(fields).every(
  //     (value) => value !== undefined && value !== null && value !== ""
  //   );
  // };

  const nextStep = () => {
    setStep((prevState) =>
      prevState === steps.length ? prevState : prevState + 1
    );
  };

  const prevStep = () => {
    setStep((prevState) => (prevState === 1 ? prevState : prevState - 1));
  };

  return (
    <FormProvider>
      <S.Overlay onClick={closeModal} />
      <S.Container>
        <S.Header>
          <S.Title>Novo agendamento</S.Title>
          <Steps current={step} items={steps} />
        </S.Header>
        <S.Content>
          {step === 1 && <BasicInfo nextFormStep={nextStep} />}
          {step === 2 && (
            <Exercises nextFormStep={nextStep} prevStep={prevStep} />
          )}
          {step === 3 && (
            <div>
              <Equipment prevStep={prevStep} />
            </div>
          )}
        </S.Content>
      </S.Container>
    </FormProvider>
  );
};

export { Modal };
