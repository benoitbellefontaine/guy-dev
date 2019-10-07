import React, {useState, useCallback, useRef, useEffect} from 'react';
import { useTransition, animated } from 'react-spring';

import axios from 'axios';

import Secteurs from './secteurs.js';
import Cycles   from './cycles.js';
import Qualites from './qualites.js';
import Chiffres from './chiffres.js';
import Defis    from './defis.js';
import Name    from './name';
import Address    from './address';

import './contact.css';
import './customscrollbars.css';

import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-google';

import store from '../index';

const questions = [
    "Vous avez une question ? Nous aimerions avoir de vos nouvelles. Envoyez-nous un message avec vos réponses et nous vous répondrons dans les plus brefs délais.",
    "Quel est votre nom?",
    "Quel est votre adresse courriel?",
    "Indiquez le ou les secteurs d'activité de votre entreprise.",
    "Choisir le cycle de vie de votre entreprise.",
    "Quelle sont les qualités que vous recherchez chez le consultant externe?",
    "Quel est votre chiffre d'affaire?",
    "Quels sont vos plus grands défis?",
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

const pages = [
    ({ style, onClick }) =>
        <animated.div className="contact-box" style={{ ...style, display:'flex', height:'100%', width:'100%', padding:'calc(10px + 2vmin)',
            fontSize:"4vmin", lineHeight:"4vmin",textAlign:'center',textAlignLast:'center',lineHeight:'4vmin'}}>
            { true ? questions[0] : questions_a[0] }
        </animated.div>,
    ({ style, onClick }) =>
        <animated.div className="contact-box" style={{ ...style, display:'flex', height:'100%', width:'100%', padding:'10px 20px 10px 20px',
            fontSize:"4vmin", lineHeight:"4vmin" }}>
            { true ? questions[1] : questions_a[1] }
            <Name />
        </animated.div>,
    ({ style, onClick }) =>
        <animated.div className="contact-box" style={{ ...style, display:'flex', height:'100%', width:'100%', padding:'10px',
            fontSize:"4vmin", lineHeight:"4vmin" }}>
            { true ? questions[2] : questions_a[2] }
            <Address />
        </animated.div>,
    ({ style, onClick }) =>
        <animated.div className="contact-box" style={{ ...style, display:'flex', height:'100%', width:'100%', padding:'10px',
            fontSize:"4vmin", lineHeight:"4vmin" }}>
            { true ? questions[3] : questions_a[3] }
            <div className="inner-contact-box"> <Secteurs /> </div>
        </animated.div>,
    ({ style, onClick }) =>
        <animated.div className="contact-box" style={{ ...style, display:'flex', height:'100%', width:'100%', padding:'10px',
            fontSize:"4vmin", lineHeight:"4vmin" }}>
            { true ? questions[4] : questions_a[4] }
            <div className="inner-contact-box"> <Cycles /> </div>
        </animated.div>,
    ({ style, onClick }) =>
        <animated.div className="contact-box" style={{ ...style, display:'flex', height:'100%', width:'100%', padding:'10px',
            fontSize:"4vmin", lineHeight:"4vmin" }}>
            { true ? questions[5] : questions_a[5] }
            <div className="inner-contact-box"><Qualites /></div>
        </animated.div>,
    ({ style, onClick }) =>
        <animated.div className="contact-box" style={{ ...style, display:'flex', height:'100%', width:'100%', padding:'10px',
            fontSize:"4vmin", lineHeight:"4vmin" }}>
            { true ? questions[6] : questions_a[6] }
            <div className="inner-contact-box"> <Chiffres /> </div>
        </animated.div>,
    ({ style, onClick }) =>
        <animated.div className="contact-box" style={{ ...style, display:'flex', height:'100%', width:'100%', padding:'10px',
            fontSize:"4vmin", lineHeight:"4vmin" }}>
            { true ? questions[7] : questions_a[7] }
            <div className="inner-contact-box"> <Defis /> </div>
        </animated.div>,
    ({ style, onClick }) =>
        <animated.div className="contact-box" style={{ ...style, display:'flex', height:'100%', width:'100%', padding:'20px',
            fontSize:"4vmin", lineHeight:"4vmin" }}>
            { true ? questions[8] : questions_a[8] }
            <div className="inner-contact-box" style={{width:'100%',height:'100%'}}> <textarea style={{height:'98%'}}/> </div>
        </animated.div>,
]

const Contact = (props) => {

    const [index, set] = useState(0)
    const [value1, setValue] = useState('sdsd');

    const onForward = useCallback(() => set(state => (state + 1) % pages.length), []);
    const onBack = useCallback(() => set(state => (state - 1) % pages.length), []);
    const onRedo = useCallback(() => set(state => (0)), []);

    const onClick = useCallback(() => set(state => (state + 1)), []);
    const onSelect = useCallback(() => set(state => (index)), []);

    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(0%,10%,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0%,-10%,0)' },
    })

    const refCaptcha = useRef(null);
    useEffect(() => { loadReCaptcha(); });

    const handleMailSubmitLocalServer = () => {

        // define 
        let array_services = [], array_secteurs = [], array_qualites = [], array_chiffres = [], array_cycles= [], array_defis= [];
        let secteurs = '', qualites = '', chiffres = '', cycles = '', defis = '';

        // get selections from the store
        store.getState().secteurs.map(
            (secteur) => { 
                //if (secteur.selected) array_secteurs.push(secteur.text);
                if (secteur.selected) secteurs += secteur.text + ', ';
            }
        )
        store.getState().cycles.map(
            (cycle) => { 
                //if (cycle.selected) ccl.push(cycle.text);
                if (cycle.selected) cycles += cycle.text + ', ';
            }
        )
        store.getState().qualites.map(
            (qualite) => { 
                //if (qualite.selected) array_qualites.push(qualite.text);
                if (qualite.selected) qualites += qualite.text + ', ';
            }
        )
        store.getState().chiffres.map(
            (chiffre) => { 
                //if (chiffre.selected) array_chiffres.push(chiffre.text);
                if (chiffre.selected) chiffres += chiffre.text + ', ';
            }
        )
        store.getState().defis.map(
            (defi) => { 
                //if (defi.selected) array_defis.push(defi.text);
                if (defi.selected) defis += defi.text + ', ';
            }
        )

        // aggregate
        var qa = [
            //{q:'services',  a: services},
            {q:'secteurs',  a: secteurs},
            {q:'cycle',     a: cycles},
            {q:'qualites',  a: qualites},
            {q:'chiffre',   a: chiffres},
            {q:'défis',     a: defis},
        ];

        axios.post ( 
            `http://localhost:3001/api/mail`,
            {
                id:     Date.now(), 
                name:   store.getState().name.texte,  
                email:  store.getState().address.texte,
                //text:   this.state.message, 
                qa:     qa,
                //captcha:this.state.value
            },
            {
                headers:{
                    'Accept':'application/json, text/plain, */*',
                    'Content-type': 'application/json'
                }
            },
        )
        .catch(err => {
            console.log('err', err);
            //this.setState({data: comments});
          })
        //.then((res) => res.json())
        .then((response) => {
            console.log('response',response);
            //this.setState({datastatus:response.data.success,showAlert:true})
        })
    }

    return (
        <div className="contact-page" style={{backgroundColor: '#3da30088'}}>

            {
                (index >= 0) && (index < pages.length) &&
                <nav className="fs-nav-dots">
                {
                    questions.map((q,i)=>{
                        return i === index 
                            ? <button key={i} className="fs-dot-current" onClick={() => set(i)}></button>
                            : <button key={i} onClick={() => set(i)}></button>;
                    })
                }
                </nav>
            }
            {
                (index >= 0) && (index < pages.length) &&
                <span className="fs-numbers">
                    <span className="fs-number-current">
                        {index+1}
                    </span>
                    <span className="fs-number-total">
                        {pages.length}
                    </span>
                </span>
            }
            <button className="fs-continue" onClick={onClick}>
                Continue
            </button>
            <button className="fs-Submit" onClick={handleMailSubmitLocalServer}>
               Submit
            </button>

            <div style={{ width:props.width, height:'60%',border:'0px solid gray',backgroundColor:'#3da30055', borderRadius:5 }}>

                <div style={{
                    position:'relative',width:'100%',height:'20%',border:'0px solid red',fontSize:"8vmin",textAlign:'center',
                    textShadow: '2px 4px 3px rgba(0,0,0,0.3)',display:'flex',justifyContent:'center',alignItems:'center',
                    backgroundColor: '#3da300cc'}}>
                    Contact
                </div>
            
                {
                    (index >= 0) && (index < pages.length) &&
                    <div style={{height:'80%',position:'relative'}}>
                        {transitions.map(({ item, props, key }) => {
                            const Page = pages[item];
                            return <Page key={key} style={props} />
                        })}
                    </div>
                }
                {
                    (index === pages.length) && <div>Hello</div>
                }

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