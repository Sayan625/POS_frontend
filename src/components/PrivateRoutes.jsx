import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  // Check if a user is logged in by checking the "user" key in local storage
  const loggedIn = JSON.parse(localStorage.getItem('user'));

  return (
    // If the user is logged in, render the child routes (Outlet)
    loggedIn ? (
      <Outlet />
    ) : (
      // If the user is not logged in, navigate to the login page
      <Navigate to="/login" />
    )
  );
}

export default PrivateRoutes;
