import React, {useReducer,useState} from 'react';
import { useTransition, animated } from 'react-spring';

function init(initialCount) {
  return {count: initialCount};
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      //if (state.count === (pages.length-1))
        //return {count: state.count};
      return {count: state.count + 1};
    case 'decrement':
      if (state.count === 0)
        return {count: state.count};
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

const pages = [
  ({ style, onClick }) => <animated.div style={{ ...style, display:'flex', height:'100%', width:'100%', fontSize:"20vmin",justifyContent:'center',alignItems:'center'}}>A</animated.div>,
  ({ style, onClick }) => <animated.div style={{ ...style, display:'flex', height:'100%', width:'100%', fontSize:"20vmin",justifyContent:'center',alignItems:'center'}}>B</animated.div>,
  ({ style, onClick }) => <animated.div style={{ ...style, display:'flex', height:'100%', width:'100%', fontSize:"20vmin",justifyContent:'center',alignItems:'center'}}>C</animated.div>,
  ({ style, onClick }) => <animated.div style={{ ...style, display:'flex', height:'100%', width:'100%', fontSize:"20vmin",justifyContent:'center',alignItems:'center'}}>D</animated.div>,
  ({ style, onClick }) => <animated.div style={{ ...style, display:'flex', height:'100%', width:'100%', fontSize:"20vmin",justifyContent:'center',alignItems:'center'}}>E</animated.div>,
  ({ style, onClick }) => <animated.div style={{ ...style, display:'flex', height:'100%', width:'100%', fontSize:"20vmin",justifyContent:'center',alignItems:'center'}}>F</animated.div>,
]

function Counter({initialCount}) {

  const [index, set] = useState(0);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  const onChangeName = event => setName(event.target.value);
  const onChangeAddress = event => setAddress(event.target.value);

  const transitions = useTransition(state.count, p => p, {
    from:   { opacity: 0, transform: 'translate3d(0%,100%,0)' },
    enter:  { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave:  { opacity: 0, transform: 'translate3d(0%,-10%,0)' },
  })

  return ( 
    // 3 cases
    // 1 - 0-pages.length
    // 2 - 
    <>
      {
        (state.count >= 0) && (state.count < pages.length) && <div>
          <div style={{height:'80%',position:'relative',border:'0px solid green'}}>
            {transitions.map(({ item, props, key }) => {
              const Page = pages[item]
              return <Page key={key} style={props}  /> 
            })}
          </div>
          <div>
            Total : {state.count}
            <button style={{margin:10,padding:0,width:'100px',height:'30px',backgroundColor:"firebrick"}} 
              onClick={() => dispatch({type: 'reset', payload: initialCount})}>
              Reset
            </button>
            <button style={{margin:10,padding:0,width:'50px',height:'30px',backgroundColor:"firebrick"}} 
              onClick={() => dispatch({type: 'increment'})}>+</button>
            <button style={{margin:10,padding:0,width:'50px',height:'30px',backgroundColor:"firebrick"}} 
              onClick={() => dispatch({type: 'decrement'})}>-</button>
          </div>
        </div>
      }
      {
        (state.count === pages.length) && <div>Hello</div>
      }
    </>
  );
}

export default Counter;