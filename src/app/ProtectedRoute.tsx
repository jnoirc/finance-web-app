'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/services/firebase';
import { useDocument } from 'react-firebase-hooks/firestore';
import { getFirestore } from 'firebase/firestore';
interface jsx {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: jsx) {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const firestore = getFirestore();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!user && !token) {
      route.push('/login');
    }
  }, [user, route]);


  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-lg font-bold">Carregando...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <div>{children}</div>
}