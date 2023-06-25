import React, { useState } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { Modal } from "../Modal/ModalSchedule"; // Importe o componente Modal

const ReportHeader = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <S.WrapperHeader>
      <h1>Corpus</h1>
      <S.WrapperHeaderNavigation>
        <Link>Sobre</Link>
        <Link>Cadastros</Link>
        <S.Button
          elementWidth="100%"
          elementheight="7vh"
          elementMargin="3vh"
          onClick={openModal} // Adicione o evento onClick para abrir o modal
        >
          Agendar consulta
        </S.Button>
      </S.WrapperHeaderNavigation>
      {showModal && <Modal closeModal={closeModal} />}
    </S.WrapperHeader>
  );
};

export default ReportHeader;
