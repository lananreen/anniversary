import Grainient from './Grainient'
import TiltedCard from './TiltedCard'
import CircularGallery from './CircularGallery'
import './App.css'

const MONTHS = [
  'September 2025', 'October 2025', 'November 2025',
  'December 2025', 'January 2026', 'February 2026', 'March 2026',
  'April 2026', 'May 2026', 'June 2026', 'July 2026', 'August 2026',
  'September 2026'
];

const galleryItems = MONTHS.map((month) => ({
  image: `/images/${month.toLowerCase()}.jpeg`,
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
