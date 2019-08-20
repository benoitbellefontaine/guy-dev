import React, {useState, useCallback} from 'react';
import { useTransition, animated } from 'react-spring';
import './qa.css';

import Cycles from './cycles.js';
import Secteurs from './secteurs.js';

const pages = [
    ({ style,onClick }) => 
        <animated.div style={{ ...style, padding:20, border: '1px solid lightpink', backgroundColor:'lightpink',display:'flex',flexDirection:'column' }}>
            <Secteurs />
        </animated.div>,
    ({ style,onClick }) => 
        <animated.div style={{ ...style, border: '1px solid lightblue', backgroundColor:'lightblue',display:'flex',flexDirection:'column' }}>
            <Cycles />
        </animated.div>,
    ({ style,onClick }) => 
        <animated.div style={{ ...style, padding:20, border: '1px solid lightblue', backgroundColor:'lightgreen',display:'flex',flexDirection:'column' }}>
            <Cycles />
        </animated.div>,
  ]

export default () => {

    const [index, set] = useState(0)
    const onClick = useCallback(() => set(state => (state + 1) % 3), [])

    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })

    return (
        <div>
            <div style={{position:'relative',width:'80vw',height:'60vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div className="qa" style={{overflow:'auto',height:'50vh'}}>
                    {transitions.map(({ item, props, key }) => {
                        const Page = pages[item]
                        return <Page key={key} style={props} onClick={onClick} />
                    })}
                </div>
            </div>
            <div style={{position:'relative',width:'80vw'}}>
                <button className="buttonNext bouncy" style={{position:'absolute',right:'0px'}} onClick={onClick}>NEXT</button>
            </div>
        </div>
    );
}

//export default qa;