'use client';

import { InputType } from '@/types/type';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export default function Input({
  type,
  label,
  isIcon,
  onInputChange,
}: InputType) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const passwordViewer = () => {
    setShowPassword(!showPassword);
  };
  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(value);
  };
  return (
    <div className="relative">
      <input
        className="rounded border-2 outline-none focus:border-purple-600 p-2.5 w-60 mb-3 pl-4 duration-300"
        type={showPassword ? 'text' : type}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={inputValue}
        onChange={handleInputChange}
      />
      <label
        className={`${
          isFocused || inputValue ? '-top-2 text-xs' : 'top-3'
        } absolute left-4 duration-500 bg-white px-1 text-zinc-600`}
      >
        {label}
      </label>
      {isIcon && (
        <button
          type="button"
          className="absolute right-2 bottom-5"
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
