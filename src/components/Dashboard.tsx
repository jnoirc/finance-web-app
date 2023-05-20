'use client';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '@/services/firebase';
export default function Dashboard() {
  const [signOut, loading] = useSignOut(auth);
  
  if (loading) {
     <p>Procesando...</p>;
  }
  const logout = async () => {
    await signOut();
    localStorage.removeItem('token');
  };

  return (
    <div>
      <button className="text-black bg-red-500" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
