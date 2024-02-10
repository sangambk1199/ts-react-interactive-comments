import { createContext, useContext } from 'react';

// Define the data types
export type Comment = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replies: Comment[];
};

export type CommentsData = {
  comments: Comment[];
};

// Create context for comments data
export const CommentsContext = createContext<CommentsData | null>(null);

// Custom hook to use the comments data context
export const useCommentsData = () => {
  const context = useContext(CommentsContext);
  
  if (!context) {
    throw new Error('useCommentsData must be used within a CommentsDataProvider');
  }
  return context;
};
