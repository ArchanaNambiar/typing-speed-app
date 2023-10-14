import React from 'react';

const BackgroundDropdown = ({ options, onChange }) => {
  return (
    <div className="background-dropdown">
      <select onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BackgroundDropdown;
