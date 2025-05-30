// components/header/Header.js
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '@/styles/Header.module.css'
import { useTheme } from '@/context/ThemeContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Teachers', href: '/teachers' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'News & Blog', href: '/blog' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.container}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <Link href="/">
            <div className={styles.logoContent}>
              <div className={styles.logoIcon}>🎓</div>
              <div className={styles.logoText}>
                <h2>Get Success</h2>
                <span>Academy</span>
              </div>
            </div>
          </Link>
        </motion.div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link href={item.href} className={styles.navLink}>
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className={styles.headerActions}>
          <motion.button
            className={styles.themeToggle}
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {isDark ? '☀️' : '🌙'}
          </motion.button>

          <motion.button
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
