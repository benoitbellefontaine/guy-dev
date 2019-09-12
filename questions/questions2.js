import React, {useState, useCallback} from 'react';
import { useTransition, useSpring, animated } from 'react-spring';
import './qa.css';

import Secteurs from './secteurs.js';
import Cycles from './cycles.js';
import Qualites from './qualites.js';
import Chiffres from './chiffres.js';
import Defis from './defis.js';

const pages = [
    ({ style }) => 
        <animated.div className="question-box" style={{ ...style,padding:'20px',backgroundColor:'rgba(255,127,14,0.5)'}}>
            <Secteurs />
        </animated.div>,
    ({ style }) => 
        <animated.div className="question-box" style={{ ...style,padding:'20px',backgroundColor:'rgba(64,160,64,0.5)' }}>
            <Cycles />
        </animated.div>,
    ({ style }) => 
        <animated.div className="question-box" style={{ ...style,padding:'20px',backgroundColor:'rgba(214,69,70,0.5)' }}>
             <Qualites />
        </animated.div>,
    ({ style }) => 
        <animated.div className="question-box" style={{ ...style,padding:'20px',backgroundColor:'rgba(148,103,189,0.5)' }}>
             <Chiffres />
        </animated.div>,
    ({ style }) => 
        <animated.div className="question-box" style={{ ...style,padding:'20px',backgroundColor:'rgba(140,86,75,0.5)' }}>
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
    const [flipped, setf] = useState(false)
    const onForward = useCallback(() => set(state => (state + 1) % 5), [])
    const onBack = useCallback(() => set(state => (state - 1) % 5), [])
    const onRedo = useCallback(() => set(state => (0)), [])
    const onClick = () => {
        console.log('hello');
        set(state => (state + 1) % 5)
        setf(state => !state)
        const Page1 = pages[(index)%5];
        const Page2 = pages[(index+1)%5];
    }

    let Page1 = pages[index];
    let Page2 = pages[index];

    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, /*transform: 'translate3d(100%,0,0)'*/ },
        enter: { opacity: 1, /*transform: 'translate3d(0%,0,0)'*/ },
        leave: { opacity: 0, /*transform: 'translate3d(-50%,0,0)'*/ }
    })

    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
      })

    return (
        <div style={{height:'60vh'}}>
            <div style={{position:'relative',width:'80vw',height:'100%'}}>
                <div style={{position:'relative',height:'100%'}}>
                <div>
                    <Page1 key={0} style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
                    <Page2 key={1} style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
                </div>    
                </div>
            </div>
            <div style={{position:'relative',width:'80vw',display:'flex',justifyContent:'space-between'}}>
                <div className="question-count" style={{backgroundColor:colors[index]}}>Q {index+1} / {pages.length}</div>
                {/*<div className="button-next" style={{backgroundColor:colors[index]}} onClick={onClick}>Next</div>*/}
                <div className="button-next">
                    { ( index > 0 ) &&
                        <span className="qabuttonpane" style={{left:10,backgroundColor:colors[index]}} onClick={onBack}><i className="fas fa-arrow-left"></i></span>
                    }
                    { ( index === 4 )
                        ? <span className="qabuttonpane" style={{left:10,backgroundColor:colors[index]}} onClick={onClick}><i className="fas fa-redo-alt"></i></span>
                        : <span className="qabuttonpane" style={{left:10,backgroundColor:colors[index]}} onClick={onClick}><i className="fas fa-arrow-right"></i></span>
                    }
                </div>
            </div>
        </div>
    );
}

//export default qa;