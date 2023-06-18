import * as S from "./styles";

const ReportTable = () => {
  const dadosRelatorio = [
    {
      id: "1",
      nomePaciente: "Keniel",
      nomeDoutor: "Danilean",
      descricao: "Lesão repentina pelo cutelo do olaf",
      qtdEncontros: 8,
      qtdFaltas: 1,
      qtdPresenca: 7,
    },
    {
      id: "2",
      nomePaciente: "Keniel",
      nomeDoutor: "Danilean",
      descricao: "Lesão repentina pelo cutelo do olaf",
      qtdEncontros: 8,
      qtdFaltas: 1,
      qtdPresenca: 7,
    },
    {
      id: "3",
      nomePaciente: "Keniel",
      nomeDoutor: "Danilean",
      descricao: "Lesão repentina pelo cutelo do olaf",
      qtdEncontros: 8,
      qtdFaltas: 1,
      qtdPresenca: 7,
    },
    {
      id: "4",
      nomePaciente: "Keniel",
      nomeDoutor: "Danilean",
      descricao: "Lesão repentina pelo cutelo do olaf",
      qtdEncontros: 8,
      qtdFaltas: 1,
      qtdPresenca: 7,
    },
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
                    {paciente.nomePaciente}
                  </S.TableCell>
                  <S.TableCell data-label="Nome do Doutor">
                    {paciente.nomeDoutor}
                  </S.TableCell>
                  <S.TableCell data-label="Descrição">
                    {paciente.descricao}
                  </S.TableCell>
                  <S.TableCell data-label="Qtd. Encontros">
                    {paciente.qtdEncontros}
                  </S.TableCell>
                  <S.TableCell data-label="Qtd. Faltas">
                    {paciente.qtdFaltas}
                  </S.TableCell>
                  <S.TableCell data-label="Qtd. Presença">
                    {paciente.qtdPresenca}
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
