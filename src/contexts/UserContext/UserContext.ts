import { createContext, useContext } from 'react';
import { User } from '../../types/user.types';

// Define the data types

export type UserData = {
  currentUser: User;
};

// Create context for user data
export const UserContext = createContext<UserData | null>(null);

// Custom hook to use the user data context
export const useUserData = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }
  return context;
};
