import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BellIcon } from '@heroicons/react/16/solid';
import { RootState } from '@/redux/store';
import { markNotificationAsRead } from '@/redux/notificationsSlice';

const NotificationDropdown: React.FC = () => {
  const notifications = useSelector((state: RootState) => state.notifications.notifications);
  const unreadNotifications = notifications.filter((notification: { read: any; }) => !notification.read);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ml-4 relative">
      <button className="text-white" onClick={toggleDropdown}>
        <BellIcon className="h-6 w-6" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
          {unreadNotifications.length > 0 ? (
            unreadNotifications.map((notification: { id: React.Key | null | undefined; message: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
              <a href="#" key={notification.id} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {notification.message}
              </a>
            ))
          ) : (
            <p className="px-4 py-2 text-sm text-gray-700">You have no unread notifications</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
