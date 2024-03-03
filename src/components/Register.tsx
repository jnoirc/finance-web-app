'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ilustre from '@/assets/ilustre.png';
import Input from '@/components/input';
import Button from '@/components/Button';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/services/firebase';
import { ToastContainer } from 'react-toastify';
import useContexts from '@/app/hooks/useContexts';
import Loading from './Loading';
export default function Register() {
  const { notifyError, notifySucess } = useContexts();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  useEffect(() => {
    if (error) {
      notifyError();
    }
  }, [error]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  if (error) {
    console.error(`Error:`, error);
  }
  if (user) {
    notifySucess();
    setTimeout(() => {
      router.push('/login');
    }, 2000);
  }
  const handleForm = async (e: any) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <ToastContainer />
      <form className="shadow-2xl w-500 h-480 bg-white rounded-md text-center flex flex-col items-center p-2">
        <Image
          className="mt-3"
          width={250}
          height={250}
          src={ilustre}
          alt="Ilustre"
        />
        <h1 className="mt-4 mb-4 text-2xl font-bold">Cadastro</h1>
        <div>
          <Input
            type="email"
            label="Email"
            isIcon={false}
            onInputChange={handleEmail}
            error={error ? true : false}
            labelAuth={true}
          />
        </div>

        <div>
          <Input
            type="password"
            label="Password"
            isIcon={true}
            onInputChange={handlePassword}
            error={error ? true : false}
            labelAuth={true}
          />
        </div>
        <div className="flex mt-1">
          <span className="font-semibold text-zinc-600">Já tem uma conta?</span>
          <Link href={'/login'} className="ml-3 mb-3 text-purple-800">
            Acesse
          </Link>
        </div>
        <Button onClick={handleForm} title="Cadastrar" />
      </form>
    </div>
  );
}
