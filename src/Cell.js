import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) { //the constructor is where you define the initial state, the props being used (which could be passed on), and the binds
    super(props)
    this.state = {
      color: this.props.color //=> returning itself
    }
  }
  
  handleClick = ()=> (
    this.setState(
      {color: this.props.selectedColor})) ///After 

  render() {
    console.log(this.props)
    //console.log(this)
    return (
      <div onClick = {this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}