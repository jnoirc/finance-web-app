import Link from 'next/link';
import { BsGithub, BsFillArrowLeftCircleFill } from 'react-icons/bs';
export const metadata = {
  title: 'Readme',
};

export default function page() {
  return (
    <div className="h-screen w-screen bg-zinc-200 fixed top-0">
      <Link href="/">
        <BsFillArrowLeftCircleFill className="text-4xl ml-16 mt-4 cursor-pointer" />
      </Link>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="font-extrabold text-2xl mb-6">Readme</h1>
        <span className="font-medium">Projeto desenvolvido por: John-devX</span>
        <Link
          className="flex mt-4"
          href="https://github.com/john-devx"
          target="_blank"
          rel="noreferrer"
        >
          <span className="font-bold text-purple-800">GitHub</span>
          <BsGithub className="ml-2 text-xl" />
        </Link>
      </div>
    </div>
  );
}
