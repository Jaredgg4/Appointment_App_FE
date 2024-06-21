import React from 'react';
import ImageComponent from './ImageComponent';
import ButtonComponent from './ButtonComponent';

interface RootComponentProps {
  imageUrl: string;
  imageAlt: string;
}

const RootComponent: React.FC<RootComponentProps> = ({ imageUrl, imageAlt }) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <ImageComponent src={imageUrl} alt={imageAlt} />
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
        <ButtonComponent label="Login" route="/login" />
        <ButtonComponent label="Sign Up" route="/signup" />
      </div>
    </div>
  );
};

export default RootComponent;
