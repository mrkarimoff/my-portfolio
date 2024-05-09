import { createContext } from 'react';

type ContextType = {
  isOpenDrawer: boolean;
  activeIndex: number;
  currentCard: string;
  toggleDrawer: (value?: boolean) => void;
  setActiveIndex: (value: number) => void;
  setCurrentCard: (value: string) => void;
};

const Context = createContext<ContextType | null>(null);
export default Context;
