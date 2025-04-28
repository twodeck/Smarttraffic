import { createGlobalStyle } from 'styled-components';

// ❌ REMOVE this line completely:
// import { GlobalStyle } from './styles/globalStyles';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    background: #121212;
    color: white;
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  input[type="range"] {
    -webkit-appearance: none;
    height: 5px;
    background: #00fffc;
    border-radius: 5px;
    
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: white;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
`;
