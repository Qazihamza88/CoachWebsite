import React from 'react';
import image from './Image-2.jpeg';

function Childprops(props) {
  return (
    <div>
      <h1>child props</h1>
      <button onClick={props.data} >Call Function from Childprops </button>
      <div>
      <img src={props.imgsrc} style={{width:"200px",height:"200px"}} alt="testing image"/>
      </div>
      </div>
  )
}

export default Childprops;
