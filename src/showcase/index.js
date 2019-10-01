import React, {useState, useEffect, useRef} from 'react';
import Header1 from './header1';

// import items
import image0 from '../assets/images showcase/image0.jpg';
import image1 from '../assets/images showcase/bravia-2017.jpg';
import image2 from '../assets/images showcase/itsuka-no-hoshi.jpg';
import image3 from '../assets/images showcase/mtv-ultrahits.jpg';
import image4 from '../assets/images showcase/night-stroll.jpg';
import image5 from '../assets/images showcase/sstv.jpg';
import image6 from '../assets/images showcase/stripe-intl.jpg';
import image7 from '../assets/images showcase/techne.jpg';
import image8 from '../assets/images showcase/the-9d-project.jpg';
import image9 from '../assets/images showcase/waxing-moon.jpg';
import image10 from '../assets/images showcase/xperia-ear.jpg';
import image11 from '../assets/images showcase/xperia-ear-duo.jpg';

const Showcase = () => {

  const images = [image0,image1,image2,image3,image4,image5,
    image6,image7,image8,image9,image10,image11];
  const texts = ['image0','image1','image2','image3','image4','image5',
    'image6','image7','image8','image9','image10','image11'];

  // hooks 
  const ref0 = useRef(image0);
  const ref1 = useRef(image1);
  const ref2 = useRef(image2);
  const ref3 = useRef(image3);
  const ref4 = useRef(image4);
  const ref5 = useRef(image5);
  const ref6 = useRef(image6);
  const ref7 = useRef(image7);
  const ref8 = useRef(image8);
  const ref9 = useRef(image9);
  const ref10 = useRef(image10);
  const ref11 = useRef(image11);

  const refs = [ ref0,ref1,ref2,ref3,ref4,ref5,ref6,ref7,ref8,ref9,ref10,ref11 ];

/*
  useEffect(() => {
    images.map((image,index)=>{
      const string = 'image' + index;
      const img = string;
      img.onload = () => {
        console.log('image '+ index + ' has been loaded')
      }
    })
  }, []); // Empty array ensures that effect is only run on mount and unmount
*/

  return (

    <div style={{width:'80%',display:'flex',flexWrap:'wrap',alignItems:'center',
      justifyContent:'center',marginTop:100}}>
        {images.map((image,index)=>{
          return(
            <div key={index} style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',
              margin:'10px',padding:'0px',position:'relative',width:'250px',height:'200px',boxSizing:'border-box'}}>
              <Header1 style={{position:'absolute'}}></Header1>
              {/*<img style={{position:'absolute'}} ref={refs[index]} width='300' src={image}/>*/}
              <div style={{position:'absolute',fontSize:'20px',backgroundColor:'rgba(255,255,255,0.8)',margin:0,padding:10}}>
                image{index} - {texts[index]}
              </div>
            </div>
          );
        })}
    </div>
    
  );
}

export default Showcase;