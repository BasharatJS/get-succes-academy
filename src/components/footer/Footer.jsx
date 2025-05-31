// components/Footer.js
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.1 })
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Fix hydration issue
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail('')
      setName('')

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  // Fix scroll to top function
  const scrollToTop = () => {
    if (mounted && typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Classes', href: '/services' },
    { name: 'Our Teachers', href: '/teachers' },
    { name: 'Our Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ]

  const socialLinks = [
    { name: 'Twitter', icon: '🐦', href: '#', color: '#1DA1F2' },
    { name: 'Facebook', icon: '📘', href: '#', color: '#4267B2' },
    { name: 'LinkedIn', icon: '💼', href: '#', color: '#0077B5' },
    { name: 'Instagram', icon: '📷', href: '#', color: '#E4405F' },
  ]

  return (
    <footer className={styles.footer} ref={ref} id="footer">
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`${styles.bgElement} ${styles[`element${i + 1}`]}`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container">
        <motion.div
          className={styles.footerContent}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Logo and Description Section */}
          <motion.div className={styles.logoSection} variants={itemVariants}>
            <motion.div
              className={styles.logo}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <div className={styles.logoIcon}>🎓</div>
              <div className={styles.logoText}>
                <h3>Get Success</h3>
                <span>Academy</span>
              </div>
            </motion.div>

            <motion.p className={styles.description} variants={itemVariants}>
              Empowering young minds from Nursery to 12th Grade with quality
              education, dedicated teachers, and innovative learning methods.
              Building tomorrow's leaders today.
            </motion.p>

            {/* Social Media Links */}
            <motion.div
              className={styles.socialLinks}
              variants={containerVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={styles.socialLink}
                  variants={socialVariants}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    backgroundColor: social.color,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{ '--social-color': social.color }}
                >
                  <span>{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div className={styles.contactSection} variants={itemVariants}>
            <motion.h4
              className={styles.sectionTitle}
              whileHover={{ color: 'var(--primary-color)' }}
            >
              Get In Touch
            </motion.h4>

            <motion.div className={styles.contactInfo}>
              <motion.div
                className={styles.contactItem}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
              >
                <div className={styles.contactIcon}>📍</div>
                <div>
                  <h5>Address</h5>
                  <p>Balia Belone Road, Salmari, Katihar, Bihar</p>
                </div>
              </motion.div>

              <motion.div
                className={styles.contactItem}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
              >
                <div className={styles.contactIcon}>📧</div>
                <div>
                  <h5>Email</h5>
                  <p>info@getsuccessacademy.com</p>
                </div>
              </motion.div>

              <motion.div
                className={styles.contactItem}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
              >
                <div className={styles.contactIcon}>📞</div>
                <div>
                  <h5>Phone</h5>
                  <p>+91 8862817379</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className={styles.linksSection} variants={itemVariants}>
            <motion.h4
              className={styles.sectionTitle}
              whileHover={{ color: 'var(--primary-color)' }}
            >
              Quick Links
            </motion.h4>

            <motion.ul
              className={styles.linksList}
              variants={containerVariants}
            >
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  variants={itemVariants}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                >
                  <Link href={link.href} className={styles.footerLink}>
                    <span className={styles.linkArrow}>▶</span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            className={styles.newsletterSection}
            variants={itemVariants}
          >
            <motion.h4
              className={styles.sectionTitle}
              whileHover={{ color: 'var(--primary-color)' }}
            >
              Newsletter
            </motion.h4>

            <motion.p className={styles.newsletterText}>
              Stay updated with our latest news, events, and educational
              insights.
            </motion.p>

            <motion.form
              className={styles.newsletterForm}
              onSubmit={handleNewsletterSubmit}
              variants={containerVariants}
            >
              <motion.div className={styles.inputGroup} variants={itemVariants}>
                <motion.input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={styles.formInput}
                  required
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: '0 0 20px rgba(79, 70, 229, 0.3)',
                  }}
                />
              </motion.div>

              <motion.div className={styles.inputGroup} variants={itemVariants}>
                <motion.input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.formInput}
                  required
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: '0 0 20px rgba(79, 70, 229, 0.3)',
                  }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting || isSubmitted}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 25px rgba(79, 70, 229, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    ⟳
                  </motion.span>
                ) : isSubmitted ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                  >
                    ✓ Subscribed!
                  </motion.span>
                ) : (
                  'Submit Now'
                )}
              </motion.button>
            </motion.form>

            {isSubmitted && (
              <motion.div
                className={styles.successMessage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                🎉 Thank you for subscribing to our newsletter!
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className={styles.footerBottom}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className={styles.divider} layoutId="divider" />

          <motion.div className={styles.bottomContent}>
            <motion.p className={styles.copyright} whileHover={{ scale: 1.02 }}>
              © 2025 Get Success Academy. All Rights Reserved. Designed by{' '}
              <span className={styles.designer}>EduTech Solutions</span>
            </motion.p>

            <motion.div className={styles.backToTop}>
              <motion.button
                className={styles.scrollTop}
                onClick={scrollToTop}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                }}
                whileTap={{ scale: 0.9 }}
              >
                ↑
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
