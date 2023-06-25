// import React, { createContext, useState } from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   background-color: #141414;
//   padding: 20px;
// `;

// const Title = styled.h2`
//   color: #fff;
// `;

// const StepButton = styled.button`
//   background-color: #fe6a0f;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// `;

// const ModalContext = createContext();

// const Modal = ({ children }) => {
//   const [step, setStep] = useState(1);

//   const NextStep = () => {
//     setStep(step + 1);
//   };

//   const [modalIsOpen, setIsOpen] = useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   return (
//     <Container>
//       <Title>Novo agendamento</Title>
//       {step === 1 && (
//         <div>
//           <label>Filtro de pesquisa de paciente:</label>
//           {/* Coloque o código do filtro de pesquisa de paciente aqui */}
//           <br />
//           <label>Filtro de pesquisa de doutor:</label>
//           {/* Coloque o código do filtro de pesquisa de doutor aqui */}
//           <br />
//           <label>Descrição:</label>
//           <textarea />
//         </div>
//       )}
//       {step === 2 && (
//         <div>{/* Coloque o código para o segundo passo aqui */}</div>
//       )}
//       {step === 3 && (
//         <div>{/* Coloque o código para o terceiro passo aqui */}</div>
//       )}
//       <StepButton onClick={NextStep}>Próximo Passo</StepButton>
//       <ModalContext.Provider value={{ modalIsOpen, openModal, closeModal }}>
//         {children}
//       </ModalContext.Provider>
//     </Container>
//   );
// };

// export { Modal, ModalContext };
