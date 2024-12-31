import styled from 'styled-components';

const Table = styled.div`
  background-color: #228b22;
  border-radius: 8px;
  width: 600px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
`;

const TaskTitle = styled.h4`
  color: white;
  font-size: 1.5rem;
`;

export const PokerTable = () => {
  return (
  <Table>
    <TaskTitle>Task long title</TaskTitle>
  </Table>
)
}