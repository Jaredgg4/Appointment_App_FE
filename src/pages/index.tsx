import React from 'react';
import RootComponent from '../components/RootComponent';
import TopBarSimple from '@/components/topBarSimple';

const HomePage: React.FC = () => {
  const imageUrl = "https://plus.unsplash.com/premium_photo-1691849271923-46ac13043dbc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; //replace with real image later
  const imageAlt = "Sample Placeholder Image"; //replace with real image later

  return (
    <div>
      <TopBarSimple />
      <RootComponent imageUrl={imageUrl} imageAlt={imageAlt} /> 
    </div>
  );
};

export default HomePage;
