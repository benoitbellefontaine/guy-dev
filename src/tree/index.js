// Tree.js
import React, {useState} from 'react';
import {useSpring, useTrail, useChain, animated} from 'react-spring';
//import ProcessChildren from './ProcessChildren';

import * as Icons from '../icons';

import './tree.css'

const Tree = (props) => {

    // hooks
    const [node, set] = useState(props.items)
    const [pane, setPane] = useState(false)
    const [currentpane, setCurrentPane] = useState(false)
    const [mainpane, closeMainPane] = useState(false)

    // react spring hooks
    const { size,opacity,...rest } = useSpring({
        opacity: pane ? 0 : 1,
        from: { size: '0%' },
        to: { size: pane ? '50%' : '0%' },
    })

    const { wrapper,iwrapper,fsize,f2size } = useSpring({
        from: { wrapper:'80%', iwrapper:'100%', fsize:'20vmin', f2size:'4vmin' },
        to: { 
            //o: pane ? 1 : 0, 
            wrapper: pane ? '80%' : '80%', 
            iwrapper: pane ? '50%' : '100%', 
            fsize: pane ? '5vmin' : '10vmin',
            f2size: pane ? '2vmin' : '4vmin',
        },
    })

    const { opacitycurrentpane,heightcurrentpane } = useSpring({
        from: { opacitycurrentpane: 1, heightcurrentpane: "0%" },
        to: { 
            opacitycurrentpane: currentpane ? 1 : 0,
            heightcurrentpane: currentpane ? "100%" : "100%",
        },
    });

    const config = { mass: 5, tension: 2000, friction: 200 }
    const trail = useTrail(node.children.length, {
        config,
        opacitytrail: (currentpane && pane) ? 1 : 0,
        xtrail: currentpane ? 0 : 10,
        from: { opacitytrail: 0, xtrail: 20, height: 0 },
    })

    //const root = props.items;
    //const { name, children, type } = node;
    //const parent = name;

    const handleClick = (item,parent) => {
        item.parent = parent;
        setTimeout(function(){ setCurrentPane(false);           },500);
        setTimeout(function(){ 
            if (item.children) {
                set(item);
                console.log('item.children.count',item.children.length);
            }    
        },750);
        setTimeout(function(){ setCurrentPane(true);            },1000);
    };

    const handleClickParent = (item,parent) => {
        if (parent) set(parent);
    };

    const handleOpenMainPane = () => {
        setPane(pane => !pane)
        setCurrentPane(currentpane => !currentpane)
    };

    return (
        <div style={{width:'100%',height:'100%',backgroundColor:'#45c8d955',display:'flex',alignItems:'center',
        justifyContent:'center'}}>
        <animated.div className='mainpane' style={{ height: props.height, width: wrapper }}>

            {
                // LEFTPANE
                (!node.parent)
                    ?   // display root
                        <animated.div className='rootpane' style={{width:iwrapper,fontSize:fsize}}
                            onClick={()=>handleOpenMainPane()}>
                            <div style={{display:'flex',flexDirection:'column',padding:20}}>
                                <div><i className="fas fa-cogs"></i> Services</div>
                                
                                <div style={{fontSize:'3vmin',padding:'0 100px 0 100px',lineHeight:'4vmin',padding:20}}>{node.ftext}</div>
                            </div>
                            {
                                (pane) 
                                ?
                                    <animated.div className='buttonbottom'>
                                        <span className='textgradient'>
                                            Appuyez sur un des cycles pour afficher ses services !
                                        </span>
                                    </animated.div>
                                :
                                    <animated.div className='buttonbottom'>
                                        <span className='textgradient'>
                                            Appuyez ici pour afficher les cycles !
                                        </span>
                                    </animated.div>
                            }
                        </animated.div>
                    :   // display current + parent
                        <animated.div className='leftpane' style={{width:iwrapper}}>
                            <animated.div className='currentpane'
                                style={{backgroundImage:node.color,opacity:opacitycurrentpane,height:heightcurrentpane}} 
                                onClick={()=>handleClickParent(node,node.parent)}>
                                <div className='buttonpane' style={{left:10}}><i className="fas fa-arrow-left"></i></div>
                                <div style={{margin:'0 50px 0 50px',display:'flex',flexDirection:'column',padding:20,backgroundColor:'rgba(255,255,255,0.5)'}}>
                                    <div style={{color:node.textcolor,}}><div style={{margin:'0 0 5px 0'}}><i className={node.icon}></i></div>{node.name}</div>
                                    <div style={{color:node.textcolor,fontSize:'2.5vmin',lineHeight:'2.5vmin',padding:20}}>{node.ftext}</div>
                                </div>
                            </animated.div>
                        </animated.div>

            }

            <animated.div className='rightpane' style={{...rest,width:size}}>
                    
                {
                    
                    trail.map(({ xtrail, opacitytrail, ...rest }, index) => (
                        <animated.div className='children'
                            key={index}
                            onClick={ ()=>handleClick(node.children[index],node) }
                            style={{
                                ...rest,
                                opacity:opacitytrail,
                                transform: xtrail.interpolate(xtrail => `translate3d(0,${xtrail}px,0)`),
                                backgroundImage: node.children[index].color,
                                backgroundRepeat:'no-repeat',
                                backgroundSize: 'cover',
                                color:node.children[index].textcolor,
                                position:'relative',
                            }}>
                            <div style={{position:'absolute',top:"1vmin",left:"1vmin",width:'2vw',height:'2vw',backgroundColor:node.children[index].textcolor,borderRadius:'15px'}}></div>
                            <animated.div style={{
                                //backgroundImage: node.children[index].color,
                                //backgroundRepeat:'no-repeat',
                                //backgroundSize: 'cover'
                                }}>
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <i className={node.children[index].icon}></i><span>{node.children[index].name}</span>
                                </div>
                            </animated.div>
                        </animated.div>
                        ))
            
                }
                    
            </animated.div>

        </animated.div>
        </div>
    );

}

export default Tree;