'use client';
import { ConfirmModalType } from '@/types/type';
import { FaTimes } from 'react-icons/fa';
const ConfirModal = ({
  title,
  message,
  onConfirm,
  onCancel,
  onCancelX,
}: ConfirmModalType) => {
  return (
    <div className="fixed inset-0 h-screen w-full bg-gray-500 flex items-center justify-center p-2 z-30">
      <div className="bg-white w-370 sm:w-480 h-60 rounded-lg shadow-md relative transition-opacity">
        <FaTimes
          onClick={onCancelX}
          className="absolute right-4 top-4 cursor-pointer text-2xl"
        />
        <h1 className="font-semibold font-zinc-600 text-xl ml-4 mt-4">
          {title}
        </h1>
        <div className="mt-3 mx-auto w-72 sm:w-430 bg-red-100 text-red-600 font-medium rounded-md p-2">
          <p>{message}</p>
          <span></span>
        </div>
        <div className="flex absolute bottom-4 right-5">
          <button
            className="bg-green-700 text-white rounded p-2 flex items-center font-medium mr-2 hover:bg-green-600 duration-500"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            className="bg-red-700 hover:bg-red-600 text-white rounded p-2 flex items-center font-medium duration-500"
            onClick={onConfirm}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirModal;
