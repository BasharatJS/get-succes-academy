// app/page.js
'use client'
import { useState, useEffect } from 'react'
import Header from '@/components/header/Header'
import Hero from '@/components/hero-section/Hero'
import About from '@/components/about/About'
import Services from '@/components/services/Services'
import Teachers from '@/components/teachers/Teachers'
import Testimonials from '@/components/testimonials/Testimonials'
import NewsBlog from '@/components/news-blog/NewsBlog'
import Footer from '@/components/footer/Footer'
import ContactForm from '@/components/contact-form/ContactForm'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <main suppressHydrationWarning>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          {/* Animated Logo */}
          <div
            style={{
              fontSize: '4rem',
              marginBottom: '2rem',
              animation: 'bounce 2s infinite',
              filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))',
            }}
          >
            🎓
          </div>

          {/* School Name */}
          <div
            style={{
              color: 'white',
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '3rem',
              textAlign: 'center',
              animation: 'fadeInUp 1s ease-out',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            }}
          >
            Get Success Academy
          </div>

          {/* Loading Spinner */}
          <div
            style={{
              width: '60px',
              height: '60px',
              border: '4px solid rgba(255,255,255,0.3)',
              borderTop: '4px solid white',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              marginBottom: '1rem',
            }}
          ></div>

          {/* Loading Text */}
          <div
            style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '1.1rem',
              animation: 'pulse 2s infinite',
            }}
          >
            Loading Excellence...
          </div>

          {/* CSS Animations */}
          <style jsx>{`
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }

            @keyframes bounce {
              0%,
              20%,
              50%,
              80%,
              100% {
                transform: translateY(0);
              }
              40% {
                transform: translateY(-20px);
              }
              60% {
                transform: translateY(-10px);
              }
            }

            @keyframes pulse {
              0%,
              100% {
                opacity: 0.7;
              }
              50% {
                opacity: 1;
              }
            }

            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Teachers />
      <Testimonials />
      <NewsBlog />
      <ContactForm />
      <Footer />
    </main>
  )
}
