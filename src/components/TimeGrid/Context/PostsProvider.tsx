import { useState } from 'react';
import PostsContext from './PostsContext';
import { PostsByDay, PostsContextType } from '../../../@types';

export default function PostsProvider({children}:{children: React.ReactNode}) {
  const [previouslyCheckedId , setPreviouslyCheckedId ] = useState("")
  const [totalPostCount, setTotalPostCount] = useState(0)
  const [postsByDay, setPostsByDay] = useState<PostsByDay>({
    sunday: Array.from({ length: 24 }, () => ({
      postCount:0,
    })),
    monday: Array.from({ length: 24 }, () => ({
      postCount:0,
    })),
    tuesday: Array.from({ length: 24 }, () => ({
      postCount:0,
    })),
    wednesday: Array.from({ length: 24 }, () => ({
      postCount:0,
    })),
    thursday: Array.from({ length: 24 }, () => ({
      postCount:0,
    })),
    friday: Array.from({ length: 24 }, () => ({
      postCount:0,
    })),
    saturday: Array.from({ length: 24 }, () => ({
      postCount:0,
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
      updatedPostsByDay[postDay.toLowerCase()][postHour].postCount =  updatedPostsByDay[postDay.toLowerCase()][postHour].postCount + 1;
      setPostsByDay(updatedPostsByDay);
      setPreviouslyCheckedId(newPost.id)
      setTotalPostCount(totalPostCount+1)
    },
  };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
}
