'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/services/firebase';

interface jsx {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: jsx) {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!user && !token) {
      route.push('/login');
    }
  }, [user, route, token]);

  if (loading) {
    <div>Carregando...</div>;
  }

  if (!user && !token) {
    return null;
  }

  return <div>{children}</div>;
}
