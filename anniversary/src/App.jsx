import Grainient from './Grainient'
import TiltedCard from './TiltedCard'
import CircularGallery from './CircularGallery'
import ScrollReveal from './ScrollReveal'
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

const LETTER_PARAGRAPHS = [
  'To my forevermore,',
  `Being with you made life easier to handle, October 5 was the day I said yes to being your girlfriend and that one of the best and easiest decision of my life. On our first meet, your capabilities (and back) is what attracted me to you and I eventually had the urge to meet you, my initial thought was to compliment you then go on with my day, not expecting anything back from you. To my surprise, you started conversing with me and after days of talking, I started to fall for you (pero nonchalant muna tayo).`,
  `Through every ups and downs, I am so happy to spend it all with you. Despite my flaws, you see me as someone who could do no wrong and would support my every decisions, as how I see you. In my eyes, you are perfect and you deserve so much in life for your efforts and determinations. You are the one person I want to spend the rest of my life with, from owning our first place together to growing old with our pets. Although it has only been a year, both the universe and I already know that you are my soulmate and that we are meant to be. I cannot wait to be married to you and officially become a part of your family, as they've been so welcoming and sweet to me, I want nothing more than to be loving and caring to them.`,
  `You are everything to me and I will never give up a life with you in it. We are close to reaching our goals and I know that we will achieve them anytime soon. I can't wait to spend rest days with you, cook meals together, and have you as the first person I see when I wake up and go to sleep. Here's to more years with my beloved babu, I am so lucky to have you as my future husband. I love you so much!`
];

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
        <p className="gallery-text">In Project Hail Mary, Andy Weir said that neither of us are alone.<br />Which is true, because I have you</p>
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="#c4cf61"
          borderRadius={0.05}
        />
      </section>

      <section className="letter-section">
        <div className="letter-content">
          <div className="letter-image">
            <TiltedCard
              imageSrc="/IMG_1309.png"
              altText="Letter photo"
              imageHeight="80vh"
              imageWidth="auto"
              rotateAmplitude={4}
              scaleOnHover={1.03}
              showTooltip={false}
              showMobileWarning={false}
            />
          </div>
          <div className="letter-text">
            {LETTER_PARAGRAPHS.map((text) => (
              <ScrollReveal
                key={text}
                containerClassName="letter-reveal"
                baseOpacity={0.15}
                baseRotation={3}
                enableBlur
                blurStrength={4}
              >
                {text}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
