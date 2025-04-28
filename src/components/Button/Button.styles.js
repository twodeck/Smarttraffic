import styled from 'styled-components';
import { glow, pulse, loadingSpin } from '../../Styles/animation';

export const ButtonContainer = styled.div`
  background: linear-gradient(145deg, #2a2a72, #009ffd);
  border: 2px solid #00fffc;
  border-radius: 15px;
  padding: 20px;
  margin: 10px;
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 255, 252, 0.5);
  transition: all 0.3s ease;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: ${glow} 2s infinite;

  &:hover {
    animation: ${pulse} 1.5s infinite;
  }

  ${props => props.$loading && `
    cursor: not-allowed;
    opacity: 0.7;
  `}
`;

export const ButtonGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(0, 255, 252, 0.4), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
  position: relative;
`;

export const Label = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  text-shadow: 0 0 5px rgba(0, 255, 252, 0.7);
`;

export const Spinner = styled.div`
  animation: ${loadingSpin} 1s linear infinite;
`;