// components/Hero.js
'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from '@/styles/Hero.module.css'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: 'Welcome to Get Success Academy',
      subtitle: 'Empowering young minds from Nursery to 12th Grade',
      description: 'To dream big, work hard, and achieve excellence.',
      image: '🎓📚✨',
    },
    {
      title: 'Academic Excellence',
      subtitle: 'Nurturing potential with care and creativity',
      description: 'With dedicated teachers and student-centered curriculum.',
      image: '🏆📖🌟',
    },
    {
      title: 'Admissions Open 2025–26',
      subtitle: "Your child's success story begins here",
      description: 'Book a school tour or speak to our counselors today!',
      image: '🚀🎯💡',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        {/* <div className={styles.heroPattern}></div> */}
        <div className={styles.floatingElements}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`${styles.floatingElement} ${
                styles[`element${i + 1}`]
              }`}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {['📚', '✏️', '🎨', '🔬', '🏆', '💡'][i]}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fixed: Use styles.container instead of className="container" */}
      <div className={styles.containers}>
        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={currentSlide}
        >
          <motion.div className={styles.heroBadge} variants={itemVariants}>
            <span>🌟 Excellence in Education</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.heroTitle}>
            {heroSlides[currentSlide].title}
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.heroSubtitle}>
            {heroSlides[currentSlide].subtitle}
          </motion.p>

          <motion.p variants={itemVariants} className={styles.heroDescription}>
            {heroSlides[currentSlide].description}
          </motion.p>

          <motion.div variants={itemVariants} className={styles.heroActions}>
            <motion.button
              className="btn btn-primary"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              📞 Book a Tour
            </motion.button>
            <motion.button
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📋 Apply Now
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.heroStats}>
            <div className={styles.stat}>
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.stat}>
              <h3>1000+</h3>
              <p>Happy Students</p>
            </div>
            <div className={styles.stat}>
              <h3>50+</h3>
              <p>Expert Teachers</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className={styles.heroImageContainer}>
            <motion.div
              className={styles.heroEmoji}
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {heroSlides[currentSlide].image}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className={styles.heroIndicators}>
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentSlide ? styles.active : ''
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
