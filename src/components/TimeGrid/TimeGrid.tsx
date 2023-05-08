import { useContext } from 'react';
import DiagramComponent from '../DiagramComponent/DiagramComponent';
import PostsContext from './Context/PostsContext';
import { useSubscription } from 'react-query-subscription';
import { eventSource$ } from 'rx-event-source';

export default function TimeGrid(){
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const hours = Array.from(Array(24), (_, i) => `${i+1}am`);
  const { postsByDay , updatePosts } = useContext(PostsContext);
  const { data } = useSubscription('getPostStream',()=> eventSource$("https://stream.upfluence.co/stream"));

  function extractPost(newPost){
    if (!newPost) {
      return;
    }
    const newPostData = Object.values(newPost)[0];
    if (newPostData === undefined) {
      return null;
    }
    if(newPostData){
      updatePosts(newPostData);
    }
  }
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
          >Hours</th>
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
            >{hour}</td>
            {weekdays.map(day => <td
              className="h-10 w-10 border-collapse border border-gray-400"
              key={`${day}-${hour}`}
            >
              <p>{`${day}-${hour}`}</p>
              <DiagramComponent
                count={0}
              />
            </td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
function fetch(arg0: string) {
  throw new Error('Function not implemented.');
}

