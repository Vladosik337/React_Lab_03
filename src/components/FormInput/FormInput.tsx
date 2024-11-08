import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface FormInputProps {
  title: string;
  mandatoryField?: boolean;
  register: UseFormRegister<any>;
  name: string;
  error?: FieldError;
}

const FormInput: React.FC<FormInputProps> = ({ title, mandatoryField, register, name, error }) => {
  return (
    <div className="w-[650px] p-[30px] bg-[#0E0E0E11] rounded-lg">
      <h6 className="text-xl font-semibold text-gray-900 mb-4">
        {title}
        {mandatoryField && <span className="text-red-500 ml-[3px] text-[12px]">*</span>}
      </h6>
      <label htmlFor={title} className="flex items-center p-1 rounded-lg cursor-pointer w-[300px]">
        <input
          type="text"
          id={title}
          placeholder="Your answers"
          {...register(name, { required: mandatoryField })}
          className={`w-full border-b-2 border-b-blue-500 border-solid bg-transparent transition
            ${error ? 'border-b-red-500' : 'border-b-blue-500'} 
            focus:outline-none `}
        />
      </label>
      {error && <p className="text-red-500 text-sm mt-1">This field is required</p>}
    </div>
  );
};

export default FormInput;
