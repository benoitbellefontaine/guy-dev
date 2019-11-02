//APP
import React, {useState, useEffect} from 'react';
import useRouter from './useRouter';
import { useTransition, animated } from 'react-spring';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import { Drawer, Icon } from 'antd';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icons from './icons';

// sections
import Main from './main';
import Cycles from './cycles';
import Tree from './tree';
import data from './tree/data';
import Header from './three/header';
import Recaptcha from './recaptcha';
import Contact from './contact';


function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener("resize", handleResize);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // <-- empty array
  return width;
}

function App() {

  const { location } = useRouter()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(0%,0%,0)', width: '100%', height: '100%', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)', overflow: 'hidden', width: '100%', height: '100%' },
    leave: { opacity: 0, transform: 'translate3d(0%,0%,0)', overflow: 'hidden', width: '100%', height: '100%' },
  })

  const margin = { top:50,right:75,bottom:50,left:75 };  
  const size = useWindowSize();
 
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(true);

  const changeColor = (event) => {
    var parent = event.target.parentElement;
    console.log("parent :",parent.childNodes.length);
    [].forEach.call(parent.childNodes, function(child) {
      console.log("child :",child);
      child.style.background = "#F5F5F5";
      child.style.boxShadow = "none";
    });
    console.log(event.target);
    event.target.style.background = "white";
    event.target.style.boxShadow = "2px 2px 10px 2px rgba(230,230,230,1), -2px -2px 10px 2px rgba(230,230,230,1)";
  }

  const handleClick = (event) => {
    var anchors = document.getElementById("anchors");
    [].forEach.call(anchors.childNodes, function(child) {
      console.log("child :",child);
      child.style.background = "#F5F5F5";
      child.style.boxShadow = "none";
    });
    /*console.log("parent :",parent.childNodes.length);
    [].forEach.call(parent.childNodes, function(child) {
      console.log("child :",child);
      child.style.background = "#F5F5F5";
      child.style.boxShadow = "none";
    });
    console.log(event.target);
    event.target.style.background = "white";
    event.target.style.boxShadow = "2px 2px 10px 2px rgba(230,230,230,1), -2px -2px 10px 2px rgba(230,230,230,1)";*/
  }

  return (

    <div className="App" style={{overflowX:'hidden'}}>

      <header className="App-header" 
        style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',justifyContent:'space-between'}}>
        
        <div className="buttons">
          <button className="center" onClick={handleClick}><Link style={{color:'#888888',textDecoration:'none',zIndex:1}} to='/main'>ACME</Link></button>
        </div>

        <div id="anchors" style={{display:'flex'}}>
          <Link to='/cycles' onClick={changeColor}><i className="fas fa-bicycle fa-lg" style={{margin:'0 5px 0 0'}}></i> { language ? 'Cycles' : 'Lifecycles' } </Link>
          <Link to='/tree' onClick={changeColor}><i className="fas fa-cogs fa-lg" style={{margin:'0 5px 0 0'}}></i> Services</Link>
          <Link to='/contact' onClick={changeColor}><i className="fas fa-phone fa-lg" style={{margin:'0 5px 0 0'}}></i> Contact</Link>
          <div onClick={()=>setLanguage(state=>!state)}>{ (language) ? 'Fr' : 'En' }</div>
        </div>
        
      </header>

      {/*<nav className="App-menubar">
        <Icon type="menu-fold" style={{outline:"none"}} onClick={ ()=>{setOpen(state=>(!state))} }/>
      </nav>*/}

      <section className="">
        
        {/*<Showcase />*/}
        {/*<Header />*/}
        {/*<Tree items={data} />{/*
        {/*<Controller width={size.width*70/100} height={size.height*70/100} margin={margin} />*/}

        <div className="simple-trans-main" style={{boxShadow:'1px 2px 10px 0px rgba(0,0,0,0.75)'}}>
          {transitions.map(({ item, props, key }) => (
            <animated.div key={key} style={props}>
              <Switch location={item}>
                <Route path="/" exact render={(props) => <Main {...props} language={language}
                  width={size.width} height={size.height} />}/>
                <Route path="/showcase" render={(props) => <Header {...props}
                  width={size.width} height={size.height} />}/>
                <Route path="/main" render={(props) => <Main {...props} language={language}
                  width={size.width} height={size.height} />}/>
                <Route path="/three" render={(props) => <Header {...props}
                  width={size.width} height={size.height} />}/>
                <Route path="/contact" render={(props) => <Contact {...props}
                  width={size.width*80/100} height={size.height*80/100} />}/>
                <Route path="/tree" render={(props) => <Tree items={data} {...props} 
                  width={size.width*80/100} height={size.height*70/100} margin={margin} />}/>
                <Route path="/cycles" render={(props) => <Cycles {...props} language={language}
                    width={size.width*100/100} height={size.height*70/100} margin={margin} />}/>
                <Route path="/recaptcha" render={(props) => <Recaptcha {...props} 
                    width={size.width*70/100} height={size.height*70/100} margin={margin} />}/>
              </Switch>
            </animated.div>
          ))}
        </div>

      </section>

      <div className={open ? "menu menu-open" : "menu menu-close"}>
        <div style={{height:'inherit',width:'100%',padding:'20px',borderLeft:'1px solid lightgray',boxSizing:'border-box'}}>
          <Icon type="menu-unfold" style={{marginTop:'20px'}} onClick={ ()=>{setOpen(state=>(false))} } />
          <div style={{marginTop:'20px',textAlign:'center'}}>
            HELLO
          </div>
          <div style={{margin:'20px',fontSize:'calc(10px + 0.25vmin)'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  );
}

// Hook
function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }
    
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export default App;