import React,{useState} from 'react'

function Usestate() {
    const [data,setdata]=useState("");
    const updatedata = ()=>{
        setdata("qazihamzaali")
    }
    const resetdata = ()=>{
        setdata("hamza")
    }
    // yaha hum do function bna ka un mai do yaha sa data pas kar rahy hain 
    const [check ,checkdata]=useState("UseState "); 
  return (
    <div className='container' style={{backgroundColor:"yellow"}}>
     <h1>UseState Hooks Start </h1>
     <hr></hr>
     <h1>hello world</h1>      
     <h2>{data}</h2>
     {/*here when u press the resetdata it will show the name of resetdata and when
      we press the updatedata it will show the updatedata given data and show it */}
     <button onClick={resetdata}>PRESS ME</button>
     <button onClick={updatedata}>PRESS ME BACK</button>
     <hr></hr>
     {/* here we use the usestate and change the Value of on the click of a button*/}
     <h3>{check}</h3>
     <button onClick={()=> checkdata("UseState is updated")}>button </button>
    </div>
  )
}

export default Usestate
