// "use client"
"use client"
import React, { createContext, useContext, useState } from "react";


interface CreateCounterProps{
  number: number,
  increment : ()=> void,
  decrement: ()=> void,
  reset: ()=> void
}

const CounterContext = createContext<CreateCounterProps| undefined>(undefined)

interface ContextProviderprops{
  children: React.ReactNode,
  initialnumber: number
}
export function ContextProvider({children, initialnumber= 0}: ContextProviderprops){
  const [number, setNumber] = useState(initialnumber)

  const increment = ()=> setNumber(prev => prev + 1)
  const decrement = ()=> setNumber(prev => prev - 1 ) 
  const reset = ()=> setNumber(initialnumber)

  return <CounterContext.Provider value={{number, increment, decrement , reset}}>{children}</CounterContext.Provider>
}

export function userCounter(){
    const counter = useContext(CounterContext)
    if(!counter){
      throw new Error("context not found")
    }

    return counter
}