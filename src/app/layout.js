// app/layout.js

import { ThemeProvider } from '@/context/ThemeContext'
import './globals.css'

export const metadata = {
  title: 'Get Success Academy - Excellence in Education',
  description:
    'Empowering young minds from Nursery to 12th Grade with quality education, dedicated teachers, and holistic development.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
