import ProtectedRoute from './ProtectedRoute';

export const metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <ProtectedRoute>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Home</h1>
      </main>
    </ProtectedRoute>
  );
}