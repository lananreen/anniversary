import Grainient from './Grainient'
import TiltedCard from './TiltedCard'
import CircularGallery from './CircularGallery'
import './App.css'

const COLORS = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
  '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F',
  '#BB8FCE', '#85C1E9', '#F8C471', '#82E0AA', '#D5C4A1'
];

const MONTHS = [
  'September 2025', 'October 2025', 'November 2025',
  'December 2025', 'January 2026', 'February 2026', 'March 2026',
  'April 2026', 'May 2026', 'June 2026', 'July 2026', 'August 2026',
  'September 2026'
];

const galleryItems = MONTHS.map((month, i) => ({
  image: `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect fill="${COLORS[i]}" width="800" height="600"/></svg>`
  )}`,
  text: month
}));

function App() {
  return (
    <div className="app-wrapper">
      <Grainient
        color1="#000000"
        color2="#6596d6"
        color3="#455a86"
      />
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-text-happy">Happy</span>
            <span className="hero-text-anniversary">Anniversary</span>
          </div>
          <TiltedCard
            imageSrc="/IMG_1308.png"
            imageHeight="80vh"
            imageWidth="auto"
            rotateAmplitude={6}
            scaleOnHover={1.05}
            showTooltip={false}
            showMobileWarning={false}
          />
        </div>
      </section>

      <section className="gallery-section">
        <p className="gallery-text">In Project Hail Mary, Andy Weir said that neither of us are alone.<br />Which is true because I have you</p>
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="#c4cf61"
          borderRadius={0.05}
        />
      </section>
    </div>
  )
}

export default App
