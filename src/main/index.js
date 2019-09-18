import React, { useState } from 'react';
import { useTrail, useSpring, animated } from 'react-spring';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import './styles-main.css';

//const letters = ['C','P','O'];
const letters = [
  {letter:'C',key:1, color:'#8f3d3d'},
  {letter:'P',key:2, color:'#45c8d9'},
  {letter:'O',key:3, color:'#3da300'},
];

// [...'POUR­ UN­ SERVICE­ IMPECCABLE­ !'];
const mottoF = [
  {letter:'P',key:1, color:'#574826'},
  {letter:'O',key:2, color:'#48df31'},
  {letter:'U',key:3, color:'#8f3d3d'},
  {letter:'R',key:4, color:'#45c8d9'},
  {letter:' ',key:5, color:'#3da300'},
  {letter:'U',key:6, color:'#f8e468'},
  {letter:'N',key:7, color:'#574826'},
  {letter:' ',key:8, color:'#3da300'},
  {letter:'S',key:9, color:'#f8e468'},
  {letter:'E',key:10, color:'#574826'},
  {letter:'R',key:11, color:'#48df31'},
  {letter:'V',key:12, color:'#8f3d3d'},
  {letter:'I',key:13, color:'#45c8d9'},
  {letter:'C',key:14, color:'#3da300'},
  {letter:'E',key:15, color:'#f8e468'},
  {letter:' ',key:16, color:'#3da300'},
  {letter:'I',key:17, color:'#f8e468'},
  {letter:'M',key:18, color:'#3da300'},
  {letter:'P',key:19, color:'#f8e468'},
  {letter:'E',key:20, color:'#f8e468'},
  {letter:'C',key:21, color:'#574826'},
  {letter:'C',key:22, color:'#48df31'},
  {letter:'A',key:23, color:'#8f3d3d'},
  {letter:'B',key:24, color:'#45c8d9'},
  {letter:'L',key:25, color:'#3da300'},
  {letter:'E',key:26, color:'#f8e468'},
  {letter:' ',key:27, color:'#3da300'},
  {letter:'!',key:28, color:'#f8e468'},
];

// [...'FOR­\u2063A­\u2063BETTER­\u2063SERVICE­\u2063!'];
const mottoE = [
  {letter:'F',key:1, color:'#574826'},
  {letter:'O',key:2, color:'#48df31'},
  {letter:'R',key:3, color:'#8f3d3d'},
  {letter:' ',key:4, color:'#45c8d9'},
  {letter:'A',key:5, color:'#3da300'},
  {letter:' ',key:6, color:'#f8e468'},
  {letter:'B',key:7, color:'#574826'},
  {letter:'E',key:8, color:'#3da300'},
  {letter:'T',key:9, color:'#f8e468'},
  {letter:'T',key:10, color:'#574826'},
  {letter:'E',key:11, color:'#48df31'},
  {letter:'R',key:12, color:'#8f3d3d'},
  {letter:' ',key:13, color:'#45c8d9'},
  {letter:'S',key:14, color:'#3da300'},
  {letter:'E',key:15, color:'#f8e468'},
  {letter:'R',key:16, color:'#3da300'},
  {letter:'V',key:17, color:'#f8e468'},
  {letter:'I',key:18, color:'#3da300'},
  {letter:'C',key:19, color:'#f8e468'},
  {letter:'E',key:20, color:'#f8e468'},
  {letter:' ',key:21, color:'#574826'},
  {letter:'!',key:22, color:'#48df31'},
];

const item = ['construire et rénover des entreprises']
const config = { mass: 5, tension: 200, friction: 60 }

function App() {

  const [toggle, set] = useState(true)
  const trail = useTrail(letters.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : -20,
    height: toggle ? 130 : 0,
    from: { margin:10, padding:20, opacity: 0, x: -200, height: 0 },
    delay: 600,
    margin: toggle ? 10 : 10,
    padding: toggle ? 20 : 20,
  })

  const trail2 = useTrail(item.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 100 : 0,
    from: { opacity: 0, x: 200, height: 0 },
    delay: 600,
  })

  const props = useSpring({height: toggle ? 130 : 0});

  return (
    <div className="trails-main" onClick={() => set(state => !state)}>
      
            <div className="trails-inner" style={props}>
              {trail.map(({ x, height, margin, padding, ...rest }, index) => (
                  <animated.div className="trails-title" key={letters[index].letter} style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`), 
                      height, margin, padding, color:letters[index].color }}>{letters[index].letter}</animated.div>
              ))}
            </div>
              {trail2.map(({ x, height, ...rest }, index) => (
                  <animated.div className="trails-text" key={item[index]} style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`), 
                      height, color:'black' }}>
                      {item[index]}
                  </animated.div>
              ))}
            <div>
              {trail2.map(({ x, height, ...rest }, index) => (
                <animated.div className="trails-button" key={item[index]} style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`), 
                    height, color:'black' }}>
                    <Link to='/cycles'>comprendre les cycles de vie</Link>
                </animated.div>
              ))}
            </div>
    </div>
  )
}

export default App