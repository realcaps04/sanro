import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const QuoteContext = createContext(null)

export function QuoteProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [interest, setInterest] = useState('Interior Doors')

  const openQuote = useCallback((nextInterest) => {
    if (nextInterest) setInterest(nextInterest)
    setOpen(true)
  }, [])

  const closeQuote = useCallback(() => setOpen(false), [])

  const value = useMemo(
    () => ({ open, interest, openQuote, closeQuote, setInterest }),
    [open, interest, openQuote, closeQuote],
  )

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
}

export function useQuote() {
  const ctx = useContext(QuoteContext)
  if (!ctx) throw new Error('useQuote must be used within QuoteProvider')
  return ctx
}
