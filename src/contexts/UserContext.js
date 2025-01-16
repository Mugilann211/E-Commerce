import React, { createContext, useState, useContext } from "react";

// Create a context for user
const UserContext = createContext();

// UserContextProvider component to wrap your app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // State to store user data

  // Login function to set the user when credentials are correct
  const login = (userData) => {
    setUser(userData);  // Simulating setting user data
  };

  // Logout function to clear user data
  const logout = () => {
    setUser(null);  // Clears user data (logs out)
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext in any component
export const useUser = () => {
  return useContext(UserContext);
};
