import React from 'react';
import './App.css';
import ai1 from './img/ai1.jpeg'
import ai2 from './img/ai2.jpeg'
import ai3 from './img/ai3.jpeg'
import career1 from './img/career1.jpeg'
import career2 from './img/career2.jpeg'
import code1 from './img/code1.jpeg'
import code2 from './img/code2.jpeg'
import code3 from './img/code3.jpeg'
import illu1 from './img/illu1.jpeg'
import illu2 from './img/illu2.jpeg'
import leader1 from './img/leader1.jpeg'
import leader2 from './img/leader2.jpeg'
import leader3 from './img/leader3.jpeg'
import motion1 from './img/motion1.jpeg'
import motion2 from './img/motion2.jpeg'
import ops1 from './img/ops1.jpeg'
import ops2 from './img/ops2.jpeg'
import ops3 from './img/ops3.jpeg'
import research1 from './img/research1.jpeg'
import research2 from './img/research2.jpeg'
import research3 from './img/research3.jpeg'
import ui1 from './img/ui1.jpeg'
import ui2 from './img/ui2.jpeg'
import ui3 from './img/ui3.jpeg'
import ux1 from './img/ux1.jpeg'
import ux2 from './img/ux2.jpeg'
import ux3 from './img/ux3.jpeg'

let images = [[motion1, motion2], [ai1, ai2, ai3], [ux1, ux2, ux3], [ui1, ui2, ui3], [code1, code2, code3], [illu1, illu2], [leader1, leader2, leader3], [research1, research2, research3], [ops1, ops2, ops3], [career1, career2]];

function Card(props) {
  let resourceType = props.resource.types[props.index];
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <div className="card">
        <div className="card-img-container">
          <img className="card-img" alt="design resource" src={images[props.category][props.index]} />
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
