import { ReactNode } from 'react';
import { CommentsData, CommentsContext } from './CommentsContext';
import data from '../../utils/data.json';

type CommentsDataProviderProps = {
  children: ReactNode;
};

// Component to provide the comments data
export const CommentsDataProvider = ({ children }: CommentsDataProviderProps) => {
  return (
    <CommentsContext.Provider value={data as CommentsData}>
      {children}
    </CommentsContext.Provider>
  );
};
