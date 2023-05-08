import { useState } from 'react';
import PostsContext from './PostsContext';
import { PostsByDay, PostsContextType } from '../../../@types';

export default function PostsProvider({children}:{children: React.ReactNode}) {
  const [previouslyCheckedId , setPreviouslyCheckedId ] = useState("")
  const [totalPostCount, setTotalPostCount] = useState(0)
  const [postsByDay, setPostsByDay] = useState<PostsByDay>({
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

  const value: PostsContextType= {
    postsByDay,
    totalPostCount,
    updatePosts: (newPost) => {
      if(newPost.id === previouslyCheckedId){
        return
      }
      const postTime = new Date(newPost.timestamp * 1000);
      const postHour = postTime.getHours();
      const postDay = postTime.toLocaleString('en-US', { weekday: 'long' });
      const updatedPostsByDay = { ...postsByDay } as PostsByDay;
      updatedPostsByDay[postDay.toLowerCase()][postHour].posts.push(newPost);
      updatedPostsByDay[postDay.toLowerCase()][postHour].postCount =  updatedPostsByDay[postDay.toLowerCase()][postHour].postCount + 1;
      setPostsByDay(updatedPostsByDay);
      setPreviouslyCheckedId(newPost.id)
      setTotalPostCount(totalPostCount+1)
    },
  };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
}
