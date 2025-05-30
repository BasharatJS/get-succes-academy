// app/about/page.js

import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

export default function About() {
  return (
    <main>
      <Header />
      <div className="page-container">
        <div className="container">
          <h1>About Get Success Academy</h1>
          <p>Detailed about page content will be added here...</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
