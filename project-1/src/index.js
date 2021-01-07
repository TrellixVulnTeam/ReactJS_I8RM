// Globals
import React from 'react'; // component building
import ReactDom from 'react-dom'; // rendering
import './App.css' // Styling
import './Hero'
// Compontent
const Root = document.getElementById('root');
const fullname = 'Isaiah Monroe Davis';
const title = 'Web Designer';
const profileImage = '#';
// Component
// React componenets are detected by sentence casing
// Always return html 


function Greeting(props) {
  console.log(props);
  return (
    <div id="wrapper" className='wrapper'>
      <h1 className='title' style={{ color: 'red' }}>My name is {fullname}</h1>
      <h3>
        {title}
      </h3>
      <img src={profileImage} alt={fullname}/>
    </div>
  );
}

// Rendering
// components being rendered must have a closing tag
ReactDom.render(<Greeting job='developer' />, Root);