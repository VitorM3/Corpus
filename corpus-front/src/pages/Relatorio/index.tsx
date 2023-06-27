import ReportTable from "../../core/components/Reports/ReportTable";
import ReportHeader from "../../core/components/Reports/ReportHeader";
import * as S from "../../core/components/Reports/styles";
import { useState } from "react";

const Relatorio = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <S.Container>
      <ReportHeader 
        openModal={openModal}
        closeModal={closeModal}
        showModal={showModal}
      />
      <ReportTable isModalOpen={showModal}/>
    </S.Container>
  );
};

export default Relatorio;
