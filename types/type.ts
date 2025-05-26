import React,  { ReactNode }  from "react"
export interface CounterContextType {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

export interface CounterProviderProps {
  children: ReactNode
  initialValue?: number
}
