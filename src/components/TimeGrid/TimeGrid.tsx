import { useContext, useState } from 'react';
import DiagramComponent from '../DiagramComponent/DiagramComponent';
import PostsContext from './Context/PostsContext';
import { useSubscription } from 'react-query-subscription';
import { eventSource$ } from 'rx-event-source';
import { Post } from '../../@types';
import Modal from '../Modal/Modal';




export default function TimeGrid(){

  const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const hours = Array.from(Array(24), (_, i) => i+1);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const { postsByDay, updatePosts ,totalPostCount } = useContext(PostsContext);
  function extractPost(newPost:any){
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

  const { data } = useSubscription('getPostStream',()=> eventSource$("https://stream.upfluence.co/stream"));
  extractPost(data)
  return (
    <table
      className="border-collapse border border-gray-400 w-full"
    >
      <thead
        className="border-collapse border border-gray-400"
      >
        <tr
        >
          <th
            className="border-collapse border border-gray-400 h-10 w-10"
          >Total Posts : {totalPostCount}</th>
          {weekdays.map(day => <th
            className="border-collapse border border-gray-400 h-10 w-10"
          key={day}>{day}</th>)}
        </tr>
      </thead>
      <tbody>
        {hours.map(hour => (
          <tr
            className="h-10 border-collapse border border-gray-400"
          key={hour}>
            <td
              className="h-10 w-10 border-collapse border border-gray-400"
            >{hour}h</td>
            {weekdays.map(day => <td
              className="h-10 w-10 border-collapse border border-gray-400"
              key={`${day}-${hour}`}
            >
              <DiagramComponent
                count={postsByDay[day][hour]?.postCount}
              />
            </td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

