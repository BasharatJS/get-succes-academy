// components/NewsBlog.js
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import styles from '@/styles/NewsBlog.module.css'

const NewsBlog = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.2 })

  const blogPosts = [
    {
      id: 1,
      title: 'How to pay attention to your child?',
      excerpt:
        'Discover effective strategies to engage with your child and build stronger connections through mindful parenting techniques.',
      author: 'Dr. Priya Sharma',
      authorRole: 'Child Psychologist',
      authorImage: '👩‍⚕️',
      date: '15 Dec 2024',
      comments: 24,
      category: 'Parenting Tips',
      image: '📚👶',
      readTime: '5 min read',
      tags: ['parenting', 'child development', 'attention'],
    },
    {
      id: 2,
      title: 'Play outdoor sports with your child',
      excerpt:
        "Explore the benefits of outdoor activities and sports in developing your child's physical and mental well-being.",
      author: 'Coach Rajesh Kumar',
      authorRole: 'Sports Education Expert',
      authorImage: '👨‍🏫',
      date: '12 Dec 2024',
      comments: 18,
      category: 'Physical Education',
      image: '⚽🏃',
      readTime: '7 min read',
      tags: ['sports', 'outdoor activities', 'fitness'],
    },
    {
      id: 3,
      title: 'How to make time for your kids?',
      excerpt:
        'Learn practical time management strategies that help busy parents create meaningful moments with their children.',
      author: 'Mrs. Sunita Patel',
      authorRole: 'Family Counselor',
      authorImage: '👩‍💼',
      date: '10 Dec 2024',
      comments: 31,
      category: 'Time Management',
      image: '⏰👨‍👩‍👧‍👦',
      readTime: '6 min read',
      tags: ['time management', 'family', 'work-life balance'],
    },
    {
      id: 4,
      title: 'Digital Learning: Future of Education',
      excerpt:
        'Exploring how technology integration in classrooms is revolutionizing the way students learn and engage with curriculum.',
      author: 'Dr. Amit Verma',
      authorRole: 'Education Technology Expert',
      authorImage: '👨‍💻',
      date: '8 Dec 2024',
      comments: 42,
      category: 'Technology',
      image: '💻📱',
      readTime: '8 min read',
      tags: ['technology', 'digital learning', 'innovation'],
    },
    {
      id: 5,
      title: 'Building Confidence in Young Learners',
      excerpt:
        'Effective methods to boost self-esteem and confidence in children through positive reinforcement and encouragement.',
      author: 'Dr. Kavita Joshi',
      authorRole: 'Educational Psychologist',
      authorImage: '👩‍🎓',
      date: '5 Dec 2024',
      comments: 27,
      category: 'Child Development',
      image: '🌟💪',
      readTime: '6 min read',
      tags: ['confidence', 'self-esteem', 'motivation'],
    },
    {
      id: 6,
      title: 'Preparing for Board Exams: A Complete Guide',
      excerpt:
        'Comprehensive strategies and tips to help students excel in their board examinations with effective study techniques.',
      author: 'Prof. Vikram Singh',
      authorRole: 'Academic Director',
      authorImage: '👨‍🏫',
      date: '3 Dec 2024',
      comments: 56,
      category: 'Academic Excellence',
      image: '📖✏️',
      readTime: '10 min read',
      tags: ['board exams', 'study tips', 'academic success'],
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateX: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className={styles.newsBlog} ref={ref}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`${styles.bgElement} ${styles[`element${i + 1}`]}`}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 90, 180, 270, 360],
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
        {/* Section Header */}
        <motion.div
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.span variants={itemVariants} className="section-badge">
            📰 Latest News & Blog
          </motion.span>
          <motion.h2 variants={itemVariants}>
            Read Our Latest News & Blog
          </motion.h2>
          <motion.p variants={itemVariants} className="section-description">
            Stay updated with the latest educational insights, parenting tips,
            and school news. Our expert educators share valuable knowledge to
            support your child's learning journey.
          </motion.p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          className={styles.featuredSection}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div
            className={styles.featuredCard}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.featuredImage}>
              <motion.div
                className={styles.featuredEmoji}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                🎓📚
              </motion.div>
              <div className={styles.featuredOverlay}>
                <motion.div
                  className={styles.overlayContent}
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className={styles.featured}>✨ Featured Article</span>
                </motion.div>
              </div>
            </div>
            <div className={styles.featuredContent}>
              <span className={styles.featuredCategory}>
                Education Excellence
              </span>
              <h3>
                Revolutionizing Education: Get Success Academy's Innovative
                Approach
              </h3>
              <p>
                Discover how our academy is transforming traditional education
                methods with cutting-edge technology and personalized learning
                experiences.
              </p>
              <div className={styles.featuredMeta}>
                <span>By Dr. Rajesh Kumar</span>
                <span>•</span>
                <span>12 min read</span>
                <span>•</span>
                <span>68 comments</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className={styles.blogGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className={styles.blogCard}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { type: 'spring', stiffness: 300 },
              }}
            >
              {/* Card Image with Overlay Effect */}
              <div className={styles.cardImage}>
                <motion.div
                  className={styles.imageEmoji}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {post.image}
                </motion.div>

                {/* Animated Overlay */}
                <motion.div
                  className={styles.imageOverlay}
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileHover={{
                    scaleY: 1,
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                  style={{ transformOrigin: 'top' }}
                >
                  <motion.div
                    className={styles.overlayContent}
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2, duration: 0.3 },
                    }}
                  >
                    <span className={styles.readMore}>Read Article</span>
                    <div className={styles.readingTime}>⏱️ {post.readTime}</div>
                  </motion.div>
                </motion.div>

                {/* Category Badge */}
                <div className={styles.categoryBadge}>{post.category}</div>
              </div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                <motion.h3
                  className={styles.cardTitle}
                  whileHover={{ color: 'var(--primary-color)' }}
                >
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </motion.h3>

                <p className={styles.cardExcerpt}>{post.excerpt}</p>

                {/* Tags */}
                <div className={styles.tags}>
                  {post.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Card Footer */}
                <div className={styles.cardFooter}>
                  <div className={styles.authorInfo}>
                    <motion.div
                      className={styles.authorAvatar}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {post.authorImage}
                    </motion.div>
                    <div className={styles.authorDetails}>
                      <h5>{post.author}</h5>
                      <span>{post.authorRole}</span>
                    </div>
                  </div>

                  <div className={styles.postMeta}>
                    <div className={styles.metaItem}>📅 {post.date}</div>
                    <div className={styles.metaItem}>💬 {post.comments}</div>
                  </div>
                </div>

                {/* Read More Button */}
                <motion.button
                  className={styles.readMoreBtn}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 5px 15px rgba(79, 70, 229, 0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={`/blog/${post.id}`}>View Details →</Link>
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className={styles.viewAllSection}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.button
            className={styles.viewAllBtn}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(79, 70, 229, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/blog">📚 View All Articles</Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsBlog
