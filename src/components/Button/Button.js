import React from 'react';
import { motion } from 'framer-motion';
import * as Styled from './Button.styles';
import { FaSpinner } from 'react-icons/fa';

const Button = ({ icon, label, onClick, loading = false }) => {
  return (
    <Styled.ButtonContainer 
      as={motion.div}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      $loading={loading}
    >
      <Styled.ButtonGlow />
      <Styled.Icon>
        {loading ? <Styled.Spinner icon={<FaSpinner />} /> : icon}
      </Styled.Icon>
      <Styled.Label>{label}</Styled.Label>
    </Styled.ButtonContainer>
  );
};

export default Button;