import React from 'react';
import { Controller } from 'react-hook-form';
import RadioButton from './RadioButton';

interface SelectorProps {
  title: string;
  control: any;
}

const Selector: React.FC<SelectorProps> = ({ title, control }) => {
  return (
    <div className="w-[650px] p-[30px] bg-[#0E0E0E11] rounded-lg">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <fieldset className="flex flex-col space-y-2">
        {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
          <Controller
            key={size}
            name="size"
            control={control}
            render={({ field }) => <RadioButton title={size} {...field} />}
          />
        ))}
      </fieldset>
    </div>
  );
};

export default Selector;
