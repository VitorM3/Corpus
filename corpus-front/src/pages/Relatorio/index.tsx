import ReportTable from "../../core/components/Reports/ReportTable";
import ReportHeader from "../../core/components/Reports/ReportHeader";
import * as S from "../../core/components/Reports/styles";

const Relatorio = () => {
  return (
    <S.Container>
      <ReportHeader />
      <ReportTable />
    </S.Container>
  );
};

export default Relatorio;
