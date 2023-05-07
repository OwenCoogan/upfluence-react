import { useSubscription } from 'react-query-subscription';
import { eventSource$ } from 'rx-event-source';

export default function PostLoader() {
  const { data, isLoading, error } = useSubscription('getPostStream',()=> eventSource$("https://stream.upfluence.co/stream"));


  function sortDataByTimestamp(newPost:any){
    if (!newPost) {
      return;
    }
    const newPostData = Object.values(newPost)[0];
    if (newPostData === undefined) {
      return null;
    }
    if(newPostData){
      console.log(newPostData);
    }
  }
  sortDataByTimestamp(data);
  return null;
}
