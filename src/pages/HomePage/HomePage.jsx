import React from 'react';

import MainLayout from '../../components/MainLayout';
import HeroPage from '../HeroPage/HeroPage';
import Articles from '../Articles/Articles';
import CTA from '../CTA/CTA';

const HomePage = () => {
  return (
    <MainLayout>
      <HeroPage />
      <Articles />
      <CTA />
    </MainLayout>
  );
}

export default HomePage;

