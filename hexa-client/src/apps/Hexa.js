import React from 'react';
import hexa from '../img/hex.svg';
import '../css/Hexa.css';

const App = (props) => {

  var x = 0;
  var y = 0;
  var xe = 0;
  var ye = 0;
  var selected = null;

  const onDown = (e) => {
    e.preventDefault();
    dragInit (document.getElementById('hex'));
    return false;
  }

  const dragInit = (elem) => {
    selected = elem;
    xe = x - selected.offsetLeft;
    ye = y - selected.offsetTop;
  }
  const destroy = () => {
    selected = null;
  }

  const move = (e) => {
    x = document.all ? window.event.clientX : e.pageX;
    y = document.all ? window.event.clientY : e.pageY;
    if (selected !== null) {
        selected.style.left = (x - xe) + 'px';
        selected.style.top = (y - ye) + 'px';
    }
  }

  document.onmousemove = move;
  document.onmouseup = destroy;

  return (
      <div className="ga-hexa-container">
        <div id="hex" onMouseDown={onDown} className="ga-hexa"><img src={hexa} alt="Hexa" /></div>
      </div>
    );
};

export default App;
