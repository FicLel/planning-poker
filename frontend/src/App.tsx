import { Column, Container, Row } from './Components/Grid';
import { PlayerSeat } from './Player/PlayerSeat';
import { PokerTable } from './PokerTable/PokerTable';

function App() {

  return (
    <Container>
      <Row>
        <PlayerSeat/>
        <PlayerSeat/>
        <PlayerSeat/>
      </Row>
      <Row>
        <Column>
        <PlayerSeat/>
        <PlayerSeat/>
        </Column>
        <PokerTable></PokerTable>
        <Column>
          <PlayerSeat/>
          <PlayerSeat/>
        </Column>
      </Row>
      <Row>
        <PlayerSeat/>
        <PlayerSeat/>
        <PlayerSeat/>
      </Row>
    </Container>
  )
}

export default App
