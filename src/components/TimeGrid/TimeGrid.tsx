import { useContext } from 'react';
import DiagramComponent from '../DiagramComponent/DiagramComponent';
import PostsContext from './Context/PostsContext';

export default function TimeGrid(){

  const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const hours = Array.from(Array(24), (_, i) => i+1);
  const { postsByDay ,totalPostCount } = useContext(PostsContext);
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
            className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs bg-white border-b-0"
          >Total Posts : {totalPostCount}</th>
          {weekdays.map(day => <th
            className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs bg-white"
          key={day}>{day.toUpperCase()}</th>)}
        </tr>
      </thead>
      <tbody>
        {hours.map(hour => (
          <tr
            className="p-2 h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs bg-white"
            style={{height: 100}}
          key={hour}>
            <td
              className="p-1 rounded-sm"
            >
              <p
                className="text-center"
              >{hour}h</p>
            </td>
            {weekdays.map(day =>
              <DiagramComponent
                count={postsByDay[day][hour-1]?.postCount}
                day={day}
                hour={hour}
              />)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

