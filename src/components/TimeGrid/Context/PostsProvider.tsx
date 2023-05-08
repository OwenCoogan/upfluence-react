import React, { useState } from 'react';
import PostsContext from './PostsContext';

export default function PostsProvider({ children }) {
  const [previouslyCheckedId , setPreviouslyCheckedId ] = useState(null)
  const [totalPostCount, setTotalPostCount] = useState(0)
  const [postsByDay, setPostsByDay] = useState({
    sunday: Array.from({ length: 24 }, () => ({
      postCount:0,
      posts:[]
    })),
    monday: Array.from({ length: 24 }, () => ({
      postCount:0,
      posts:[]
    })),
    tuesday: Array.from({ length: 24 }, () => ({
      postCount:0,
      posts:[]
    })),
    wednesday: Array.from({ length: 24 }, () => ({
      postCount:0,
      posts:[]
    })),
    thursday: Array.from({ length: 24 }, () => ({
      postCount:0,
      posts:[]
    })),
    friday: Array.from({ length: 24 }, () => ({
      postCount:0,
      posts:[]
    })),
    saturday: Array.from({ length: 24 }, () => ({
      postCount:0,
      posts:[]
    })),
  });

  const value = {
    postsByDay,
    totalPostCount,
    updatePosts: (newPost) => {
      if(newPost.id === previouslyCheckedId){
        return
      }
      const postTime = new Date(newPost.timestamp * 1000);
      const postHour = postTime.getHours();
      const postDay = postTime.toLocaleString('en-US', { weekday: 'long' });
      const updatedPostsByDay = { ...postsByDay };
      updatedPostsByDay[postDay.toLowerCase()][postHour].posts.push(newPost);
      updatedPostsByDay[postDay.toLowerCase()][postHour].postCount =  updatedPostsByDay[postDay.toLowerCase()][postHour].postCount + 1;
      setPostsByDay(updatedPostsByDay);
      setPreviouslyCheckedId(newPost.id)
      setTotalPostCount(totalPostCount+1)
    },
  };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
}
