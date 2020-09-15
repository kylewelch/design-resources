import React from 'react';
import CardSection from './CardSection.js'
import logo from  './img/logoMerlin.svg'
import main from './img/mainImg.svg'
import main1 from './img/main1.svg'
import main2 from './img/main2.svg'
import main3 from './img/main3.svg'
import main4 from './img/main4.svg'
import resources from './data.json'
import './App.css';

function App() {
  return (
    <div className="App">
          <div className="top-nav">
            <div className="logo-container">
              <img className="logo" src={logo} alt="Merlin logo" />
            </div>
          </div>
      <div className="intro-section">
        <img className="mobile-img" src={main} alt="Design resources" />
        <h1 className="mobile-heading">Learn any design skill for free</h1>
        <div className="intro-content">
          <div className="intro-text">
          <h1 className="intro-heading">Learn any design skill for free</h1>
            <div className="divider"></div>
            <p className="intro-sub-heading">A collection of the best resources on the web.</p>
          </div>
          <div className="intro-image">
            <img className="intro4" src={main4} alt="design resource"></img>
            <img className="intro1" src={main1} alt="design resource"></img>
            <img className="intro2" src={main2} alt="design resource"></img>
            <img className="intro3" src={main3} alt="design resource"></img>
          </div>
        </div>
        
      </div>
      <div className="resource-list">
        {resources.categories.map((resource, index) => {
            return <CardSection 
                      resource={resource}
                      index={index}
                    />
            })}
      </div>
    </div>
  );
}

export default App;
