import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #141414;
  padding: 20px;
`;

const Title = styled.h2`
  color: #fff;
`;

const StepButton = styled.button`
  background-color: #fe6a0f;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Modal = () => {
  const [step, setStep] = useState(1);

  const NextStep = () => {
    setStep(step + 1);
  };

  return (
    <Container>
      <Title>Novo agendamento</Title>
      {step === 1 && (
        <div>
          <label>Filtro de pesquisa de paciente:</label>
          <br />
          <label>Filtro de pesquisa de doutor:</label>
          <br />
          <label>Descrição:</label>
          <textarea />
        </div>
      )}
      {step === 2 && (
        <div>{/* Coloque o código para o segundo passo aqui */}</div>
      )}
      {step === 3 && (
        <div>{/* Coloque o código para o terceiro passo aqui */}</div>
      )}
      <StepButton onClick={NextStep}>Próximo Passo</StepButton>
    </Container>
  );
};

export { Modal };
