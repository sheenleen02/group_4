import React from 'react';
import { useLocation } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar.jsx';
import StorefrontNavbar from './StorefrontNavbar';

const MainLayout = ({ children, profilePicture, onProfileUpdate }) => {
  const location = useLocation();

  // Conditionally render the navbar
  const renderNavbar = () => {
    if (location.pathname.startsWith('/dashboard')) {
      return <StorefrontNavbar profilePicture={profilePicture} />;
    }
    return <DashboardNavbar />;
  };

  return (
    <div>
      {renderNavbar()}
      {children} {/* This will render the Routes */}
    </div>
  );
};

export default MainLayout;

