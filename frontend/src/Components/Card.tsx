import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div<{isFlipped: boolean}>`
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
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${(props) => (props.isFlipped ? "rotateY(180deg)" : "rotateY(0)")};
`;

export const CardFront = styled.div`
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
`;

export const CardBack = styled.div`
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  transform: rotateY(180deg);
  color: #000;
`;