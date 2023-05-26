'use client';

import { InputType } from '@/types/type';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useSelector } from 'react-redux';
export default function Input({
  type,
  label,
  isIcon,
  onInputChange,
  error,
  inputDashboard,
  labelDashboard,
  labelAuth
}: InputType) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const theme = useSelector((state) => state);
  const passwordViewer = () => {
    setShowPassword(!showPassword);
  };
  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(value);
  };
  
  let themeInput = '';
  let themeLabel = '';
  let labelLoginRegister = '';
  if(inputDashboard){
    if(theme === 'dark'){
      themeInput = 'bg-neutral-900 text-zinc-100'
    }
    else{
      themeInput = 'bg-white text-zinc-800'
    }
  };
  if(labelDashboard){
    if(theme === 'dark'){
      themeLabel = 'bg-neutral-900 text-zinc-300'
    }
    else{
      themeLabel = 'bg-white text-zinc-600'
    }
  };

  if(labelAuth){
    labelLoginRegister = 'bg-white';
  }

  return (
    <div className="relative">
      <input
        className={`${
          error
            ? 'bg-red-100 focus:border-red-400 border-red-400'
            : 'focus:border-purple-600'
        } rounded border-2 outline-none  p-3 w-72 mb-3 pl-4 duration-300 ${themeInput}`}
        type={showPassword ? 'text' : type}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={inputValue}
        onChange={handleInputChange}
      />
      <label
        className={`${isFocused || inputValue ? '-top-2 text-xs' : 'top-3'} ${
          error
            ? 'bg-red-100 text-red-400 font-semibold'
            : `${labelLoginRegister}`
        } absolute left-4 duration-500 px-1 ${themeLabel}`}
      >
        {label}
      </label>
      {isIcon && (
        <button
          type="button"
          className="absolute right-2 top-4"
          onClick={passwordViewer}
        >
          {showPassword ? (
            <AiFillEyeInvisible className="text-xl" />
          ) : (
            <AiFillEye className="text-xl" />
          )}
        </button>
      )}
    </div>
  );
}
