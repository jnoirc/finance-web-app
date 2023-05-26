import ProtectedRoute from './ProtectedRoute';
import Dashboard from '@/components/Dashboard';
import { useSelector } from 'react-redux';

export const metadata = {
  title: 'Home',
};

export default function Home() {
  const theme = useSelector(state => state);
  const containerClassName = theme === 'dark' ? 'bg-neutral-950' : 'bg-zinc-200';
  return (
    <ProtectedRoute>
      <div className={containerClassName}>
        <Dashboard />
      </div>
    </ProtectedRoute>
  );
}
