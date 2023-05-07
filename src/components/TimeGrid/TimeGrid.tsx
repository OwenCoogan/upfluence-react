import { useSubscription } from 'react-query-subscription';
import { eventSource$ } from 'rx-event-source';
import { sortDataByTimestamp } from '../store/store';

export default function TimeGrid(){
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const hours = Array.from(Array(24), (_, i) => `${i+1}am`);
  const { data, isLoading, error } = useSubscription('getPostStream',()=> eventSource$("https://stream.upfluence.co/stream"));
  console.log(sortDataByTimestamp(data));


  if (isLoading) return <p>Loading...</p>;

  return (
    <table
      className="border-collapse border border-gray-400 w-full"
    >
      <thead
        className="border-collapse border border-gray-400"
      >
        <tr
        >
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

