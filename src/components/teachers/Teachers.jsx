// components/Teachers.js
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import styles from '@/styles/Teachers.module.css'

const Teachers = () => {
  const ref = useRef(null)
  const scrollRef = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const teachers = [
    {
      id: 1,
      name: 'Md Intekhab Rounaque',
      role: 'Director & Principal',
      degree: 'M.Tech(Thermal Engineering), B.Tech(Mechanical Engineering)',
      experience: '10+ Years',
      image: '👨‍💼',
      specialization: 'Educational Administration',
      description:
        'Visionary leader with extensive experience in transforming educational institutions.',
      achievements: [
        'Excellence in Education Award 2023',
        'Educational Leadership Certification',
      ],
      category: 'leadership',
    },
    {
      id: 2,
      name: 'Md Basharat Taquee',
      role: 'Software Developer',
      degree: 'B.Tech(Mechanical Engineering)',
      experience: '10+ Years',
      image: '👩‍💼',
      specialization: 'Academic Administration',
      description:
        'Dedicated educator focused on holistic student development and academic excellence.',
      achievements: [
        'Best Principal Award 2022',
        'Child Psychology Certification',
      ],
      category: 'leadership',
    },
    {
      id: 3,
      name: 'Dr. Amit Verma',
      role: 'Mathematics Teacher',
      degree: 'PhD Mathematics, B.Ed',
      experience: '15+ Years',
      image: '👨‍🏫',
      specialization: 'Advanced Mathematics',
      description:
        'Expert in making complex mathematical concepts simple and engaging for students.',
      achievements: ['Best Math Teacher 2023', 'Published 10+ Research Papers'],
      category: 'science',
    },
    {
      id: 4,
      name: 'Dr. Sunita Patel',
      role: 'Chemistry Teacher',
      degree: 'PhD Chemistry, M.Sc',
      experience: '12+ Years',
      image: '👩‍🔬',
      specialization: 'Organic Chemistry',
      description:
        'Innovative chemistry educator with expertise in practical laboratory techniques.',
      achievements: ['Science Excellence Award', 'Chemistry Olympiad Trainer'],
      category: 'science',
    },
    {
      id: 5,
      name: 'Mr. Vikram Singh',
      role: 'Physics Teacher',
      degree: 'M.Sc Physics, B.Ed',
      experience: '14+ Years',
      image: '👨‍🔬',
      specialization: 'Theoretical Physics',
      description:
        'Passionate physics teacher who brings complex theories to life through experiments.',
      achievements: ['Physics Innovation Award', 'IIT JEE Coaching Expert'],
      category: 'science',
    },
    {
      id: 6,
      name: 'Mrs. Kavita Joshi',
      role: 'English Teacher',
      degree: 'MA English Literature',
      experience: '10+ Years',
      image: '👩‍🏫',
      specialization: 'Literature & Communication',
      description:
        'Creative English teacher fostering language skills and literary appreciation.',
      achievements: [
        'Best Language Teacher',
        'Creative Writing Workshop Leader',
      ],
      category: 'humanities',
    },
    {
      id: 7,
      name: 'Mr. Rohit Gupta',
      role: 'Biology Teacher',
      degree: 'M.Sc Biology, B.Ed',
      experience: '11+ Years',
      image: '👨‍🔬',
      specialization: 'Molecular Biology',
      description:
        'Biology expert with focus on practical learning and environmental awareness.',
      achievements: ['Environmental Education Award', 'Science Fair Judge'],
      category: 'science',
    },
    {
      id: 8,
      name: 'Mrs. Neha Agarwal',
      role: 'Computer Science Teacher',
      degree: 'MCA, B.Tech CSE',
      experience: '8+ Years',
      image: '👩‍💻',
      specialization: 'Programming & AI',
      description:
        'Tech-savvy educator preparing students for the digital future.',
      achievements: [
        'Coding Competition Mentor',
        'AI in Education Certification',
      ],
      category: 'technology',
    },
    {
      id: 9,
      name: 'Mrs. Neha Agarwal',
      role: 'Computer Science Teacher',
      degree: 'MCA, B.Tech CSE',
      experience: '8+ Years',
      image: '👩‍💻',
      specialization: 'Programming & AI',
      description:
        'Tech-savvy educator preparing students for the digital future.',
      achievements: [
        'Coding Competition Mentor',
        'AI in Education Certification',
      ],
      category: 'technology',
    },
  ]

  const scrollLeft = () => {
    if (scrollRef.current) {
      const newIndex = Math.max(0, currentIndex - 1)
      setCurrentIndex(newIndex)
      scrollRef.current.scrollTo({
        left: newIndex * 350,
        behavior: 'smooth',
      })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      const maxIndex =
        teachers.length - Math.floor(scrollRef.current.offsetWidth / 350)
      const newIndex = Math.min(maxIndex, currentIndex + 1)
      setCurrentIndex(newIndex)
      scrollRef.current.scrollTo({
        left: newIndex * 350,
        behavior: 'smooth',
      })
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className={styles.teachers} ref={ref} id="teachers">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.span variants={itemVariants} className="section-badge">
            👩‍🏫 Our Teachers
          </motion.span>
          <motion.h2 variants={itemVariants}>Meet Our Expert Faculty</motion.h2>
          <motion.p variants={itemVariants} className="section-description">
            Our dedicated team of experienced educators is committed to
            nurturing young minds and inspiring excellence in every student.
          </motion.p>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          className={styles.navigation}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.button
            className={styles.navBtn}
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ←
          </motion.button>
          <motion.button
            className={styles.navBtn}
            onClick={scrollRight}
            disabled={currentIndex >= teachers.length - 3}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            →
          </motion.button>
        </motion.div>

        {/* Teachers Slider */}
        <motion.div
          className={styles.teachersContainer}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className={styles.teachersSlider} ref={scrollRef}>
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                className={`${styles.teacherCard} ${styles[teacher.category]}`}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 300 },
                }}
              >
                {/* Card Background Gradient */}
                <div className={styles.cardGradient}></div>

                {/* Teacher Image */}
                <motion.div
                  className={styles.teacherImage}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <div className={styles.imageContainer}>
                    <span className={styles.emoji}>{teacher.image}</span>
                    <div className={styles.imageOverlay}>
                      <span className={styles.viewProfile}>View Profile</span>
                    </div>
                  </div>
                </motion.div>

                {/* Teacher Info */}
                <div className={styles.teacherInfo}>
                  <motion.h3
                    className={styles.teacherName}
                    whileHover={{ color: 'var(--primary-color)' }}
                  >
                    {teacher.name}
                  </motion.h3>

                  <div className={styles.roleContainer}>
                    <span className={styles.role}>{teacher.role}</span>
                    <span className={styles.experience}>
                      {teacher.experience}
                    </span>
                  </div>

                  <p className={styles.degree}>{teacher.degree}</p>
                  <p className={styles.specialization}>
                    {teacher.specialization}
                  </p>
                  <p className={styles.description}>{teacher.description}</p>

                  {/* Achievements */}
                  <div className={styles.achievements}>
                    <h4>Key Achievements:</h4>
                    <ul>
                      {teacher.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Button */}
                  <motion.button
                    className={styles.contactBtn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Teacher
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicators */}
        <motion.div
          className={styles.indicators}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {Array.from({ length: Math.ceil(teachers.length / 3) }).map(
            (_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  Math.floor(currentIndex / 3) === index ? styles.active : ''
                }`}
                onClick={() => {
                  setCurrentIndex(index * 3)
                  scrollRef.current?.scrollTo({
                    left: index * 3 * 350,
                    behavior: 'smooth',
                  })
                }}
              />
            )
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Teachers
