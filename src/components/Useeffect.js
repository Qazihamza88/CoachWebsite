import React, { useEffect,useState } from 'react'

function Useeffect() {
  const [count,setcount]=useState(0) 
  const [data,setdata]=useState(10) 
    useEffect(() =>{
    console.warn("Useeffect" + {count})
    } ,[count])
    useEffect(() =>{
      console.warn("Useeffect" + {data})
      } ,[data])
  return (
    <div>
        <hr></hr>
      <h1> UseEffect Hook is Started count {count} </h1>
      <button onClick={() => setcount(count+1)}>Increment in setcount</button>
      <hr></hr>
      <h1>useEffect hook is started data :{data} </h1>
      <button onClick={()=>setdata(data + 1)}>Increment in data</button>
    </div>
  );
}

export default Useeffect
