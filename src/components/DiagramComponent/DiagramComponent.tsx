import { useContext, useState } from 'react';
import PostsContext from '../TimeGrid/Context/PostsContext';



interface DiagramComponentProps {
  count: number;
  day: string;
  hour: number;
}

function setSize(count:number,totalPostCount: number){
  return (count * 100 / totalPostCount)* 8   ;
}
export default function DiagramComponent({count,day,hour}: DiagramComponentProps){
  const { totalPostCount } = useContext(PostsContext);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  if(count === 0) return null;

  return (
    <td
      className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease"
      key={`${day}-${hour}`}
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
    >
      {tooltipVisible === false &&
        <div
          className={`rounded-full border-collapse border border-gray-400 mx-auto my-4 bg-green-900 animate-pulse  max-h-[100px] max-w-[100px]`}
          style={{height: setSize(count,totalPostCount), width: setSize(count,totalPostCount)}}
        />
      }
      {
        tooltipVisible && (
          <div className="max-w-sm dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5">
                <p className="font-normal text-gray-700 mb-3 dark:text-gray-400 text-center">{count >=0 ? `${count} post${ count>1 ? "s" : ""} à ${hour}h` : "No Posts" }</p>
              </div>
          </div>
        )
      }
    </td>
  )
}
