import { useEffect, useState } from "react";

import * as S from "./styles";

import { Steps } from "../Steps";
import { BasicInfo } from "./Form/BasicInfo";
import { useForm } from "react-hook-form";

import api from "../../../services/api";
import { Doctor, Patient } from "../../../types";

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
  qtdMeetings: number
}

export interface SecondStepAttendance {
  exercise_id: number;
  room_id: number;
  date: Date;
}

export interface ThirdStepAttendance {
  toolId: number;
  qtd: number
}

interface ModalProps {
  closeModal: () => void;
}

const Modal = ({
  closeModal
}: ModalProps) => {
  const [steps, setSteps] = useState<ItemProps[]>([{
    step: 1,
    active: true
  }, {
    step: 2,
    active: false
  }, {
    step: 3,
    active: false
  }])
  const [step, setStep] = useState(1);
  const [isNextStepDisabled, setNextStepDisabled] = useState(true);

  const [patients, setPatients] = useState<Patient[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const [attendance, setAttendance] = useState<Attendance>({} as Attendance)

  const {
    getValues: getFirstStepValues,
    control: controlFirstStep,
    watch: watchFirstStep,
  } = useForm<FirstStepAttendance>();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const { data } = await api.get('/pacient', {
          params: {
            max: 50,
            page: 1
          }
        });
        setPatients(data.data);
      } catch (error) {
        console.error(error)
      }
    }

    const fetchDoctors = async () => {
      try {
        const { data } = await api.get('/employee/doctor', {
          params: {
            max: 50,
            page: 1
          }
        });
        setDoctors(data.data);
      } catch (error) {
        console.error(error)
      }
    }

    fetchPatients()
    fetchDoctors()
  }, [])

  useEffect(() => { console.log('DATA ->', attendance) }, [attendance])

  useEffect(() => {
    if (step === 1) {
      const firstStepValues = getFirstStepValues()
      return setNextStepDisabled(!isValid(firstStepValues))
    }

    setNextStepDisabled(true)
  }, [watchFirstStep()])

  const handleAddStepInfo = (data: FirstStepAttendance | SecondStepAttendance | ThirdStepAttendance) => {
    setAttendance(prevState => ({
      ...prevState,
      ...data
    }))
  }

  useEffect(() => {
    setSteps(prevState => prevState.map(item => {
      if (item.step === step) {
        return {
          ...item,
          active: true
        }
      }
      return {
        ...item,
        active: false
      }
    }))
  }, [step])

  const isValid = <T extends object>(fields: T) => {
    return Object.values(fields).every((value) => value !== undefined && value !== null && value !== '');
  }

  const nextStep = () => {
    setStep(prevState => prevState === steps.length ? prevState : prevState + 1);
  }

  const handleChangeStep = () => {
    const firstStepValues = getFirstStepValues()

    if (step === 1 && isValid(firstStepValues)) {
      nextStep()
      return handleAddStepInfo(firstStepValues)
    }
  };

  const prevStep = () => {
    setStep(prevState => prevState === 1 ? prevState : prevState - 1);
  };

  return (
    <>
      <S.Overlay onClick={closeModal} />
      <S.Container>
        <S.Header>
          <S.Title>Novo agendamento</S.Title>
          <Steps
            current={step}
            items={steps}
          />
        </S.Header>
        <S.Content>
          {step === 1 && (
            <BasicInfo 
              control={controlFirstStep} 
              patients={patients}
              doctors={doctors}
            />
          )}
          {step === 2 && (
            <div>{/* Coloque o código para o segundo passo aqui */}</div>
          )}
          {step === 3 && (
            <div>{/* Coloque o código para o terceiro passo aqui */}</div>
          )}
        </S.Content>
        <S.Footer>
          {step !== 1 && <S.StepButton buttonType='back' onClick={prevStep}>Passo Anterior</S.StepButton>}
          {step !== steps.length && <S.StepButton buttonType='next' disabled={isNextStepDisabled} onClick={handleChangeStep}>Próximo Passo</S.StepButton>}
          {step === steps.length && <S.StepButton buttonType='next' onClick={() => {/* TO DO */}}>Cadastrar Consulta</S.StepButton>}
        </S.Footer>
      </S.Container>
    </>
  );
};

export { Modal };
