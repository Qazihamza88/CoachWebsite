import './App.css';
import React from 'react';
import Props from './components/Props';
import image from './components/Image-2.jpeg';
import Usestate from './components/Usestate';
import Useeffect from './components/Useeffect';
import DataCtoP from './components/DataCtoP';

function App() {
  function parentName(){
    alert("i am parent alert")
  }
  function Appdata(name){
    console.log(name)
    alert(name.email)
  }
  function  getData() {
    alert("hello from app.js")
}
 function addData(){
  const a=5;
  const b=4;
  const c=a+b;
   alert(c)
 }
 //yeh hum function bna rahy hain aur ais ko hum child mai use karyga yaha hum us ka
 //component mai hum us kie value dya data hain aur us component mai jka hum us jga pa 
 //(props.)lga ka yaha ko nam likha hota hai wo likh dyta hain jesa ka title aboutus to
//(props.title) to wo waha value show kar dyga ko hum na yaha de the  
return (
    <>
     <Props
      title="React App"
      aboutus="About Props"  
      feactures="React Features"
      price= '100'
      imgsrc={image} data={getData} sum={addData} /> 
      <Usestate/>
      <Useeffect/>
      <DataCtoP alert={Appdata} name={parentName}/>
    </>
     );
}

export default App;
