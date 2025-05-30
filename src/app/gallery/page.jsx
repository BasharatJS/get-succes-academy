import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

export default function Gallery() {
  return (
    <main>
      <Header />
      <div className="page-container">
        <div className="container">
          <h1>Photo Gallery</h1>
          <p>Explore our campus and activities...</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
