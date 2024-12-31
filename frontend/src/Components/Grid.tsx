import styled from 'styled-components';

export const Container = styled.div<{direction?: 'column' | 'row'}>`
  display: flex;
  flex-direction: ${props => props.direction ?? 'row'};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100dvw;
  height: 100vh;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  max-width: 50rem;
  padding: 10px;
  justify-content: center;
  border: 1px solid #ff00ff;
  gap: 5px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  border: 1px solid #027613;
  gap: 5px;
`;
