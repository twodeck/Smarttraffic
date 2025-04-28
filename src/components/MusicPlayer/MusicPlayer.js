import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import { FaMusic, FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import * as Styled from './MusicPlayer.styles';
import backgroundMusic from '../../assets/sounds/background.mp3';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const bgMusic = new Howl({
      src: [backgroundMusic],
      loop: true,
      volume: isMuted ? 0 : volume,
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false)
    });

    setSound(bgMusic);

    return () => {
      bgMusic.unload();
    };
  }, [isMuted, volume]);  // Fixed dependencies

  useEffect(() => {
    if (sound) {
      sound.volume(isMuted ? 0 : volume);
    }
  }, [volume, isMuted, sound]);

  const togglePlay = () => {
    if (!sound) return;
    
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <Styled.MusicPlayerContainer>
      <Styled.MusicButton onClick={togglePlay}>
        <FaMusic />
        {isPlaying ? <FaPause /> : <FaPlay />}
      </Styled.MusicButton>
      
      <Styled.VolumeControl>
        <Styled.VolumeButton onClick={toggleMute}>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </Styled.VolumeButton>
        <Styled.VolumeSlider 
          type="range" 
          min="0" 
          max="1" 
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
      </Styled.VolumeControl>
    </Styled.MusicPlayerContainer>
  );
};

export default MusicPlayer;