'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/services/firebase';

export const metadata = {
  title: 'Home',
};

export default function Home() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (!user) {
      route.push('/login');
    }
  }, [loading, user, route]);

  if (loading) {
     <div>Carregando...</div>;
  }

  if (!user) {
    return null;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
    </main>
  );
}
