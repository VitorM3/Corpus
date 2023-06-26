import { Attendance } from "../../../types";
import * as S from "./styles";

interface ReportTableProps {
  attendances: Attendance[];
}

const ReportTable = ({
  attendances
}: ReportTableProps) => {
  const dadosRelatorio: Attendance[] = [
    ...attendances,
    {
      id: 1,
      pacient: "Keniel",
      doctor: "Danilean",
      description: "Lesão repentina pelo cutelo do olaf",
      meetingsQtd: 8,
      meetingsWithoutPresenceQtd: 1,
      meetingsWithPresence: 7,
    }
  ];
  return (
    <>
      <S.TableWrapper>
        <S.TableDescriptionRow>
          <S.Title>Relatório Diário</S.Title>
          <S.Select name="data" id="data">
            <S.Option value="16/06/2023">16/06/2023</S.Option>
            <S.Option value="16/06/2023">16/06/2023</S.Option>
          </S.Select>
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
              {dadosRelatorio.map((paciente) => (
                <S.TableRow>
                  <S.TableCell data-label="Nome do Paciente">
                    {paciente.pacient}
                  </S.TableCell>
                  <S.TableCell data-label="Nome do Doutor">
                    {paciente.doctor}
                  </S.TableCell>
                  <S.TableCell data-label="Descrição">
                    {paciente.description}
                  </S.TableCell>
                  <S.TableCell data-label="Qtd. Encontros">
                    {paciente.meetingsQtd}
                  </S.TableCell>
                  <S.TableCell data-label="Qtd. Faltas">
                    {paciente.meetingsWithoutPresenceQtd}
                  </S.TableCell>
                  <S.TableCell data-label="Qtd. Presença">
                    {paciente.meetingsWithPresence}
                  </S.TableCell>
                  <S.TableCell data-label="Ações">icons</S.TableCell>
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
