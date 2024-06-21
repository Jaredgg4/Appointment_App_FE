import React from 'react';
import { useRouter } from 'next/router';
import NotificationDropdown from './NotificationDropdown'; 
import UserAvatar from './UserAvatar'; 

const TopBarSimple: React.FC = () => {

  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-gray-800 flex items-center shadow-md z-50 px-4 justify-between">
      <div className="text-white text-lg">
        OSAM
      </div>
      <div className="flex items-center">
      </div>
    </div>
  );
};

export default TopBarSimple;