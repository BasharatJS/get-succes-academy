// components/contact/BeautifulMap.jsx
'use client'
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
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

const BeautifulMap = ({ isInView }) => {
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
    if (isInView && !isMapLoaded) {
      setIsMapLoaded(true)
    }
  }, [isInView, isMapLoaded])

  const zoomLevel = isMobile ? 14 : 15

  // Custom marker icon
  const customIcon = L.divIcon({
    className: styles.customMarker,
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
    <motion.div
      className={styles.mapWrapper}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={
        isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
      }
      transition={{ duration: 0.8 }}
    >
      {/* Beautiful Map Container */}
      <div className={styles.mapContainer}>
        <MapContainer
          center={schoolPosition}
          zoom={zoomLevel}
          style={{
            height: '100%',
            width: '100%',
            borderRadius: '1rem',
          }}
          ref={mapRef}
          zoomControl={false}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={schoolPosition} icon={customIcon}>
            <Popup>
              <div style={{ padding: '10px', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#1f2937' }}>
                  Get Success Academy
                </h3>
                <p style={{ margin: '0', color: '#6b7280' }}>Katihar, Bihar</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>

        {/* Zoom Controls */}
        <div className={styles.zoomControls}>
          <button
            className={styles.zoomButton}
            onClick={() => {
              if (mapRef.current) {
                const map = mapRef.current
                map.zoomIn()
              }
            }}
          >
            +
          </button>
          <button
            className={styles.zoomButton}
            onClick={() => {
              if (mapRef.current) {
                const map = mapRef.current
                map.zoomOut()
              }
            }}
          >
            −
          </button>
        </div>

        {/* Beautiful Overlay Card - Like your screenshot */}
        <motion.div
          className={styles.overlayCard}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className={styles.cardHeader}>
            <div className={styles.cardIcon}>📍</div>
            <h3 className={styles.cardTitle}>Visit Our Campus</h3>
          </div>

          <div className={styles.cardBody}>
            <div className={styles.cardItem}>
              <span className={styles.itemIcon}>📍</span>
              <div className={styles.itemContent}>
                <span className={styles.itemLabel}>Address</span>
                <span className={styles.itemValue}>
                  Balia Belone Road, Salmari, Katihar, Bihar
                </span>
              </div>
            </div>

            <div className={styles.cardItem}>
              <span className={styles.itemIcon}>📞</span>
              <div className={styles.itemContent}>
                <span className={styles.itemLabel}>Phone</span>
                <span className={styles.itemValue}>+91 8862817379</span>
              </div>
            </div>

            <div className={styles.cardItem}>
              <span className={styles.itemIcon}>📧</span>
              <div className={styles.itemContent}>
                <span className={styles.itemLabel}>Email</span>
                <span className={styles.itemValue}>
                  info@getsuccessacademy.com
                </span>
              </div>
            </div>
          </div>

          <div className={styles.cardActions}>
            <motion.a
              href="tel:+918862817379"
              className={styles.actionButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📞 Call Now
            </motion.a>
            <motion.a
              href={`https://maps.google.com/?q=${schoolPosition[0]},${schoolPosition[1]}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🗺️ Directions
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className={styles.socialSection}>
            <div className={styles.socialIcons}>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                whileHover={{ scale: 1.2, color: '#4267B2' }}
              >
                📘
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                whileHover={{ scale: 1.2, color: '#1DA1F2' }}
              >
                🐦
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                whileHover={{ scale: 1.2, color: '#E1306C' }}
              >
                📷
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                whileHover={{ scale: 1.2, color: '#0077B5' }}
              >
                💼
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default BeautifulMap
