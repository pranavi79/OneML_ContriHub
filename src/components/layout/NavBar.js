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
          <Link style={{height: "2rem"}} to="/tut" >Linear Regression</Link>
          <Link style={{height: "2rem"}} to="#">Polynomial Regression</Link>
          <Link style={{height: "2rem"}} to="#">Logistic Regression</Link>
          <Link style={{height: "2rem"}} to="#">K mean clustering</Link>
          <Link style={{height: "2rem"}} to="#">Support Vector Machines</Link>
        </div>
        <div className="column">
          <h4>Deep Learning</h4>
          <Link style={{height: "2rem"}} to="#">Deep Neural Net</Link>
          <Link style={{height: "2rem"}} to="#">Convolutional Neural Net</Link>
          <Link style={{height: "2rem"}} to="#">NLP</Link>
        </div>
        <div className="column">
          <h4>Play Zone</h4>
          <Link style={{height: "2rem"}} to="/regression/Playground">Play with line</Link>
          <Link style={{height: "2rem"}} to="/categoricalClassification/Playground">Cluster Musrer</Link>
          <Link style={{height: "2rem"}} to="/objectClassification/Playground">Object Classification</Link>
          <Link style={{height: "2rem"}} to="/imageSegmentation/Playground">Image Seg</Link>
          <Link style={{height: "2rem"}} to="/thug/Playground">Thug Life</Link>
          <Link style={{height: "2rem"}} to="/imageClassification/Playground">Image Classification</Link>
        </div>
      </div>
    </div>
  </div>
</div> 
            </div>
        )
    }
}
