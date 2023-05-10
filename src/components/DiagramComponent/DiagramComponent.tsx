import { useContext, useState } from 'react';
import PostsContext from '../TimeGrid/Context/PostsContext';


type tradsType = {
  [key: string]: string;
}


interface DiagramComponentProps {
  count: number;
  day: string;
  hour: number;
}


const trads:tradsType = {
  monday: "Lundi",
  tuesday: "Mardi",
  wednesday: "Mercredi",
  thursday: "Jeudi",
  friday: "Vendredi",
  saturday: "Samedi",
  sunday: "Dimanche"
}

function setSize(count:number,totalPostCount: number){
  return (count * 100 / totalPostCount)* 4   ;
}
export default function DiagramComponent({count,day,hour}: DiagramComponentProps){
  const { totalPostCount } = useContext(PostsContext);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  if(count === 0) return null;

  return (
    <div
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
    >
      {tooltipVisible === false && <div
      className={`rounded-full border-collapse border border-gray-400 mx-auto my-4 bg-green-900 max-h-full max-w-full`}
      style={{height: setSize(count,totalPostCount), width: setSize(count,totalPostCount)}}
    />}
    {
      tooltipVisible && (
        <div className="max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <p className="font-normal text-gray-700 mb-3 dark:text-gray-400 text-center">{`${count} posts ${trads[day]} à ${hour}h`}</p>
        </div>
    </div>
      )
    }
    </div>
  )
}
