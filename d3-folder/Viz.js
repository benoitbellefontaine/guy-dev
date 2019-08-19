// VIZ2
import React, { useState,useEffect } from 'react';
import * as d3 from 'd3';
//import { genDateValue } from '@vx/mock-data';
import { useSpring, useTransition, animated } from 'react-spring';
//import { scaleTime, scaleLinear } from '@vx/scale';
//import { curveMonotoneX, curveBasis } from '@vx/curve';

import '../trail.css';

const textSlides = [
    { id: 0, url: 'photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', time:3000, text:'Traçons un graphique' },
    { id: 1, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80', time:40000, text:'avec vos objectifs en fonction du temps' },
    { id: 2, url: 'photo-1495870043034-74e1a009f631?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60', time:3000, text:'disons que vos objectifs sont des revenus' },
    { id: 3, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80', time:3500, text:'et le temps est partitionné en cycles de vie' },
    { id: 4, url: 'photo-1483104879057-379b6c2fe5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', time:3000, text:'traçons maintenant la courbe de cycle de vie' },
    { id: 5, url: 'photo-1507149677524-254e3ebb240f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', time:3000, text:'avec des points pour chaque cycle' },
    { id: 6, url: 'photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', time:3500, text:'certains disent que nul n\'y échappe' },
    { id: 7, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80', time:4000, text:'par contre en observant attentivement les données' },
    { id: 8, url: 'photo-1444927714506-8492d94b4e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', time:4000, text:'et en appliquant des méthodes rigoureuses' },
    { id: 10, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80', time:4000, text:'on peut certainement arriver à la redresser' },
    { id: 11, url: 'photo-1495870043034-74e1a009f631?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60', time:4500, text:'et remettre votre entreprise sur la voie du succès' },
];

const config = { mass: 5, tension: 2000, friction: 200 };

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

/*
steps = [
    "Add an SVG to draw our line chart on",
    "Use the D3 standard margin convetion",
    "Create an x axis",
    "Create a y axis",
    "Create an x scale",
    "Create a y scale",
    "Create a line generator",
    "Create a random dataset",
    "Create a path object for the line",
    "Bind the data to the path object",
    "Call the line generator on the data-bound path object",
    "Add circles to show each datapoint",
    "Add some basic styling to the chart so its easier on the eyes",
]
*/

//const data = genDateValue(15);

var color = d3.scaleOrdinal(d3.schemeCategory10);

// 2. Use the margin convention practice 
/*var margin = {top: 50, right: 50, bottom: 50, left: 50};
var width = window.innerWidth - margin.left - margin.right; // Use the window's width 
var height = window.innerHeight - margin.top - margin.bottom; // Use the window's height*/

// The number of datapoints
//var n = 21;

// accessors
//const date = d => d.date;
//const value = d => d.value;

// 5. X scale will use the index of our data
//var xScale = d3.scaleLinear().domain([0, n-1]) // input
    //.range([0, width]); // output

// 6. Y scale will use the randomly generate number 
//var yScale = d3.scaleLinear().domain([0, 1]) // input 
    //.range([height, 0]); // output 

// 7. d3's line generator
/*const line = d3.line()
    .x(function(d, i) { return xScale(i); }) // set the x values for the line generator
    .y(function(d) { return yScale(d.y); }) // set the y values for the line generator 
    .curve(d3.curveMonotoneX) // apply smoothing to the line
    */

// 8. An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
//var dataset = d3.range(n).map(function(d) { return {"y": d3.randomUniform(1)() } })

const Viz = (props) => {
    // hooks
    const [index, set] = useState(0)
    useEffect(() => {
        var refreshIntervalId = setInterval(() => set(state => (state + 1) % textSlides.length), 3000)
        setTimeout(  () => clearInterval(refreshIntervalId), 30000)
    }, [])
    useEffect(() => {
        d3.select('.viz > *').remove();
        draw(props);
    }, []);
    // react-spring hooks
    const transitions = useTransition(textSlides[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    })
    return (
        <div style={{ cursor: 'pointer',
            borderRadius: 10, boxSizing: 'border-box',
            boxShadow: '0 2px 4px 0 rgba(25, 29, 34, 0.1)',
            backgroundColor: 'white',
            padding: 0, //'20px 20px 20px 20px',
            color: 'rgba(25, 29, 34, 0.54)',
            overflow: 'hidden'}} 
                onClick={() => {
                    console.log('onClick');
                    //set2(state => !state)
                }}>
            <div style={{ position: 'relative', height: 100, padding: '0 0 10px 0' }}>
            
                { // transitions textSlides
                    transitions.map(({ item, props, key }) => (
                        <animated.div
                            key={key}
                            className="bg"
                            //style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`,
                            //    display:'flex', alignItems:'center', justifyContent:'center' }}
                            style={{ ...props, backgroundImage: `url(https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)`,
                                display:'flex', alignItems:'center', justifyContent:'center' }}
                            //style={{ ...props, backgroundImage: `url(https://images.unsplash.com/photo-1418232885776-9ddbfbf9cff0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)`,
                            //    display:'flex', alignItems:'center', justifyContent:'center' }}
                            //
                            >
                            <div style={{fontSize:'20px',color:'white',padding:5,backgroundColor:'rgba(0,0,0,0.4)'}}>{item.text}</div>
                        </animated.div>
                    ))
                }

            </div>
            <div className="viz" style={{ padding: '0 0 10px 0' }}>
            </div>
        </div>
    )
}

const draw = (props) => {

    const w = props.width-props.margin.right-props.margin.left;
    const h = props.height-props.margin.top-props.margin.bottom;
    console.log('w',props.width);
    console.log('h',props.height);
    console.log('r',props.margin.right);
    console.log('l',props.margin.left);

    var duration = 1500,
        delay = 500;

    // scales x,y
    var xScaleDotsLC = d3.scaleLinear()
        .domain([Math.min(...dotsLC.map(d => d.x)), Math.max(...dotsLC.map(d => d.x))]) // input
        .range([props.margin.left, w - props.margin.right])
    var yScaleDotsLC = d3.scaleLinear()
        .domain([Math.min(...dotsLC.map(d => d.y)), Math.max(...dotsLC.map(d => d.y))]) // input 
        .range([h - props.margin.top, props.margin.bottom]);

    var xScaleDC = d3.scaleLinear()
        .domain([Math.min(...dotsCC.map(d => d.x)), Math.max(...dotsCC.map(d => d.x))]) // input
        .range([props.margin.left, w - props.margin.right])
    var yScaleDC = d3.scaleLinear()
        .domain([Math.min(...dotsCC.map(d => d.y)), Math.max(...dotsCC.map(d => d.y))]) // input 
        .range([h - props.margin.top, props.margin.bottom]);

    var xScaleLC = d3.scaleLinear()
        .domain([Math.min(...curveLC.map(d => d.x)), Math.max(...curveLC.map(d => d.x))]) // input
        .range([props.margin.left, w - props.margin.right])
    var yScaleLC = d3.scaleLinear()
        .domain([Math.min(...curveLC.map(d => d.y)), Math.max(...curveLC.map(d => d.y))]) // input 
        .range([h - props.margin.top, props.margin.bottom]);

    var xScaleCC = d3.scaleLinear()
        .domain([Math.min(...curveCC.map(d => d.x)), Math.max(...curveCC.map(d => d.x))]) // input
        .range([props.margin.left, w - props.margin.right])
    var yScaleCC = d3.scaleLinear()
        .domain([Math.min(...curveCC.map(d => d.y)), Math.max(...curveCC.map(d => d.y))]) // input 
        .range([h - props.margin.top, props.margin.bottom]);

    // line generator
    const plotlineLC = d3.line()
        .curve(d3.curveMonotoneX) // apply smoothing to the line
        .x(function(d) { return xScaleLC(d.x); }) // set the x values for the line generator
        .y(function(d) { return yScaleLC(d.y); }) // set the y values for the line generator 
        
    const plotlineCC = d3.line()
        .curve(d3.curveMonotoneX) // apply smoothing to the line
        .x(function(d) { return xScaleCC(d.x); }) // set the x values for the line generator
        .y(function(d) { return yScaleCC(d.y); }) // set the y values for the line generator 

    var svg = d3.select('.viz').append("svg")
        .attr('height', h+10)
        .attr('width', w)
        .append("g")

    var line = svg.append("path")
        .datum(curveLC) // 10. Binds data to the line 
        .attr("class", "lineTest") // Assign a class for styling 
        .style("stroke", "red")
        .attr("d", plotlineLC) // 11. Calls the line generator
        .style("fill", "none")
        .style("stroke-width", "2px")
        .style("stroke-linecap","round")
        .style("opacity", 0);

    var barLC = svg.selectAll("bar")
        .data(curveLC)
        .enter().append("rect")
        //.attr("class", "bar")
        .attr("x", function (d) { return xScaleLC(d.x); })
        .attr("y", function (d) { return yScaleLC(d.y); })
        .attr("width", 0)
        
    var dot = svg.append("g")
        .selectAll(".dot")
        .data(dotsLC)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("r", 10)
        .attr("cx", function(d) { return xScaleDotsLC(d.x); })
        .attr("cy", function(d) { return yScaleDotsLC(d.y); })
        .attr("stroke", "white")
        .attr("stroke-width", "2px")
        .style("fill", function(d,i) { return color((i)); })
        .style("opacity", 0)

        setTimeout(graphique, 500);

        function graphique() {

            // horiz
            svg.append("line")
                .attr("x1", props.margin.left-20)
                .attr("y1", h-35)
                .attr("x2", props.margin.left-20)
                .attr("y2", h-35)
                .transition()
                .duration(3000)
                .attr("x2", w-props.margin.right+20)
                .attr("stroke-width", "6px")
                .attr("stroke-linecap", "round")
                .attr("stroke","rgba(0,0,0,0.3)");

            // vertical
            svg.append("line")

                .attr("x1", props.margin.left-20)
                .attr("y1", h-35)
                .attr("x2", props.margin.left-20)
                .attr("y2", h-35)
                .transition()
                .duration(3000)
                .attr("x2", props.margin.left-20)
                .attr("y2", props.margin.top)
                .attr("stroke-width", "6px")
                .attr("stroke-linecap", "round")
                .attr("stroke","rgba(0,0,0,0.3)");

            setTimeout(xAxisTitle,5000)
            
        }

        function xAxisTitle() {

            // x axis title
            svg.append("g")
                .append('text')
                .attr("fill", "#000")
                .attr("transform", "translate("+(w-props.margin.right)+","+(h+100)+")")
                .transition()
                .duration(1500)
                .attr("transform", "translate("+(w-props.margin.right)+","+(h+5)+")")
                //.attr("x", 6)
                //.attr("dx", "0.71em")
                .attr("text-anchor", "middle")
                .attr("font-size", "14px")
                .text("périodes");

            // y axis title
            svg.append("g")
                .append("text")
                .attr("fill", "#000")
                .attr("transform", "translate(-100,"+(h/3)+") rotate(-90)")
                .transition()
                .delay(1500)
                .duration(1500)
                .attr("transform", "translate(0,"+(h/3)+") rotate(-90)")
                .attr("y", 6)
                .attr("dy", "0.71em")
                .attr("text-anchor", "middle")
                .attr("font-size", "14px")
                .text("revenue");

            setTimeout(xAxisLabels,3000)
            
        }

        function xAxisLabels() {
            svg.append("g")
                .selectAll('text')
                .data(dotsLC).enter()
                .append('text')
                    .attr("class","xAxisLabels")
                    .attr("text-anchor","middle")
                    .attr('opacity', 0)
                    .attr('x', function(d) {return xScaleDotsLC(d.x);})
                    .attr('y', function(d) {return h+5})
                    .transition()
                    .duration(3000)
                    //.attr('x', function(d) {return xScaleDotsLC(d.x);})
                    .attr('y', function(d) {return h-15})
                    .attr('opacity', 1)
                    .attr('font-size', "14px")
                    .attr('font-weight', "700")
                    .attr("fill", function(d,i) { return color((i)); })
                    .text(function(d) {return d.nom;})
                    .style("opacity",1)
    
            setTimeout(barsLC,3000);
        }

        function barsLC() {

            var x1 = d3.scaleLinear()
                .domain([Math.min(...curveLC.map(d => d.x)), Math.max(...curveLC.map(d => d.x))]) // input
                .range([props.margin.left, w - props.margin.right])
            var y1 = d3.scaleLinear()
                .domain([-1,1]) // input 
                .range([h - props.margin.top, props.margin.bottom]);

            barLC
                .data(curveLC)
                .transition()
                .duration(500)
                .delay(function(d,i) { return i * 10 })
                .attr("x", function (d) { return xScaleLC(d.x); })
                .attr("y", function (d) { return yScaleLC(d.y); })
                .attr("width", 1)
                .attr("height", function (d) { return h - yScaleLC(d.y) - 45; })
                //.attr("fill", function(d,i) { return color((i)); });
                .attr("fill", "blue");

            setTimeout(lineLC, 3000);

        }

        function lineLC() {
            line.datum(curveLC)
                .attr("class", "lineTest") // Assign a class for styling 
                .style("fill", "none")
                .transition().duration(1500)
                .attr("d", plotlineLC)
                .style("fill", "none")
                .style("stroke-width", "2px")
                .style("stroke", "red")
                .style("opacity", 1)

            //Update all circles
            d3.selectAll("circle")
                .data(dotsLC)
                .transition()
                .duration(1500)
                .delay(0)
                .attr("cx", function(d) { return xScaleDotsLC(d.x); })
                .attr("cy", function(d) { return yScaleDotsLC(d.y); })
                .style("fill", function(d,i) { return color((i)); })
                .style("opacity",1)

            //Enter new circles
            d3.selectAll("circle")
                .data(dotsLC)
                .enter()
                .append("circle")
                .attr("cx", function(d) { return xScaleDotsLC(d.x); })
                .attr("cy", function(d) { return yScaleDotsLC(d.y); })
                .attr("r", 5);

            // Remove old
            d3.selectAll("circle")
                .data(dotsLC)
                .exit()
                .remove()

            setTimeout(barsCC, 6000);  
        }

        function barsCC() {

            var x1 = d3.scaleLinear()
                .domain([Math.min(...curveCC.map(d => d.x)), Math.max(...curveCC.map(d => d.x))]) // input
                .range([props.margin.left, w - props.margin.right])
            var y1 = d3.scaleLinear()
                .domain([0,1]) // input 
                .range([h - props.margin.top, props.margin.bottom]);

            barLC
                .data(curveCC)
                .transition()
                .duration(500)
                .delay(function(d,i) { return i * 10 })
                .attr("x", function (d) { return xScaleCC(d.x); })
                .attr("y", function (d) { return yScaleCC(d.y); })
                .attr("width", 1)
                //.attr("transform","translate("+ 0 +",0)")
                .attr("height", function (d) { return h - yScaleCC(d.y) - 45; })
                //.attr("fill", function(d,i) { return color((i)); });
                .attr("fill", "blue");

            setTimeout(toCC, duration + delay);

        }

        function toCC() {
            line.datum(curveCC)
                .transition().duration(1500)
                .attr("d", plotlineCC)
                .style("fill", "none")
                .style("stroke-width", "10px")
                .style("stroke", "green")
                .style("stroke-width", "2px");
            
            //Update all circles
            d3.selectAll("circle")
                .data(dotsCC)
                .transition()
                .duration(1500)
                .attr("cx", function(d) { return xScaleDC(d.x); })
                .attr("cy", function(d) { return yScaleDC(d.y); })
                //.style("fill", d3.rgb(...colorVals()))
                .style("fill", function(d,i) { return color((i)); })
           
            //Enter new circles
            d3.selectAll("circle")
                .data(dotsCC)
                .enter()
                .append("circle")
                .attr("cx", function(d) { return xScaleDC(d.x); })
                .attr("cy", function(d) { return yScaleDC(d.y); })
                .attr("r", 5);
           
            // Remove old
            d3.selectAll("circle")
                .data(dotsCC)
                .exit()
                .remove()
           
            //setTimeout(barsLC, duration + delay); 
        }
           
        /*function colorVals() {
            let r = Math.floor(Math.random() * 256),
            g = Math.floor(Math.random() * 256),
            b = Math.floor(Math.random() * 256);
            return [r, g, b];
        }*/
           
}
           
export default Viz
