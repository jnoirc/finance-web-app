'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ilustre from '@/assets/ilustre.png';
import Input from '@/components/input';
import Button from '@/components/Button';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/services/firebase';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEmail = (value: any) => {
    setEmail(value);
  };

  const handlePassword = (value: any) => {
    setPassword(value);
  };

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    if (loading) {
      return (
        <div className="h-screen flex items-center justify-center">
          <p className="text-lg font-bold">Processando...</p>
        </div>
      );
    }
  if (error) {
    console.error(`Error:`, error);
  }
  if (user) {
    router.push('/login');
  }

  const handleForm = async (e: any) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
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
          />
        </div>

        <div>
          <Input
            type="password"
            label="Password"
            isIcon={true}
            onInputChange={handlePassword}
            error={error ? true : false}
          />
        </div>
        <div className='flex mt-1'>
          <span className='font-semibold text-zinc-600'>Já tem uma conta?</span>
          <Link href={'/login'} className="ml-3 mb-3 text-purple-800">
            Acesse
          </Link>
        </div>
        <Button onClick={handleForm} title="Cadastrar" />
      </form>
    </div>
  );
}
