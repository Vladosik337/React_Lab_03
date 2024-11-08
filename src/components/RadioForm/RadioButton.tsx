import React from 'react';

interface RadioButtonProps {
  title: string;
  value?: string;
  onChange?: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ title, value, onChange }) => {
  return (
    <label
      htmlFor={title}
      className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition"
    >
      <input
        type="radio"
        id={title}
        value={title}
        checked={value === title}
        onChange={() => onChange?.(title)}
        className="h-5 w-5 text-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      />
      <span className="text-gray-800 font-medium">{title}</span>
    </label>
  );
};

export default RadioButton;
