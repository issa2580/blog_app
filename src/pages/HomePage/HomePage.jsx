import React from 'react';

import MainLayout from '../../components/MainLayout';
import HeroPage from '../HeroPage/HeroPage';
import Articles from '../Articles/Articles';

const HomePage = () => {
  return (
    <MainLayout>
      <HeroPage />
      <Articles />
    </MainLayout>
  );
}

export default HomePage;

