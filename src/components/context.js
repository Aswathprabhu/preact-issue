import { createContext } from 'preact';
import { useState } from 'preact/hooks';

export const Context = createContext();

export default function Hugger({ children }) {
  const [state, setState] = useState(0);
  return (
    <Context.Provider value={{ state, setState }}>
      {children}
    </Context.Provider>
  )
}