'use client';
import { useContext } from 'react';
import { ThemeContext } from '@/context/themeContext';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  const { theme }: any = useContext(ThemeContext);
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
