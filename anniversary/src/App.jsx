import Grainient from './Grainient'
import TiltedCard from './TiltedCard'
import './App.css'

function App() {
  return (
    <section className="hero-section">
      <Grainient
        color1="#000000"
        color2="#6596d6"
        color3="#455a86"
      />
      <div className="hero-content">
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
  )
}

export default App
