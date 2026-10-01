import { useEffect, useRef } from 'react';

const AUDIO_SRC = '/Planetarium.mp3';
const AUDIO_VOLUME = 0.3;

export default function BackgroundAudio() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = AUDIO_VOLUME;

    const attemptPlay = () => {
      const request = audio.play();
      if (!request) return Promise.resolve(true);
      return request.then(
        () => true,
        () => false
      );
    };

    attemptPlay();

    const unlock = () => {
      attemptPlay().then(started => {
        if (!started) return;
        window.removeEventListener('pointerdown', unlock);
        window.removeEventListener('keydown', unlock);
      });
    };

    window.addEventListener('pointerdown', unlock);
    window.addEventListener('keydown', unlock);

    return () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
      audio.pause();
    };
  }, []);

  return <audio ref={audioRef} src={AUDIO_SRC} preload="auto" />;
}
