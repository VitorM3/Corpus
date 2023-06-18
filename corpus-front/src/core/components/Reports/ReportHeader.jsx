import * as S from "./styles";
import { Link } from "react-router-dom";

const ReportHeader = () => {
  return (
    <S.WrapperHeader>
      <h1>Corpus</h1>
      <S.WrapperHeaderNavigation>
        <Link>Sobre</Link>
        <Link>Cadastros</Link>
        <S.Button elementWidth="100%" elementheight="7vh" elementMargin="3vh">
          Agendar consulta
        </S.Button>
      </S.WrapperHeaderNavigation>
    </S.WrapperHeader>
  );
};

export default ReportHeader;
