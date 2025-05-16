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
  const [user, setUser] = useState(null);

  // Check if user is already logged in on initial load
  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = localStorage.getItem("admin-token");
        const userData = localStorage.getItem("admin-user");

        if (token && userData) {
          setIsAuthenticated(true);
          setUser(JSON.parse(userData));
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Login function with hardcoded credentials
  const login = (username, password) => {
    // Hardcoded credentials - in a real app, this would be a server call
    if (username === "Rudra" && password === "Rudra") {
      const userData = {
        username: username,
        displayName: "Rudra",
        role: "admin",
        lastLogin: new Date().toISOString(),
      };

      localStorage.setItem("admin-token", "admin-authenticated");
      localStorage.setItem("admin-user", JSON.stringify(userData));
      setIsAuthenticated(true);
      setUser(userData);
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("admin-token");
    localStorage.removeItem("admin-user");
    setIsAuthenticated(false);
    setUser(null);
  };

  // Value object that will be passed to consumers
  const value = {
    isAuthenticated,
    isLoading,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
