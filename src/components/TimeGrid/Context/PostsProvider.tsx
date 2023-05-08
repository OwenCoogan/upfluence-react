import React, { useState } from 'react';
import PostsContext from './PostsContext';

export default function PostsProvider({ children }) {
  const [postsByDay, setPostsByDay] = useState({
    sunday: Array.from({ length: 24 }, () => ([])),
    monday: Array.from({ length: 24 }, () => ([])),
    tuesday: Array.from({ length: 24 }, () => ([])),
    wednesday: Array.from({ length: 24 }, () => ([])),
    thursday: Array.from({ length: 24 }, () => ([])),
    friday: Array.from({ length: 24 }, () => ([])),
    saturday: Array.from({ length: 24 }, () => ([])),
  });

  const value = {
    postsByDay,
    updatePosts: (newPost) => {
      console.log(postsByDay);
      const postTime = new Date(newPost.timestamp * 1000);
      const postHour = postTime.getHours();
      const postDay = postTime.toLocaleString('en-US', { weekday: 'long' });
      const updatedPostsByDay = { ...postsByDay };
      console.log(updatedPostsByDay[postDay.toLowerCase()][postHour])
      updatedPostsByDay[postDay.toLowerCase()][postHour].push(newPost);
      setPostsByDay(updatedPostsByDay);
      console.log(updatedPostsByDay)
    },
  };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
}
