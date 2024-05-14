import React from 'react';
import Childprops from './Childprops';
import image from './Image-2.jpeg';
import PropTypes from 'prop-types';

function Props(props) {
  function  getData() {
    alert("hello from props.js")
  }
  return (
  <div>
    <h1>Props Started</h1>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"aqua"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.aboutus}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.feactures}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.facebook.com/">{props.price}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div>
  <p>passing image in propos And show it on screen </p>
  <img src={props.imgsrc} style={{width:"200px",height:"200px"}} alt="testing image"/>
</div>
<h1>Props component</h1>
<button onClick={props.data}> Call by Props.js </button>
<button onClick={props.sum}> sum of a and b</button>
<Childprops data={getData} imgsrc={image}/>
</div>
  )
}
Props.proptype={
  title:PropTypes.string.isRequired,
  price:PropTypes.number
}
//YEH HUM TUB USE KARTY HAIN JUB AIN KIE VALUE NAHI DE HOTE TO HUM US KIE JGA DEFAULT 
//USE KAR LYTA HAIN AUR SET KAR DYTA HAIN 
// Props.defaultProps={
//  title:"Title is here",
//  price:"SET PRICE HERE"
// }
export default Props
