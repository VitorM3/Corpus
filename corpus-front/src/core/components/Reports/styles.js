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
  color: #fff;
  flex-direction: row;
`;

export const Title = styled.h3`
  font-weight: 700;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #2a2b2a;
  margin-bottom: 1rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  border-radius: 4px;
  color: #d7e0da;
`;

export const TableHeader = styled.th`
  padding: 1rem;
  background-color: #1e1f1e;
  text-align: left;
  color: #5e6661;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  background-color: transparent;
`;

export const TableCell = styled.td`
  padding: 1rem;
  border-top: 1px solid #2a2b2a;
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
`;

export const Button = styled.div`
  background: #fe6a0f;
  border-radius: 4px;
  padding: 0.6rem 0.8rem 0.6rem 0.8rem;
  color: #ebf5ee;
  border: none;
  transition-duration: 200ms;
  &:hover {
    background: #af4a0a;
    cursor: pointer;
  }
`;

export const Select = styled.select`
  background-color: #1e1f1e;
  border-radius: 4px;
  color: #fff;
  padding: 0.6rem 0.8rem 0.6rem 0.8rem;
  border: none;
`;
export const Option = styled.option`
  background-color: #1e1f1e;
  color: #fff;
`;
