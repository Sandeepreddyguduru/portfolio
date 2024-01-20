import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { SpeedDial } from "@mui/material";
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import MicIcon from '@mui/icons-material/Mic';
import { useEffect, useState } from 'react';
import { MicOff } from '@mui/icons-material';
import './assistance.scss';
import { PortfolioContext } from '../portfolio-context/portfolio-context';
import { updateTheme, toggleVoice } from '../../../store/actions/app-actions';
import { useDispatch } from 'react-redux';
import useMeasure from 'react-use-measure'

const Assistance = () => {
    const dispatch = useDispatch()
    const { setPage, page, assistanceVoice, headerLists } = PortfolioContext();
    const [ref, { width }] = useMeasure();
    
    const [isRecording, setIsRecording] = useState(false);
    const [message, setMessage] = useState('');
    const [AIVoice, setAIVoice] = useState('');
    
    useEffect(() => {
        voiceOver(AIVoice)
    }, [AIVoice])

    useEffect(() => {
        voiceOver(message)
    }, [message])

    const reset = () => {
        resetTranscript();
        setMessage('')
    }

    const voiceOver = (speckMessage) => {
        const voice = speechSynthesis.getVoices().find(voice => voice.lang === 'en-US');
        let voices = speechSynthesis.getVoices()[19];
        
        let speech = new SpeechSynthesisUtterance(speckMessage);
        speech.lang = voice?.lang
        speech.rate = 0.5;
        speech.voice = voice;
        speech.volume = assistanceVoice ? 1:0 || 0;
        speechSynthesis.speak(speech);
        speech.onend = () => {
            setTimeout(() => {
                reset()
            }, 100);
        }
    }

    const stopListening = () => {
        SpeechRecognition.stopListening()
        resetTranscript();
        setMessage('');
        setIsRecording(false)
    }


    
    const commands = [
        // {
        //     command: 'I would like to order *',
        //     callback: (food) => { setMessage(`Your order is for: ${food}`); reset() }
        // },

        // theme
        {
            command: ['(enable) (set) (apply) light mode', '(enable) (set) (apply) light theme', '(enable) (set) (apply) (app)theme to light', '(enable) (set) (apply) day mode'],
            callback: () => { dispatch(updateTheme('light')); setMessage('Setting theme to light') },
            isFuzzyMatch: true,
            fuzzyMatchingThreshold: 0.5,
        },
        {
            command: ['(enable) (set) (apply) dark mode','(enable) (set) (apply) dark theme', '(enable) (set) (apply) (app)theme to dark', '(enable) (set) (apply) night mode'],
            callback: () => { dispatch(updateTheme('dark')); setMessage('Setting theme to dark') },
            isFuzzyMatch: true,
            fuzzyMatchingThreshold: 0.5,
        },


        // redirect
        {
            command: ['open home page', 'land on homepage','redirect to homepage'],
            callback: () => { setPage('Home'); setMessage('Opening HOME page') },
        },
        {
            command: ['open about page', 'land on about page','redirect to about page'],
            callback: () => { setPage('About'); setMessage('Opening ABOUT page') },
        },
        {
            command: ['open lab page', 'land on lab page','redirect to lab page'],
            callback: () => { setPage('Lab'); setMessage('Opening lab page') },
        },

        {
            command: ['*page', '* page','go to * page','go to *'],
            callback: (activePage) => {
                const PAGE = (activePage[0].toUpperCase() + (activePage.substr(1, page.length)));
                if (page === PAGE) {
                    setMessage(`you are in ${PAGE} page now`);
                    return
                }
                for (let list of headerLists) {
                    // if (list?.name !== PAGE) {
                    //     setMessage('Oops! This page does not exist')
                    //     return;
                    // }
                    if (list?.name === PAGE) {
                        // console.log("updated", PAGE)
                        setPage(PAGE)
                        setMessage(`Opening ${PAGE} page`);
                    }
                }
            },
        },



        // 
        {
            command: 'scroll (page) (down)',
            callback: () => {
                let scroll = document.getElementById('portfolio-main-app-id');
                if (scroll) {
                    scroll.scrollBy({
                        top: window?.innerHeight,
                        left: 0,
                        behavior: "smooth",
                    });
                }
                setMessage('Srolling')
            },
        },

        // stop
        {
            command: 'stop listening',
            callback: () => { stopListening() }
        },
        {
            command: 'sleep',
            callback: () => { stopListening() }
        },


        //
        {
            command: ['reset', 'clear','(reset) (clear) message'],
            callback: ({ resetTranscript }) => {
                resetTranscript(); setMessage('')
            }
        },

        // truning ON/OFF voice
        {
            command: ['read (ouput) (message) (recipt)', 'speak (ouput) (message)'],
            callback: () => {
                dispatch(toggleVoice(true));
                setAIVoice('Voice over enabled')
            }
        },
        {
            command: ['speak'],
            callback: () => {
                dispatch(toggleVoice(true));
                setAIVoice('Voice over enabled')
            }
        },
        {
            command: ['mute (assistance) voice'],
            callback: () => {
                setAIVoice('Voice over disabling')
                setTimeout(() => {
                    dispatch(toggleVoice(false))
                }, 100);
            }
        },
    ]

    const {
        transcript,
        listening,
        resetTranscript,
        clearTranscriptOnListen,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition({
        commands, 
        onNoMatch: () => setMessage('Sorry, try with different query') });

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <MotionConfig transition={{duration: 0.2}}>
            <div transition={{duration: 0.5}} className={`assistance-box${listening ? ' mic-on' : ' mic-off'}`}>
                <div className="transcript-box">
                    {!listening ?
                        <SpeedDial
                            variant="contained"
                            ariaLabel="SpeedDial basic example" 
                            className="assistance-mic"
                            id="speak"
                            icon={<MicIcon />}
                            onClick={() => { SpeechRecognition.startListening({ continuous: true }); setIsRecording(true) }}></SpeedDial> :
                        <SpeedDial
                            variant="contained"
                            ariaLabel="SpeedDial basic example"
                            className="assistance-mic"
                            id="speak"
                            icon={<MicOff />}
                            onClick={() => { stopListening() }}>
                        </SpeedDial>
                    }
                    
                    <AnimatePresence>
                        {isRecording &&
                            <motion.div
                            className="assistance-box-bg"
                            animate={{ width, scale: 1}}
                            exit={{ width: '100%' }}
                            transition={{ scale: {duration: 0.2}}}
                            >
                            <AnimatePresence>
                                {isRecording && <div ref={ref} className={`transcript-message${message ? ' got-response':''}`}>
                                    {listening ?
                                        <div
                                            className={`transcript recording${message ? ' shrink' : ''}`}>
                                            {transcript ? transcript : (listening ? 'Mic is on' : 'Mic is off')}
                                        </div> : ''}
                                        {message ? <div className="transcript message">{message || 'Mic is on'}</div> : ''}
                                </div>}
                            </AnimatePresence>
                            </motion.div>}
                    </AnimatePresence>
                </div>
                {/* <button onClick={resetTranscript}>Reset</button> */}
            </div>
            {/* <SpeedDial
        variant="contained"
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        id="speak" onClick={() => {  }}
        icon={ <MicIcon /> : <MicOff />}
        >
    </SpeedDial> */}
        </MotionConfig>
    );
};
export default Assistance;



// import React, { useContext, useEffect, useState } from "react";
// import { Button, SpeedDial } from "@mui/material";
// import MicIcon from '@mui/icons-material/Mic';
// import { PortfolioContext } from "../portfolio-context/portfolio-context";
// import { useDispatch } from "react-redux";
// import { updateTheme } from "../../../store/actions/app-actions";

// const Assistance = () => {
//     // const [transcript, setTranscript] = useState('')
//     // const [response, setResponse] = useState('')
//     const dispatch =useDispatch()
//     const { theme, setTheme, transcript, setTranscript, response, setResponse } = PortfolioContext();

//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//     useEffect(() => {
//         assistance();
//         respondToUser()
//         // console.log("updated")
//     }, [transcript])

//     const assistance = () => {
//         // setResponse('');
//         // setTranscript('')
//         let speech = new SpeechRecognition();
//         speech.interimResults = true;
//         speech.continuous = true;
//         speech.maxAlternatives = 1

//         speech.onresult = (e) => {
//             // console.log(e)
//             let result = Array.from(e?.results)?.map(text => text?.[0])?.map(output => output?.transcript)
//             // const finalText = transcript + result;
//             console.log(result?.toLocaleString())
//             setTranscript(result?.toLocaleString())
//             // respondToUser(result)
//         }

//         speech.start();

//         // speech.onspeechend=()=>{
//         //     respondToUser()
//         //     document.querySelector('#speak')?.click();
//         // }

//     }

//     const respondToUser = () => {
//         let introCommand = "Alexander";
//         let myResponse = '';

//         if (transcript !== '') {
//             if (transcript?.includes(introCommand)) {
//                 myResponse = "Hello! Welcome"
//             } else if (transcript.includes("what is the time")) {
//                 myResponse = new Date()?.toLocaleDateString();
//             }

//             // App Level
//             else if ((transcript.includes("dark mode") || transcript.includes("dark theme"))) {
//                 myResponse = "Setting theme to dark";
//                 // setTheme(true)
//                 dispatch(updateTheme('dark'))
//             } else if ((transcript.includes("light mode") || transcript.includes("light theme"))) {
//                 myResponse = "Setting theme to light";
//                 // setTheme(false)
//                 dispatch(updateTheme('light'))
//             }

//             else {
//                 myResponse = "come again"
//             }
//         }
//         console.log(myResponse)
//         setResponse(myResponse)
//         let utterance = new SpeechSynthesisUtterance(myResponse);
//         utterance.rate = 0.95;
//         utterance.pitch = 1;
//         utterance.lang = "en-IN";
//         utterance.voice = window.speechSynthesis.getVoices()[0]
//         speechSynthesis.speak(utterance);
//     }
//     return (
//         <>
//             <div>{transcript}-{response}</div>
//             <SpeedDial
//                 variant="contained"
//                 ariaLabel="SpeedDial basic example"
//                 sx={{ position: 'fixed', bottom: 16, right: 16 }}
//                 id="speak" onClick={assistance}
//                 icon={<MicIcon />}
//                 >
//                 </SpeedDial>
//             {/* <Button variant="contained" id="speak" onClick={respondToUser}>speech</Button> */}
//         </>

//     )
// }
// export default Assistance;