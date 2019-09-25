import React, {useState, useCallback, useRef, useEffect} from 'react';
import { useTransition, animated } from 'react-spring';

import Secteurs from '../questions/secteurs.js';
import Cycles from '../questions/cycles.js';
import Qualites from '../questions/qualites.js';
import Chiffres from '../questions/chiffres.js';
import Defis from '../questions/defis.js';

import './contact.css';
import './customscrollbars.css';

import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-google';

const questions = [
    "Vous avez une question ? Nous aimerions avoir de vos nouvelles. Envoyez-nous un message avec vos réponses et nous vous répondrons dans les plus brefs délais.",
    "Quel est votre nom?",
    "Quel est votre adresse courriel?",
    "Indiquez le ou les secteurs d'activité de votre entreprise.",
    "Choisir le cycle de vie de votre entreprise.",
    "Quelle sont les qualités que vous recherchez chez le consultant externe?",
    "Quel est votre chiffre d'affaire?",
    "Des questions?",
];

const questions_a = [
    "Got a question? We'd love to hear from you. Send us a message along with your answers and we'll respond as soon as possible.",
    "What's your name?",
    "What's your email address??",
    "Select the sector(s) of activity of your company.",
    "Choose the life cycle of your company.",
    "What are the qualities you are looking for in an external consultant?",
    "What is your turnover?",
    "Questions?",
];

/*
    Vous avez une question ? Nous aimerions avoir de vos nouvelles. Envoyez-nous un message avec vos réponses et nous vous répondrons dans les plus brefs délais.
    Got a question? We'd love to hear from you. Send us a message along with your answers and we'll respond as soon as possible.
*/

const pages = [
    ({ style, onClick }) => 
        <animated.div className="contact-box" style={{ ...style, display:'flex', width:'100%', alignItems:'center', 
            justifyContent:'center',fontSize:"5vmin",textAlign:'justify',textAlignLast:'center'}}>
            { true ? questions[0] : questions_a[0] }
        </animated.div>,
    ({ style, onClick }) => 
        <animated.div className="contact-box" style={{ ...style, display:'flex', width:'100%', alignItems:'flex-start', 
            justifyContent:'center' }}>
            <h3>{ true ? questions[1] : questions_a[1] }</h3>
            <input className="fs-anim-lower" id="q1" name="q1" type="text" placeholder="Dean Moriarty" required/>
        </animated.div>,
    ({ style, onClick }) => 
        <animated.div className="contact-box" style={{ ...style, display:'flex', width:'100%', alignItems:'flex-start', 
            justifyContent:'center' }}>
            <h3>{ true ? questions[2] : questions_a[2] }</h3>
            <input className="fs-anim-lower" id="q1" name="q1" type="text" placeholder="Dean Moriarty" required/>
        </animated.div>,
    ({ style, onClick }) => 
        <animated.div className="contact-box" style={{ ...style, display:'flex', width:'100%', alignItems:'flex-start', 
            justifyContent:'center' }}>
            <h3>{ true ? questions[3] : questions_a[3] }</h3>
            <div className="inner-contact-box">
                <Secteurs />
            </div>
        </animated.div>,
    ({ style, onClick }) => 
        <animated.div className="contact-box" style={{ ...style, display:'flex', width:'100%', alignItems:'flex-start', 
            justifyContent:'center' }}>
            <h3>{ true ? questions[4] : questions_a[4] }</h3>
            <div className="inner-contact-box">
                <Cycles />
            </div>
        </animated.div>,
    ({ style, onClick }) => 
        <animated.div className="contact-box" style={{ ...style, display:'flex', width:'100%', alignItems:'flex-start', 
            justifyContent:'center' }}>
            <h3>{ true ? questions[5] : questions_a[5] }</h3>
            <div className="inner-contact-box"><Qualites /></div>
        </animated.div>,
    ({ style, onClick }) => 
        <animated.div className="contact-box" style={{ ...style, display:'flex', width:'100%', alignItems:'flex-start', 
            justifyContent:'center' }}>
            <h3>{ true ? questions[3] : questions_a[3] }</h3>
            <div className="inner-contact-box">
                <Chiffres />
            </div>
        </animated.div>,
    ({ style, onClick }) => 
        <animated.div className="contact-box" style={{ ...style, display:'flex', width:'100%', alignItems:'flex-start', 
            justifyContent:'center' }}>
            <h3>{ true ? questions[5] : questions_a[5] }</h3>
            <div className="inner-contact-box">
                <Defis />
            </div>
        </animated.div>,
]

const Contact = (props) => {

    const [index, set] = useState(0)
    const onForward = useCallback(() => set(state => (state + 1) % pages.length), []);
    const onBack = useCallback(() => set(state => (state - 1) % pages.length), []);
    const onRedo = useCallback(() => set(state => (0)), []);

    const onClick = useCallback(() => set(state => (state + 1) % pages.length), []);
    const onSelect = useCallback((i) => set(state => (i)), []);

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
        <div style={{width:'100%',height:'100%',backgroundColor:'gray',display:'flex',
                justifyContent:'center',alignItems:'center'}}>
            <div style={{width:props.width,height:'60%'}}>

                <nav className="fs-nav-dots">
                    {
                        questions.map((q,i)=>{
                            return i === index 
                                ? <button key={i} className="fs-dot-current" onClick={console.log('click')}></button>
                                : <button key={i} onClick={console.log('click')}></button>;
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
                <button className="fs-continue" onClick={onClick}>
                    Continue
                </button>
            
                {/* <div style={{width:'80%',border:'0px solid red',fontSize:"10vmin",textAlign:'center',
                    textShadow: '2px 4px 3px rgba(0,0,0,0.3)'}}>
                    Questions - Contact
                </div> */}
                
                <div style={{height:'100%',position:'relative'}}>
                    {transitions.map(({ item, props, key }) => {
                        const Page = pages[item]
                        return <Page key={key} style={props}  /> 
                    })}
                </div>

                {/*<div style={{position:'absolute',bottom:'10px',width:'80%',border:'0px solid red',display:"flex",boxSizing:'border-box',
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
                </div>*/}
            </div>
        </div>
    );
}

export default Contact
