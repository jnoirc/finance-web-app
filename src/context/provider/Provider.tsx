'use client';

import { useState } from 'react';
import { Contexts } from '../Contexts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface ProviderTheme {
  children: React.ReactNode;
}

export const Provider = ({ children }: ProviderTheme) => {
  const [theme, setTheme] = useState('light');
  const [sucess, setSucess] = useState(false);
  const notifyError = () => {
    toast.error('Credenciais inválidas!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const notifySucess = () => {
    toast.success('Sucesso', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  return (
    <Contexts.Provider
      value={{ theme, setTheme, notifyError, notifySucess, sucess, setSucess }}
    >
      {children}
    </Contexts.Provider>
  );
};
