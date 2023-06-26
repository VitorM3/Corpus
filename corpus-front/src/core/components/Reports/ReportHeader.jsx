import React, { useState } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { Modal } from "../Modal";

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
      <h1 className='logo'>Corpus</h1>
      <S.WrapperHeaderNavigation>
        <Link style={{ textDecoration: 'none', color: 'inherit' }}>Sobre</Link>
        <Link style={{ textDecoration: 'none', color: 'inherit' }}>Cadastros</Link>
        <S.Button
          elementWidth="100%"
          elementheight="7vh"
          elementMargin="3vh"
          onClick={openModal}
        >
          Agendar consulta
        </S.Button>
      </S.WrapperHeaderNavigation>
      {showModal && <Modal closeModal={closeModal} />}
    </S.WrapperHeader>
  );
};

export default ReportHeader;
