'use client';
import { useContext } from 'react';
import useContexts from './hooks/useContexts';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  const { theme }: any = useContexts();
  const containerClassName =
    theme === 'dark' ? 'bg-neutral-950' : 'bg-zinc-100';
  return (
    <ProtectedRoute page="dashboard">
      <body className={containerClassName}>
        <Dashboard />
      </body>
    </ProtectedRoute>
  );
}
