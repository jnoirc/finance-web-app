'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ilustre from '@/assets/ilustre.png';
import Input from '@/components/input';
import Button from '@/components/Button';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/services/firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const route = useRouter();

  const handleEmail = (value: any) => {
    setEmail(value);
  };

  const handlePassword = (value: any) => {
    setPassword(value);
  };

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (error) {
    console.error('error');
  }
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-lg font-bold">Processando...</p>
      </div>
    );
  }
  if (user) {
    route.push('/');
  }

  const handleForm = async (e: any) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(email, password);
      const user = auth.currentUser;
      if (user) {
        user.getIdToken().then((token) => {
          localStorage.setItem('token', token);
        });
      }
    } catch (error) {
      console.error(error);
    }
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
        <h1 className="mt-4 mb-4 text-2xl font-bold">Login</h1>
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
          <span className="font-semibold text-zinc-600">
            Não tem uma conta?
          </span>
          <Link href={'/register'} className="ml-3 mb-3 text-purple-800">
            Criar agora
          </Link>
        </div>
        <Button onClick={handleForm} title="Entrar" />
      </form>
    </div>
  );
}
