import styled from 'styled-components'

export const Steps = styled.nav`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.725rem;
`

export const Item = styled.button<{ active: boolean }>`
  width: 2rem;
  height: 2rem;

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  background: none;
  color: ${({ active, theme }) => active ? theme.colors.orange : theme.colors.gray[60]};
  border: 2px solid ${({ active, theme }) => active ? theme.colors.orange : theme.colors.gray[60]};
  border-radius: 50%;

  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
`