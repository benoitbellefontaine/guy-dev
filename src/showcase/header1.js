import React, { useState, useEffect, useRef } from 'react';
import threeEntryPoint2 from "../three/threeEntryPoint2";
//import "./header.css"

export default (container) => {
    
    const refContainer = useRef(null);
    
    useEffect(() => {
        console.log('showcase - header - useEffect - refContainer',refContainer);
        threeEntryPoint2(refContainer.current, "canvas");
    },[]);
    
    return (
        <div style={{width:'100%',height:'100%'}} ref={refContainer} id="canvas" />
    );

}