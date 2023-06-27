import styled from "styled-components";
import ImageEdit from "../../../assets/edit.svg";
import ImageDelete from "../../../assets/trash.svg";

export const Container = styled.div`
  max-width: 80%;
  margin: auto;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const TableDescriptionRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 3rem;
  color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 600;
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[80]};
  margin-bottom: 1rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.gray[20]};
`;

export const TableHeader = styled.th`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.gray[90]};
  text-align: left;
  color: ${({ theme }) => theme.colors.gray[50]};
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  background-color: transparent;
`;

export const TableCell = styled.td`
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[80]};
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ResponsiveTable = styled.div`
  overflow-x: auto;
  width: 100%;
`;

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 1rem;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ImageEditAttendant = styled.div`
  width: 16px;
  height: 16px;
  background-image: url(${ImageEdit});
  background-size: cover;
  filter: brightness(0) invert(1);
`;

export const ImageDeleteAttendant = styled.div`
  width: 16px;
  height: 16px;
  background-image: url(${ImageDelete});
  background-size: cover;
  filter: brightness(0) invert(1);
`;

export const WrapperHeaderNavigation = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[60]};
`;

export const Button = styled.button<{ size?: number }>`
  background: ${({ theme }) => theme.colors.orange};
  border-radius: 4px;
  padding: 0.6rem 0.8rem 0.6rem 0.8rem;
  color: ${({ theme }) => theme.colors.gray[10]};
  border: none;
  font-size: 1rem;
  font-weight: 600;
  transition-duration: 200ms;
  height: 100%;

  &:hover {
    background: #af4a0a;
    cursor: pointer;
  }
`;

export const ButtonEdit = styled.button<{ size?: number }>`
  background: ${({ theme }) => theme.colors.gray[90]};
  border-radius: 4px;
  padding: 0.6rem 0.8rem 0.6rem 0.8rem;
  color: ${({ theme }) => theme.colors.gray[10]};
  border: none;
  font-size: 1rem;
  font-weight: 600;
  transition-duration: 200ms;
  height: 100%;
  position: relative;

  img {
    width: 16px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray[70]};
    cursor: pointer;
    &::after {
      content: "Edit";
      display: block;
      position: absolute;
      font-size: 12px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      padding: 0.1rem;
      border-radius: 4px;
      color: ${({ theme }) => theme.colors.gray[20]};
    }
  }
`;
export const ButtonDelete = styled.button<{ size?: number }>`
  background: ${({ theme }) => theme.colors.gray[90]};
  border-radius: 4px;
  padding: 0.6rem 0.8rem 0.6rem 0.8rem;
  color: ${({ theme }) => theme.colors.gray[10]};
  border: none;
  font-size: 1rem;
  font-weight: 600;
  transition-duration: 200ms;
  height: 100%;
  position: relative;

  img {
    width: 16px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray[70]};
    cursor: pointer;
    &::after {
      content: "Delete";
      display: block;
      position: absolute;
      font-size: 12px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      padding: 0.1rem;
      border-radius: 4px;
      color: ${({ theme }) => theme.colors.gray[20]};
    }
  }
`;

export const Option = styled.option`
  background-color: ${({ theme }) => theme.colors.gray[90]};
  color: ${({ theme }) => theme.colors.white};
`;
