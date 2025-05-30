// components/contact/ExactMap.jsx
'use client'
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import styles from '@/styles/ContactForm.module.css'

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const ExactMap = ({ isInView }) => {
  const mapRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  // School coordinates (Katihar, Bihar)
  const schoolPosition = [25.5441, 87.5619]

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Custom marker icon
  const customIcon = L.divIcon({
    className: styles.customMarker,
    html: `
      <div class="${styles.markerPin}">
        <div class="${styles.markerInner}">
          <span>🎓</span>
        </div>
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  })

  return (
    <motion.div
      className={styles.mapWrapper}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.mapContainer}>
        <MapContainer
          center={schoolPosition}
          zoom={isMobile ? 13 : 14}
          style={{ height: '100%', width: '100%', borderRadius: '1rem' }}
          ref={mapRef}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={schoolPosition} icon={customIcon}>
            <Popup>
              <div style={{ textAlign: 'center', padding: '10px' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#1f2937' }}>
                  Get Success Academy
                </h4>
                <p style={{ margin: '0', color: '#6b7280', fontSize: '14px' }}>
                  Katihar, Bihar
                </p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>

        {/* Custom Zoom Controls */}
        <div className={styles.zoomControls}>
          <button
            className={styles.zoomBtn}
            onClick={() => mapRef.current?.zoomIn()}
          >
            +
          </button>
          <button
            className={styles.zoomBtn}
            onClick={() => mapRef.current?.zoomOut()}
          >
            −
          </button>
        </div>

        {/* Bottom Overlay Card - Exact like your reference */}
        <motion.div
          className={styles.overlayCard}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className={styles.cardHeader}>
            <h4>Visit Our Campus</h4>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📍</div>
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>ADDRESS</span>
                <span className={styles.infoValue}>
                  Balia Belone Road, Salmari, Katihar, Bihar
                </span>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📞</div>
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>PHONE</span>
                <span className={styles.infoValue}>+91 8862817379</span>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📧</div>
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>EMAIL</span>
                <span className={styles.infoValue}>
                  info@getsuccessacademy.com
                </span>
              </div>
            </div>
          </div>

          <div className={styles.actionButtons}>
            <motion.a
              href="tel:+918862817379"
              className={styles.callBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📞 Call Now
            </motion.a>
            <motion.a
              href={`https://maps.google.com/?q=${schoolPosition[0]},${schoolPosition[1]}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionsBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🗺️ Directions
            </motion.a>
          </div>

          <div className={styles.socialIcons}>
            <motion.a
              href="#"
              className={styles.socialIcon}
              whileHover={{ scale: 1.1 }}
            >
              📘
            </motion.a>
            <motion.a
              href="#"
              className={styles.socialIcon}
              whileHover={{ scale: 1.1 }}
            >
              🐦
            </motion.a>
            <motion.a
              href="#"
              className={styles.socialIcon}
              whileHover={{ scale: 1.1 }}
            >
              📷
            </motion.a>
            <motion.a
              href="#"
              className={styles.socialIcon}
              whileHover={{ scale: 1.1 }}
            >
              💼
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ExactMap
