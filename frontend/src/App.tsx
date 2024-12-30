import styled from 'styled-components';
import Player from './Player/Player';

const Container = styled.div<{direction?: 'column' | 'row'}>`
  display: flex;
  flex-direction: ${props => props.direction ?? 'row'};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100dvw;
  height: 100vh;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  max-width: 50rem;
  padding: 10px;
  justify-content: center;
  border: 1px solid #ff00ff;
  gap: 5px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
display: flex;
  border: 1px solid #00ff00;
  color: #7f7f7f;
  width: 35px;
  height: 60px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
`;

const PokerTable = styled.div`
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

const PlayerContainer = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  border-radius: 40%;
`;

const PlayerName = styled.h4`
  color:  #afafaf;
  padding: 1px;
  margin: 0;
`;

function App() {

  return (
    <Container>
      <Row>
        <CardContainer>
          <Row>
            <PlayerName>Name</PlayerName>
          </Row>
          <Row>  
            <PlayerContainer><Player/></PlayerContainer>
            <Card>100</Card>
          </Row>
        </CardContainer>
        
      </Row>
      <Row>
        <PokerTable></PokerTable>
      </Row>
      <Row></Row>
    </Container>
  )
}

export default App
