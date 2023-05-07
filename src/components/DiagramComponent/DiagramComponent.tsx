export default function DiagramComponent({count}: {count: number}){
  function setSize(){
    return count * 10;
  }

  return <div
    className={"h-10 w-10 rounded-full border-collapse border border-gray-400 m-auto my-10"}
  />
}
