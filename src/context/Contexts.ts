import { createContext } from 'react';
interface Context{
    theme: string;
    notifyError: () => void;
    notifySucess: () => void;
    sucess: boolean;
    setSucess: React.Dispatch<React.SetStateAction<boolean>>;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const Contexts = createContext({} as Context);