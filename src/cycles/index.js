// VIZ2
import React, { useState,useEffect,useRef } from 'react';
import * as d3 from 'd3';
import { useSpring, useTransition, animated } from 'react-spring';

import './cycles.css';

/*const textSlides = [
    { id: 0, url: 'photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', time:3000, texte:'Traçons un graphique', text:"Let's draw a graph" },
    { id: 1, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80', time:40000, texte:'avec vos objectifs en fonction du temps', text:'with your onjectives on the Y axis and time on a X axis' },
    { id: 2, url: 'photo-1495870043034-74e1a009f631?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60', time:3000, texte:'disons que vos objectifs sont des revenus', text:"let's say your objectives are revenues" },
    { id: 3, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80', time:3500, texte:'et le temps est partitionné en cycles de vie', text:'and time is partioned in life cycles' },
    { id: 4, url: 'photo-1483104879057-379b6c2fe5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', time:3000, texte:'traçons maintenant la courbe de cycle de vie', text:"now let's draw the lifecycle curve" },
    { id: 5, url: 'photo-1507149677524-254e3ebb240f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', time:3000, texte:'avec des points pour chaque cycle', text:"with colored dots for each cycle" },
    { id: 6, url: 'photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', time:3500, texte:'certains disent que nul n\'y échappe', text:"some say there is no escape from it" },
    { id: 7, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80', time:4000, texte:'par contre en observant attentivement les données', text:"but by closely observing business data" },
    { id: 8, url: 'photo-1444927714506-8492d94b4e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', time:4000, texte:'et en appliquant des méthodes rigoureuses', text:'and apply straightforward methods' },
    { id: 10, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80', time:4000, texte:'on peut certainement arriver à la redresser', text:"we can certainly change the curvature" },
    { id: 11, url: 'photo-1495870043034-74e1a009f631?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60', time:4500, texte:'et remettre votre entreprise sur la voie du succès', text:"and put your enterprise back on the road to success" },
];*/

const tF = [
    { id: 0, text:'Traçons un graphique' },
    { id: 1, text:'avec vos objectifs (revenus) en fonction du temps (cycles)' },
    { id: 2, text:'traçons maintenant la courbe de cycle de vie' },
    { id: 3, text:'avec des points pour chaque cycle' },
    { id: 4, text:'certains disent que nul n\'y échappe' },
    { id: 5, text:'par contre en observant attentivement les données' },
    { id: 6, text:'et en appliquant des méthodes rigoureuses' },
    { id: 7, text:'on peut certainement arriver à la redresser' },
    { id: 8, text:'et remettre votre entreprise sur la voie du succès' },
];

const tE = [
    { id: 0,text:"Let's draw a graph" },
    { id: 1,text:'with your objectives (revenues) on Y and time (cycles) on X' },
    { id: 2,text:"now let's draw the lifecycle curve" },
    { id: 3,text:"with colored dots for each cycle" },
    { id: 4,text:"some say there is no escape from it" },
    { id: 5,text:"but by closely observing business data" },
    { id: 6,text:'and apply straightforward methods' },
    { id: 7,text:"we can certainly change the curvature" },
    { id: 8,text:"and put your enterprise back on the road to success" },
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
/*const dotsLC = [ 
    {x:180,y:Math.cos(3*Math.PI/3),nom:"démarrage",name:"startup"},
    {x:4*180/3,y:Math.cos(4*Math.PI/3),nom:"court terme",name:"short term"},
    {x:5*180/3,y:Math.cos(5*Math.PI/3),nom:"moyen terme",name:"middle term"},
    {x:6*180/3,y:Math.cos(6*Math.PI/3),nom:"excellence",name:"excellence"},
    {x:7*180/3,y:Math.cos(7*Math.PI/3),nom:"redressement",name:"re-engineering"}
  ];*/

// random colors
const colors = d3.range(0,240).map(function(i) { 
    return "rgba("+
        Math.random()*256 +","+
        Math.random()*256 +","+
        Math.random()*256 +",0.5)";
});

// curve lifecycle
const curveLC = d3.range(0,240).map(function(i){ 
    return {
        x: i+180,
        y: Math.cos( (i+180) * Math.PI / 180 )
    }
});

let curveLC2 = [...new Set(curveLC.filter(i => i.x%2===0))];
let dotsLC2 = [...new Set(curveLC.filter(i => i.x%230===0))];

// data croissance
const dotsCC = [0,60,120,180,240].map(function(i){ return {
  x: i,
  y: Math.pow(i/240,2)
}});

const curveCC = d3.range(0,240).map(function(i){ 
    return {
        x: i,
        y: Math.pow(i/240,2)
    }
});

let curveCC2 = [...new Set(curveCC.filter(i => i.x%2===0))];

/* steps to create a D3 reel
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

var interv = 0;

const Cycles = (props) => {
    // hooks
    const [index, set] = useState(0);
    const [dim, setDim] = useState([props.width - props.margin.right - props.margin.left, props.height - props.margin.top - props.margin.bottom]);
    //const [svg, setSVG] = useState( d3.select('.viz').append("svg").attr('height', dim[1]+10).attr('width', dim[0]).append("g") );
    const [array, setArray] = useState([500, 5000, 3000, 3000, 3000, 6000, 1500]);
    const [scriptArray, setScriptArray] = useState(tF);
    //const [intervalHandle, setIntervalHandle] = useState(0);

    //const intervalRef = useRef(null);

    /*
    useEffect(() => { 
        var handle = setInterval(() => set(state => (state + 1) % textSlides.length), 3000);
        setTimeout(  () => clearInterval(handle), 30000);
    }, [props.language])
    */

    /*
    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
    }, []);
    */

    useEffect(() => {

        //if (interv === 0)
        {
            // SVG
            d3.select('.viz > *').remove();
            var svg = d3.select('.viz').append("svg").attr('height', dim[1]+10).attr('width', dim[0]).append("g");

            // scales x,y
            var xScaleDotsLC = d3.scaleLinear()
                .domain([Math.min(...dotsLC.map(d => d.x)), Math.max(...dotsLC.map(d => d.x))]) // input
                .range([props.margin.left, dim[0] - props.margin.right])
            var yScaleDotsLC = d3.scaleLinear()
                .domain([Math.min(...dotsLC.map(d => d.y)), Math.max(...dotsLC.map(d => d.y))]) // input 
                .range([dim[1] - props.margin.top, props.margin.bottom]);

            var xScaleDC = d3.scaleLinear()
                .domain([Math.min(...dotsCC.map(d => d.x)), Math.max(...dotsCC.map(d => d.x))]) // input
                .range([props.margin.left, dim[0] - props.margin.right])
            var yScaleDC = d3.scaleLinear()
                .domain([Math.min(...dotsCC.map(d => d.y)), Math.max(...dotsCC.map(d => d.y))]) // input 
                .range([dim[1] - props.margin.top, props.margin.bottom]);

            var xScaleLC = d3.scaleLinear()
                .domain([Math.min(...curveLC.map(d => d.x)), Math.max(...curveLC.map(d => d.x))]) // input
                .range([props.margin.left, dim[0] - props.margin.right])
            var yScaleLC = d3.scaleLinear()
                .domain([Math.min(...curveLC.map(d => d.y)), Math.max(...curveLC.map(d => d.y))]) // input 
                .range([dim[1] - props.margin.top, props.margin.bottom]);

            var xScaleCC = d3.scaleLinear()
                .domain([Math.min(...curveCC.map(d => d.x)), Math.max(...curveCC.map(d => d.x))]) // input
                .range([props.margin.left, dim[0] - props.margin.right])
            var yScaleCC = d3.scaleLinear()
                .domain([Math.min(...curveCC.map(d => d.y)), Math.max(...curveCC.map(d => d.y))]) // input 
                .range([dim[1] - props.margin.top, props.margin.bottom]);

            // line generator
            const plotlineLC = d3.line()
                .curve(d3.curveMonotoneX) // apply smoothing to the line
                .x(function(d) { return xScaleLC(d.x); }) // set the x values for the line generator
                .y(function(d) { return yScaleLC(d.y); }); // set the y values for the line generator 
                
            const plotlineCC = d3.line()
                .curve(d3.curveMonotoneX) // apply smoothing to the line
                .x(function(d) { return xScaleCC(d.x); }) // set the x values for the line generator
                .y(function(d) { return yScaleCC(d.y); }); // set the y values for the line generator 

            //var svg = d3.select('.viz').append("svg").attr('height', h+10).attr('width', w).append("g")

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
                .attr("width", 0);
            
            // set state to 0
            set(0);
            // set interval
            interv = setInterval(() => set(state => (state + 1) % tF.length), 3000);
            var var10 = setTimeout( () => {clearInterval( interv ); interv = 0;}, 24000);

            //var console2 = setInterval(function(){console.log('interv:',interv)},3000);

            // var array = [];
            // [draw:0, graphique:500, xAxisTitle:5000, xAxisLabels:3000, barsLC:3000, lineCC:3000, barsCC6000, toCC:1500]
            // set timeouts
            var var1 = setTimeout(draw2.bind(null, props, svg, array), 0);
            var var2 = setTimeout(graphique2.bind(null, svg, dim[0], dim[1], props), 500);
            var var3 = setTimeout(xAxisTitle2.bind(null, svg, dim[0], dim[1], props), 2000); 
            var var4 = setTimeout(xAxisLabels2.bind(null, svg, dim[0], dim[1], props), 4000);
            var var5 = setTimeout(drawDotBars.bind(null, svg, dim[0], dim[1], barLC, props), 5000);
            var var6 = setTimeout(barsLC2.bind(null, svg, dim[0], dim[1], barLC, props), 6000);
            var var7 = setTimeout(lineLC2.bind(null, svg, dim[0], dim[1], line, props), 7000);
            var var8 = setTimeout(barsCC2.bind(null, svg, dim[0], dim[1], barLC, props), 21000);
            var var9 = setTimeout(toCC2.bind(null, svg, dim[0], dim[1], line, props), 21000);

            /*
            const tF = [
                { id: 0, text:'Traçons un graphique' }, 0
                { id: 1, text:'avec vos objectifs (revenus) en fonction du temps (cycles)' }, 3
                { id: 2, text:'traçons maintenant la courbe de cycle de vie' }, 6
                { id: 3, text:'avec des points pour chaque cycle' }, 9
                { id: 4, text:'certains disent que nul n\'y échappe' }, 12
                { id: 5, text:'par contre en observant attentivement les données' }, 15
                { id: 6, text:'et en appliquant des méthodes rigoureuses' }, 18
                { id: 7, text:'on peut certainement arriver à la redresser' }, 21
                { id: 8, text:'et remettre votre entreprise sur la voie du succès' }, 24
            ];
            */
            
            setScriptArray(props.language === true ? tF : tE);

            return function cleanup() {
                set(0);
                console.log("running clearing ...")
                clearTimeout(var1);
                clearTimeout(var2);
                clearTimeout(var3);
                clearTimeout(var4);
                clearTimeout(var5);
                clearTimeout(var6);
                clearTimeout(var7);
                clearTimeout(var8);
                clearTimeout(var9);
                clearTimeout(var10);
                clearInterval( interv );
                interv = 0;
                d3.select('.viz > *').remove();
            };
        }

    }, [props.language]);

    const transitions = useTransition(scriptArray[index], item => item.id, {
        from: { opacity: 0,  transform:"translate(0px, 20px)" },
        enter: { opacity: 1, transform:"translate(0, 0)" },
        leave: { opacity: 0, transform:"translate(0px, -20px)" },
        config: config.molasses,
    })
    
    const handleClick = () => {
        /*d3.select('.viz > * > * > * > *').remove();
        d3.select('.viz > * > * > *').remove();
        d3.select('.viz > * > *').remove(); 
        d3.select('.viz > *').remove(); 
        //svg = null;
        //draw(props,array);*/
    }

    return (
        <div className='cycles-page'>
            <div style={{ 
                cursor: 'pointer',
                borderRadius: 10, 
                boxSizing: 'border-box',
                backgroundColor: 'transparent',
                padding: 0,
                color: 'rgba(25, 29, 34, 0.54)',
                overflow: 'hidden'}} 
                    onClick={() => {
                        console.log('onClick');
                        //set2(state => !state)
                    }}>
                <div style={{ position: 'relative', height: 100, padding: '0 0 10px 0' }}>
                    <div className="bg" style={{ display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#8f3d3dee', position:'relative' }}>
                            { // transitions textSlides
                                transitions.map(({ item, props, key }) => (
                                    <animated.div
                                        key={key}
                                        //style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`,
                                        //    display:'flex', alignItems:'center', justifyContent:'center' }}
                                        //style={{ ...props, backgroundImage: `url(https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)`,
                                        //    display:'flex', alignItems:'center', justifyContent:'center' }}
                                        //style={{ ...props, backgroundImage: `url(https://images.unsplash.com/photo-1418232885776-9ddbfbf9cff0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)`,
                                        //    display:'flex', alignItems:'center', justifyContent:'center' }}
                                        style={{ ...props, position: 'absolute' }}
                                        //
                                        >
                                        <div style={{fontSize:'3vmin',color:'white',padding:10,backgroundColor:'rgba(0,0,0,0.4)'}}>{item.text}</div>
                                    </animated.div>
                                ))
                            }
                    </div>
                    <button style={{fontSize:'2vmin',color:'#8f3d3dee',backgroundColor:'white',position:'absolute',right:3,bottom:3,border:"0px solid black",borderRadius:"5px",padding:"10px"}}
                        onClick={handleClick} diaabled>{props.language ? "jouer" : "play"}</button>
                </div>
                <div className="viz" style={{ padding: '0 0 10px 0',backgroundColor: 'rgba(255,255,255,0.95)', }}>
                </div>
            </div>
        </div>
    )
}

function graphique2(svg,w,h,props) {

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

    //setTimeout(xAxisTitle,array[1])
}

function xAxisTitle2(svg,w,h,props) {

    // x axis title
    svg.append("g")
        .append('text')
        .attr("fill", "#000")
        .attr("transform", "translate("+(w-props.margin.right)+","+(h+100)+")")
        .transition()
        .duration(750)
        .attr("transform", "translate("+(w-props.margin.right)+","+(h+5)+")")
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .text("cycles");

    // y axis title
    svg.append("g")
        .append("text")
        .attr("fill", "#666")
        //.attr("transform", "translate(-100,"+(h/3)+") rotate(-90)")
        .attr("transform", "translate(55,-100)")
        .transition()
        .delay(1500)
        .duration(750)
        //.attr("transform", "translate(0,"+(h/3)+") rotate(-90)")
        .attr("transform", "translate(55,15)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .text(props.language ? "revenus" : "revenues");
}

function xAxisLabels2(svg,w,h,props) {

    // scales x,y
    var xScaleDotsLC = d3.scaleLinear()
        .domain([Math.min(...dotsLC.map(d => d.x)), Math.max(...dotsLC.map(d => d.x))]) // input
        .range([props.margin.left, w - props.margin.right])
    var yScaleDotsLC = d3.scaleLinear()
        .domain([Math.min(...dotsLC.map(d => d.y)), Math.max(...dotsLC.map(d => d.y))]) // input 
        .range([h - props.margin.top, props.margin.bottom]);

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
            .text(function(d) {return props.language ? d.nom : d.name;})
            .style("opacity",1)
}

function drawDotBars(svg,w,h,barLC,props) {

    let dotsLC2 = [...new Set(curveLC2.filter(i => i.x%10===0))];

    var xScaleLC2 = d3.scaleLinear()
        .domain([Math.min(...curveLC.map(d => d.x)), Math.max(...curveLC.map(d => d.x))]) // input
        .range([props.margin.left, w - props.margin.right])
    var yScaleLC2 = d3.scaleLinear()
        .domain([Math.min(...curveLC.map(d => d.y)), Math.max(...curveLC.map(d => d.y))]) // input 
        .range([h - props.margin.top, props.margin.bottom]);

    var xScaleDotsLC = d3.scaleLinear()
        .domain([Math.min(...dotsLC.map(d => d.x)), Math.max(...dotsLC.map(d => d.x))]) // input
        .range([props.margin.left, w - props.margin.right])
    var yScaleDotsLC = d3.scaleLinear()
        .domain([Math.min(...dotsLC.map(d => d.y)), Math.max(...dotsLC.map(d => d.y))]) // input 
        .range([h - props.margin.top, props.margin.bottom]);

    d3.selectAll("rect")
        .data(dotsLC)
        .transition(1500).delay(0)
        .attr("x", function (d) { return xScaleDotsLC(d.x)-5; })
        .attr("y", function (d) { return yScaleDotsLC(d.y); })
        .attr("width", 10)
        .attr("height", 0)
        .transition().duration(1200)
        .attr("height", function (d) { return h - yScaleDotsLC(d.y) - 45; })
        .attr("fill", function(d,i) { return  color((i)); });

    var rects = d3.selectAll("rect").data(curveLC2);

    rects.exit().remove();

    d3.selectAll("rect")
        .data(curveLC2)
        .transition(1500).delay(1500)
        .attr("x", function (d) {return xScaleLC2(d.x); })
        .attr("y", function (d) {return yScaleLC2(d.y); })
        .attr("width", 5)
        .attr("height", 0)
        .transition().duration(1200)
        .attr("height", function (d) { return h - yScaleLC2(d.y) - 45; })
        .attr("fill", function(d,i) { return  colors[i]; });

}

function barsLC2(svg,w,h,barLC,props) {

    var xScaleLC = d3.scaleLinear()
        .domain([Math.min(...curveLC.map(d => d.x)), Math.max(...curveLC.map(d => d.x))]) // input
        .range([props.margin.left, w - props.margin.right])
    var yScaleLC = d3.scaleLinear()
        .domain([Math.min(...curveLC.map(d => d.y)), Math.max(...curveLC.map(d => d.y))]) // input 
        .range([h - props.margin.top, props.margin.bottom]);

    var xScaleDotsLC = d3.scaleLinear()
        .domain([Math.min(...dotsLC.map(d => d.x)), Math.max(...dotsLC.map(d => d.x))]) // input
        .range([props.margin.left, w - props.margin.right])
    var yScaleDotsLC = d3.scaleLinear()
        .domain([Math.min(...dotsLC.map(d => d.y)), Math.max(...dotsLC.map(d => d.y))]) // input 
        .range([h - props.margin.top, props.margin.bottom]);

    //d3.selectAll("rect").data(dotsLC).exit();

    /*d3.selectAll("rect")
        .data(curveLC) // lifecycle curve
        .exit().remove()
        .enter().append("rect")
        .transition().duration(1200).delay(function(d,i) { return i * 10 })
        .attr("x", function (d) { return xScaleLC(d.x)-5; })
        .attr("y", function (d) { return yScaleLC(d.y); })
        .attr("width", 1)
        .attr("height", 0)
        .transition().duration(1200).delay(1200)
        .attr("height", function (d) { return h - yScaleLC(d.y) - 45; })
        .attr("fill", function(d,i) { return  color((i)); })
        .attr("opacity",1);*/
}

function lineLC2(svg,w,h,line,props) {

    var xScaleDotsLC = d3.scaleLinear()
        .domain([Math.min(...dotsLC.map(d => d.x)), Math.max(...dotsLC.map(d => d.x))]) // input
        .range([props.margin.left, w - props.margin.right])
    var yScaleDotsLC = d3.scaleLinear()
        .domain([Math.min(...dotsLC.map(d => d.y)), Math.max(...dotsLC.map(d => d.y))]) // input 
        .range([h - props.margin.top, props.margin.bottom]);

    var xScaleLC = d3.scaleLinear()
        .domain([Math.min(...curveLC.map(d => d.x)), Math.max(...curveLC.map(d => d.x))]) // input
        .range([props.margin.left, w - props.margin.right])
    var yScaleLC = d3.scaleLinear()
        .domain([Math.min(...curveLC.map(d => d.y)), Math.max(...curveLC.map(d => d.y))]) // input 
        .range([h - props.margin.top, props.margin.bottom]);

    // line generator
    const plotlineLC = d3.line()
        .curve(d3.curveMonotoneX) // apply smoothing to the line
        .x(function(d) { return xScaleLC(d.x); }) // set the x values for the line generator
        .y(function(d) { return yScaleLC(d.y); }) // set the y values for the line generator 

    line.datum(curveLC)
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

    //setTimeout(barsCC, array[5]);  
}

function barsCC2(svg,w,h,barLC,props) {

    var xScaleCC = d3.scaleLinear()
        .domain([Math.min(...curveCC.map(d => d.x)), Math.max(...curveCC.map(d => d.x))]) // input
        .range([props.margin.left, w - props.margin.right])
    var yScaleCC = d3.scaleLinear()
        .domain([Math.min(...curveCC.map(d => d.y)), Math.max(...curveCC.map(d => d.y))]) // input 
        .range([h - props.margin.top, props.margin.bottom]);

    //barLC
    d3.selectAll("rect")
        .data(curveCC2)
        .transition()
        .duration(500)
        .delay(function(d,i) { return i * 10 })
        .attr("x", function (d,i) { if ((i%1)===0) {return xScaleCC(d.x);} })
        .attr("y", function (d) { return yScaleCC(d.y); })
        .attr("width", 6)
        .attr("height", function (d) { return h - yScaleCC(d.y) - 45; })
        .attr("fill", function(d,i) { return colors[i]; });
}

function toCC2(svg,w,h,line,props) {

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

}

function draw2(props,svg,array) {

    const w = props.width-props.margin.right-props.margin.left;
    const h = props.height-props.margin.top-props.margin.bottom;

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
        
    /*const plotlineCC = d3.line()
        .curve(d3.curveMonotoneX) // apply smoothing to the line
        .x(function(d) { return xScaleCC(d.x); }) // set the x values for the line generator
        .y(function(d) { return yScaleCC(d.y); }) // set the y values for the line generator */

    //var svg = d3.select('.viz').append("svg").attr('height', h+10).attr('width', w).append("g")

    /*var line = svg.append("path")
        .datum(curveLC) // 10. Binds data to the line 
        .attr("class", "lineTest") // Assign a class for styling 
        .style("stroke", "red")
        .attr("d", plotlineLC) // 11. Calls the line generator
        .style("fill", "none")
        .style("stroke-width", "2px")
        .style("stroke-linecap","round")
        .style("opacity", 0);*/

    /*var barLC = svg.selectAll("bar")
        .data(curveLC)
        .enter().append("rect")
        .attr("x", function (d) { return xScaleLC(d.x); })
        .attr("y", function (d) { return yScaleLC(d.y); })
        .attr("width", 0)*/
        
    // circles
    svg.append("g")
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

    // rects (bars)
    svg.append("g")
        .selectAll(".square")
        .data(dotsLC) // lifecycle curve
        .enter().append("rect")
        .attr("class", "square")
        .attr("x", function (d) { return xScaleDotsLC(d.x)-2; })
        .attr("y", function (d) { return yScaleDotsLC(d.y); })
        .attr("width", 1)
        .attr("height", function (d) { return h - yScaleDotsLC(d.y) - 45; })
        .attr("fill", function(d,i) { return color((i)); })
        .attr("opacity", 0);

}

           
export default Cycles;