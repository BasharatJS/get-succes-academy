// components/contact/ContactForm.jsx
'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import dynamic from 'next/dynamic'
import styles from '@/styles/ContactForm.module.css'

// Import map component dynamically
const ExactMap = dynamic(() => import('./ExactMap'), {
  ssr: false,
  loading: () => (
    <div className={styles.mapLoading}>
      <div className={styles.spinner}></div>
      <p>Loading Map...</p>
    </div>
  ),
})

const ContactForm = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.1 })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <section className={styles.contactSection} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>📍 Contact Us</div>
          <h2 className={styles.title}>Get In Touch With Us</h2>
          <p className={styles.description}>
            Ready to start your educational journey? Contact us today and let's
            discuss how we can help your child achieve academic excellence.
          </p>
        </motion.div>

        {/* Main Content - Map Left, Form Right */}
        <div className={styles.contactGrid}>
          {/* Left Side - Map Section */}
          <motion.div
            className={styles.mapSection}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.mapHeader}>
              <h3>🗺️ Find Us Here</h3>
              <p>Visit our campus and see the facilities firsthand</p>
            </div>
            <ExactMap isInView={isInView} />
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className={styles.formSection}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.formHeader}>
              <h3>📝 Send Us a Message</h3>
              <p>
                We'd love to hear from you. Fill out the form below and we'll
                get back to you as soon as possible.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                className={styles.successMessage}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                <div className={styles.successIcon}>✅</div>
                <h4>Message Sent Successfully!</h4>
                <p>
                  Thank you for contacting us. We'll get back to you within 24
                  hours.
                </p>
              </motion.div>
            ) : (
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className={styles.textarea}
                  />
                </div>

                <motion.button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className={styles.loading}>
                      <div className={styles.spinner}></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
