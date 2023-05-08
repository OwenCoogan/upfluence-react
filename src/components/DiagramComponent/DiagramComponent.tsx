import { useContext } from 'react';
import PostsContext from '../TimeGrid/Context/PostsContext';

function setSize(count:number,totalPostCount: number){
  console.log(count * 100 / totalPostCount);
  return count * 100 / totalPostCount;
}
export default function DiagramComponent({count}: {count: number}){
  const { totalPostCount } = useContext(PostsContext);
  return <div
    className={"rounded-full border-collapse border border-gray-400 m-auto my-10 bg-green-900"}
    style={{height: setSize(count,totalPostCount), width: setSize(count,totalPostCount)}}
  />
}
