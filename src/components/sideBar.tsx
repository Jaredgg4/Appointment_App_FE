import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav className="fixed top-16 left-0 w-56 h-full bg-gray-500 p-4 shadow-md z-50 flex flex-col justify-between">
      <div>
        <h3 className="text-white text-lg mb-6">Menu</h3>
        <ul className="list-none p-0 m-0">
          <li className="mb-5 ml-4">
            <Link href="/dashboard" legacyBehavior>
              <a className="text-white text-base">Dashboard</a>
            </Link>
          </li>
          <li className="mb-5 ml-4">
            <Link href="/appointments" legacyBehavior>
              <a className="text-white text-base">My Appointments</a>
            </Link>
          </li>
          <li className="mb-5 ml-4">
            <Link href="/schedule" legacyBehavior>
              <a className="text-white text-base">Schedule Time</a>
            </Link>
          </li>
          <li className="mb-5 ml-4">
            <Link href="/message" legacyBehavior>
              <a className="text-white text-base">Message</a>
            </Link>
          </li>
          <li className="mb-5 ml-4">
            <Link href="/profile" legacyBehavior>
              <a className="text-white text-base">Profile</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
