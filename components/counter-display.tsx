"use client"

import { userCounter } from "@/contexts/counter-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Minus, Plus, RotateCcw } from "lucide-react"

export function CounterDisplay() {
  const { number, increment, decrement, reset } = userCounter()

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Counter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-4xl font-bold text-center">{number}</div>
        <div className="flex gap-2 justify-center">
          <Button variant="outline" size="icon" onClick={decrement} aria-label="Decrease counter">
            <Minus className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={reset} aria-label="Reset counter">
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={increment} aria-label="Increase counter">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
