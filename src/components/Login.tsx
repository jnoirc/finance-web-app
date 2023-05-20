'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ilustre from '@/assets/ilustre.png';
import Input from '@/components/input';
import Button from '@/components/Button';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth } from "@/services/firebase";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEmail = (value: any) => {
    setEmail(value);
  };

  const handlePassword = (value: any) => {
    setPassword(value);
  };

  const handleForm = (e: any) => {
    e.preventDefault();
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
          />
        </div>

        <div>
          <Input
            type="password"
            label="Password"
            isIcon={true}
            onInputChange={handlePassword}
          />
        </div>
        <Link href={'/register'} className="mt-1 mb-3 text-purple-800">
          Criar conta
        </Link>
        <Button onClick={handleForm} title="Entrar" />
      </form>
    </div>
  );
}
