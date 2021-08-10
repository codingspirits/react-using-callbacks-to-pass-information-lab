import React, { Component } from 'react';
//Clicking on a div of a particular color should now set state in matrix
export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      let callback = () => this.props.setSelectedColor(str)
      //this onClick does not require a setState change, unlike the state change of the cell
      return <div onClick = {callback} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  render() {
    // console.log(this.props) => returns setSelectedColor. This is passed on from Matrix.js in the Cell component that it has defined
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}
