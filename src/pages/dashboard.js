import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  FaTrafficLight, 
  FaAmbulance, 
  FaVolumeUp, 
  FaFileAlt, 
  FaBell, 
  FaRoute,
  FaGamepad
} from 'react-icons/fa';
import Button from '../components/Button/Button';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';

const Dashboard = () => {
  const [loadingStates, setLoadingStates] = useState({
    smartTraffic: false,
    emergency: false,
    decibel: false,
    documentStorer: false,
    trafficNotification: false,
    dynamicRouting: false
  });

  const deployedLinks = {
    smartTraffic: 'https://smart-traffic.example.com',
    emergency: 'https://emergency-system.example.com',
    decibel: 'https://remarkable-syrniki-704105.netlify.app/',
    documentStorer: 'https://serviced-onedeck25s-projects.vercel.app/',
    trafficNotification: 'https://traffic-notifications.example.com',
    dynamicRouting: 'https://route-planner-q8wp.onrender.com'
  };

  const simulateLoading = (buttonKey) => {
    setLoadingStates(prev => ({ ...prev, [buttonKey]: true }));
    
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [buttonKey]: false }));
      window.open(deployedLinks[buttonKey], '_blank');
    }, 2000);
  };

  return (
    <DashboardContainer>
      <Header>
        <Title>
          <FaGamepad /> City Control Dashboard <FaGamepad />
        </Title>
        <Subtitle>Neon Cyberpunk Edition</Subtitle>
      </Header>
      
      <ButtonsGrid>
        <Button 
          icon={<FaTrafficLight />} 
          label="Smart Traffic" 
          onClick={() => simulateLoading('smartTraffic')}
          loading={loadingStates.smartTraffic}
        />
        
        <Button 
          icon={<FaAmbulance />} 
          label="Emergency System" 
          onClick={() => simulateLoading('emergency')}
          loading={loadingStates.emergency}
        />
        
        <Button 
          icon={<FaVolumeUp />} 
          label="Decibel Monitor" 
          onClick={() => simulateLoading('decibel')}
          loading={loadingStates.decibel}
        />
        
        <Button 
          icon={<FaFileAlt />} 
          label="Document Storer" 
          onClick={() => simulateLoading('documentStorer')}
          loading={loadingStates.documentStorer}
        />
        
        <Button 
          icon={<FaBell />} 
          label="Traffic Notification" 
          onClick={() => simulateLoading('trafficNotification')}
          loading={loadingStates.trafficNotification}
        />
        
        <Button 
          icon={<FaRoute />} 
          label="Dynamic Routing" 
          onClick={() => simulateLoading('dynamicRouting')}
          loading={loadingStates.dynamicRouting}
        />
      </ButtonsGrid>
      
      <MusicPlayer />
      
      <BackgroundGlow />
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  min-height: 100vh;
  padding: 2rem;
  color: white;
  position: relative;
  overflow: hidden;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 252, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #00fffc;
  text-shadow: 0 0 5px rgba(0, 255, 252, 0.5);
`;

const ButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  position: relative;
  z-index: 2;
`;

const BackgroundGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(0, 255, 252, 0.1) 0%, transparent 70%);
  pointer-events: none;
`;

export default Dashboard;