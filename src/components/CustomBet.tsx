import React from 'react';
import './css/CustomBet.css';

interface ContainerProps {
  name: string;
}

const CustomBet: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Custom Bet</p>
    </div>
  );
};

export default CustomBet;
