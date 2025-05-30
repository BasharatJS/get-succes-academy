// components/ClientWrapper.js
'use client'
import { useState, useEffect } from 'react'

export default function ClientWrapper({ children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div suppressHydrationWarning>{children}</div>
  }

  return children
}
