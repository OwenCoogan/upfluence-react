import { useContext } from 'react';
import PostsContext from '../TimeGrid/Context/PostsContext';

export default function DiagramComponent({count}: {count: number}){
  function setSize(){
    return count * 100/ 100;
  }

  return <div
    className={"rounded-full border-collapse border border-gray-400 m-auto my-10"}
    style={{height: setSize(), width: setSize()}}
  />
}
