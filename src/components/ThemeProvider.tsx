'use client';

import { Provider } from 'react-redux';
import { themeStore } from '@/redux/modules/themeStore';

interface ReduxProvider {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ReduxProvider) {
  return <Provider store={themeStore}>{children}</Provider>;
}
