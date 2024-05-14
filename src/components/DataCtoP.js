import React from 'react'

function DataCtoP(props) {
    const name={firstname:"qazi hamza ",email:"qazitesting.com" }
  return (
    <div>
        <hr></hr>
      <h2>DATA FROM CHILD TO PARENT </h2>
      <button onClick={ () => props.alert(name)}>click me</button>
      <hr></hr>
      <button onClick={props.name}>click me</button>
    </div>
  )
}

export default DataCtoP
