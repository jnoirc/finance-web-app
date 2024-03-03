import { useContext } from 'react';
import { Contexts } from '@/context/Contexts';

export default function useContexts() {
  return useContext(Contexts);
}
