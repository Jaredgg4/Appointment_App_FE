import React from 'react';

const UserAvatar: React.FC = () => {
  // Implement logic to fetch user avatar URL or display static avatar
  const avatarUrl = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'; // Example avatar URL

  return (
    <div className="ml-4 relative">
      <img className="h-8 w-8 rounded-full" src={avatarUrl} alt="User Avatar" />
    </div>
  );
};

export default UserAvatar;
