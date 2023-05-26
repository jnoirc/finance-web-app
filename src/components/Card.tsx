'use client';

import { CardType } from '@/types/type';
import { useSelector } from 'react-redux';

export default function Card({ title, money, icon, colorMoney }: CardType) {
  const theme = useSelector((state) => state);
  const colorStyles = {
    green: 'text-green-600',
    red: 'text-red-600',
  };

  let moneyStyle = '';
  if (colorMoney in colorStyles) {
    moneyStyle = `${colorStyles[colorMoney]} text-3xl font-extrabold`;
  }

  return (
    <div
      className={`${
        theme === 'dark' ? 'bg-neutral-900 text-white' : 'bg-white'
      }  w-72 h-44 shadow-xl rounded-md relative bottom-16 hover:-translate-y-4 duration-500`}
    >
      <div className="flex justify-center gap-12 text-2xl mt-6">
        <h1 className="font-bold">{title}</h1>
        <span className="">{icon}</span>
      </div>
      <div className="absolute bottom-4 left-4 overflow-hidden text-ellipsis max-w-full">
        <span className={moneyStyle}>{money}</span>
      </div>
    </div>
  );
}
