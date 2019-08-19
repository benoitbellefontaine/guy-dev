import React, {useState, useCallback} from 'react';
import { useTransition, animated } from 'react-spring';
import './qa.css';

import Secteur from './secteurs.js';

const pages = [
    ({ style }) => <animated.div style={{ ...style, background: 'lightpink'  }}>A</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightblue'  }}>B</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
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
        <div style={{position:'relative',width:'80vw',height:'60vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div className="qa" onClick={onClick}>
                {transitions.map(({ item, props, key }) => {
                    const Page = pages[item]
                    return <Page key={key} style={props} />
                })}
            </div>
        </div>
    );
}

//export default qa;