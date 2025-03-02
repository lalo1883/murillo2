import React from 'react';
import fleetLogo from '../assets/FLEET-SALES-LOGO-FLAT-ISOTIPO.png';

interface FleetLogoProps {
  className?: string;
}

const FleetLogo: React.FC<FleetLogoProps> = ({ className = 'w-10 h-10' }) => {
  return (
    <img 
      src={fleetLogo}
      alt="Fleet Sales Logo"
      className={className}
    />
  );
};

export default FleetLogo;