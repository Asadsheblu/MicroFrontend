import React from 'react';
import { Route } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  // Your authentication logic here
  const isAuthenticated = true; // Example: Set to true if user is authenticated
  
  return (
    <Route {...rest} element={isAuthenticated ? <Element /> : null} />
  );
};

export default ProtectedRoute;
