import React, {useState, useCallback} from 'react';
import { useTransition, animated } from 'react-spring';
import './qa.css';

import Secteurs from './secteurs.js';
import Cycles from './cycles.js';
import Qualites from './qualites.js';
import Chiffres from './chiffres.js';
import Defis from './defis.js';

const pages = [
    ({ style, onClick }) => 
        <animated.div className="question-box" style={{ ...style,backgroundColor:'rgba(255,127,14,0.5)'}}>
            <Secteurs />
        </animated.div>,
    ({ style, onClick }) => 
        <animated.div className="question-box" style={{ ...style, backgroundColor:'rgba(64,160,64,0.5)' }}>
            <Cycles />
        </animated.div>,
    ({ style, onClick }) => 
        <animated.div className="question-box" style={{ ...style, backgroundColor:'rgba(214,69,70,0.5)' }}>
             <Qualites />
        </animated.div>,
    ({ style, onClick }) => 
        <animated.div className="question-box" style={{ ...style, backgroundColor:'rgba(148,103,189,0.5)' }}>
             <Chiffres />
        </animated.div>,
    ({ style, onClick }) => 
        <animated.div className="question-box" style={{ ...style, backgroundColor:'rgba(140,86,75,0.5)' }}>
             <Defis />
        </animated.div>,
  ]

const colors = [
    'rgba(255,127,14,0.5)',
    'rgba(64,160,64,0.5)',
    'rgba(214,69,70,0.5)',
    'rgba(148,103,189,0.5)',
    'rgba(140,86,75,0.5)'
]

export default () => {

    const [index, set] = useState(0)
    const onClick = useCallback(() => set(state => (state + 1) % 5), [])

    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })

    return (
        <div style={{height:'60vh'}}>
            <div style={{position:'relative',width:'80vw',height:'100%'}}>
                <div style={{position:'relative',height:'100%'}}>
                    {transitions.map(({ item, props, key }) => {
                        const Page = pages[item]
                        return <Page key={key} style={props} />
                    })}
                </div>
            </div>
            <div style={{position:'relative',width:'80vw',display:'flex',justifyContent:'space-between'}}>
                <div className="question-count" style={{backgroundColor:colors[index]}}>Q {index+1} / {pages.length}</div>
                <div className="button-next" style={{backgroundColor:colors[index]}} onClick={onClick}>Next</div>
            </div>
        </div>
    );
}

//export default qa;
