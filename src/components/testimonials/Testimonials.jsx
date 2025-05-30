// components/Testimonials.js
'use client'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import styles from '@/styles/Testimonials.module.css'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Parent of Aarav (Grade 8)',
      image: '👩‍💼',
      rating: 5,
      testimonial:
        'Get Success Academy has been absolutely wonderful for my son Aarav. The teachers are incredibly dedicated and the learning environment is fantastic. His confidence and academic performance have improved dramatically since joining.',
      highlight: 'Improved confidence and academic performance',
      location: 'Mumbai, India',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Parent of Ananya (Grade 10)',
      image: '👨‍💼',
      rating: 5,
      testimonial:
        'The personalized attention my daughter receives here is exceptional. The faculty goes above and beyond to ensure every student succeeds. The innovative teaching methods make learning enjoyable and effective.',
      highlight: 'Exceptional personalized attention',
      location: 'Delhi, India',
    },
    {
      id: 3,
      name: 'Sunita Patel',
      role: 'Parent of Rohan (Grade 12)',
      image: '👩‍🏫',
      rating: 5,
      testimonial:
        'As Rohan approaches his board exams, I am confident he is well-prepared thanks to Get Success Academy. The comprehensive curriculum and excellent career guidance have been invaluable for his future.',
      highlight: 'Excellent board exam preparation',
      location: 'Pune, India',
    },
    {
      id: 4,
      name: 'Amit Verma',
      role: 'Parent of Kavya (Grade 6)',
      image: '👨‍💻',
      rating: 5,
      testimonial:
        "My daughter loves going to school every day! The creative teaching methods and supportive environment have made learning a joyful experience. The teachers truly care about each child's growth.",
      highlight: 'Joyful learning experience',
      location: 'Bangalore, India',
    },
    {
      id: 5,
      name: 'Meera Joshi',
      role: 'Parent of Arjun (Grade 4)',
      image: '👩‍🎓',
      rating: 5,
      testimonial:
        'The holistic development approach at Get Success Academy is remarkable. Not only has Arjun excelled academically, but his social skills and creativity have also flourished tremendously.',
      highlight: 'Remarkable holistic development',
      location: 'Chennai, India',
    },
    {
      id: 6,
      name: 'Vikash Singh',
      role: 'Parent of Ishika (Grade 9)',
      image: '👨‍🔬',
      rating: 5,
      testimonial:
        'The technology integration and modern facilities at this academy are impressive. Ishika is always excited to share what she learned each day. The quality of education is truly world-class.',
      highlight: 'World-class education quality',
      location: 'Hyderabad, India',
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

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

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (newDirection) => {
    if (newDirection === 1) {
      nextTestimonial()
    } else {
      prevTestimonial()
    }
    setPage([page + newDirection, newDirection])
  }

  return (
    <section className={styles.testimonials} ref={ref}>
      {/* Animated Background */}
      <div className={styles.backgroundElements}>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`${styles.bgElement} ${styles[`element${i + 1}`]}`}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.span variants={itemVariants} className="section-badge">
            💬 Testimonials
          </motion.span>
          <motion.h2 variants={itemVariants}>
            What Parents Say About Us
          </motion.h2>
          <motion.p variants={itemVariants} className="section-description">
            Hear from the families who trust us with their children's education.
            Their success stories inspire us to continue our mission of
            excellence.
          </motion.p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className={styles.statsContainer}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className={styles.statItem} variants={itemVariants}>
            <motion.div
              className={styles.statNumber}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              98%
            </motion.div>
            <p>Parent Satisfaction</p>
          </motion.div>
          <motion.div className={styles.statItem} variants={itemVariants}>
            <motion.div
              className={styles.statNumber}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              500+
            </motion.div>
            <p>Happy Families</p>
          </motion.div>
          <motion.div className={styles.statItem} variants={itemVariants}>
            <motion.div
              className={styles.statNumber}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              4.9★
            </motion.div>
            <p>Average Rating</p>
          </motion.div>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          className={styles.testimonialContainer}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              className={styles.testimonialCard}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Quote Icon */}
              <motion.div
                className={styles.quoteIcon}
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                "
              </motion.div>

              {/* Star Rating */}
              <motion.div className={styles.rating}>
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    className={styles.star}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    whileHover={{
                      scale: 1.3,
                      rotate: 180,
                      transition: { duration: 0.3 },
                    }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </motion.div>

              {/* Testimonial Text */}
              <motion.p
                className={styles.testimonialText}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {testimonials[currentIndex].testimonial}
              </motion.p>

              {/* Highlight */}
              <motion.div
                className={styles.highlight}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                💡 {testimonials[currentIndex].highlight}
              </motion.div>

              {/* Author Info */}
              <motion.div
                className={styles.authorInfo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <motion.div
                  className={styles.authorImage}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {testimonials[currentIndex].image}
                </motion.div>
                <div className={styles.authorDetails}>
                  <h4 className={styles.authorName}>
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className={styles.authorRole}>
                    {testimonials[currentIndex].role}
                  </p>
                  <p className={styles.authorLocation}>
                    📍 {testimonials[currentIndex].location}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            ←
          </motion.button>
          <motion.button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            →
          </motion.button>
        </motion.div>

        {/* Testimonial Indicators */}
        <motion.div
          className={styles.indicators}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.active : ''
              }`}
              onClick={() => goToTestimonial(index)}
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </motion.div>

        {/* Auto-play Toggle */}
        <motion.div
          className={styles.autoPlayToggle}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.button
            className={styles.playButton}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
          </motion.button>
        </motion.div>

        {/* Thumbnail Preview */}
        <motion.div
          className={styles.thumbnailContainer}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`${styles.thumbnail} ${
                index === currentIndex ? styles.activeThumbnail : ''
              }`}
              onClick={() => goToTestimonial(index)}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.thumbnailImage}>{testimonial.image}</div>
              <div className={styles.thumbnailInfo}>
                <h5>{testimonial.name}</h5>
                <p>{testimonial.role.split('(')[0]}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
