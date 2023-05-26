'use client'
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '@/components/Dashboard';
import { useSelector } from 'react-redux';

export const metadata = {
  title: 'Home',
};

export default function Home() {
  const theme = useSelector(state => state);
  return (
    <ProtectedRoute>
      <body className={`${theme === 'dark' ? 'bg-neutral-950' : 'bg-zinc-200'}`}>
        <Dashboard />
      </body>
    </ProtectedRoute>
  );
}
