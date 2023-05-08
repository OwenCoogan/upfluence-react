import { useContext } from 'react';
import PostsContext from '../TimeGrid/Context/PostsContext';

function setSize(count:number,totalPostCount: number){
  return (count * 100 / totalPostCount)* 2   ;
}
export default function DiagramComponent({count}: {count: number}){
  const { totalPostCount } = useContext(PostsContext);
  return (
    <div
      className="relative"
    >
      <div
      className={"rounded-full border-collapse border border-gray-400 mx-auto my-4 bg-green-900"}
      style={{height: setSize(count,totalPostCount), width: setSize(count,totalPostCount)}}
    />
    </div>
  )
}
