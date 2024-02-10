import { UserData, UserContext } from './UserContext';
import data from '../../utils/data.json';
import { ReactNode } from 'react';

type UserDataProviderProps = {
  children: ReactNode;
};
  
// Component to provide the user data
export const UserDataProvider = ({ children }: UserDataProviderProps) => {
  return (
    <UserContext.Provider value={data as UserData}>
      {children}
    </UserContext.Provider>
  );
};