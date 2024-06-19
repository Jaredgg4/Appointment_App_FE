import React from 'react';
import { useRouter } from 'next/router';
import NotificationDropdown from './NotificationDropdown'; 
import UserAvatar from './UserAvatar'; 

const TopBar: React.FC = () => {
  const router = useRouter();
  const pathName = router.pathname.substring(1).replace(/^\w/, (c) => c.toUpperCase());

  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-gray-800 flex items-center shadow-md z-50 px-4 justify-between">
      <div className="text-white text-lg">
        {pathName}
      </div>
      <div className="flex items-center">
        <NotificationDropdown /> 
        <UserAvatar /> 
      </div>
    </div>
  );
};

export default TopBar;



