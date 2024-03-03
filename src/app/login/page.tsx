import Login from '@/components/Login';
import ProtectedRoute from '../ProtectedRoute';

export const metadata = {
  title: 'Login',
};

export default function page() {
  return (
    <div>
      <ProtectedRoute page="login">
        <Login />
      </ProtectedRoute>
    </div>
  );
}
