// context/ThemeContext.js
'use client'
import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      const isDarkMode = savedTheme === 'dark'
      setIsDark(isDarkMode)
      document.documentElement.setAttribute('data-theme', savedTheme)
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      setIsDark(prefersDark)
      document.documentElement.setAttribute(
        'data-theme',
        prefersDark ? 'dark' : 'light'
      )
    }
  }, [])

  useEffect(() => {
    // Update theme when isDark changes
    const theme = isDark ? 'dark' : 'light'
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
