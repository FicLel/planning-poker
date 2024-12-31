import styled from 'styled-components';

export const PlayerContainer = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  border-radius: 40%;
`;

export const PlayerName = styled.h4`
  color:  #afafaf;
  padding: 1px;
  margin: 0;
`;

const getRandomHairColor = () => {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD', '#E74C3C'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const SvgPersonWithRandomHair = ({ width = '100%', height = '100%' }) => {
  const hairColor = getRandomHairColor();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={width}
      height={height}
    >
      {/* Head */}
      <circle cx="100" cy="80" r="40" fill="#FFDAB9" />

      {/* Hair */}
      <path
        d="M60 40 Q100 10 140 40 Q130 70 100 70 Q70 70 60 40 Z"
        fill={hairColor}
      />

      {/* Body */}
      <rect x="75" y="120" width="50" height="70" fill="#4682B4" />

      {/* Arms */}
      <rect x="45" y="120" width="30" height="15" fill="#FFDAB9" />
      <rect x="125" y="120" width="30" height="15" fill="#FFDAB9" />

      {/* Legs */}
      <rect x="75" y="190" width="20" height="50" fill="#708090" />
      <rect x="105" y="190" width="20" height="50" fill="#708090" />
    </svg>
  );
};

export default SvgPersonWithRandomHair;
