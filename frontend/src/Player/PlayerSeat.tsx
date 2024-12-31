import { Card, CardContainer } from '../Components/Card';
import { Row } from '../Components/Grid';
import Player, { PlayerContainer, PlayerName } from './Player';

export const PlayerSeat = () => {
  return (
    <CardContainer>
      <Row>
        <PlayerName>Name</PlayerName>
      </Row>
      <Row>  
        <PlayerContainer><Player/></PlayerContainer>
        <Card>100</Card>
      </Row>
    </CardContainer>
  )
};