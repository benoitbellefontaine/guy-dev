//HEADER
import React, { useState, useEffect, useRef } from 'react';
//import threeEntryPoint from "./threeEntryPoint";
import threeEntryPoint2 from "./threeEntryPoint2";
import "./header.css"

export default (props,width,height) => {
    
    const refContainer = useRef(null);
    
    useEffect(() => {
        console.log('header - useEffect - refContainer',refContainer);
        console.log('props',props);
        console.log('width',props.width);
        console.log('height',props.height);
        threeEntryPoint2(refContainer.current, "canvas", props.width, props.height);
    },[]);
    
    return (
        <div className="header-header" ref={refContainer} id="canvas" />
    );

}