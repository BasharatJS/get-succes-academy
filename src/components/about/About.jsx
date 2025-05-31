// components/About.js
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from '@/styles/About.module.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const philosophyItems = [
    {
      icon: '🎯',
      title: 'Learning by Doing',
      description:
        'We encourage hands-on exploration and critical thinking to build practical skills and deep understanding.',
    },
    {
      icon: '👥',
      title: 'Individual Attention',
      description:
        'Every student matters. Every voice is heard. We provide personalized learning experiences.',
    },
    {
      icon: '⭐',
      title: 'Values & Integrity',
      description:
        'Academic success with a strong moral compass, building character alongside knowledge.',
    },
  ]

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '1000+', label: 'Happy Students' },
    { number: '50+', label: 'Expert Teachers' },
  ]

  return (
    <section className={styles.about} ref={ref} id="about">
      {/* Floating Background Elements */}
      <div className={styles.floatingElements}>
        <motion.div
          className={`${styles.floatingElement} ${styles.element1}`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className={`${styles.floatingElement} ${styles.element2}`}
          animate={{
            y: [0, -30, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className={`${styles.floatingElement} ${styles.element3}`}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className={`${styles.floatingElement} ${styles.element4}`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container">
        {/* Hero Section */}
        <motion.div
          className={styles.aboutHero}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left Content */}
          <motion.div className={styles.aboutContent} variants={slideInLeft}>
            <motion.h2 variants={itemVariants} className={styles.aboutTitle}>
              Who We Are
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={styles.aboutDescription}
            >
              Get Success Academy is a leading educational institution dedicated
              to academic excellence, character development, and holistic
              growth. We transform young minds through innovative teaching
              methods and personalized care.
            </motion.p>

            {/* Stats */}
            <motion.div
              className={styles.aboutStats}
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={styles.statItem}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                  }}
                >
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div className={styles.aboutVisual} variants={slideInRight}>
            <div className={styles.visualContainer}>
              {/* Central Hub */}
              <motion.div
                className={styles.centralHub}
                whileHover={{ scale: 1.1 }}
                animate={{
                  boxShadow: [
                    '0 10px 30px rgba(79, 70, 229, 0.3)',
                    '0 15px 40px rgba(79, 70, 229, 0.5)',
                    '0 10px 30px rgba(79, 70, 229, 0.3)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                🎓
              </motion.div>

              {/* Mission Card */}
              <motion.div
                className={styles.missionCard}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.cardContent}>
                  <div className={styles.cardFront}>
                    <div className={styles.cardIcon}>🎯</div>
                    <h4 className={styles.cardTitle}>Our Mission</h4>
                    <p className={styles.cardDescription}>Hover to explore</p>
                  </div>
                  <div className={styles.cardBack}>
                    <div className={styles.cardIcon}>🎯</div>
                    <h4 className={styles.cardTitle}>Our Mission</h4>
                    <p className={styles.cardDescription}>
                      To provide world-class education that nurtures every
                      child's potential and prepares them for future success.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                className={styles.visionCard}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.cardContent}>
                  <div className={styles.cardFront}>
                    <div className={styles.cardIcon}>🌟</div>
                    <h4 className={styles.cardTitle}>Our Vision</h4>
                    <p className={styles.cardDescription}>Hover to explore</p>
                  </div>
                  <div className={styles.cardBack}>
                    <div className={styles.cardIcon}>🌟</div>
                    <h4 className={styles.cardTitle}>Our Vision</h4>
                    <p className={styles.cardDescription}>
                      To be the most trusted educational institution that shapes
                      confident, capable, and compassionate leaders.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          className={styles.philosophySection}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h3 className={styles.philosophyTitle} variants={itemVariants}>
            Our Philosophy
          </motion.h3>

          <motion.div
            className={styles.philosophyGrid}
            variants={containerVariants}
          >
            {philosophyItems.map((item, index) => (
              <motion.div
                key={index}
                className={styles.philosophyCard}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { type: 'spring', stiffness: 300 },
                }}
              >
                <div className={styles.philosophyContent}>
                  <span className={styles.philosophyIcon}>{item.icon}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
