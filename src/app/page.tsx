import ProtectedRoute from './ProtectedRoute';
import Dashboard from '@/components/Dashboard';
export const metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  );
}
