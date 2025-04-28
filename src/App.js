import React from 'react';
import Dashboard from './pages/dashboard';
import { GlobalStyle } from './Styles/globalStyles';
// Capital "S" in Styles


function App() {
  return (
    <>
      <GlobalStyle />
      <Dashboard />
    </>
  );
}

export default App;