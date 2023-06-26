import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 320px;

  footer {
    margin-top: auto;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 1rem;
  }
`;

export const IconButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.gray[60]};
  cursor: pointer;
`;

export const EquipmentRowCount = styled.div`
  display: "flex";
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  height: 100%;
`;

export const Check = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 999rem;
  background-color: ${({ theme }) => theme.colors.orange};
`;

export const EquipmentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border: 1px;
  border-color: ${({ theme }) => theme.colors.gray[50]};
  width: 100%;
`;

export const EquipmentName = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
`;

export const EquipmentQuantity = styled.p`
  color: ${({ theme }) => theme.colors.gray[50]};
  font-weight: 700;
`;

export const RemoveButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  font-weight: 600;
  border: none;
  color: ${({ theme }) => theme.colors.white};
`;
