
import { Provider } from '@/context/provider/Provider';
import './globals.css';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Home',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <Provider>
        <body className={poppins.className}>
          {children}
        </body>
      </Provider>
    </html>
  );
}

