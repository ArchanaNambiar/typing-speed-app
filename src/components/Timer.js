import React from 'react';

const Timer = ({ onTimerClick }) => {
  return (
    <div className="timer">
      <button onClick={() => onTimerClick(10)}>10s</button>
      <button onClick={() => onTimerClick(30)}>30s</button>
      <button onClick={() => onTimerClick(60)}>1m</button>
      <button onClick={() => onTimerClick(120)}>2m</button>
    </div>
  );
};

export default Timer;
