import React from 'react';
import { isMobile } from 'react-device-detect';
import WebRoutes from './webroutes';
import MobileRoutes from './mobileroutes';

const Routes: React.FC = () => {
  return isMobile ? <MobileRoutes /> : <WebRoutes />;
};

export default Routes;
