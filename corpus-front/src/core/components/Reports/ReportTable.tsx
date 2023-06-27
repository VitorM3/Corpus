import { useEffect, useState } from "react";
import { Attendance } from "../../../types";
import { Input } from "../Input";
// import { Select } from "../Select";
import * as S from "./styles";
import { useDebounce } from "../../../hooks/useDebounce";
import api from "../../../services/api";

const ReportTable = () => {
  const [attendances, setAttendances] = useState<Attendance[]>([]);

  const [searchPatient, setSearchPatient] = useState("");
  const [searchDoctor, setSearchDoctor] = useState("");

  const debouncedSearchPatient = useDebounce(searchPatient, 500);
  const debouncedSearchDoctor = useDebounce(searchDoctor, 500);

  useEffect(() => {
    const fetchAttendances = async () => {
      try {
        const { data } = await api.get("/attendance", {
          params: {
            max: 50,
            page: 1,
            ...(debouncedSearchPatient && {
              nmPacient: debouncedSearchPatient,
            }),
            ...(debouncedSearchDoctor && { nmDoctor: debouncedSearchDoctor }),
          },
        });
        setAttendances(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAttendances();
  }, [debouncedSearchPatient, debouncedSearchDoctor]);

  const handleSearchPatient = (value: string) => {
    setSearchPatient(value);
  };

  const handleSearchDoctor = (value: string) => {
    setSearchDoctor(value);
  };

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/attendance/${id}`);
      console.log(`deleting ${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (id: number) => {
    try {
      console.log(`editing ${id}`);
      // await api.get(`/attendance/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <S.TableWrapper>
        <S.TableDescriptionRow>
          <S.Title>Relatório Diário</S.Title>
          <S.FilterBar>
            <Input
              placeholder="Buscar nome de paciente"
              value={searchPatient}
              onChange={(e) => handleSearchPatient(e.target.value)}
            />
            <Input
              placeholder="Buscar nome de doutor"
              value={searchDoctor}
              onChange={(e) => handleSearchDoctor(e.target.value)}
            />
            {/* <Select 
              options={[
                { value: 1, label: "Ativo" },
                { value: 2, label: "Inativo" },
              ]}
            /> */}
          </S.FilterBar>
        </S.TableDescriptionRow>
        <S.Divider />
        <S.ResponsiveTable>
          <S.Table>
            <thead>
              <S.TableRow>
                <S.TableHeader>Nome do Paciente</S.TableHeader>
                <S.TableHeader>Nome do Doutor</S.TableHeader>
                <S.TableHeader>Descrição</S.TableHeader>
                <S.TableHeader>Qtd. Encontros</S.TableHeader>
                <S.TableHeader>Qtd. Faltas</S.TableHeader>
                <S.TableHeader>Qtd. Presença</S.TableHeader>
                <S.TableHeader>Ações</S.TableHeader>
              </S.TableRow>
            </thead>
            <S.TableBody>
              {attendances.map((attendance) => (
                <S.TableRow>
                  <S.TableCell data-label="Nome do Paciente">
                    {attendance.pacient}
                  </S.TableCell>
                  <S.TableCell data-label="Nome do Doutor">
                    {attendance.doctor}
                  </S.TableCell>
                  <S.TableCell data-label="Descrição">
                    {attendance.description}
                  </S.TableCell>
                  <S.TableCell data-label="Qtd. Encontros">
                    {attendance.meetingsQtd}
                  </S.TableCell>
                  <S.TableCell data-label="Qtd. Faltas">
                    {attendance.meetingsWithoutPresenceQtd}
                  </S.TableCell>
                  <S.TableCell data-label="Qtd. Presença">
                    {attendance.meetingsWithPresence}
                  </S.TableCell>
                  <S.TableCell data-label="Ações">
                    <S.ButtonContainer>
                      <S.ButtonEdit onClick={() => handleEdit(attendance.id)}>
                        <S.ImageEditAttendant />
                      </S.ButtonEdit>
                      <S.ButtonDelete
                        onClick={() => handleDelete(attendance.id)}
                      >
                        <S.ImageDeleteAttendant />
                      </S.ButtonDelete>
                    </S.ButtonContainer>
                  </S.TableCell>
                </S.TableRow>
              ))}

              {/* Adicione mais linhas de dados conforme necessário */}
            </S.TableBody>
          </S.Table>
        </S.ResponsiveTable>
      </S.TableWrapper>
    </>
  );
};

export default ReportTable;
