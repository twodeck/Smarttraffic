import styled from 'styled-components';
import { pulse } from '../../Styles/animation';


export const MusicPlayerContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 30px;
  z-index: 1000;
`;

export const MusicButton = styled.button`
  background: linear-gradient(145deg, #2a2a72, #009ffd);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  margin-right: 10px;
  font-size: 1rem;
  box-shadow: 0 0 10px rgba(0, 255, 252, 0.5);
  transition: all 0.3s ease;
  
  &:hover {
    animation: ${pulse} 1s infinite;
    box-shadow: 0 0 15px rgba(0, 255, 252, 0.8);
  }
`;

export const VolumeControl = styled.div`
  display: flex;
  align-items: center;
`;

export const VolumeButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 5px;
`;

export const VolumeSlider = styled.input`
  width: 80px;
  cursor: pointer;
`;