import React, { useState, useEffect, useRef } from 'react';
//import { render } from 'react-dom';
//import { AreaClosed } from '@vx/shape';
import { LinePath } from '@vx/shape';
import { Group } from '@vx/group';
import { GlyphDot } from '@vx/glyph';
//import { ParentSize } from '@vx/responsive'
import { curveNatural } from '@vx/curve';
import { useSpring, useTransition, animated } from 'react-spring';
import { scaleLinear } from '@vx/scale';
import { range } from 'd3-array';
import { select } from 'd3-selection';
import { interpolate } from 'flubber';

import './trail.css'

    const textSlides = [
        { id: 0, url: 'photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', text:'Bonjour' },
        { id: 1, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80', text:'voici la courbe de vie de votre entreprise' },
        { id: 2, url: 'photo-1495870043034-74e1a009f631?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60', text:'certains disent que nul n\'y échappe' },
        { id: 3, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80', text:'par contre en observant attentivement les données' },
        { id: 4, url: 'photo-1483104879057-379b6c2fe5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', text:'et en appliquant des méthodes rigoureuses' },
        { id: 5, url: 'photo-1507149677524-254e3ebb240f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', text:'on peut arriver à la redresser' },
        { id: 6, url: 'photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', text:'et la transformer en crourbe de croissance' },
        { id: 7, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80', text:'comme ceci' },
        { id: 8, url: 'photo-1444927714506-8492d94b4e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', text:'ou comme cela' },
    ]

    /* DOTS */
    const items = [
        {x:3*Math.PI/3,y:Math.cos(3*Math.PI/3),name:'E1'}, 
        {x:4*Math.PI/3,y:Math.cos(4*Math.PI/3),name:'E3'}, 
        {x:5*Math.PI/3,y:Math.cos(5*Math.PI/3),name:'E3'}, 
        {x:6*Math.PI/3,y:Math.cos(6*Math.PI/3),name:'E4'}, 
        {x:7*Math.PI/3,y:Math.cos(7*Math.PI/3),name:'E5'}
    ];
    // scales 
    const xScale = scaleLinear({
        domain: [Math.min(...items.map(d => d.x)), Math.max(...items.map(d => d.x))],
    });
    const yScale = scaleLinear({
        domain: [-1,1],
    });

    /* LC / LifeCircle */
    // accessors LifeCircle
    const xc = d => d.xc;
    const yc = d => d.yc;
    const itemsLC = range(3*Math.PI/3,7*Math.PI/3,1/240).map(function(i){ return {
        xc: i,
        yc: Math.cos( i )
    }});
    // scales LC
    const xScaleLC = scaleLinear({
        domain: [Math.min(...itemsLC.map(d => d.xc)), Math.max(...itemsLC.map(d => d.xc))]
    });
    const yScaleLC = scaleLinear({
        domain: [-1,1]
    });
    // cycle de vie
    const cx = d => xScaleLC(xc(d));
    const cy = d => yScaleLC(yc(d));

    /* CC / Courbe Croissance */
    // accessors LifeCircle
    const xcc = d => d.xcc;
    const ycc = d => d.ycc;
    const itemsCC = range(0,240).map(function(i){ return {
        xcc: i,
        ycc: Math.pow(i/240,2)
    }});
    // scales CC
    const xScaleCC = scaleLinear({
        domain: [Math.min(...itemsCC.map(xcc)), Math.max(...itemsCC.map(xcc))]
    });
    const yScaleCC = scaleLinear({
        domain: [0,1]
    });
    // croissance
    const ccx = d => xScaleCC(xcc(d));
    const ccy = d => yScaleCC(ycc(d));

  // accessors
  /*const x = d => d.x;
  const y = d => d.y;
  // positions
  const posx = d => xScale(x(d));
  const posy = d => yScale(y(d));*/

    // config
    const config = { mass: 5, tension: 2000, friction: 200 }
    // colors
    const primary = '#8921e0';
    const secondary = '#87e498';
    const contrast = '#000000';
    const bg = '#dcedc8';
    const line = '#1a237e';

export default ( { width, height, margin } ) => {

    // hooks
    const [toggle, set] = useState(true)
    const [index, setIndex] = useState(0)
    const {opacity} = useSpring({opacity: toggle ? 1 : 0})

    // ref hooks
    const lcRef = useRef(null);
    const ccRef = useRef(null);

    // react-spring hooks
    const transitions = useTransition(textSlides[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    })
    // effects hooks
    useEffect(() => void setInterval(() => setIndex(state => (state + 1) % 9), 2000), [])
    
    // bounds
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    // update scale range to match bounds
    xScale.range([margin.left, xMax]);
    xScaleLC.range([margin.left, xMax-margin.right]);
    xScaleCC.range([margin.left, xMax-margin.right]);
    yScale.range([yMax-30, 20]);
    yScaleLC.range([yMax-30, 20]);
    yScaleCC.range([yMax-30, 20]);

    // functions
    function print (text) {
      console.log(text);
    }

    // interpolators
    const interpolators = [];
    function intrpolate () {
      var interpolator = intrpolate(lcRef,ccRef,{maxSegmentLength:0.1});
      interpolators.push(interpolator);
      select("path")
        .transition()
        .attrTween("d", function(){ return interpolator });
    }

    return (
    <div style={{ cursor: 'pointer',
      borderRadius: 6, boxSizing: 'border-box',
      boxShadow: '0 2px 4px 0 rgba(25, 29, 34, 0.1)',
      backgroundColor: 'white',
      padding: '20px 20px 20px 20px',
      color: 'rgba(25, 29, 34, 0.54)',
      overflow: 'hidden'}} 
      >

        <div style={{ position: 'relative', height: 100, padding: '0 0 10px 0' }}>
        
            {/* // transitions textSlides
              transitions.map(({ item, props, key }) => (
                    <animated.div
                        key={key}
                        className="bg"
                        style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`,
                            display:'flex', alignItems:'center', justifyContent:'center' }}
                    >
                        <div style={{fontSize:'20px',color:'white',padding:5,backgroundColor:'rgba(0,0,0,0.4)'}}>{item.text}</div>
                    </animated.div>
              ))
              */}

        </div>

        <svg width={width} height={height} onClick={() => set(state => !state)}>
          <rect width={width} height={height} fill={bg} rx={3} />
          <Group top={margin.top}>
            {/* LinePath for LC 
            <AreaClosed className='cycledevie'
                data={itemsLC}
                //xScale={xScaleLC}
                yScale={yScaleLC}
                //x={xc}
                //y={yc}
                x={cx}
                y={cy}
                stroke={line}
                fill={'transparent'}
                strokeWidth={5}
                curve={curveNatural}
            /> */}
            {/* LinePath for LC */}
            <LinePath className='cycledevie'
                data={itemsLC}
                x={cx}
                y={cy}
                stroke={line}
                //fill={'black'}
                strokeWidth={5}
                curve={curveNatural}
                innerRef={lcRef}
            /> 
            <LinePath //className='cycledevie'
                data={itemsCC}
                x={ccx}
                y={ccy}
                stroke={line}
                //fill={'black'}
                strokeWidth={5}
                curve={curveNatural}
                innerRef={ccRef}
            /> 
            {/* DOTS */}
            <animated.g style={{opacity: opacity.interpolate(o => 1 - o)}}>
              {items.map((d, i) => {
                const dotx = xScaleLC(d.x);
                const doty = yScaleLC(d.y);
                return (
                  <g key={`line-point-${i}`}>
                    <GlyphDot cx={dotx} cy={doty} r={6} fill={contrast} stroke={secondary} strokeWidth={10} />
                    <GlyphDot cx={dotx} cy={doty} r={6} fill={secondary} stroke={primary} strokeWidth={3} />
                    <GlyphDot cx={dotx} cy={doty} r={4} fill={contrast} />
                  </g>
                );
              })}
            </animated.g>
          </Group>
          {/* AXIS */}
          {items.map((d, i) => { 
              return (
                <text key={i} x={xScaleLC(d.x)} y={height-10} fill="black" textAnchor={"middle"} fontSize={16} dx={'-0.0em'}>
                  {d.name}
                </text>
              )
          })}
        </svg>
        <div style={{display:'flex'}}>
          
            <button style={{flexGrow:1,margin:'5px 5px 0 0px',padding:5,border:'none',backgroungColor:'rgba(0,0,0,0.4)'}}
              onClick={()=>print( lcRef.current.getTotalLength() )}>lcRef</button>
            <button style={{flexGrow:1,margin:'5px 5px 0 5px',padding:5,border:'none',backgroungColor:'rgba(0,0,0,0.4)'}}
              onClick={()=>console.log( 'ccRef', ccRef.current.getTotalLength() )}>ccRef</button>
            <button style={{flexGrow:1,margin:'5px 5px 0 5px',padding:5,border:'none',backgroungColor:'rgba(0,0,0,0.4)'}}>
              onClick={()=>intrpolate( lcRef.current.getTotalLength() )}>intrpolate LC -> CC</button>
            <button style={{flexGrow:1,margin:'5px 5px 0 5px',padding:5,border:'none',backgroungColor:'rgba(0,0,0,0.4)'}}>D</button>
            <button style={{flexGrow:1,margin:'5px 0px 0 5px',padding:5,border:'none',backgroungColor:'rgba(0,0,0,0.4)'}}>E</button>

        </div>
    </div>
  )
}