import { ContextProvider } from "@/contexts/counter-context"
import { CounterDisplay } from "@/components/counter-display"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <ContextProvider initialnumber={0}>
        <div className="space-y-8">
          <h1 className="text-3xl font-bold text-center">Counter Context Demo</h1>
          <CounterDisplay />

          {/* You can add multiple counter displays and they'll all share the same state */}
          <div className="text-center text-sm text-muted-foreground">
            <p>All counter components share the same state through context</p>
          </div>
        </div>
      </ContextProvider>
    </main>
  )
}
