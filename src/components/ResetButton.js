import React from 'react';

const ResetButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="reset-button">
      Reset
    </button>
  );
};

export default ResetButton;
