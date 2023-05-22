import { HeaderType } from '@/types/type';
import { GiHamburgerMenu } from 'react-icons/gi';
export default function Header({ onClick }: HeaderType) {
  return (
    <header className="h-16 w-full bg-white shadow-xl flex items-center z-10">
      <button className="cursor-pointer ml-4 text-2xl" onClick={onClick}>
        <GiHamburgerMenu />
      </button>
    </header>
  );
}
