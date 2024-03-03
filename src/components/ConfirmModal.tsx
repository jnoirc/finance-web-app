import { useContext } from 'react';
import { ConfirmModalType } from '@/types/type';
import { FaTimes } from 'react-icons/fa';
import { ThemeContext } from '@/context/themeContext';
import AnimModal from '@/app/anim/AnimModal';
const ConfirModal = ({
  title,
  message,
  onConfirm,
  onCancel,
  onCancelX,
}: ConfirmModalType) => {
  const { theme }: any = useContext(ThemeContext);

  return (
    <div className="fixed inset-0 h-screen w-full flex items-center justify-center z-30 bg-[#0000007F]">
      <AnimModal>
        <div
          className={`${
            theme === 'dark'
              ? 'bg-neutral-900 shadow-xl text-white'
              : 'bg-white shadow-md'
          } w-370 sm:w-480 h-60 rounded-xl relative px-4`}
        >
          <div className="flex justify-between pt-4">
            <h1 className="font-semibold font-zinc-600 text-xl ml-4">
              {title}
            </h1>
            <FaTimes onClick={onCancelX} className=" cursor-pointer text-2xl" />
          </div>
          <div className="mt-3 mx-auto w-72 sm:w-430 bg-red-100 text-red-600 font-medium rounded-md p-2">
            <p>{message}</p>
            <span></span>
          </div>
          <div className="flex absolute bottom-4 right-5">
            <button
              className="bg-green-700 text-white rounded-md p-2 flex items-center font-medium mr-2 hover:bg-green-600 duration-500"
              onClick={onCancel}
            >
              Cancelar
            </button>
            <button
              className="bg-red-700 hover:bg-red-600 text-white rounded-md p-2 flex items-center font-medium duration-500"
              onClick={onConfirm}
            >
              Confirmar
            </button>
          </div>
        </div>
      </AnimModal>
    </div>
  );
};

export default ConfirModal;
