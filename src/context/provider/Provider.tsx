'use client';

import { useState } from 'react';
import { ThemeContext } from '../themeContext';

interface ProviderTheme {
  children: React.ReactNode;
}

export const Provider = ({ children }: ProviderTheme) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
