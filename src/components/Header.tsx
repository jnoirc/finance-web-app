'use client';
import { useContext } from 'react';
import useContexts from '@/app/hooks/useContexts';
import { HeaderType } from '@/types/type';
import { GiHamburgerMenu } from 'react-icons/gi';
export default function Header({ onClick }: HeaderType) {
  const { theme }: any = useContexts();
  return (
    <header
      className={`${
        theme === 'dark'
          ? 'bg-neutral-900 text-white shadow-2xl'
          : 'bg-white shadow-xl'
      } md:hidden h-16 w-full flex items-center z-10 fixed`}
    >
      <button className="cursor-pointer ml-4 text-2xl" onClick={onClick}>
        <GiHamburgerMenu />
      </button>
    </header>
  );
}
