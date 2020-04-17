import React from 'react';
import './App.css';
import ai1 from './img/ai1.jpg'
import ai2 from './img/ai2.jpg'
import ai3 from './img/ai3.jpg'
import career1 from './img/career1.jpg'
import career2 from './img/career2.jpg'
import code1 from './img/code1.jpg'
import code2 from './img/code2.jpg'
import code3 from './img/code3.jpg'
import illu1 from './img/illu1.jpg'
import illu2 from './img/illu2.jpg'
import leader1 from './img/leader1.jpg'
import leader2 from './img/leader2.jpg'
import leader3 from './img/leader3.jpg'
import motion1 from './img/motion1.jpg'
import motion2 from './img/motion2.jpg'
import ops1 from './img/ops1.jpg'
import ops2 from './img/ops2.jpg'
import ops3 from './img/ops3.jpg'
import research1 from './img/research1.jpg'
import research2 from './img/research2.jpg'
import research3 from './img/research3.jpg'
import ui1 from './img/ui1.jpg'
import ui2 from './img/ui2.jpg'
import ui3 from './img/ui3.jpg'
import ux1 from './img/ux1.jpg'
import ux2 from './img/ux2.jpg'
import ux3 from './img/ux3.jpg'

let images = [[motion1, motion2], [ai1, ai2, ai3], [ux1, ux2, ux3], [code1, code2, code3], [illu1, illu2], [leader1, leader2, leader3], [ui1, ui2, ui3], [research1, research2, research3], [ops1, ops2, ops3], [career1, career2]];

function Card(props) {
  let resourceType = props.resource.types[props.index];
  return (
    <a href={props.url} target="_blank">
      <div className="card">
        <div className="card-img-container">
          <img className="card-img" src={images[props.category][props.index]} />
        </div>
        <div className="card-content">
          <div className="card-text">
            <h3 className="card-heading">{props.title}</h3>
            <p className="card-description">{props.description}</p>
          </div>
          <div className={"card-badge " + resourceType}>{resourceType}</div>
        </div>
      </div>
    </a>
  );
}

export default Card;
