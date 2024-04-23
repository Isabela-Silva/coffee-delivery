import { ReactNode, createContext, useState } from "react";

interface CoffeeContextType {
  totalQuant: number;
  SetTotalPedidos: (total: number) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps {
  children: ReactNode;
}
export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [totalQuant, setTotalQuant] = useState(0);
  function SetTotalPedidos(total: number) {
    setTotalQuant(total);
  }
  return (
    <CoffeeContext.Provider value={{ totalQuant, SetTotalPedidos }}>
      {children}
    </CoffeeContext.Provider>
  );
}
