import { Post } from '../../@types';

export function extractPost(newPost:any, updatePosts:any){
  if (!newPost) {
    return;
  }
  const newPostData = Object.values(newPost)[0];
  if (newPostData === undefined) {
    return null;
  }
  if(newPostData){
    updatePosts(newPostData as Post);
  }
}
