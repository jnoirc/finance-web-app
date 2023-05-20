'use client';

import { ButtonType } from '@/types/type';
import { MdDoubleArrow } from 'react-icons/md';
import { useState } from 'react';
export default function Button({ title, onClick }: ButtonType) {
  const [hasHover, setHasHover] = useState(false);
  return (
    <div className="relative">
      <button
        onMouseEnter={() => setHasHover(true)}
        onMouseLeave={() => setHasHover(false)}
        onClick={onClick}
        className="bg-purple-900 hover:bg-purple-800 text-white w-36 p-2.5 mt-5 mb-4 rounded font-semibold"
      >
        {title}
      </button>
      <MdDoubleArrow
        className={`${
          hasHover ? 'right-3' : '-right-6'
        } absolute duration-500 top-9 text-sm text-white `}
      />
    </div>
  );
}
