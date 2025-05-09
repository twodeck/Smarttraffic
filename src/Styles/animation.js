import { keyframes } from 'styled-components';

export const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 255, 252, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 252, 0.9); }
  100% { box-shadow: 0 0 5px rgba(0, 255, 252, 0.5); }
`;

export const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const loadingSpin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
