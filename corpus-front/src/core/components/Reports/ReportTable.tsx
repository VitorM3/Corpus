import { useEffect, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import { Attendance } from "../../../types";
import { Input } from "../Input";
import { Select } from "../Select";
import api from "../../../services/api";
import * as S from "./styles";

interface TableProps {
  isModalOpen: boolean;
}

const ReportTable = ({
  isModalOpen
}: TableProps) => {
  const [attendances, setAttendances] = useState<Attendance[]>([]);

  const [searchPatient, setSearchPatient] = useState("");
  const [searchDoctor, setSearchDoctor] = useState("");
  const [status, setStatus] = useState(true);

  const debouncedSearchPatient = useDebounce(searchPatient, 500);
  const debouncedSearchDoctor = useDebounce(searchDoctor, 500);

  useEffect(() => {
    if (isModalOpen) return

    const fetchAttendances = async () => {
      try {
        const { data } = await api.get("/attendance", {
          params: {
            max: 50,
            page: 1,
            status,
            ...(debouncedSearchPatient && {
              namePacient: debouncedSearchPatient,
            }),
            ...(debouncedSearchDoctor && { nameDoctor: debouncedSearchDoctor }),
          },
        });
        setAttendances(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAttendances();
  }, [debouncedSearchPatient, debouncedSearchDoctor, status, isModalOpen]);

  const handleSearchPatient = (value: string) => {
    setSearchPatient(value);
  };

  const handleSearchDoctor = (value: string) => {
    setSearchDoctor(value);
  };

  const handleChangeStatus = async (value: boolean) => {
    setStatus(value);
  };

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/attendance/${id}`);

      const { data } = await api.get("/attendance", {
        params: {
          max: 50,
          page: 1,
          status: true
        },
      })

      setAttendances(data.data)
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
              onChange={(e: any) => handleSearchPatient(e.target.value)}
            />
            <Input
              placeholder="Buscar nome de doutor"
              value={searchDoctor}
              onChange={(e: any) => handleSearchDoctor(e.target.value)}
            />
            <Select
              value={String(status)}
              onChange={(e: any) => handleChangeStatus(Boolean(e.target.value))}
              options={[
                { value: "true", label: "Ativo" },
                { value: "false", label: "Inativo" },
              ]}
            />
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
                        <img src="/src/assets/edit.svg" alt="Botão de editar" />
                      </S.ButtonEdit>
                      <S.ButtonDelete
                        onClick={() => handleDelete(attendance.id)}
                      >
                        <img
                          src="/src/assets/trash.svg"
                          alt="Botão de deletar"
                        />
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
