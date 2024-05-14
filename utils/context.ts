import { createContext } from 'react';
import type { Project } from './constants';

type ContextType = {
  isOpenDrawer: boolean;
  activeIndex: number;
  currentProject: Project | null;
  toggleDrawer: (value?: boolean) => void;
  setActiveIndex: (value: number) => void;
  setCurrentProject: (value: Project) => void;
};

const Context = createContext<ContextType | null>(null);
export default Context;
