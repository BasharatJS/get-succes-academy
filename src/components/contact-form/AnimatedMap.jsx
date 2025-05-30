// components/contact/AnimatedMap.jsx
'use client'
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import styles from '@/styles/ContactForm.module.css'

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Custom animated marker component
const AnimatedMarker = () => {
  const [bounce, setBounce] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(true)
      setTimeout(() => setBounce(false), 500)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // School coordinates (Katihar, Bihar)
  const schoolPosition = [25.5441, 87.5619]

  const customIcon = L.divIcon({
    className: `${styles.customMarker} ${bounce ? styles.bounce : ''}`,
    html: `
      <div class="${styles.markerPin}">
        <div class="${styles.markerIcon}">🎓</div>
      </div>
    `,
    iconSize: [40, 50],
    iconAnchor: [20, 50],
    popupAnchor: [0, -50],
  })

  return (
    <Marker position={schoolPosition} icon={customIcon}>
      <Popup className={styles.customPopup}>
        <div className={styles.popupContent}>
          <div className={styles.popupHeader}>
            <div className={styles.popupIcon}>🎓</div>
            <h3>Get Success Academy</h3>
          </div>
          <div className={styles.popupBody}>
            <p>
              <span className={styles.popupItemIcon}>📍</span>
              Balia Belone Road, Salmari
              <br />
              Katihar, Bihar 854105
            </p>
            <p>
              <span className={styles.popupItemIcon}>📞</span>
              +91 8862817379
            </p>
            <p>
              <span className={styles.popupItemIcon}>📧</span>
              info@getsuccessacademy.com
            </p>
          </div>
          <div className={styles.popupActions}>
            <a href="tel:+918862817379" className={styles.popupButton}>
              📞 Call Now
            </a>
            <a
              href={`https://maps.google.com/?q=25.5441,87.5619`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.popupButton}
            >
              🗺️ Directions
            </a>
          </div>
          <div className={styles.socialIcons}>
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#4267B2' }}
              className={styles.socialIcon}
            >
              📘
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#1DA1F2' }}
              className={styles.socialIcon}
            >
              🐦
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#E1306C' }}
              className={styles.socialIcon}
            >
              📷
            </motion.a>
          </div>
        </div>
      </Popup>
    </Marker>
  )
}

// Main animated map wrapper component
const AnimatedMap = ({ isInView }) => {
  const mapRef = useRef(null)
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // School coordinates (Katihar, Bihar)
  const schoolPosition = [25.5441, 87.5619]

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isInView && mapRef.current && !isMapLoaded) {
      setIsMapLoaded(true)

      // Add animation when map comes into view
      setTimeout(() => {
        if (mapRef.current) {
          const map = mapRef.current
          if (map && map.setView) {
            map.setView(schoolPosition, isMobile ? 14 : 15, {
              animate: true,
              duration: 1.5,
            })
          }
        }
      }, 500)
    }
  }, [isInView, isMapLoaded, isMobile, schoolPosition])

  const zoomLevel = isMobile ? 14 : 15

  return (
    <motion.div
      className={styles.mapContainer}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={
        isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
      }
      transition={{ duration: 0.8 }}
    >
      <MapContainer
        center={schoolPosition}
        zoom={zoomLevel}
        style={{
          height: '100%',
          width: '100%',
          borderRadius: '1rem',
          minHeight: '500px',
          maxHeight: '500px',
          position: 'relative',
          zIndex: 1,
        }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className={styles.mapTiles}
        />

        <AnimatedMarker />

        {/* School area circle */}
        <Circle
          center={schoolPosition}
          radius={300}
          pathOptions={{
            color: '#4f46e5',
            fillColor: '#818cf8',
            fillOpacity: 0.2,
            weight: 2,
          }}
        />
      </MapContainer>

      {/* Map overlay card */}
      <motion.div
        className={styles.mapOverlay}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className={styles.mapCard}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.mapCardIcon}>🎓</div>
          <div className={styles.mapCardContent}>
            <h4>Visit Our Campus</h4>
            <p>Get Success Academy</p>
            <p>Katihar, Bihar</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Contact info cards below map */}
      <div className={styles.contactInfoGrid}>
        <motion.a
          href="tel:+918862817379"
          className={styles.contactInfoCard}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          style={{ transitionDelay: '0.6s' }}
        >
          <div className={styles.contactCardIcon}>📞</div>
          <div className={styles.contactCardContent}>
            <h4>Call Us</h4>
            <p>+91 8862817379</p>
          </div>
        </motion.a>

        <motion.a
          href="mailto:info@getsuccessacademy.com"
          className={styles.contactInfoCard}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          style={{ transitionDelay: '0.8s' }}
        >
          <div className={styles.contactCardIcon}>📧</div>
          <div className={styles.contactCardContent}>
            <h4>Email Us</h4>
            <p>info@getsuccessacademy.com</p>
          </div>
        </motion.a>

        <motion.div
          className={styles.contactInfoCard}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          style={{ transitionDelay: '1.0s' }}
        >
          <div className={styles.contactCardIcon}>🕒</div>
          <div className={styles.contactCardContent}>
            <h4>Office Hours</h4>
            <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AnimatedMap
