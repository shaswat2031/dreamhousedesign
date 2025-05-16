"use client";

import { createContext, useState, useContext, useEffect } from "react";

// Create the context
const AuthContext = createContext();

// Custom hook for using the auth context
export const useAuth = () => useContext(AuthContext);

// The provider component that wraps your app and makes auth object available
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in on initial load
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("admin-token");
      setIsAuthenticated(!!token);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  // Login function with hardcoded credentials
  const login = (username, password) => {
    // Hardcoded credentials - in a real app, this would be a server call
    if (username === "Rudra" && password === "Rudra") {
      localStorage.setItem("admin-token", "admin-authenticated");
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("admin-token");
    setIsAuthenticated(false);
  };

  // Value object that will be passed to consumers
  const value = {
    isAuthenticated,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
