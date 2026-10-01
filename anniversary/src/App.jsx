import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Grainient from './Grainient'
import TiltedCard from './TiltedCard'
import CircularGallery from './CircularGallery'
import ScrollReveal from './ScrollReveal'
import VariableProximity from './VariableProximity'
import BackgroundAudio from './BackgroundAudio'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const MONTHS = [
  'September 2025', 'October 2025', 'November 2025',
  'December 2025', 'January 2026', 'February 2026', 'March 2026',
  'April 2026', 'May 2026', 'June 2026', 'July 2026', 'August 2026',
  'September 2026'
];

const MONTH_MEMORIES = {
  'September 2025': 'The first day we hungout. We were both getting to know each other, I felt really shy while you were gradually becoming affectionate towards me. It was also my first time riding a motorcycle but you reassured me that you\'d go slow and careful. We also had our first kiss and I felt so happy after hehe.',
  'October 2025': 'The day we became official. This was also our second date, and it was so chill (also wanted to show you that I can be as strong as you eme). When you asked me to be your girlfriend, I was so shy I couldn\'t look at you, but just know that I was happy and the universe knew that was the start of our forever.',
  'November 2025': 'During this date, you bought me my favorite Fuggler. That was the start of you spoiling me with not only your love, but with things I like.',
  'December 2025': 'The date before I met your parents. This date was somewhat peaceful wherein we enjoyed walking around and looking at the flowers. Meeting your family was exciting and scary, because I was worried and I didn\'t want to mess up. But they were so nice to me and only increased me desire to officially become a part of your family.',
  'January 2026': 'Our date before you left for your internship. I was so worried and overthinked a lot, but you were so patient and did your best to comfort me. I was used to having you nearby and the thought of being far away from you breaks my heart. Those 3 months was difficult but I am so proud of your and your achievements during that time. Not only did you supervised other interns, but you also hosted a seminar. I never doubted your capabilities.',
  'February 2026': 'Our first Valentines day together. While it was hectice and we were starving for an hour, being with you makes it better. I\'d rather never spend Valentines day than not spend it with you. You also gifted me Max, whom I sleep with every night. Someday, you\'d be sleeping with me and Max too.',
  'March 2026': 'I always cherished the dates we had whenever you came home from your internship. We\'d cuddle for an entire day, give each other reassurances, and elaborate the stories we barely shared in Messenger. Seeing you come home always calms me down, knowing that you\'re safe and pushing through your internship. Thoe were the hardest days for me and I never want us to be LDR ever again.',
  'April 2026': 'The month your internship ended and we were both excited. We wanted to see each other so bad we quickly scheduled a date and I felt so happy. I finally have you close to me again and my heart is at peace. The universe chose two people who live close together, and it should stay that way.',
  'May 2026': 'Our first workshop together (after AI.deas), and they took so much pictures of us (bias kase sila sayo) and I felt like dating a well-known person mweheh. I was lucky and flexed you to people, wanted them to see how amazing my boyfriend is. We also worked well together during the contest. Even though we should\'ve won, you still won my heart yiee.',
  'June 2026': 'This is one of my favorite pictures, we look so cute together. There\'s something about this picture that makes us look domestic, like a married couple.',
  'July 2026': 'Your graduation. I had the opportunity to attend your graduation with your parents and I will cherish that memory. Seeing you on stage made me so proud to love someone so smart and hardworking, and I am glad I get to experience this milestone with you. I would attend every mass if it meant seeing you in the end of it.',
  'August 2026': 'Our first flea market together. Before we dated, you talked about wanting to visit one for your performative drip, and here we were (we unfortunately did not find you a performative drip). I am glad you got to experience one of my hobbies, and even had fun going through each stalls multiple times. From that day, we started visiting more flea markets and I am so glad I have someone to explore events with me.',
  'September 2026': 'The last month before our anniversary. We\'ve done so much in only 11 months and it honestly felt like years. While Agara Ramen was ass, celebrating our 11th monthsary was nice and I always love our dates, whether its exploring something new or sticking to our usual dates, I will never get tired of being with you.'
};

const galleryItems = MONTHS.map((month) => ({
  image: `/images/${month.toLowerCase()}.jpeg`,
  text: month,
  description: MONTH_MEMORIES[month]
}));

const LETTER_PARAGRAPHS = [
  'To my forevermore,',
  `Being with you made life easier to handle, October 5 was the day I said yes to being your girlfriend and that one of the best and easiest decision of my life. On our first meet, your capabilities (and back) is what attracted me to you and I eventually had the urge to meet you, my initial thought was to compliment you then go on with my day, not expecting anything back from you. To my surprise, you started conversing with me and after days of talking, I started to fall for you (pero nonchalant muna tayo).`,
  `Through every ups and downs, I am so happy to spend it all with you. Despite my flaws, you see me as someone who could do no wrong and would support my every decisions, as how I see you. In my eyes, you are perfect and you deserve so much in life for your efforts and determinations. You are the one person I want to spend the rest of my life with, from owning our first place together to growing old with our pets. Although it has only been a year, both the universe and I already know that you are my soulmate and that we are meant to be. I cannot wait to be married to you and officially become a part of your family, as they've been so welcoming and sweet to me, I want nothing more than to be loving and caring to them.`,
  `You are everything to me and I will never give up a life with you in it. We are close to reaching our goals and I know that we will achieve them anytime soon. I can't wait to spend rest days with you, cook meals together, and have you as the first person I see when I wake up and go to sleep. Here's to more years with my beloved babu, I am so lucky to have you as my future husband. I love you so much!`
];

function App() {
  const letterImageRef = useRef(null);
  const galleryTextRef = useRef(null);

  useEffect(() => {
    const el = letterImageRef.current;
    if (!el) return;

    const tween = gsap.fromTo(
      el,
      { scale: 0.65, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'center center',
          scrub: true
        }
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div className="app-wrapper">
      <BackgroundAudio />
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
        <div className="gallery-text" ref={galleryTextRef}>
          <div className="gallery-text-line">
            <VariableProximity
              containerRef={galleryTextRef}
              label="In Project Hail Mary, Andy Weir said that neither of us are alone."
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 900"
              radius={100}
              falloff="linear"
            />
          </div>
          <div className="gallery-text-line">
            <VariableProximity
              containerRef={galleryTextRef}
              label="Which is true, because I have you"
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 900"
              radius={100}
              falloff="linear"
            />
          </div>
        </div>
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="#c4cf61"
          borderRadius={0.05}
        />
      </section>

      <section className="letter-section">
        <div className="letter-content">
          <div className="letter-image" ref={letterImageRef}>
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
