import React, { Component } from 'react'
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faAlignLeft, faCaretDown } from '@fortawesome/free-solid-svg-icons'

import {
    Link,
  } from "react-router-dom";
  
export default class NavBar extends Component {
    render() {
        return (
<div>
 <div className="navbar">
 <Link to="/"><FontAwesomeIcon icon={faGlobe} /></Link>
  <div className="dropdown">
    <button className="dropbtn"><span style={{fontSize : 18}}>Learn Now</span>
      <i className="fa fa-caret-down"></i>
      &nbsp;&nbsp;
      <FontAwesomeIcon icon={faCaretDown} />
    </button>
    <div className="dropdown-content">
      <div className="row">
        <div className="column">
          <h4>Machine Learning</h4>
          <Link to="/tut" >Linear Regression</Link>
          <Link to="#">Polynomial Regression</Link>
          <a href="#">Logistic Regression</a>
          <a href="#">K mean clistering</a>
          <a href="#">Support Vector Machines</a>
        </div>
        <div className="column">
          <h4>Deep Learning</h4>
          <a href="#">Deep Neural Net</a>
          <a href="#">Convolutional Neural Net</a>
          <a href="#">NLP</a>
        </div>
        <div className="column">
          <h4>Play Zone</h4>
          <Link to="/regression">Play with line</Link>
          <Link to="/categoricalClassification">Cluster Musrer</Link>
          <Link to="/objectClassification">Object Classification</Link>
          <Link to="/imageSegmentation">Image Seg</Link>
          <Link to="/thug">Thug Life</Link>
          <Link to="/imageClassification">Image Classification</Link>
        </div>
      </div>
    </div>
  </div>
</div> 
            </div>
        )
    }
}
