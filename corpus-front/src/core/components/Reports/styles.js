import styled from "styled-components";

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
  font-weight: 700;
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

export const WrapperHeaderNavigation = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[60]};
`;

export const Button = styled.div`
  background: ${({ theme }) => theme.colors.orange};
  border-radius: 4px;
  padding: 0.6rem 0.8rem 0.6rem 0.8rem;
  color: ${({ theme }) => theme.colors.gray[10]};
  border: none;
  transition-duration: 200ms;
  &:hover {
    background: #af4a0a;
    cursor: pointer;
  }
`;

export const Select = styled.select`
  background-color: ${({ theme }) => theme.colors.gray[90]};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  padding: 0.6rem 0.8rem 0.6rem 0.8rem;
  border: none;
`;
export const Option = styled.option`
  background-color: ${({ theme }) => theme.colors.gray[90]};
  color: ${({ theme }) => theme.colors.white};
`;
