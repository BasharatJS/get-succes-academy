'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from '@/styles/Gallery.module.css'

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
      title: 'School Campus',
      description: 'Our beautiful and modern campus facility',
      category: 'campus',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop',
      title: 'Main Building',
      description: 'Modern architecture with excellent facilities',
      category: 'campus',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop',
      title: 'Garden Area',
      description: 'Beautiful green spaces for outdoor learning',
      category: 'campus',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop',
      title: 'Science Laboratory',
      description: 'State-of-the-art lab equipment for experiments',
      category: 'facilities',
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
      title: 'Library',
      description: 'Extensive collection of books and digital resources',
      category: 'facilities',
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop',
      title: 'Computer Lab',
      description: 'Modern technology and computing facilities',
      category: 'facilities',
    },
    {
      id: 7,
      image:
        'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=600&h=400&fit=crop',
      title: 'Music Room',
      description: 'Well-equipped music and audio studio',
      category: 'facilities',
    },
    {
      id: 8,
      image:
        'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop',
      title: 'Sports Day',
      description: 'Annual sports competition and athletics',
      category: 'events',
    },
    {
      id: 9,
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      title: 'Cultural Festival',
      description: 'Annual day celebrations and performances',
      category: 'events',
    },
    {
      id: 10,
      image:
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
      title: 'Graduation Ceremony',
      description: 'Celebrating student achievements and success',
      category: 'events',
    },
    {
      id: 11,
      image:
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
      title: 'Football Training',
      description: 'Physical education and sports programs',
      category: 'activities',
    },
    {
      id: 12,
      image:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      title: 'Art Workshop',
      description: 'Creative arts and crafts sessions',
      category: 'activities',
    },
    {
      id: 13,
      image:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
      title: 'Drama Club',
      description: 'Theater and performance activities',
      category: 'activities',
    },
    {
      id: 14,
      image:
        'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=600&h=400&fit=crop',
      title: 'Basketball Court',
      description: 'Indoor sports and recreational activities',
      category: 'activities',
    },
    {
      id: 15,
      image:
        'https://images.unsplash.com/photo-1559427433-86ba83b15639?w=600&h=400&fit=crop',
      title: 'Academic Excellence',
      description: 'Recognition for outstanding academic performance',
      category: 'achievements',
    },
    {
      id: 16,
      image:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      title: 'Merit Awards',
      description: 'Certificates and medals for top performers',
      category: 'achievements',
    },
    {
      id: 17,
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      title: 'Expert Faculty',
      description: 'Qualified and experienced teaching staff',
      category: 'teachers',
    },
    {
      id: 18,
      image:
        'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop',
      title: 'Individual Guidance',
      description: 'Personalized mentoring and student support',
      category: 'teachers',
    },
  ]

  const filterCategories = [
    { key: 'all', label: 'All', icon: '🎯' },
    { key: 'campus', label: 'Campus', icon: '🏫' },
    { key: 'facilities', label: 'Facilities', icon: '🔬' },
    { key: 'activities', label: 'Activities', icon: '🎨' },
    { key: 'events', label: 'Events', icon: '🎭' },
    { key: 'achievements', label: 'Awards', icon: '🏆' },
    { key: 'teachers', label: 'Teachers', icon: '👨‍🏫' },
  ]

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

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
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className={styles.gallery} id="gallery">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div className="section-badge" whileHover={{ scale: 1.05 }}>
            📸 Our Gallery
          </motion.div>
          <h2>Moments That Matter</h2>
          <p className="section-description">
            Explore the vibrant life at Get Success Academy through our
            collection of memorable moments, facilities, and achievements.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className={styles.filterContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filterCategories.map((category) => (
            <motion.button
              key={category.key}
              className={`${styles.filterBtn} ${
                activeFilter === category.key ? styles.active : ''
              }`}
              variants={filterVariants}
              onClick={() => setActiveFilter(category.key)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.filterIcon}>{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className={styles.galleryGrid}
          key={activeFilter} // Add key to force re-render when filter changes
          variants={containerVariants}
          initial="hidden"
          animate="visible" // Changed from whileInView to animate
          viewport={{ once: true }}
          layout
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className={styles.galleryItem}
              variants={itemVariants}
              layout
              whileHover={{
                y: -15,
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(item)}
            >
              <div className={styles.galleryItemContent}>
                {/* Glassmorphism Background */}
                <div className={styles.glassBackground}></div>

                {/* Floating Elements */}
                <div className={styles.floatingElements}>
                  <div className={styles.floatingDot1}></div>
                  <div className={styles.floatingDot2}></div>
                  <div className={styles.floatingDot3}></div>
                </div>

                {/* Image Container */}
                <div className={styles.galleryImageContainer}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.galleryImage}
                    loading="lazy"
                  />
                  <div className={styles.imageOverlay}></div>
                </div>

                {/* Content Overlay */}
                <div className={styles.contentOverlay}>
                  <div className={styles.contentHeader}>
                    <span className={styles.categoryTag}>
                      {
                        filterCategories.find(
                          (cat) => cat.key === item.category
                        )?.icon
                      }
                      {
                        filterCategories.find(
                          (cat) => cat.key === item.category
                        )?.label
                      }
                    </span>
                  </div>

                  <div className={styles.contentBody}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDescription}>{item.description}</p>
                  </div>

                  <div className={styles.contentFooter}>
                    <div className={styles.viewButton}>
                      <span>View Details</span>
                      <span className={styles.arrow}>→</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Border */}
                <div className={styles.interactiveBorder}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for Selected Image */}
        {selectedImage && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeBtn}
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <div className={styles.modalImage}>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className={styles.modalImageElement}
                />
              </div>
              <div className={styles.modalInfo}>
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
                <div className={styles.modalCategory}>
                  {
                    filterCategories.find(
                      (cat) => cat.key === selectedImage.category
                    )?.icon
                  }
                  <span>
                    {
                      filterCategories.find(
                        (cat) => cat.key === selectedImage.category
                      )?.label
                    }
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className={styles.galleryCta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Want to be part of our story?</h3>
          <p>Join Get Success Academy and create your own memorable moments</p>
          <motion.button
            className="btn btn-primary large"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
