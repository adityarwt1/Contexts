import React, { useState, createContext, ReactNode } from "react";

// Define the shape of the context
interface CounterContextType {
  number: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// Create context with default value as null
const CounterContext = createContext<CounterContextType | null>(null);

// Define props for the provider component
interface CounterProviderProps {
  children: ReactNode;
  initialNumber?: number; // Make this optional with a default value
}

export function CounterProvider({ children, initialNumber = 0 }: CounterProviderProps) {
  const [number, setNumber] = useState(initialNumber);

  const increment = () => setNumber((prev) => prev + 1);
  const decrement = () => setNumber((prev) => prev - 1);
  const reset = () => setNumber(initialNumber);

  return (
    <CounterContext.Provider value={{ number, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
}

// Optional: export context for useContext in children
export default CounterContext;
