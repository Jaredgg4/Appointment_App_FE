import React from 'react';
import { useRouter } from 'next/router';

interface ButtonComponentProps {
  label: string;
  route: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ label, route }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
