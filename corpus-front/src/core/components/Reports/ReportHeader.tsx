import { useState } from "react";
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
      <h1 className="logo">Corpus</h1>
      <S.WrapperHeader>
        <Link style={{ textDecoration: "none", color: "inherit" }} to={""}>
          Sobre
        </Link>
        <Link style={{ textDecoration: "none", color: "inherit" }} to={""}>
          Cadastros
        </Link>
        <S.Button onClick={openModal}>Agendar consulta</S.Button>
      </S.WrapperHeader>
      {showModal && <Modal closeModal={closeModal} />}
    </S.WrapperHeader>
  );
};

export default ReportHeader;
