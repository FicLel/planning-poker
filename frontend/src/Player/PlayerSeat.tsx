import { useState } from 'react';
import { Card, CardBack, CardContainer, CardFront } from '../Components/Card';
import { Row } from '../Components/Grid';
import Player, { PlayerContainer, PlayerName } from './Player';

export const PlayerSeat = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev); // Toggle the flipped state
  };
  return (
    <CardContainer>
      <Row>
        <PlayerName>Name</PlayerName>
      </Row>
      <Row>  
        <PlayerContainer><Player/></PlayerContainer>
        <Card isFlipped={isFlipped} onClick={handleCardClick}>
          <CardFront />
          <CardBack>100</CardBack>
        </Card>
      </Row>
    </CardContainer>
  )
};