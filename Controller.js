// CONTROLLER
import React, { Component } from 'react';
import Viz from './d3-folder/Viz';
import * as d3 from 'd3';

// data life cycle 
const dotsLC = [
  {x:3*Math.PI/3,y:Math.cos(3*Math.PI/3),nom:"démarrage",name:"startup"},
  {x:4*Math.PI/3,y:Math.cos(4*Math.PI/3),nom:"court terme",name:"short term"},
  {x:5*Math.PI/3,y:Math.cos(5*Math.PI/3),nom:"moyen terme",name:"middle term"},
  {x:6*Math.PI/3,y:Math.cos(6*Math.PI/3),nom:"excellence",name:"excellence"},
  {x:7*Math.PI/3,y:Math.cos(7*Math.PI/3),nom:"redressement",name:"re-engineering"}
];

// data lifecycle
const curveLC = d3.range(180,420).map(function(i){ return {
    x: i-180,
    y: Math.cos( i * Math.PI / 180 )
}});

// data croissance
//const dotsCC = [3*Math.PI/3,4*Math.PI/3,5*Math.PI/3,6*Math.PI/3,7*Math.PI/3].map(function(i){ return {
const dotsCC = [0,60,120,180,240].map(function(i){ return {
  x: i,
  y: Math.pow(i/240,2)
}});
const curveCC = d3.range(0,240).map(function(i){ return {
  x: i,
  y: Math.pow(i/240,2)
}});

export default class Controller extends Component {
  state = {
    //color: "red", 
    //width: "2px", 
    toDraw: [],
    dotsLC: [],
    dotsCC: [],
    curveLC: [],
    curveCC: [],
    set: {}, 
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    //const n = 21;
    //const dataset = d3.range(n).map(function(d) { return {"y": d3.randomUniform(1)() } })
    //this.setState({ dataset:dataset, n:n } )
    const newShape = {
       color: this.state.color, 
       width: this.state.width,
    }

    const curves = {
      dotsLC: dotsLC, 
      dotsCC: dotsCC, 
      curveLC: curveLC,      
      curveCC: curveCC,      
    }
    this.setState({ toDraw: [...this.state.toDraw, newShape], set: { datasets:curves, color:this.state.color, width:this.state.width } } )
  } 

  onChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value})
  }

  render() {
    return(
      <Viz 
        width={this.props.width} 
        height={this.props.height} 
        margin={this.props.margin} 
        //shapes={this.state.toDraw}
        //set={this.state.set}
        /> 
    )
  }
}