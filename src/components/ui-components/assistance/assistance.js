import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { SpeedDial } from "@mui/material";
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import MicIcon from '@mui/icons-material/Mic';
import { useEffect, useState } from 'react';
import { MicOff } from '@mui/icons-material';
import './assistance.scss';
import { PortfolioContext } from '../portfolio-context/portfolio-context';
import { updateTheme, toggleVoice, updateLanguage } from '../../../store/actions/app-actions';
import { useDispatch } from 'react-redux';
import useMeasure from 'react-use-measure'
import {
    // ASSISTANCE_INTRO_COMMANDS,
    ABOUT_COMMANDS,
    APP_DARK_MODE_COMMANDS,
    APP_LIGHT_MODE_COMMANDS,
    APP_NAVIGATION_COMMANDS,
    CALL_COMMANDS,
    CONTACT_PAGE_COMMANDS,
    EMAIL_COMMANDS,
    EXPERIENCE_COMMANDS,
    INTRO_COMMANDS,
    MUTE_VOICE_ASSISTANCE_COMMANDS,
    RESET_ASSISTANCE_COMMANDS,
    SERVICE_COMMANDS,   
    SOCIAL_ACCOUNTS_COMMANDS,
    SPEAK_VOICE_ASSISTANCE_COMMANDS,
    SROLL_COMMANDS,
    STOP_VOICE_ASSISTANCE_COMMANDS,
    TECHNOLOGIES_COMMANDS,
    WORK_TOGETHER_COMMANDS
} from '../portfolio-constance/commands';

const Assistance = () => {
    const dispatch = useDispatch()
    const { setTheme, page, assistanceVoice, headerLists, navigateTo, setContactTab, openAccount } = PortfolioContext();
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
        const voice = speechSynthesis.getVoices().find(voice => voice.lang === 'en-IN');
        let voices = speechSynthesis.getVoices()[19];

        let speech = new SpeechSynthesisUtterance(speckMessage);
        speech.lang = voice?.lang
        speech.rate = 1;
        speech.voice = voice;
        speech.volume = assistanceVoice ? 1 : 0 || 0;
        speechSynthesis.speak(speech);
        speech.onend = () => {
            setTimeout(() => {
                reset();
                startListening();
            }, 100);
        }
    }

    const stopListening = () => {
        SpeechRecognition.stopListening()
        resetTranscript();
        setMessage('');
        setIsRecording(false)
    }

    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true });
         setIsRecording(true)
    }

    const navigateToSection = (tab, ele, message) => {
        navigateTo(tab);
        if (ele) {
            setTimeout(() => {
                let element = document.getElementById(ele);
                if (element) {
                    element?.scrollIntoView({ block: 'start', behavior: 'smooth' })
                }
                setMessage(message);
            }, 500);
        }
    }
    // controll
    const scrollFn = (type) => {
        let top = 0;
        let message = 'Srolling';
        let scrollBar = `${page === 'contact' ? '.personal-details' : '.App'}`;
        let scroll = document.querySelector(scrollBar);
        switch (type) {
            case 'up':
                // top = scroll?.scrollTop - 150;
                top = scroll?.scrollTop - ((window?.innerHeight) / 4);
                message = 'Scrolling up';
                break;
            case 'down':
                // top = scroll?.scrollTop + 150;
                top = scroll?.scrollTop + ((window?.innerHeight) / 4);
                message = 'Scrolling down';
                break;
            case 'scroll':
                top = (scroll?.scrollTop + window?.innerHeight);
                message = 'Scrolling';
                break;
            case 'top':
                top = 0;
                message = 'Scrolling to top';
                break;
            case 'bottom':
                top = scroll?.scrollHeight;
                message = 'Scrolling to bottom';
                break;
            default:
                break;
        }
        if (scroll) {
            scroll.scrollTo({ top: top, left: 0, behavior: "smooth" });
        }
        setMessage(message)
    }

    const commands = [
        // {
        //     command: 'I would like to order *',
        //     callback: (food) => { setMessage(`Your order is for: ${food}`); reset() }
        // },

        // theme
        {
            command: APP_LIGHT_MODE_COMMANDS,
            callback: () => { dispatch(updateTheme('light')); setTheme('light'); setMessage('Setting theme to light') },
            // isFuzzyMatch: true,
            // fuzzyMatchingThreshold: 0.5,
        },
        {
            command: APP_DARK_MODE_COMMANDS,
            callback: () => { dispatch(updateTheme('dark')); setTheme('dark'); setMessage('Setting theme to dark') },
            // isFuzzyMatch: true,
            // fuzzyMatchingThreshold: 0.5,
        },


        // redirect
        // {
        //     command: ['open home page', 'land on homepage', 'redirect to homepage'],
        //     callback: () => { navigateTo('home'); setMessage('Opening HOME page') },
        // },
        // {
        //     command: ['open about page', 'land on about page', 'redirect to about page'],
        //     callback: () => { navigateTo('about'); setMessage('Opening ABOUT page') },
        // },
        {
            command: CONTACT_PAGE_COMMANDS,
            callback: () => { navigateTo('contact'); setMessage('Opening contact page') },
        },

        {
            command: APP_NAVIGATION_COMMANDS,
            callback: (activePage) => {
                const PAGE = activePage?.toLowerCase();
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
                        navigateTo(PAGE);
                        setMessage(`Opening ${PAGE} page`);
                    }
                }
            },
        },

        // translate
        // {
        //     command: ['change (translate) (change) (language) (to) (telugu) (language)'],
        //     callback: () => {
        //         dispatch(updateLanguage('tel'));
        //         setMessage('Changing language telugu')
        //     },
        // },


        // control
        //Home
        {
            command: INTRO_COMMANDS,
            callback: () => { navigateToSection('home', 'intro', 'here is introduction of Sandeep') },
        },
        {
            command: SERVICE_COMMANDS,
            callback: () => { navigateToSection('home', 'services', 'here are the services from Sandeep') },
        },

        // about
        {
            command: ABOUT_COMMANDS,
            callback: () => { navigateToSection('about', 'about', 'here you can know more about Sandeep') }
        },
        {
            command: EXPERIENCE_COMMANDS,
            callback: () => { navigateToSection('about', 'experience', 'here is experience of Sandeep') }
        },
        {
            command: TECHNOLOGIES_COMMANDS,
            callback: () => { navigateToSection('about', 'technologies', 'here are the technologies served by Sandeep') }
        },
        {
            command: WORK_TOGETHER_COMMANDS,
            callback: () => { navigateToSection('about', 'work-together', 'here you can mail/get in touch with Sandeep') }
        },

        // contact - account
        {
            command: CALL_COMMANDS,
            callback: () => {
                let call = document.querySelector('.info-btn.call-btn');
                if (call) {
                    call?.click();
                    setMessage('Calling Sandeep');
                }
            }
        },
        {
            command: EMAIL_COMMANDS,
            callback: (contactTab) => {
                if (page === 'contact') {
                    if (contactTab === 'message') {
                        setContactTab(true);
                        setMessage('Opening');
                    }
                    if (contactTab === 'social accounts') {
                        setContactTab(false)
                        setMessage('Opening');
                    }
                }
            }
        },
        {
            command: SOCIAL_ACCOUNTS_COMMANDS,
            callback: (link) => {
                let account = {};
                let gitList = ['github', 'gudhub', 'git hub', 'githup', 'gitup', 'get hub', 'gitub', 'guitar'];
                if (gitList?.includes(link?.toLowerCase())) {
                    account = { type: 'github' }
                } else {
                    account = { type: link?.toLowerCase() }
                }
                openAccount(account);
                setMessage(account?.type === 'email' ? `Opening ${account?.type} account` : `Opening ${account?.type} account in new tab`);
                console.log('account', account);
            }
        },

        // scroll
        {
            command: SROLL_COMMANDS,
            callback: (scroll) => {
                if (scroll?.command || scroll) {
                    let scrollPage = scroll?.command ? ((scroll?.command?.toLowerCase() === 'scroll') ? 'scroll' : scroll) : scroll;
                    scrollFn(scrollPage?.toLowerCase());
                    console.log('scroll', scrollPage);
                }
            },
        },
        
        // stop
        {
            command: STOP_VOICE_ASSISTANCE_COMMANDS,
            callback: () => { stopListening() }
        },


        //
        {
            command: RESET_ASSISTANCE_COMMANDS,
            callback: ({ resetTranscript }) => {
                resetTranscript(); setMessage('')
            }
        },


        // truning ON/OFF voice
        {
            command: SPEAK_VOICE_ASSISTANCE_COMMANDS,
            callback: () => {
                dispatch(toggleVoice(true));
                setAIVoice('Voice over enabled')
            },
            // isFuzzyMatch: true,
            // fuzzyMatchingThreshold: 0.5,
        },
        {
            command: MUTE_VOICE_ASSISTANCE_COMMANDS,
            callback: () => {
                setAIVoice('Voice over disabling')
                setTimeout(() => {
                    dispatch(toggleVoice(false))
                }, 100);
            },
            // isFuzzyMatch: true,
            // fuzzyMatchingThreshold: 0.5,
        },
    ]

    const {
        transcript,
        listening,
        resetTranscript,
        clearTranscriptOnListen,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition({
        commands
    });

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <MotionConfig transition={{ duration: 0.2 }}>
            <div transition={{ duration: 0.5 }} className={`assistance-box${listening ? ' mic-on' : ' mic-off'}`}>
                <div className="transcript-box">
                    {!listening ?
                        <SpeedDial
                            variant="contained"
                            ariaLabel="SpeedDial basic example"
                            className="assistance-mic"
                            id="speak"
                            icon={<MicIcon />}
                            onClick={() => { startListening() }}></SpeedDial> :
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
                                animate={{ width, scale: 1 }}
                                exit={{ width: '100%' }}
                                transition={{ scale: { duration: 0.2 } }}
                            >
                                <AnimatePresence>
                                    {isRecording && <div ref={ref} className={`transcript-message${message ? ' got-response' : ''}`}>
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