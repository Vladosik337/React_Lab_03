import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface ImgFormProps {
  title: string;
  register: UseFormRegister<any>;
  name: string;
  imgSrc: string;
  descriptionImg: string;
}

const ImgForm: React.FC<ImgFormProps> = ({ title, register, name, imgSrc, descriptionImg }) => {
  return (
    <div className="w-[650px] p-[30px] bg-[#0E0E0E11] rounded-lg">
      <h6 className="text-xl font-semibold text-gray-900 mb-4">{title}</h6>
      <label htmlFor={title} className="flex flex-col items-center p-1 rounded-lg cursor-pointer">
        <img src={imgSrc} alt={descriptionImg} className="mw-full h-full " {...register(name)} />
      </label>
    </div>
  );
};

export default ImgForm;
