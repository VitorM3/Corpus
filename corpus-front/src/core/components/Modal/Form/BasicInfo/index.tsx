import { FormHTMLAttributes } from "react";

import * as S from "./styles";
import { Select } from "../../../Select";
import { Input } from "../../../Input";
import { Controller } from "react-hook-form";
import { Doctor, Patient, Option } from "../../../../../types";


interface BasicInfoProps extends FormHTMLAttributes<HTMLFormElement> {
    control: any,
    patients?: Patient[]
    doctors?: Doctor[]
}

export const BasicInfo = ({
    control,
    doctors,
    patients,
    ...props
}: BasicInfoProps) => {
    const formattedPatients = patients?.map(patient => ({
        value: patient.id,
        label: patient.name
    }))
    const formattedDoctors = doctors?.map(doctor => ({
        value: doctor.id,
        label: doctor.name
    }))

    return (
        <S.Container {...props}>
            <div>
                <Controller
                    control={control}
                    name={"patientId"}
                    defaultValue={''}
                    render={({ field }) => (
                        <Select
                            options={[{
                                value: "",
                                label: "Selecione um paciente",
                                isPlaceholder: true
                            },
                            ...formattedPatients as Option[]
                            ]}
                            style={{
                                width: "275px"
                            }}
                            {...field}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name={"doctorId"}
                    defaultValue={''}
                    render={({ field }) => (
                        <Select
                            options={[{
                                value: "",
                                label: "Selecione um doutor",
                                isPlaceholder: true
                            },
                            ...formattedDoctors as Option[]
                            ]}
                            style={{
                                width: "275px"
                            }}
                            {...field}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name={"qtdMeetings"}
                    defaultValue={1}
                    render={({ field }) => (
                        <Input
                            type='number'
                            placeholder="Qtd. de Encontros"
                            min={1}
                            {...field}
                        />
                    )}
                />

            </div>
            <Controller
                control={control}
                name={"description"}
                render={({ field }) => (
                    <Input
                        isTextArea={true}
                        placeholder="Descrição..."
                        maxLength={255}
                        style={{
                            height: "124px",
                            width: "100%"
                        }}
                        {...field}
                    />
                )}
            />
        </S.Container>
    )
}