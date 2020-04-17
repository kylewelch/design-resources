import React from 'react';
import './App.css';
import Card from './Card.js'


function CardSection(props) {
  return (
    <div className="card-section">
      <h2 className="card-section-header">{props.resource.id}</h2>
      {props.resource.titles.map((title, index) => {
          return <Card 
                    title={title}
                    description={props.resource.descriptions[index]}
                    url={props.resource.urls[[index]]}
                    index={index}
                    category={props.index}
                    resource={props.resource}
                  />
          })}
    </div>
  );
}

export default CardSection;
