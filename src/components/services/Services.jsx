// components/Services.js
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from '@/styles/Services.module.css'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.2 })

  const services = [
    {
      icon: '🌱',
      title: 'Early Childhood Education',
      subtitle: '(Nur–UKG)',
      description:
        'Play-based learning that builds curiosity, communication, and confidence from the very beginning.',
      features: [
        'Play-based Learning',
        'Creative Activities',
        'Social Skills Development',
      ],
      backDescription:
        'Creating a foundation for lifelong learning through interactive play, creative expression, and nurturing care in a safe environment.',
      color: 'green',
    },
    {
      icon: '📘',
      title: 'Primary & Middle School',
      subtitle: '(Grades 1–8)',
      description:
        'A strong foundation in academics with equal emphasis on arts, sports, and values.',
      features: ['Strong Academics', 'Arts & Sports', 'Value Education'],
      backDescription:
        'Building essential skills and knowledge while fostering creativity, physical fitness, and moral development for well-rounded growth.',
      color: 'blue',
    },
    {
      icon: '🎓',
      title: 'Senior Secondary',
      subtitle: '(Grades 9–12)',
      description:
        'Expert coaching in Science, Commerce & Humanities streams. Career counseling and board exam preparation included.',
      features: ['Multiple Streams', 'Career Counseling', 'Board Exam Prep'],
      backDescription:
        'Preparing students for their future with specialized streams, career guidance, and comprehensive exam preparation for success.',
      color: 'purple',
    },
    {
      icon: '💻',
      title: 'Digital Learning Support',
      subtitle: 'Tech-Enabled Education',
      description:
        'Smart classrooms, online portals, and tech-enabled teaching for 21st-century skills.',
      features: ['Smart Classrooms', 'Online Portals', 'Digital Skills'],
      backDescription:
        'Embracing technology to enhance learning with interactive digital tools, online resources, and modern teaching methods.',
      color: 'orange',
    },
    {
      icon: '🚌',
      title: 'Safe Transport Services',
      subtitle: 'Secure Commute',
      description:
        'GPS-enabled buses with trained staff for secure and convenient pick-up/drop.',
      features: ['GPS Tracking', 'Trained Staff', 'Safe Routes'],
      backDescription:
        'Ensuring student safety with modern transport facilities, real-time tracking, and professional supervision.',
      color: 'red',
    },
    {
      icon: '🩺',
      title: 'Wellness & Counseling',
      subtitle: 'Mental Health Support',
      description:
        'In-house counselor and wellness workshops to support student mental health and development.',
      features: [
        'Professional Counseling',
        'Wellness Programs',
        'Mental Health Support',
      ],
      backDescription:
        'Supporting student wellbeing with professional counseling, mental health programs, and comprehensive wellness initiatives.',
      color: 'teal',
    },
  ]

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

  return (
    <section className={styles.services} ref={ref} id="services">
      <div className="container">
        <motion.div
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.span variants={itemVariants} className="section-badge">
            🎯 Our Services
          </motion.span>
          <motion.h2 variants={itemVariants}>
            Comprehensive Educational Solutions
          </motion.h2>
          <motion.p variants={itemVariants} className="section-description">
            From early childhood to senior secondary, we provide complete
            educational support tailored to every stage of your child's
            development.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.servicesGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`${styles.serviceCard} ${styles[service.color]}`}
              variants={itemVariants}
            >
              {/* Front Face */}
              <div className={styles.cardFront}>
                <div className={styles.serviceIcon}>{service.icon}</div>

                <div className={styles.serviceContent}>
                  <h3>{service.title}</h3>
                  <span className={styles.serviceSubtitle}>
                    {service.subtitle}
                  </span>
                  <p>{service.description}</p>

                  <ul className={styles.serviceFeatures}>
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ delay: index * 0.1 + i * 0.1 }}
                      >
                        ✓ {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <button className={styles.serviceCta}>
                  Hover to Learn More →
                </button>
              </div>

              {/* Back Face */}
              <div className={styles.cardBack}>
                <div className={styles.backIcon}>{service.icon}</div>
                <h3 className={styles.backTitle}>{service.title}</h3>
                <p className={styles.backDescription}>
                  {service.backDescription}
                </p>
                <button className={styles.backCta}>Get Started →</button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.servicesCta}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>Ready to Get Started?</h3>
          <p>
            Contact us today to learn more about our programs and admission
            process.
          </p>
          <motion.button
            className="btn btn-primary large"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📞 Contact Us Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
