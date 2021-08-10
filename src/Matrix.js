import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {selectedColor : '#FFF'}
    }
  
  setSelectedColor = (newColor) => ( //newColor will beceome the new color chosen from the ColorSelector 
    this.setState(
      {selectedColor: newColor}
    ))
  

  genRow = (vals) => ( //Put the cell component into an array
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor = {this.state.selectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render(){
    //console.log(this.props.values)=> returns the array
    //console.log(this.genRow(learnSymbol))
    //console.log(this.genMatrix()) //this returns another array
    //console.log(this.props.values)

    
    return (
      <div id="app">
        <ColorSelector setSelectedColor = {this.setSelectedColor} /> 
{/*         <!--This.props.setSelectedColor will have to be used in the SelectedColor component --> */}
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}