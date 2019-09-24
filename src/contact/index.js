import React, {useState, useCallback, useRef, useEffect} from 'react';
import { useTransition, animated } from 'react-spring';

import Secteurs from '../questions/secteurs.js';
import Cycles from '../questions/cycles.js';
import Qualites from '../questions/qualites.js';
import Chiffres from '../questions/chiffres.js';
import Defis from '../questions/defis.js';

import './contact.css';

import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-google';

const questions = [
    "Quel est votre nom?",
    "Quel est votre adresse courriel?",
    "Indiquez le ou les secteurs d'activité de votre entreprise.",
    "Choisir le cycle de vie de votre entreprise.",
    "Quelle sont les qualités que vous recherchez chez le consultant externe?",
    "Quel est votre chiffre d'affaire?",
    "Des questions?",
];

/*
    Vous avez une question ? Nous aimerions avoir de vos nouvelles. Envoyez-nous un message avec vos réponses et nous vous répondrons dans les plus brefs délais.
    Got a question? We'd love to hear from you. Send us a message along with your answers and we'll respond as soon as possible.
*/

const pages = [
    ({ style, onClick }) => 
        <animated.div className="question-box" style={{ ...style, position:'relative', width:'80%',border:'0px solid red',fontSize:"3vmin",textAlign:'justify',textAlignLast:'center'}}>
            Vous avez une question ? Nous aimerions avoir de vos nouvelles. Envoyez-nous un message avec vos réponses et nous vous répondrons dans les plus brefs délais.
            Got a question? We'd love to hear from you. Send us a message along with your answers and we'll respond as soon as possible.
        </animated.div>,
    ({ style, onClick }) => 
        <animated.div className="question-box" style={{ ...style, position:'relative' }}>
            <Secteurs />
        </animated.div>,
    ({ style, onClick }) => 
        <animated.div className="question-box" style={{ ...style, position:'relative' }}>
            <Cycles />
        </animated.div>,
    ({ style, onClick }) => 
        <animated.div className="question-box" style={{ ...style, position:'relative' }}>
             <Qualites />
        </animated.div>,
    ({ style, onClick }) => 
        <animated.div className="question-box" style={{ ...style, position:'relative' }}>
             <Chiffres />
        </animated.div>,
    ({ style, onClick }) => 
        <animated.div className="question-box" style={{ ...style, position:'relative' }}>
             <Defis />
        </animated.div>,
  ]

const Contact2 = (props) => {

    const [index, set] = useState(0)
    const onForward = useCallback(() => set(state => (state + 1) % 5), [])
    const onBack = useCallback(() => set(state => (state - 1) % 5), [])
    const onRedo = useCallback(() => set(state => (0)), [])

    const onClick = useCallback(() => set(state => (state + 1) % 5), [])

    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(0%,10%,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0%,-10%,0)' },
    })

    const refCaptcha = useRef(null);
    useEffect(() => {
        loadReCaptcha();
    });

    return (
        <div className="contact-page" style={{width:'100vw',height:'100vh',
            border:'10px solid black',padding:'50px 10% 0px 10%',
            display:'flex',flexDirection:'column',alignItems:'center',boxSizing:'border-box'}}>
            
            <nav className="fs-nav-dots">
                {
                    questions.map((q,i)=>{
                        return i === index ? <button key={i} className="fs-dot-current"></button> : <button key={i} disabled></button>;
                    })
                }
            </nav>
            <span className="fs-numbers">
                <span className="fs-number-current">
                    {index+1}
                </span>
                <span className="fs-number-total">
                    {pages.length}
                </span>
            </span>

            <div style={{width:'80%',border:'0px solid red',fontSize:"10vmin",textAlign:'center',
                textShadow: '2px 4px 3px rgba(0,0,0,0.3)'}}>
                Questions - Contact
            </div> 

            {transitions.map(({ item, props, key }) => {
                        const Page = pages[item]
                        return <Page key={key} style={props} />
            })}
            <div style={{position:'absolute',bottom:'10px',width:'80%',border:'0px solid red',display:"flex",boxSizing:'border-box',
                justifyContent:'flex-end',margin:10}}>
                <ReCaptcha
                    ref={refCaptcha}
                    //size="invisible"
                    size="normal"
                    //size="compact"
                    render="explicit"
                    sitekey="6LeNUkAUAAAAAC8ld7Jc9NwWMWpdK6HnB8AL6u5r"
                    onloadCallback={loadReCaptcha}
                    //verifyCallback={this.verifyCallback}
                    hl="fr"
                />
                <div className='contact-button' style={{marginLeft:'10px',padding:0,fontSize:'100%',borderRadius:5,
                    backgroundColor:'rgba(255,255,255)',display:"flex",justifyContent:'center',
                    alignItems:'center',color:'black'}}>
                    <i className="fas fa-paper-plane"></i>
                </div>
                <div className="" style={{backgroundColor:'black'}} onClick={onClick}>Next</div>
            </div>
        </div>
    );
}

export default Contact2